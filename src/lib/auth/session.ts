import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "pt_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not set. Copy .env.example to .env.local and set a random value (e.g. `openssl rand -base64 32`).",
    );
  }
  return secret;
}

function sign(payload: Record<string, unknown>) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", getSecret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}

/**
 * Pure verification — no cookie access, safe to call from proxy.ts for the
 * optimistic check (see Next.js auth guide: proxy should only read the
 * cookie, never hit the DB).
 */
export function verifyAdminToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [body, sig] = token.split(".");
  if (!body || !sig) return false;

  const expected = createHmac("sha256", getSecret()).update(body).digest("base64url");
  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expected);
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
    return false;
  }

  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString()) as {
      exp?: number;
    };
    return typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export async function createAdminSession() {
  const exp = Date.now() + MAX_AGE_SECONDS * 1000;
  const token = sign({ exp });
  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(ADMIN_SESSION_COOKIE);
}

/** Secure check for use inside the /admin page itself (not just the proxy). */
export async function isAdminAuthenticated() {
  const store = await cookies();
  return verifyAdminToken(store.get(ADMIN_SESSION_COOKIE)?.value);
}

export function constantTimeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

const SCRYPT_KEYLEN = 64;

/**
 * Băm mật khẩu quản trị bằng scrypt (có trong Node, không cần thư viện ngoài).
 * Kết quả dạng "salt:hash", cả hai ở hệ hex — đây là giá trị đặt vào ADMIN_PASSWORD_HASH.
 * Sinh giá trị mới bằng: npm run admin:hash -- "mật-khẩu-của-bạn"
 */
export function hashAdminPassword(password: string, salt?: string): string {
  const useSalt = salt ?? randomBytes(16).toString("hex");
  const derived = scryptSync(password, useSalt, SCRYPT_KEYLEN).toString("hex");
  return `${useSalt}:${derived}`;
}

/**
 * So khớp mật khẩu người dùng nhập với giá trị băm đã lưu, theo kiểu constant-time.
 * Trả về false nếu chuỗi băm sai định dạng, thay vì ném lỗi.
 */
export function verifyAdminPassword(password: string, stored: string): boolean {
  const [salt, expected] = stored.split(":");
  if (!salt || !expected) return false;

  let derived: Buffer;
  try {
    derived = scryptSync(password, salt, SCRYPT_KEYLEN);
  } catch {
    return false;
  }

  const expectedBuf = Buffer.from(expected, "hex");
  if (expectedBuf.length !== derived.length) return false;
  return timingSafeEqual(derived, expectedBuf);
}
