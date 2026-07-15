import { redirect } from "next/navigation";
import { desc } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import { leads, LEAD_STATUS_LABELS, LEAD_STATUS_COLORS } from "@/lib/db/schema";
import { isAdminAuthenticated } from "@/lib/auth/session";
import { PtWordmark } from "@/components/PtLogo";
import { logoutAction } from "./actions";
import { StatusSelect } from "./StatusSelect";

export const metadata = {
  title: "Quản trị yêu cầu khách hàng — Phúc Thịnh Flour",
};

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const db = getDb();
  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));

  const statusCounts = Object.keys(LEAD_STATUS_LABELS).map((key) => ({
    key,
    label: LEAD_STATUS_LABELS[key],
    color: LEAD_STATUS_COLORS[key],
    count: rows.filter((r) => r.status === key).length,
  }));

  return (
    <div className="min-h-screen bg-cream">
      <header
        className="border-b border-sage-300/30"
        style={{ background: "var(--pt-sage-600)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
          <PtWordmark size={44} dark />
          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-medium text-white sm:inline">Bảng quản trị</span>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Đăng xuất
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <h1 className="text-xl font-semibold text-navy">Yêu cầu khách hàng</h1>
        <p className="mt-1 text-sm text-sage-700">
          {rows.length} yêu cầu đã gửi qua form liên hệ.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {statusCounts.map((s) => (
            <div
              key={s.key}
              className="rounded-[var(--pt-radius-lg)] border border-sage-300/30 bg-white px-4 py-3 shadow-[var(--pt-shadow-sm)]"
            >
              <p className="text-2xl font-bold text-navy">{s.count}</p>
              <span
                className="mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{ background: s.color.bg, color: s.color.fg }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto rounded-[var(--pt-radius-lg)] border border-sage-300/40 bg-white shadow-[var(--pt-shadow-sm)]">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-sage-300/40 bg-cream/60 text-xs uppercase tracking-wide text-sage-700">
                <th className="px-4 py-3 font-medium">Ngày gửi</th>
                <th className="px-4 py-3 font-medium">Khách hàng</th>
                <th className="px-4 py-3 font-medium">Liên hệ</th>
                <th className="px-4 py-3 font-medium">Công ty</th>
                <th className="px-4 py-3 font-medium">Sản phẩm</th>
                <th className="px-4 py-3 font-medium">Ghi chú</th>
                <th className="px-4 py-3 font-medium">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-sage-700">
                    Chưa có yêu cầu nào.
                  </td>
                </tr>
              )}
              {rows.map((row, i) => (
                <tr
                  key={row.id}
                  className="border-b border-sage-300/20 align-top last:border-0"
                  style={{ background: i % 2 === 1 ? "var(--pt-cream)" : "white" }}
                >
                  <td className="whitespace-nowrap px-4 py-3 text-sage-700">
                    {formatDate(row.createdAt)}
                  </td>
                  <td className="px-4 py-3 font-medium text-navy">{row.name}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${row.email}`}
                      className="block text-sage-600 hover:underline"
                    >
                      {row.email}
                    </a>
                    {row.phone && (
                      <a
                        href={`tel:${row.phone}`}
                        className="mt-0.5 block text-sage-700 hover:underline"
                      >
                        {row.phone}
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sage-700">{row.company || "—"}</td>
                  <td className="px-4 py-3 text-sage-700">{row.product || "—"}</td>
                  <td className="px-4 py-3 text-sage-700">
                    {row.message ? (
                      <details>
                        <summary className="cursor-pointer text-sage-600">
                          Xem ghi chú
                        </summary>
                        <p className="mt-1 max-w-xs whitespace-pre-wrap">{row.message}</p>
                      </details>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <StatusSelect id={row.id} status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
