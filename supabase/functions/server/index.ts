import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as db from "./db.ts";
import { verifyWeb3AuthToken, type Web3AuthJWTPayload } from "./web3auth.ts";

const app = new Hono();

app.use("*", logger(console.log));

app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// ---- Helpers ----

/** Extract and verify Web3Auth JWT from Authorization header.
 *  Returns { payload } on success or { error, status } on failure. */
const verifyAuth = async (
  c: any,
): Promise<
  | { payload: Web3AuthJWTPayload; error?: never }
  | { payload?: never; error: string; status: number }
> => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader) {
    console.log("[verifyAuth] No Authorization header");
    return { error: "Authorization header missing", status: 401 };
  }

  const token = authHeader.replace("Bearer ", "");
  if (!token || token === authHeader) {
    console.log("[verifyAuth] Malformed Authorization header (no Bearer prefix)");
    return { error: "Malformed Authorization header", status: 401 };
  }

  try {
    const payload = await verifyWeb3AuthToken(token);
    return { payload };
  } catch (err) {
    console.error("[verifyAuth] Token verification failed:", String(err));
    return { error: `Token verification failed: ${err}`, status: 401 };
  }
};

/** Determine wallet type from JWT payload */
const resolveWalletType = (
  payload: Web3AuthJWTPayload,
): "external" | "web3auth_mpc" => {
  const verifier = (payload as any).verifier as string | undefined;
  const typeOfLogin = (payload as any).typeOfLogin as string | undefined;
  const iss = payload.iss;
  // External wallet adapters — check iss, typeOfLogin, and verifier
  if (
    iss === "metamask" ||
    iss === "wallet_connect_v2" ||
    iss === "walletconnect" ||
    typeOfLogin === "metamask" ||
    typeOfLogin === "wallet_connect_v2" ||
    verifier === "metamask" ||
    verifier === "walletconnect"
  ) {
    return "external";
  }
  return "web3auth_mpc";
};

/** Determine registration method from JWT payload */
const resolveRegistrationMethod = (
  payload: Web3AuthJWTPayload,
  walletType: string,
): string => {
  if (walletType === "external") return "wallet";
  const verifier = (payload as any).verifier as string | undefined;
  const typeOfLogin = (payload as any).typeOfLogin as string | undefined;
  if (verifier?.includes("google") || typeOfLogin === "google") return "google";
  if (typeOfLogin === "email_passwordless") return "email";
  if (payload.email) return "web3auth";
  return "web3auth";
};

const formatProfileResponse = (profile: db.ProfileRow) => ({
  id: profile.web3auth_id || profile.user_id || String(profile.id),
  email: profile.email,
  displayName: profile.display_name,
  walletAddress: profile.wallet_address,
  walletType: profile.wallet_type,
  registrationMethod: profile.registration_method,
  tokenBalance: profile.token_balance || 0,
  createdAt: profile.created_at,
});

// ---- Routes ----

app.get("/server/health", (c) => c.json({ status: "ok" }));

// =====================
// AUTH: Unified Web3Auth Login/Register
// =====================
app.post("/server/auth/web3auth-login", async (c) => {
  try {
    // 1. Verify JWT
    const auth = await verifyAuth(c);
    if (auth.error) {
      return c.json({ error: auth.error }, auth.status);
    }
    const payload = auth.payload;

    // 2. Extract data from verified JWT (trustworthy, not from client body)
    const web3authId = payload.resolvedId;
    const email = payload.email || null;
    const displayName = payload.name || null;
    const walletType = resolveWalletType(payload);
    const registrationMethod = resolveRegistrationMethod(payload, walletType);

    // 3. Get wallet address from body (only thing we need from client)
    const { walletAddress } = await c.req.json();
    if (!walletAddress) {
      return c.json({ error: "walletAddress is required" }, 400);
    }

    console.log(
      `[web3auth-login] sub=${web3authId}, email=${email}, wallet=${walletAddress}, type=${walletType}`,
    );

    // 4. Find or create profile
    // 4a. Try by web3auth_id
    let profile = await db.getProfileByWeb3AuthId(web3authId);
    if (profile) {
      if (
        profile.wallet_address.toLowerCase() !== walletAddress.toLowerCase()
      ) {
        profile = await db.updateProfileWeb3AuthId(
          profile.id,
          web3authId,
          walletAddress,
          walletType,
          displayName,
        );
      }
      console.log(`  -> existing by web3auth_id`);
      return c.json(formatProfileResponse(profile));
    }

    // 4b. Try by wallet_address (existing external wallet user)
    profile = await db.getProfileByWallet(walletAddress);
    if (profile) {
      profile = await db.updateProfileWeb3AuthId(
        profile.id,
        web3authId,
        walletAddress,
        walletType,
        displayName,
      );
      console.log(`  -> migrated by wallet`);
      return c.json(formatProfileResponse(profile));
    }

    // 4c. Try by email (migrating old email user)
    if (email) {
      profile = await db.getProfileByEmail(email);
      if (profile) {
        profile = await db.updateProfileWeb3AuthId(
          profile.id,
          web3authId,
          walletAddress,
          walletType,
          displayName,
        );
        console.log(`  -> migrated by email`);
        return c.json(formatProfileResponse(profile));
      }
    }

    // 4d. Create new profile
    profile = await db.createProfileWeb3Auth({
      web3authId,
      email,
      walletAddress,
      walletType,
      registrationMethod,
      displayName,
    });

    console.log(`  -> NEW profile created`);
    return c.json(formatProfileResponse(profile));
  } catch (err) {
    console.log(`Unexpected error during web3auth-login: ${err}`);
    return c.json(
      { error: `Error inesperado durante el login: ${err}` },
      500,
    );
  }
});

// =====================
// AUTH: Get user profile (protected)
// =====================
app.get("/server/auth/profile", async (c) => {
  try {
    const auth = await verifyAuth(c);
    if (auth.error) {
      return c.json({ error: auth.error }, auth.status);
    }

    const profile = await db.getProfileByWeb3AuthId(auth.payload.resolvedId);
    if (!profile) {
      return c.json({ error: "Perfil no encontrado" }, 404);
    }

    return c.json(formatProfileResponse(profile));
  } catch (err) {
    console.log(`Error fetching profile: ${err}`);
    return c.json({ error: `Error al obtener perfil: ${err}` }, 500);
  }
});

// =====================
// AUTH: Buy tokens (protected)
// =====================
app.post("/server/auth/buy-tokens", async (c) => {
  try {
    const auth = await verifyAuth(c);
    if (auth.error) {
      return c.json({ error: auth.error }, auth.status);
    }

    const profile = await db.getProfileByWeb3AuthId(auth.payload.resolvedId);
    if (!profile) {
      return c.json({ error: "Perfil no encontrado" }, 404);
    }

    const { amount } = await c.req.json();
    if (!amount || amount <= 0) {
      return c.json({ error: "Cantidad invalida" }, 400);
    }

    const newBalance = (profile.token_balance || 0) + amount;

    await db.updateTokenBalanceByProfileId(profile.id, newBalance);

    const tx = await db.createTransaction({
      profileId: profile.id,
      userId: profile.user_id || undefined,
      amount,
      type: "purchase",
    });

    console.log(
      `Token purchase: profile ${profile.id}, amount: ${amount}, new balance: ${newBalance}`,
    );
    return c.json({
      success: true,
      newBalance,
      transactionId: tx.id,
    });
  } catch (err) {
    console.log(`Error during token purchase: ${err}`);
    return c.json({ error: `Error al comprar tokens: ${err}` }, 500);
  }
});

Deno.serve(app.fetch);
