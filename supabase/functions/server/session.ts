import * as jose from "npm:jose@5";

const SECRET = new TextEncoder().encode(
  Deno.env.get("SESSION_JWT_SECRET") || "",
);

if (!SECRET.length) {
  console.warn(
    "[session] SESSION_JWT_SECRET not set — sessions will fail in production",
  );
}

const ISSUER = "padelsport-api";
const EXPIRY = "7d";

export interface SessionPayload {
  profileId: number;
  web3authId: string;
  walletAddress: string;
}

export async function signSessionToken(
  data: SessionPayload,
): Promise<string> {
  return new jose.SignJWT({
    pid: data.profileId,
    wid: data.web3authId,
    wal: data.walletAddress,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(ISSUER)
    .setIssuedAt()
    .setExpirationTime(EXPIRY)
    .sign(SECRET);
}

export async function verifySessionToken(
  token: string,
): Promise<SessionPayload> {
  const { payload } = await jose.jwtVerify(token, SECRET, {
    issuer: ISSUER,
  });

  return {
    profileId: payload.pid as number,
    web3authId: payload.wid as string,
    walletAddress: payload.wal as string,
  };
}
