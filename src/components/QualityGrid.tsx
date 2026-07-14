"use client";

/**
 * QualityGrid — per R3 consensus:
 *  - 3-column grid desktop, 1-column mobile
 *  - Per cert card: 64x64 logo, name, one-line description,
 *    "Tải chứng chỉ PDF" link, bottom CTA "Yêu cầu Technical Data Sheet đầy đủ"
 *  - Blue/gold brand palette (matches logo)
 */

import { useT } from "@/lib/i18n/useT";

export function QualityGrid() {
  const t = useT();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* 7-step quality checklist */}
      <ol className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label={t.qualitySection.eyebrow}>
        {t.qualityGrid.steps.map((step, i) => (
          <li
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl border"
            style={{
              borderColor: "var(--pt-line)",
              background: "var(--pt-cream)",
            }}
          >
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{
                background: "var(--pt-sage-500)",
                color: "var(--pt-cream)",
              }}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>

      {/* Certification cards — 3-column grid desktop */}
      <aside className="lg:col-span-5">
        <div
          className="rounded-2xl p-6 h-full"
          style={{
            background: "var(--pt-sage-700)",
            color: "var(--pt-cream)",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--pt-sage-300)" }}>
            {t.qualityGrid.certsLabel}
          </p>
          <h3 className="headline-md mt-2">{t.qualityGrid.certsTitle}</h3>

          {/* Cert cards — 3-column grid */}
          <div
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            role="list"
            aria-label={t.qualityGrid.certsLabel}
          >
            {t.qualityGrid.certs.map((c) => (
              <div
                key={c.code}
                className="rounded-xl p-4 flex flex-col items-center text-center gap-2"
                style={{
                  background: "rgba(127,168,221,0.12)",
                  border: "1px solid rgba(127,168,221,0.2)",
                }}
                role="listitem"
              >
                {/* Cert logo placeholder — 64x64px */}
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(245,197,24,0.15)",
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="text-lg font-bold"
                    style={{ color: "var(--pt-wheat-soft)" }}
                  >
                    {c.code.slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm tracking-wide">
                    {c.code}
                  </div>
                  <div className="text-xs opacity-70 mt-0.5">{c.label}</div>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">
                  {c.desc}
                </p>
                <a
                  href="/#chat-luong"
                  className="text-xs font-medium underline underline-offset-2 mt-auto"
                  style={{ color: "var(--pt-sage-300)" }}
                  aria-label={`${t.qualityGrid.downloadCert} — ${c.code}`}
                >
                  {t.qualityGrid.downloadCert}
                </a>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-6">
            <a
              href="/#yeu-cau-mau"
              className="btn-light-primary w-full justify-center"
              aria-label={t.qualityGrid.bottomCta}
            >
              {t.qualityGrid.bottomCta}
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
