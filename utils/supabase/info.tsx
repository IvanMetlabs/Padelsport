export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
export const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
export const edgeFunctionName = import.meta.env.VITE_EDGE_FUNCTION_NAME as string;
export const web3AuthClientId = import.meta.env.VITE_WEB3AUTH_CLIENT_ID as string;

if (!supabaseUrl || !publicAnonKey || !edgeFunctionName) {
  throw new Error(
    "Missing Supabase env vars. Copy .env.example to .env and fill in your project values."
  );
}

if (!web3AuthClientId) {
  throw new Error(
    "Missing VITE_WEB3AUTH_CLIENT_ID env var. Add it to your .env file."
  );
}
