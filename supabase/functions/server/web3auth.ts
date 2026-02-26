import * as jose from "npm:jose@5";
import { computeAddress } from "npm:ethers@6";

const WEB3AUTH_JWKS_URL = "https://api-auth.web3auth.io/jwks";

// Use createRemoteJWKSet for automatic caching, rotation handling, and retries.
const JWKS = jose.createRemoteJWKSet(new URL(WEB3AUTH_JWKS_URL), {
  cacheMaxAge: 600_000, // 10 minutes
});

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
    address?: string;
    type: string;
    public_key?: string;
    curve?: string;
  }>;
  /** Stable identifier derived from sub (social) or wallet address (external) */
  resolvedId: string;
  /** Wallet address extracted/derived from JWT. null if JWT has no wallet info. */
  resolvedWalletAddress: string | null;
  [key: string]: unknown;
}

/**
 * Verify a Web3Auth idToken JWT.
 * Works for both social logins (Google, email) and external wallets (MetaMask, WC).
 */
export async function verifyWeb3AuthToken(
  idToken: string,
): Promise<Web3AuthJWTPayload> {
  // Decode header + payload BEFORE verification for diagnostics
  let header: jose.ProtectedHeaderParameters | undefined;
  let decoded: jose.JWTPayload | undefined;
  try {
    header = jose.decodeProtectedHeader(idToken);
    decoded = jose.decodeJwt(idToken);
    console.log("[web3auth] JWT header:", JSON.stringify(header));
    // Log ALL claims to understand the v10 token format
    console.log("[web3auth] JWT payload (ALL claims):", JSON.stringify(decoded));
  } catch (decodeErr) {
    console.error("[web3auth] Failed to decode JWT:", decodeErr);
    throw new Error(`Malformed JWT: ${decodeErr}`);
  }

  // Verify signature using remote JWKS (handles key lookup by kid automatically)
  let payload: jose.JWTPayload;
  try {
    const result = await jose.jwtVerify(idToken, JWKS, {
      clockTolerance: 60, // 60 seconds tolerance for clock skew
    });
    payload = result.payload;
    console.log("[web3auth] JWT verified OK");
  } catch (err) {
    // Log specific error type for debugging
    if (err instanceof jose.errors.JWKSNoMatchingKey) {
      console.error(
        `[web3auth] JWKS key mismatch — token kid="${header?.kid}", alg="${header?.alg}". ` +
        `No matching key found at ${WEB3AUTH_JWKS_URL}`,
      );
    } else if (err instanceof jose.errors.JWTExpired) {
      const now = Math.floor(Date.now() / 1000);
      console.error(
        `[web3auth] Token expired — exp=${decoded?.exp}, server_now=${now}, ` +
        `diff=${decoded?.exp ? now - decoded.exp : "?"}s`,
      );
    } else if (err instanceof jose.errors.JWKSTimeout) {
      console.error(`[web3auth] JWKS fetch timeout — could not reach ${WEB3AUTH_JWKS_URL}`);
    } else {
      console.error("[web3auth] JWT verification error:", String(err));
    }
    throw err;
  }

  // Derive a stable identifier — Web3Auth v10 tokens may have different claim names:
  // 1. `sub` — standard JWT subject (older Web3Auth versions)
  // 2. `wallets[0].address` — external wallets (MetaMask, WC)
  // 3. `verifierId` — Web3Auth v10 social login user ID (e.g., email)
  // 4. `email` — fallback for social logins
  // 5. `aud` — audience (Web3Auth client-scoped, unique per user+app)
  const p = payload as any;
  const wallets = p.wallets as
    | Array<{ address: string; type: string }> | undefined;

  let resolvedId: string;
  if (payload.sub) {
    resolvedId = payload.sub;
  } else if (wallets?.[0]?.address) {
    resolvedId = `external:${wallets[0].address.toLowerCase()}`;
  } else if (p.verifierId) {
    resolvedId = `${p.verifier || "social"}:${p.verifierId}`;
  } else if (p.email) {
    resolvedId = `email:${p.email}`;
  } else if (payload.aud) {
    // Last resort — aud in Web3Auth v10 can be user-scoped
    resolvedId = typeof payload.aud === "string" ? payload.aud : payload.aud[0];
  } else {
    console.error("[web3auth] Cannot derive user ID. Full payload:", JSON.stringify(payload));
    throw new Error("Token missing identifiable claims (sub, wallets, verifierId, email, aud)");
  }
  console.log(`[web3auth] resolvedId=${resolvedId} (from: ${payload.sub ? "sub" : wallets?.[0] ? "wallets" : p.verifierId ? "verifierId" : p.email ? "email" : "aud"})`);

  // Resolve wallet address from JWT claims
  let resolvedWalletAddress: string | null = null;
  const wallet = wallets?.[0];
  if (wallet?.address) {
    // External wallet — address is directly in JWT
    resolvedWalletAddress = wallet.address.toLowerCase();
    console.log(`[web3auth] resolvedWalletAddress=${resolvedWalletAddress} (from: wallets[0].address)`);
  } else if (wallet?.public_key && (!wallet.curve || wallet.curve === "secp256k1")) {
    // Social login with secp256k1 — derive EVM address from compressed public key
    try {
      const pubKeyHex = wallet.public_key.startsWith("0x")
        ? wallet.public_key
        : `0x${wallet.public_key}`;
      resolvedWalletAddress = computeAddress(pubKeyHex).toLowerCase();
      console.log(`[web3auth] resolvedWalletAddress=${resolvedWalletAddress} (derived from public_key)`);
    } catch (err) {
      console.warn("[web3auth] Could not derive address from public_key:", err);
    }
  } else {
    console.warn("[web3auth] JWT has no wallet address or derivable public_key");
  }

  return { ...payload, resolvedId, resolvedWalletAddress } as unknown as Web3AuthJWTPayload;
}
