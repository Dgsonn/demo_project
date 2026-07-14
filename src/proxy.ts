import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, verifyAdminToken } from "@/lib/auth/session";

/**
 * Optimistic gate for /admin/* — only reads the signed cookie, never hits
 * the DB (Proxy runs on every matched request, including prefetches).
 * The /admin page itself re-verifies via isAdminAuthenticated() as the
 * secure check.
 */
export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminToken(token)) {
    const loginUrl = new URL("/admin/login", req.nextUrl);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
