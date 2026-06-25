/**
 * POST /api/contact
 * Body: { name, company, phone, email, product, message }
 *
 * Skeleton — chỉ validate + log. Có thể gắn thêm:
 *   - Gửi email qua Resend / SendGrid
 *   - Lưu DB (Postgres + Drizzle)
 *   - Push CRM (HubSpot, Zalo OA, v.v.)
 */
import { NextResponse } from "next/server";

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

  const errors: Record<string, string> = {};
  if (!body.name || body.name.trim().length < 2)
    errors.name = "Vui lòng nhập họ tên.";
  if (!body.email || !EMAIL_RE.test(body.email))
    errors.email = "Email không hợp lệ.";
  if (!body.phone || body.phone.trim().length < 8)
    errors.phone = "Số điện thoại không hợp lệ.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: tích hợp email / DB / CRM
  // Ví dụ: await sendEmail({ to: "sales@ptflour.vn", subject: `Lead: ${body.name}`, body: ... })
  console.log("[contact] new lead", body);

  return NextResponse.json({ ok: true });
}
