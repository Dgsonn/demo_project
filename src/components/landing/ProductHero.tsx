"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n/LangContext";
import { useT } from "@/lib/i18n/useT";
import type { Product } from "@/lib/products";

export function ProductHero({ product }: { product: Product }) {
  const { lang } = useLang();
  const t = useT();
  const p = product.content[lang];
  const dark = product.slug === "bot-bien-tinh";
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "min(82svh, 720px)",
        background: product.hero.tint,
        color: dark ? "var(--pt-cream)" : "#1f3350",
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(circle at 30% 50%, transparent 40%, rgba(245, 197, 24, 0.12) 100%)"
            : "radial-gradient(circle at 70% 50%, transparent 50%, rgba(15, 47, 102, 0.06) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-6 lg:pt-8 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left content */}
        <div className="text-left">
          <p
            className="pt-rise eyebrow"
            style={{ color: dark ? "var(--pt-sage-300)" : "#1f3350" }}
          >
            {dark ? t.productDetail.industrialLine : t.productDetail.mainLine}
          </p>
          <h1 className="pt-rise text-display mt-4" style={{ maxWidth: "18ch", color: dark ? "var(--pt-cream)" : "#1f3350" }}>
            {p.name}
          </h1>
          <p
            className="pt-rise lede mt-5 max-w-lg"
            style={{ color: dark ? "var(--pt-sage-300)" : "#1f3350" }}
          >
            {p.tagline}
          </p>
          <p
            className="pt-rise mt-6 max-w-lg text-base leading-relaxed"
            style={{ color: dark ? "var(--pt-sage-300)" : "#1f3350" }}
          >
            {p.description}
          </p>
          <div className="pt-rise mt-9 flex flex-wrap gap-3">
            <Link
              href="/#yeu-cau-mau"
              className={dark ? "btn-light-primary" : "btn-primary"}
            >
              {t.productDetail.ctaQuote}
            </Link>
            <Link
              href="/#chat-luong"
              className={dark ? "btn-light-secondary" : "btn-secondary"}
            >
              {t.productDetail.ctaCert}
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex items-start justify-center lg:justify-end">
          <div
            className="hero-right-appear product-visual-float"
            style={{ width: "min(85%, 400px)" }}
          >
            <ProductVisual slug={product.slug} dark={dark} />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pt-rise flex justify-center mt-16" aria-hidden="true">
        <div
          className="w-px h-10"
          style={{ background: dark ? "var(--pt-sage-400)" : "var(--pt-sage-400)", opacity: 0.5 }}
        />
      </div>
    </section>
  );
}

function ProductVisual({ slug, dark }: { slug: string; dark: boolean }) {
  if (slug === "tinh-bot-san") {
    return (
      <svg viewBox="0 0 400 400" width="100%">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--pt-sage-400)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--pt-sage-400)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mound" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="var(--pt-cream)" />
            <stop offset="100%" stopColor="var(--pt-wheat-soft)" />
          </radialGradient>
        </defs>
        {/* Ambient glow */}
        <circle cx="200" cy="200" r="190" fill="url(#glow)" />
        {/* Base shadow */}
        <ellipse cx="200" cy="310" rx="115" ry="16" fill="var(--pt-sage-700)" opacity="0.12" />
        {/* Powder mound — tinh bột sắn */}
        <path
          d="M85,300 Q75,190 200,160 Q325,190 315,300 Q315,335 200,340 Q85,335 85,300 Z"
          fill="url(#mound)"
        />
        {/* Blue accent rim along the mound's edge */}
        <path
          d="M85,300 Q75,190 200,160 Q325,190 315,300"
          fill="none"
          stroke="var(--pt-sage-500)"
          strokeWidth="3"
          opacity="0.25"
        />
        {/* Fine granule texture on the mound */}
        {Array.from({ length: 34 }).map((_, i) => {
          const angle = (i / 34) * Math.PI * 2;
          const r = 32 + (i % 5) * 20;
          const cx = 200 + Math.cos(angle) * r * 0.95;
          const cy = 235 + Math.sin(angle) * r * 0.5;
          const isGold = i % 3 !== 0;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={1.5 + (i % 3)}
              fill={isGold ? "var(--pt-sage-700)" : "var(--pt-sage-500)"}
              opacity={0.1 + (i % 4) * 0.04}
            />
          );
        })}
        {/* Floating dust granules — blue + gold, gently twinkle above the mound */}
        {Array.from({ length: 14 }).map((_, i) => {
          const cx = 110 + (i * 173) % 190;
          const cy = 70 + ((i * 61) % 110);
          const isGold = i % 2 === 0;
          return (
            <circle
              key={i}
              className="product-visual-sparkle"
              cx={cx}
              cy={cy}
              r={3 + (i % 4) * 2}
              fill={isGold ? "var(--pt-wheat-soft)" : "var(--pt-sage-500)"}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          );
        })}
      </svg>
    );
  }
  // bot-bien-tinh
  return (
    <svg viewBox="0 0 400 400" width="100%">
      <g className="product-visual-spin" style={{ transformOrigin: "200px 200px" }}>
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const r = 60 + (i % 4) * 28;
          return (
            <circle
              key={i}
              className="product-visual-pulse"
              cx={200 + Math.cos(a) * r}
              cy={200 + Math.sin(a) * r}
              r={8 + (i % 5) * 4}
              fill="var(--pt-wheat-soft)"
              opacity={0.4 + (i % 3) * 0.2}
              style={{ transformOrigin: `${200 + Math.cos(a) * r}px ${200 + Math.sin(a) * r}px`, animationDelay: `${i * 0.18}s` }}
            />
          );
        })}
      </g>
      <circle cx="200" cy="200" r="48" fill="var(--pt-wheat-soft)" />
      <circle cx="200" cy="200" r="20" fill="var(--pt-sage-700)" />
    </svg>
  );
}
