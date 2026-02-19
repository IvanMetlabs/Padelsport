import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
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

// Helper: get admin supabase client
const getAdminClient = () =>
  createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

// Helper: generate mock internal wallet address
const generateInternalWallet = (): string => {
  const chars = "0123456789abcdef";
  let addr = "0x";
  for (let i = 0; i < 40; i++) {
    addr += chars[Math.floor(Math.random() * chars.length)];
  }
  return addr;
};

// Helper: verify authenticated user
const getAuthUser = async (c: any) => {
  const accessToken = c.req.header("Authorization")?.split(" ")[1];
  if (!accessToken) return null;
  const supabase = getAdminClient();
  const { data, error } = await supabase.auth.getUser(accessToken);
  if (error || !data?.user?.id) return null;
  return data.user;
};

// Health check endpoint
app.get("/make-server-a024ec43/health", (c) => {
  return c.json({ status: "ok" });
});

// =====================
// AUTH: Register with wallet + email
// =====================
app.post("/make-server-a024ec43/auth/register/wallet", async (c) => {
  try {
    const { email, walletAddress } = await c.req.json();

    if (!email || !walletAddress) {
      return c.json({ error: "Email and wallet address are required" }, 400);
    }

    const supabase = getAdminClient();

    // Create user with wallet address in metadata
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password: crypto.randomUUID(), // Random password since we use magic link
      user_metadata: {
        wallet_address: walletAddress,
        wallet_type: "external",
        registration_method: "wallet",
      },
      // Do NOT auto-confirm - user must confirm via magic link
      email_confirm: false,
    });

    if (error) {
      console.log(`Registration error (wallet flow) for ${email}: ${error.message}`);
      if (
        error.message.toLowerCase().includes('already registered') ||
        error.message.toLowerCase().includes('already exists') ||
        error.message.toLowerCase().includes('duplicate')
      ) {
        return c.json(
          { error: 'Este email ya está registrado.', code: 'EMAIL_EXISTS' },
          400
        );
      }
      return c.json({ error: `Error al registrar usuario: ${error.message}` }, 400);
    }

    // Store user profile in KV
    await kv.set(`user:${data.user.id}:profile`, {
      email,
      walletAddress,
      walletType: "external",
      registrationMethod: "wallet",
      tokenBalance: 0,
      createdAt: new Date().toISOString(),
    });

    // Store wallet→userId reverse index for instant login lookup
    await kv.set(`wallet:${walletAddress.toLowerCase()}`, {
      userId: data.user.id,
      email,
    });

    console.log(`User registered (wallet flow): ${email}, wallet: ${walletAddress}`);
    return c.json({
      success: true,
      message: "Usuario creado. Se enviará un magic link para confirmar el email.",
      userId: data.user.id,
    });
  } catch (err) {
    console.log(`Unexpected error during wallet registration: ${err}`);
    return c.json({ error: `Error inesperado durante el registro: ${err}` }, 500);
  }
});

// =====================
// AUTH: Register with email only (internal wallet)
// =====================
app.post("/make-server-a024ec43/auth/register/email", async (c) => {
  try {
    const { email } = await c.req.json();

    if (!email) {
      return c.json({ error: "Email is required" }, 400);
    }

    const supabase = getAdminClient();
    const internalWallet = generateInternalWallet();

    // Create user with auto-generated internal wallet
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password: crypto.randomUUID(),
      user_metadata: {
        wallet_address: internalWallet,
        wallet_type: "internal",
        registration_method: "email",
      },
      email_confirm: false,
    });

    if (error) {
      console.log(`Registration error (email flow) for ${email}: ${error.message}`);
      if (
        error.message.toLowerCase().includes('already registered') ||
        error.message.toLowerCase().includes('already exists') ||
        error.message.toLowerCase().includes('duplicate')
      ) {
        return c.json(
          { error: 'Este email ya está registrado.', code: 'EMAIL_EXISTS' },
          400
        );
      }
      return c.json({ error: `Error al registrar usuario: ${error.message}` }, 400);
    }

    // Store user profile in KV
    await kv.set(`user:${data.user.id}:profile`, {
      email,
      walletAddress: internalWallet,
      walletType: "internal",
      registrationMethod: "email",
      tokenBalance: 0,
      createdAt: new Date().toISOString(),
    });

    // Store wallet→userId reverse index
    await kv.set(`wallet:${internalWallet.toLowerCase()}`, {
      userId: data.user.id,
      email,
    });

    console.log(`User registered (email flow): ${email}, internal wallet: ${internalWallet}`);
    return c.json({
      success: true,
      message: "Usuario creado con wallet interna. Se enviará un magic link.",
      userId: data.user.id,
      walletAddress: internalWallet,
    });
  } catch (err) {
    console.log(`Unexpected error during email registration: ${err}`);
    return c.json({ error: `Error inesperado durante el registro: ${err}` }, 500);
  }
});

// =====================
// AUTH: Instant login with wallet (connects wallet → looks up user → returns session token)
// =====================
app.post("/make-server-a024ec43/auth/login/wallet", async (c) => {
  try {
    const { walletAddress } = await c.req.json();

    if (!walletAddress) {
      return c.json({ error: "Wallet address is required" }, 400);
    }

    const normalizedAddress = walletAddress.toLowerCase();

    // Look up user by wallet address
    const walletData = await kv.get(`wallet:${normalizedAddress}`);

    if (!walletData || !walletData.userId) {
      console.log(`Wallet login failed - no user found for wallet: ${normalizedAddress}`);
      return c.json({
        error: "No se encontró un usuario con esta wallet. Debes registrarte primero.",
        code: "USER_NOT_FOUND",
      }, 404);
    }

    const supabase = getAdminClient();

    // Get user details
    const { data: userData, error: userError } = await supabase.auth.admin.getUserById(walletData.userId);

    if (userError || !userData?.user) {
      console.log(`Wallet login failed - error getting user ${walletData.userId}: ${userError?.message}`);
      return c.json({ error: "Error al obtener datos del usuario" }, 500);
    }

    // Generate magic link token for instant verification (no email sent)
    const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
      type: "magiclink",
      email: userData.user.email!,
    });

    if (linkError || !linkData) {
      console.log(`Wallet login failed - error generating link for ${userData.user.email}: ${linkError?.message}`);
      return c.json({ error: "Error al generar sesión de acceso" }, 500);
    }

    console.log(`Wallet instant login successful for: ${userData.user.email}, wallet: ${normalizedAddress}`);
    return c.json({
      success: true,
      token_hash: linkData.properties?.hashed_token,
      email: userData.user.email,
    });
  } catch (err) {
    console.log(`Unexpected error during wallet login: ${err}`);
    return c.json({ error: `Error inesperado durante el login con wallet: ${err}` }, 500);
  }
});

// =====================
// AUTH: Get user profile (protected)
// =====================
app.get("/make-server-a024ec43/auth/profile", async (c) => {
  try {
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: "No autorizado" }, 401);
    }

    // Get profile from KV
    const profile = await kv.get(`user:${user.id}:profile`);

    return c.json({
      id: user.id,
      email: user.email,
      walletAddress: profile?.walletAddress || user.user_metadata?.wallet_address,
      walletType: profile?.walletType || user.user_metadata?.wallet_type,
      registrationMethod: profile?.registrationMethod || user.user_metadata?.registration_method,
      tokenBalance: profile?.tokenBalance || 0,
      createdAt: profile?.createdAt || user.created_at,
    });
  } catch (err) {
    console.log(`Error fetching profile: ${err}`);
    return c.json({ error: `Error al obtener perfil: ${err}` }, 500);
  }
});

// =====================
// AUTH: Update token balance (protected)
// =====================
app.post("/make-server-a024ec43/auth/buy-tokens", async (c) => {
  try {
    const user = await getAuthUser(c);
    if (!user) {
      return c.json({ error: "No autorizado. Debes registrarte para comprar tokens." }, 401);
    }

    const { amount } = await c.req.json();
    if (!amount || amount <= 0) {
      return c.json({ error: "Cantidad inválida" }, 400);
    }

    // Get current profile
    const profile = await kv.get(`user:${user.id}:profile`);
    const currentBalance = profile?.tokenBalance || 0;
    const newBalance = currentBalance + amount;

    // Update profile
    await kv.set(`user:${user.id}:profile`, {
      ...profile,
      tokenBalance: newBalance,
      lastPurchase: new Date().toISOString(),
    });

    // Record transaction
    const txId = crypto.randomUUID();
    await kv.set(`tx:${user.id}:${txId}`, {
      userId: user.id,
      amount,
      type: "purchase",
      timestamp: new Date().toISOString(),
    });

    console.log(`Token purchase: user ${user.id}, amount: ${amount}, new balance: ${newBalance}`);
    return c.json({
      success: true,
      newBalance,
      transactionId: txId,
    });
  } catch (err) {
    console.log(`Error during token purchase: ${err}`);
    return c.json({ error: `Error al comprar tokens: ${err}` }, 500);
  }
});

Deno.serve(app.fetch);