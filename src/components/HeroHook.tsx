/**
 * HeroHook — Phúc Thịnh Flour B2B hero.
 *
 * Features:
 * - Logo entrance animation (hero-logo-entrance)
 * - Fixed alignment with proper spacing
 * - B2B clear messaging
 * - Mobile responsive
 */

"use client";

import Link from "next/link";
import { HexMark } from "./PtLogo";
import { useT } from "@/lib/i18n/useT";

export function HeroHook() {
  const t = useT();
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, var(--pt-cream) 0%, var(--pt-cream) 40%, var(--pt-cream-deep) 100%)",
      }}
      aria-label="Hero — Phúc Thịnh Flour"
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Vignette — sage tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, transparent 50%, rgba(15, 47, 102, 0.06) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 pt-10 pb-10 lg:pt-14 lg:pb-24 hero-reveal">
        <div className="flex flex-col items-center text-center">
          {/* ========== Logo icon with entrance animation ========== */}
          <div className="logo-zoom-in">
            <HexMark size={220} />
            <div className="logo-shine" aria-hidden="true" />
          </div>

          {/* H1 */}
          <h1
            className="pt-rise mt-6"
            style={{
              maxWidth: "18ch",
              color: "#1a1a1a",
              fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            {t.hero.headlineA}
            <br />
            <span style={{ color: "var(--pt-sage-500)" }}>
              {t.hero.headlineB}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="pt-rise lede mt-5" style={{ maxWidth: "52ch" }}>
            {t.hero.subheadline}
          </p>

          {/* CTA row */}
          <div className="pt-rise mt-5 lg:mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/#yeu-cau-mau" className="btn-primary">
              {t.hero.ctaPrimary}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ marginLeft: 8 }}
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
            <Link
              href="/#yeu-cau-mau"
              className="btn-secondary"
              aria-label={t.hero.ctaSecondary}
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="pt-rise mt-10 pt-6 grid grid-cols-3 gap-10"
            style={{ borderTop: "1px solid var(--pt-line)" }}
          >
            {[
              { v: "20+", l: t.hero.statYears },
              { v: "40+", l: t.hero.statCountries },
              { v: "90%", l: t.hero.statWhiteness },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-stat"
                  style={{
                    color: "var(--pt-sage-700)",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div
                  className="text-stat-label"
                  style={{ color: "var(--pt-ink-soft)", marginTop: 4 }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="pt-rise flex justify-center mt-16"
          aria-hidden="true"
        >
          <div
            className="w-px h-10"
            style={{ background: "var(--pt-sage-400)", opacity: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}