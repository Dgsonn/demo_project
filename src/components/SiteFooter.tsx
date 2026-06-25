import Link from "next/link";
import { PtWordmark } from "./PtLogo";

const COLUMNS = [
  {
    title: "Sản phẩm",
    links: [
      { label: "Bột mì Phúc Thịnh", href: "/san-pham/bot-mi" },
      { label: "Bột biến tính Phúc Thịnh", href: "/san-pham/bot-bien-tinh" },
    ],
  },
  {
    title: "Về Phúc Thịnh",
    links: [
      { label: "Chất lượng & Kiểm định", href: "/#chat-luong" },
      { label: "Quy trình sản xuất", href: "/#chat-luong" },
      { label: "Liên hệ", href: "/#lien-he" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Tải TDS / COA", href: "/#lien-he" },
      { label: "Tìm đại lý", href: "/#lien-he" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      id="lien-he"
      className="mt-auto"
      style={{
        background: "var(--pt-sage-700)",
        color: "var(--pt-cream)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            {/* Wordmark: tên "Phúc Thịnh" + Flour + icon lục giác */}
            <div
              style={{
                color: "var(--pt-cream)",
                filter: "brightness(0) invert(1)",
                // Logo gốc đã có màu sage → invert thành trắng khi đặt trên nền tối
              }}
            >
              <PtWordmark size={36} />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">
              Từ hạt lúa mì Việt, qua công nghệ hiện đại, đến tay bạn.
              Bột mì và bột biến tính cho ngành thực phẩm và công nghiệp.
            </p>
            <div className="mt-6 flex gap-2 text-xs opacity-70">
              <span
                className="px-2 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                ISO 22000
              </span>
              <span
                className="px-2 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                HACCP
              </span>
              <span
                className="px-2 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                FDA
              </span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div
                className="eyebrow"
                style={{ color: "var(--pt-wheat-soft)", opacity: 0.95 }}
              >
                {col.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="opacity-80 hover:opacity-100 hover:text-[var(--pt-wheat-soft)] transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="divider mt-12 mb-6"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs opacity-70">
          <span>© {new Date().getFullYear()} Phúc Thịnh Flour. Bảo lưu mọi quyền.</span>
          <span>Địa chỉ: Việt Nam · Hotline: 1900 xxxx</span>
        </div>
      </div>
    </footer>
  );
}
