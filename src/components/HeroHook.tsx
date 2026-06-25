/**
 * HeroHook — Phúc Thịnh Flour B2B hero.
 * 
 * Features:
 * - Logo entrance animation (hero-logo-entrance)
 * - Fixed alignment with proper spacing
 * - B2B clear messaging
 * - Mobile responsive
 */

import Link from "next/link";
import { PtHeroLogo } from "./PtLogo";

export function HeroHook() {
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
            "radial-gradient(circle at 70% 50%, transparent 50%, rgba(69, 106, 57, 0.06) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative cassava plants — large background illustrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Left cassava plant — bottom-left, very large */}
        <svg
          viewBox="0 0 200 200"
          className="absolute"
          style={{
            width: "clamp(500px, 45vw, 800px)",
            height: "auto",
            left: "-8%",
            bottom: "-18%",
            opacity: 0.15,
            transform: "rotate(15deg)",
          }}
        >
          <defs>
            <path id="hero-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#388e3c" stroke="#2e7d32" strokeWidth="0.5" />
          </defs>
          <ellipse cx="100" cy="185" rx="30" ry="5" fill="#eeeeee" />
          <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
          <path d="M92,140 Q100,143 108,140" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
          <path d="M90,160 Q100,163 110,160" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
          <path d="M100,120 L100,85" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
          <g transform="translate(100, 85)">
            <use href="#hero-leaf" transform="rotate(0)" />
            <use href="#hero-leaf" transform="rotate(45)" />
            <use href="#hero-leaf" transform="rotate(90)" />
            <use href="#hero-leaf" transform="rotate(-45)" />
            <use href="#hero-leaf" transform="rotate(-90)" />
            <circle cx="0" cy="0" r="3" fill="#2e7d32" />
          </g>
        </svg>

        {/* Right cassava plant — bottom-right, even larger */}
        <svg
          viewBox="0 0 200 200"
          className="absolute"
          style={{
            width: "clamp(600px, 55vw, 1000px)",
            height: "auto",
            right: "-12%",
            bottom: "-25%",
            opacity: 0.12,
            transform: "rotate(-10deg) scaleX(-1)",
          }}
        >
          <defs>
            <path id="hero-leaf-r" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#388e3c" stroke="#2e7d32" strokeWidth="0.5" />
          </defs>
          <ellipse cx="100" cy="185" rx="30" ry="5" fill="#eeeeee" />
          <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
          <path d="M92,140 Q100,143 108,140" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
          <path d="M90,160 Q100,163 110,160" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
          <path d="M100,120 L100,85" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
          <g transform="translate(100, 85)">
            <use href="#hero-leaf-r" transform="rotate(0)" />
            <use href="#hero-leaf-r" transform="rotate(45)" />
            <use href="#hero-leaf-r" transform="rotate(90)" />
            <use href="#hero-leaf-r" transform="rotate(-45)" />
            <use href="#hero-leaf-r" transform="rotate(-90)" />
            <circle cx="0" cy="0" r="3" fill="#2e7d32" />
          </g>
        </svg>

        {/* Top-center small cassava — subtle accent */}
        <svg
          viewBox="0 0 200 200"
          className="absolute hidden lg:block"
          style={{
            width: "clamp(250px, 20vw, 400px)",
            height: "auto",
            right: "5%",
            top: "-5%",
            opacity: 0.09,
            transform: "rotate(25deg)",
          }}
        >
          <defs>
            <path id="hero-leaf-t" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#388e3c" stroke="#2e7d32" strokeWidth="0.5" />
          </defs>
          <ellipse cx="100" cy="185" rx="30" ry="5" fill="#eeeeee" />
          <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
          <path d="M100,120 L100,85" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
          <g transform="translate(100, 85)">
            <use href="#hero-leaf-t" transform="rotate(0)" />
            <use href="#hero-leaf-t" transform="rotate(45)" />
            <use href="#hero-leaf-t" transform="rotate(90)" />
            <use href="#hero-leaf-t" transform="rotate(-45)" />
            <use href="#hero-leaf-t" transform="rotate(-90)" />
            <circle cx="0" cy="0" r="3" fill="#2e7d32" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-6 pb-10 lg:pt-8 lg:pb-24 hero-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* ========== LEFT: text + CTA ========== */}
          <div className="text-left">
            {/* H1 */}
            <h1
              className="pt-rise text-display mt-3 lg:mt-5"
              style={{
                maxWidth: "18ch",
                color: "#1a1a1a",
              }}
            >
              Bột mì &amp; bột biến tính xuất khẩu
              <br />
              <span style={{ color: "var(--pt-sage-500)" }}>
                Cho nhà máy &amp; xưởng bánh Việt
              </span>
            </h1>

            {/* Subheadline */}
            <p className="pt-rise lede mt-5" style={{ maxWidth: "52ch" }}>
              Đạt ISO 22000 · HACCP · FDA. Protein 11%, tinh khiết 99.9%. Phản hồi báo giá
              trong 24h.
            </p>

            {/* CTA row */}
            <div className="pt-rise mt-5 lg:mt-8 flex flex-wrap items-center gap-3">
              <Link href="/#lien-he" className="btn-primary">
                Yêu cầu báo giá 24h
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
                href="/#lien-he"
                className="btn-secondary"
                aria-label="Liên hệ để nhận TDS"
              >
                Tải TDS (PDF)
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="pt-rise mt-10 pt-6 grid grid-cols-3 gap-6"
              style={{ borderTop: "1px solid var(--pt-line)" }}
            >
              {[
                { v: "20+", l: "Năm kinh nghiệm" },
                { v: "40+", l: "Quốc gia xuất khẩu" },
                { v: "11%", l: "Protein" },
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

          {/* ========== RIGHT: logo with entrance animation ========== */}
          <div className="relative flex items-center justify-center">
            {/* Logo container with entrance animation + float + offset */}
            <div
              className="logo-fade-in logo-float"
              style={{ marginLeft: "10%" }}
            >
              <PtHeroLogo 
                maxWidth={400} 
                style={{
                  filter: "drop-shadow(8px 12px 24px rgba(93, 106, 57, 0.35))",
                }}
              />
            </div>

            
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