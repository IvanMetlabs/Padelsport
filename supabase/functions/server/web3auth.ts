import * as jose from "npm:jose@5";

const WEB3AUTH_JWKS_URL = "https://api-auth.web3auth.io/jwks";

let jwksCache: jose.JSONWebKeySet | null = null;
let jwksCacheTime = 0;
const CACHE_TTL = 600_000; // 10 minutes

async function getJWKS(): Promise<jose.JSONWebKeySet> {
  const now = Date.now();
  if (jwksCache && now - jwksCacheTime < CACHE_TTL) {
    return jwksCache;
  }

  const res = await fetch(WEB3AUTH_JWKS_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch Web3Auth JWKS: ${res.status}`);
  }

  jwksCache = await res.json();
  jwksCacheTime = now;
  return jwksCache!;
}

export interface Web3AuthJWTPayload {
  sub?: string;
  iss?: string;
  aud?: string;
  exp?: number;
  iat?: number;
  email?: string;
  name?: string;
  verifier?: string;
  typeOfLogin?: string;
  wallets?: Array<{
    address: string;
    type: string;
    public_key?: string;
  }>;
  /** Stable identifier derived from sub (social) or wallet address (external) */
  resolvedId: string;
  [key: string]: unknown;
}

/**
 * Verify a Web3Auth idToken JWT.
 * Works for both social logins (Google, email) and external wallets (MetaMask, WC).
 */
export async function verifyWeb3AuthToken(
  idToken: string,
): Promise<Web3AuthJWTPayload> {
  const jwks = await getJWKS();
  const JWKS = jose.createLocalJWKSet(jwks);

  // Don't restrict algorithms — let JWKS determine the correct one.
  // Web3Auth may use ES256 for social logins and different alg for external wallets.
  let payload: jose.JWTPayload;
  try {
    const result = await jose.jwtVerify(idToken, JWKS);
    payload = result.payload;
  } catch (err) {
    // Log details for debugging
    try {
      const decoded = jose.decodeJwt(idToken);
      console.log("JWT decode (unverified):", JSON.stringify({
        iss: decoded.iss,
        sub: decoded.sub,
        aud: decoded.aud,
        iat: decoded.iat,
        exp: decoded.exp,
      }));
      const header = jose.decodeProtectedHeader(idToken);
      console.log("JWT header:", JSON.stringify(header));
    } catch { /* ignore decode errors */ }
    throw err;
  }

  // Validate expiration
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < now) {
    throw new Error("Token has expired");
  }

  // Derive a stable identifier:
  // - Social logins have `sub` (web3auth user ID)
  // - External wallets (MetaMask, WC) have no `sub` but include wallet address in `wallets[]`
  const wallets = (payload as any).wallets as
    | Array<{ address: string; type: string }> | undefined;

  let resolvedId: string;
  if (payload.sub) {
    resolvedId = payload.sub;
  } else if (wallets?.[0]?.address) {
    resolvedId = `external:${wallets[0].address.toLowerCase()}`;
  } else {
    throw new Error("Token missing both sub claim and wallet address");
  }

  return { ...payload, resolvedId } as unknown as Web3AuthJWTPayload;
}
