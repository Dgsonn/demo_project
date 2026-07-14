"use client";

import Link from "next/link";
import { PtWordmark } from "./PtLogo";
import { useT } from "@/lib/i18n/useT";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M13 3h-2c-1.7 0-3 1.3-3 3v2H6v3h2v6h3v-6h2.2l.8-3H11V6c0-.6.4-1 1-1h1V3z" />
    ),
  },
  {
    label: "Zalo",
    href: "https://zalo.me",
    icon: (
      <path d="M8 2C4.7 2 2 4.4 2 7.4c0 1.7.9 3.3 2.3 4.3-.1.7-.4 1.7-.9 2.4-.1.1 0 .3.2.3 1-.1 2.1-.5 2.9-1 .8.2 1.6.4 2.5.4 3.3 0 6-2.4 6-5.4S11.3 2 8 2z" />
    ),
  },
];

export function SiteFooter() {
  const t = useT();

  const columns = [
    {
      title: t.footer.colProducts,
      links: [
        { label: t.nav.tinhBotSan, href: "/san-pham/tinh-bot-san" },
        { label: t.nav.botBienTinh, href: "/san-pham/bot-bien-tinh" },
      ],
    },
    {
      title: t.footer.colAbout,
      links: [
        { label: t.footer.linkQuality, href: "/#chat-luong" },
        { label: t.footer.linkProcess, href: "/#chat-luong" },
      ],
    },
    {
      title: t.footer.colSupport,
      links: [
        { label: t.footer.linkTds, href: "/#yeu-cau-mau" },
        { label: t.footer.linkDealer, href: "/#yeu-cau-mau" },
      ],
    },
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            {/* Wordmark: tên "Phúc Thịnh" + Flour + icon lục giác (màu thật) */}
            <PtWordmark size={36} dark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">
              {t.footer.description}
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

          {columns.map((col) => (
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

          {/* Liên hệ — thông tin liên lạc trực tiếp */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="eyebrow"
              style={{ color: "var(--pt-wheat-soft)", opacity: 0.95 }}
            >
              {t.footer.colContact}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="tel:1900xxxx"
                  className="opacity-80 hover:opacity-100 hover:text-[var(--pt-wheat-soft)] transition"
                  aria-label="Gọi hotline 1900 xxxx"
                >
                  Hotline: 1900 xxxx
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@ptflour.vn"
                  className="opacity-80 hover:opacity-100 hover:text-[var(--pt-wheat-soft)] transition"
                  aria-label="Gửi email đến sales@ptflour.vn"
                >
                  sales@ptflour.vn
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Việt+Nam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-[var(--pt-wheat-soft)] transition"
                  aria-label="Xem địa chỉ trên Google Maps"
                >
                  {t.footer.address}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center rounded-full transition hover:opacity-100"
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    opacity: 0.8,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="var(--pt-cream)" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="divider mt-12 mb-6"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
        <div className="text-xs opacity-70">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
