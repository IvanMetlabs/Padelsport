-- ============================================
-- Padelsport: Web3Auth Integration Migration
-- ============================================

-- 1. Add web3auth_id and display_name columns to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS web3auth_id text UNIQUE,
  ADD COLUMN IF NOT EXISTS display_name text;

-- 2. Make email nullable (wallet-only users may not have email)
ALTER TABLE public.profiles
  ALTER COLUMN email DROP NOT NULL;

-- 3. Expand wallet_type CHECK constraint
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_wallet_type_check;
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_wallet_type_check
    CHECK (wallet_type IN ('external', 'internal', 'web3auth_mpc'));

-- 4. Expand registration_method CHECK constraint
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_registration_method_check;
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_registration_method_check
    CHECK (registration_method IN ('wallet', 'email', 'google', 'social', 'web3auth'));

-- 5. Drop FK profiles.user_id -> auth.users(id)
--    (Web3Auth users are no longer created in Supabase Auth)
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_user_id_fkey;

-- Make user_id nullable (Web3Auth users won't have a Supabase Auth user)
ALTER TABLE public.profiles
  ALTER COLUMN user_id DROP NOT NULL;

-- 6. Drop FK transactions.user_id -> auth.users(id)
ALTER TABLE public.transactions
  DROP CONSTRAINT IF EXISTS transactions_user_id_fkey;

-- Make transactions.user_id nullable
ALTER TABLE public.transactions
  ALTER COLUMN user_id DROP NOT NULL;

-- 7. Add profile_id to transactions for direct profile reference
ALTER TABLE public.transactions
  ADD COLUMN IF NOT EXISTS profile_id bigint REFERENCES public.profiles(id);

-- 8. Index for web3auth_id lookups
CREATE INDEX IF NOT EXISTS idx_profiles_web3auth_id ON public.profiles (web3auth_id);

-- 9. Update RLS policies to also work with service_role (Edge Functions)
--    The existing policies use auth.uid() which won't work for Web3Auth users.
--    Edge Functions use service_role key which bypasses RLS, so no changes needed.
--    But we drop user-facing RLS policies since auth.uid() is no longer relevant.
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own transactions" ON public.transactions;

-- Re-create permissive policies for service_role access (Edge Functions handle auth)
-- All client access goes through Edge Functions which use service_role key (bypasses RLS)
-- These policies are kept minimal since direct client access is not used.
