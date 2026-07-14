import { Resend } from "resend";

let _resend: Resend | null = null;

function getResend() {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error(
      "RESEND_API_KEY is not set. Copy .env.example to .env.local and add your Resend API key (resend.com).",
    );
  }
  _resend = new Resend(key);
  return _resend;
}

export type LeadNotification = {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  product?: string | null;
  message?: string | null;
};

/**
 * Notify the sales team by email that a new lead came in.
 * Callers should treat failures as non-fatal — the lead is already saved
 * to the DB; a missed notification shouldn't fail the whole request.
 */
export async function sendLeadNotification(lead: LeadNotification) {
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!to || !from) {
    throw new Error(
      "CONTACT_NOTIFY_EMAIL / CONTACT_FROM_EMAIL is not set. See .env.example.",
    );
  }

  const resend = getResend();
  const rows = [
    ["Họ và tên", lead.name],
    ["Email", lead.email],
    ["Số điện thoại", lead.phone || "—"],
    ["Công ty", lead.company || "—"],
    ["Sản phẩm quan tâm", lead.product || "—"],
    ["Ghi chú", lead.message || "—"],
  ];

  const html = `
    <div style="font-family:sans-serif;font-size:14px;color:#1a1a1a">
      <h2 style="margin:0 0 12px">Yêu cầu mẫu mới — Phúc Thịnh Flour</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="font-weight:600;vertical-align:top">${label}</td>
            <td>${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `Yêu cầu mẫu mới từ ${lead.name}`,
    html,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
