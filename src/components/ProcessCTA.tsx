"use client";

/**
 * ProcessCTA — 4-step horizontal timeline (vertical on mobile).
 *
 * Per R3 consensus:
 *  - 4 steps (added Step 04: Xuất xưởng & vận chuyển)
 *  - Duration callout on Step 04: "2–3 ngày sau khi đặt hàng."
 *  - Blue/gold brand palette (matches logo)
 */

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/lib/i18n/useT";

export function ProcessCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const t = useT();
  const STEPS = t.processCTA.steps.map((s, i) => ({
    n: String(i + 1).padStart(2, "0"),
    ...s,
  }));

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--pt-sage-600) 0%, var(--pt-sage-700) 100%)",
        color: "var(--pt-cream)",
      }}
      aria-label="Quy trình sản xuất"
    >
      {/* Wheat accent blur top-right */}
      <div
        aria-hidden="true"
        className="absolute"
        style={{
          top: "-20%",
          right: "-10%",
          width: "40%",
          height: "140%",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--pt-wheat-soft) 18%, transparent) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left: heading + CTA */}
          <div className="lg:col-span-5">
            <p
              className="eyebrow"
              style={{
                color: "var(--pt-wheat-soft)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {t.processCTA.eyebrow}
            </p>
            <h2
              className="headline-lg mt-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              }}
            >
              {t.processCTA.titleA}{" "}
              <span style={{ color: "var(--pt-wheat-soft)" }}>
                {t.processCTA.titleB}
              </span>
            </h2>
            <p
              className="lede mt-4"
              style={{
                color: "var(--pt-wheat-soft)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              {t.processCTA.description}
            </p>
            <div
              className="mt-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            >
              <Link href="/#chat-luong" className="btn-light-primary">
                {t.processCTA.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ marginLeft: 6 }}
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Steps */}
          <ol
            className="lg:col-span-7 space-y-6"
            aria-label="Các bước quy trình"
          >
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="relative flex gap-6 items-start pl-6"
                style={{
                  borderLeft: "1.5px solid var(--pt-wheat-soft)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(20px)",
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${
                    0.3 + i * 0.12
                  }s`,
                }}
              >
                <div
                  className="shrink-0"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "var(--pt-wheat-soft)",
                    marginTop: 4,
                    minWidth: 32,
                  }}
                  aria-hidden="true"
                >
                  {s.n}
                </div>
                <div className="flex-1">
                  <h3 className="headline-md">
                    {s.t}
                  </h3>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--pt-wheat-soft)", opacity: 0.85 }}
                  >
                    {s.d}
                  </p>
                  {s.callout && (
                    <p
                      className="mt-1 text-xs font-medium"
                      style={{ color: "var(--pt-sage-300)" }}
                      aria-label={`Thời gian: ${s.callout}`}
                    >
                      {s.callout}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
