/**
 * POST /api/contact
 * Body: { name, company, phone, email, product, message }
 *
 * Validates the lead, persists it to Postgres via Drizzle, then emails the
 * sales team. The DB write is the source of truth — a failed notification
 * email does not fail the request, since the lead is already saved and
 * visible in /admin regardless.
 * Requires DATABASE_URL — see .env.example.
 */
import { NextResponse } from "next/server";
import { getDb } from "@/lib/db/client";
import { leads } from "@/lib/db/schema";
import { sendLeadNotification } from "@/lib/email";

type Payload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  product?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  // Only "name", "email", "product" are marked required in the form UI
  // (company/phone/message are the collapsible optional fields) — keep
  // this in sync with ContactCTA.tsx.
  const errors: Record<string, string> = {};
  if (!body.name || body.name.trim().length < 2)
    errors.name = "Vui lòng nhập họ tên.";
  if (!body.email || !EMAIL_RE.test(body.email))
    errors.email = "Email không hợp lệ.";
  if (!body.product || body.product.trim().length === 0)
    errors.product = "Vui lòng chọn sản phẩm quan tâm.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const lead = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    phone: body.phone?.trim() || null,
    company: body.company?.trim() || null,
    product: body.product?.trim() || null,
    message: body.message?.trim() || null,
  };

  try {
    const db = getDb();
    await db.insert(leads).values(lead);
  } catch (err) {
    console.error("[contact] failed to save lead", err);
    return NextResponse.json(
      { ok: false, error: "Không thể lưu yêu cầu. Vui lòng thử lại." },
      { status: 500 },
    );
  }

  try {
    await sendLeadNotification(lead);
  } catch (err) {
    // Non-fatal: the lead is already saved above and visible in /admin.
    console.error("[contact] failed to send notification email", err);
  }

  return NextResponse.json({ ok: true });
}
