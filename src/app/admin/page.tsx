import { redirect } from "next/navigation";
import { desc } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import { leads } from "@/lib/db/schema";
import { isAdminAuthenticated } from "@/lib/auth/session";
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

  return (
    <main className="min-h-screen bg-cream px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-navy">
              Yêu cầu khách hàng
            </h1>
            <p className="mt-1 text-sm text-sage-700">
              {rows.length} yêu cầu đã gửi qua form liên hệ.
            </p>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="btn-secondary">
              Đăng xuất
            </button>
          </form>
        </div>

        <div className="mt-6 overflow-x-auto rounded-[var(--pt-radius-lg)] border border-sage-300/40 bg-white shadow-[var(--pt-shadow-sm)]">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-sage-300/40 text-xs uppercase tracking-wide text-sage-700">
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
                  <td colSpan={7} className="px-4 py-8 text-center text-sage-700">
                    Chưa có yêu cầu nào.
                  </td>
                </tr>
              )}
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-sage-300/20 align-top last:border-0">
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
      </div>
    </main>
  );
}
