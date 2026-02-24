import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const getClient = () =>
  createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

// ---- Types ----

export interface ProfileInsert {
  userId: string;
  email: string;
  walletAddress: string;
  walletType: "external" | "internal";
  registrationMethod: "wallet" | "email";
}

export interface Web3AuthProfileInsert {
  web3authId: string;
  email: string | null;
  walletAddress: string;
  walletType: "external" | "web3auth_mpc";
  registrationMethod: string;
  displayName: string | null;
}

export interface ProfileRow {
  id: number;
  user_id: string | null;
  web3auth_id: string | null;
  email: string | null;
  display_name: string | null;
  wallet_address: string;
  wallet_type: "external" | "internal" | "web3auth_mpc";
  registration_method: string;
  token_balance: number;
  last_purchase: string | null;
  created_at: string;
  updated_at: string;
}

export interface TransactionInsert {
  userId?: string;
  profileId?: number;
  amount: number;
  type: "purchase" | "reward" | "transfer" | "refund";
}

// ---- Profile operations ----

export const createProfile = async (data: ProfileInsert): Promise<ProfileRow> => {
  const supabase = getClient();
  const { data: row, error } = await supabase
    .from("profiles")
    .insert({
      user_id: data.userId,
      email: data.email,
      wallet_address: data.walletAddress,
      wallet_type: data.walletType,
      registration_method: data.registrationMethod,
      token_balance: 0,
    })
    .select()
    .single();

  if (error) throw new Error(`createProfile: ${error.message}`);
  return row;
};

export const createProfileWeb3Auth = async (data: Web3AuthProfileInsert): Promise<ProfileRow> => {
  const supabase = getClient();
  const { data: row, error } = await supabase
    .from("profiles")
    .insert({
      web3auth_id: data.web3authId,
      email: data.email,
      display_name: data.displayName,
      wallet_address: data.walletAddress,
      wallet_type: data.walletType,
      registration_method: data.registrationMethod,
      token_balance: 0,
    })
    .select()
    .single();

  if (error) throw new Error(`createProfileWeb3Auth: ${error.message}`);
  return row;
};

export const getProfileByUserId = async (userId: string): Promise<ProfileRow | null> => {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(`getProfileByUserId: ${error.message}`);
  return data;
};

export const getProfileByWeb3AuthId = async (web3authId: string): Promise<ProfileRow | null> => {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("web3auth_id", web3authId)
    .maybeSingle();

  if (error) throw new Error(`getProfileByWeb3AuthId: ${error.message}`);
  return data;
};

export const getProfileByWallet = async (address: string): Promise<ProfileRow | null> => {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .ilike("wallet_address", address)
    .maybeSingle();

  if (error) throw new Error(`getProfileByWallet: ${error.message}`);
  return data;
};

export const getProfileByEmail = async (email: string): Promise<ProfileRow | null> => {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (error) throw new Error(`getProfileByEmail: ${error.message}`);
  return data;
};

export const updateProfileWeb3AuthId = async (
  profileId: number,
  web3authId: string,
  walletAddress: string,
  walletType: string,
  displayName?: string | null,
): Promise<ProfileRow> => {
  const supabase = getClient();
  const updateData: Record<string, unknown> = {
    web3auth_id: web3authId,
    wallet_address: walletAddress,
    wallet_type: walletType,
  };
  if (displayName) {
    updateData.display_name = displayName;
  }

  const { data, error } = await supabase
    .from("profiles")
    .update(updateData)
    .eq("id", profileId)
    .select()
    .single();

  if (error) throw new Error(`updateProfileWeb3AuthId: ${error.message}`);
  return data;
};

export const updateTokenBalance = async (
  userId: string,
  newBalance: number,
): Promise<ProfileRow> => {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("profiles")
    .update({
      token_balance: newBalance,
      last_purchase: new Date().toISOString(),
    })
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error(`updateTokenBalance: ${error.message}`);
  return data;
};

export const updateTokenBalanceByProfileId = async (
  profileId: number,
  newBalance: number,
): Promise<ProfileRow> => {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("profiles")
    .update({
      token_balance: newBalance,
      last_purchase: new Date().toISOString(),
    })
    .eq("id", profileId)
    .select()
    .single();

  if (error) throw new Error(`updateTokenBalanceByProfileId: ${error.message}`);
  return data;
};

// ---- Transaction operations ----

export const createTransaction = async (data: TransactionInsert): Promise<{ id: number }> => {
  const supabase = getClient();
  const insertData: Record<string, unknown> = {
    amount: data.amount,
    type: data.type,
  };
  if (data.userId) insertData.user_id = data.userId;
  if (data.profileId) insertData.profile_id = data.profileId;

  const { data: row, error } = await supabase
    .from("transactions")
    .insert(insertData)
    .select("id")
    .single();

  if (error) throw new Error(`createTransaction: ${error.message}`);
  return row;
};

export const getTransactionsByUserId = async (userId: string) => {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(`getTransactionsByUserId: ${error.message}`);
  return data;
};
