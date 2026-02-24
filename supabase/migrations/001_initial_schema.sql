-- ============================================
-- Padelsport: Initial Schema Migration
-- ============================================

-- 1. Profiles table
create table public.profiles (
  id                  bigint generated always as identity primary key,
  user_id             uuid not null unique references auth.users(id) on delete cascade,
  email               text not null,
  wallet_address      text not null unique,
  wallet_type         text not null check (wallet_type in ('external', 'internal')),
  registration_method text not null check (registration_method in ('wallet', 'email')),
  token_balance       numeric not null default 0 check (token_balance >= 0),
  last_purchase       timestamptz,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- Indexes for common lookups
create index idx_profiles_email on public.profiles (email);
create index idx_profiles_wallet on public.profiles (lower(wallet_address));

-- 2. Transactions table
create table public.transactions (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references auth.users(id) on delete cascade,
  amount     numeric not null check (amount > 0),
  type       text not null check (type in ('purchase', 'reward', 'transfer', 'refund')),
  created_at timestamptz not null default now()
);

-- Index on FK for fast JOINs
create index idx_transactions_user_id on public.transactions (user_id);

-- 3. Auto-update updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_profiles_updated
  before update on public.profiles
  for each row
  execute function public.handle_updated_at();

-- 4. Enable RLS
alter table public.profiles enable row level security;
alter table public.transactions enable row level security;

-- 5. RLS Policies — profiles
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = user_id);

-- 6. RLS Policies — transactions
create policy "Users can view own transactions"
  on public.transactions for select
  using (auth.uid() = user_id);

-- Note: INSERT on both tables is done via Edge Functions using
-- the service_role key, which bypasses RLS.
