/**
 * Home page — Chapter-style layout with scroll-triggered reveals
 * 
 * Features:
 * - Scroll-triggered section reveals using useReveal hook
 * - Chapter-style layout with numbered sections
 * - Proper accessibility with aria-labels
 */

"use client";

import Link from "next/link";
import { CinematicLoaderWrapper } from "@/components/CinematicLoaderWrapper";
import { HeroHook } from "@/components/HeroHook";
import { TrustStrip } from "@/components/TrustStrip";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductTile } from "@/components/ProductTile";
import { QualityGrid } from "@/components/QualityGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { ProcessCTA } from "@/components/ProcessCTA";
import { RevealSection } from "@/components/RevealSection";
import { useT } from "@/lib/i18n/useT";

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span 
        className="text-micro px-3 py-1 rounded-full"
        style={{ 
          background: "color-mix(in srgb, var(--pt-sage-500) 12%, transparent)",
          color: "var(--pt-sage-600)",
          border: "1px solid color-mix(in srgb, var(--pt-sage-500) 25%, transparent)"
        }}
      >
        {number}
      </span>
      <span className="eyebrow">{label}</span>
    </div>
  );
}

export default function Home() {
  const t = useT();
  return (
    <>
      <CinematicLoaderWrapper />
      
      {/* 01 — B2B Hero */}
      <HeroHook />

      {/* 02 — Manifesto section — Story style (image + stat + script headline) */}
      <section
        className="section relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 10%, color-mix(in srgb, var(--pt-wheat-soft) 22%, transparent) 0%, transparent 100%), " +
            "radial-gradient(ellipse 55% 45% at 8% 95%, color-mix(in srgb, var(--pt-sage-400) 16%, transparent) 0%, transparent 100%), " +
            "var(--pt-cream)",
        }}
        aria-label="Câu chuyện Phúc Thịnh"
      >
        <RevealSection className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — plant illustration in a rounded card, offset two-tone block behind */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="absolute -left-5 -top-5 w-[88%] h-[88%] rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--pt-sage-300) 0%, var(--pt-wheat-soft) 100%)",
                  opacity: 0.55,
                }}
                aria-hidden="true"
              />
              <div
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--pt-shadow-md)]"
                style={{
                  background:
                    "linear-gradient(160deg, var(--pt-cream) 0%, var(--pt-cream-deep) 100%)",
                }}
              >
                <CassavaStoryVisual />
              </div>
            </div>

            {/* Right — stat, script headline, description */}
            <div>
              <p className="eyebrow flex items-center gap-2">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--pt-wheat-soft)" }}
                  aria-hidden="true"
                />
                {t.manifesto.eyebrow}
              </p>
              <p
                className="mt-4 text-5xl sm:text-6xl font-bold"
                style={{ color: "var(--pt-sage-700)", fontFamily: "var(--font-playfair)" }}
              >
                {t.manifesto.statValue}
              </p>
              <p className="mt-3 max-w-xs text-base text-[var(--pt-ink-soft)]">
                {t.manifesto.statLabel}
              </p>
              <p
                className="mt-8 text-3xl sm:text-4xl italic"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--pt-sage-600)",
                  lineHeight: 1.25,
                }}
              >
                {t.manifesto.titleA} {t.manifesto.titleB}
              </p>
              <span
                className="mt-5 block h-[3px] w-16 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--pt-wheat-soft), var(--pt-sage-400))",
                }}
                aria-hidden="true"
              />
              <p className="mt-6 max-w-md text-base text-[var(--pt-ink-soft)]">
                {t.manifesto.description}
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* 03 — Products — Chapter style */}
      <section 
        className="section" 
        style={{ background: "var(--pt-cream)" }} 
        aria-label="Sản phẩm"
      >
        <RevealSection className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow={t.productsSection.eyebrow}
            title={t.productsSection.title}
            description={t.productsSection.description}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tinh bột sắn Phúc Thịnh */}
            <ProductTile
              href="/san-pham/tinh-bot-san"
              eyebrow={t.productsSection.tinhBotSan.eyebrow}
              title={t.productsSection.tinhBotSan.title}
              specHighlight={t.productsSection.tinhBotSan.specHighlight}
              certBadges={["ISO 22000", "HACCP", "SGS"]}
              tagline={t.productsSection.tinhBotSan.tagline}
              bullets={t.productsSection.tinhBotSan.bullets}
              ctaPrimary={t.productsSection.ctaPrimary}
              ctaSecondary={t.productsSection.ctaSecondary}
              visual={<StarchMoundVisual />}
            />
            {/* Bột biến tính Phúc Thịnh */}
            <ProductTile
              href="/san-pham/bot-bien-tinh"
              eyebrow={t.productsSection.botBienTinh.eyebrow}
              title={t.productsSection.botBienTinh.title}
              specHighlight={t.productsSection.botBienTinh.specHighlight}
              certBadges={["ISO 22000", "FDA"]}
              tagline={t.productsSection.botBienTinh.tagline}
              bullets={t.productsSection.botBienTinh.bullets}
              ctaPrimary={t.productsSection.ctaPrimary}
              ctaSecondary={t.productsSection.ctaSecondary}
              visual={<StarchVisual />}
              dark
            />
          </div>
        </RevealSection>
      </section>

      {/* 04 — Process CTA strip */}
      <RevealSection>
        <ProcessCTA />
      </RevealSection>

      {/* 05 — Quality Grid — Chapter style */}
      <section
        id="chat-luong"
        className="section bg-white relative overflow-hidden"
        aria-label="Chất lượng và kiểm định"
      >
        <RevealSection className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow={t.qualitySection.eyebrow}
            title={
              <>
                {t.qualitySection.titleA}
                <br />
                {t.qualitySection.titleB}
              </>
            }
            description={t.qualitySection.description}
          />

          <div className="mt-12">
            <QualityGrid />
          </div>

          {/* CTA bridge */}
          <div className="mt-14 flex justify-center">
            <Link href="/#yeu-cau-mau" className="btn-primary">
              {t.qualitySection.bridgeCta}
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
          </div>
        </RevealSection>
      </section>

      <TrustStrip />

      {/* 06 — Contact CTA — Chapter style */}
      <RevealSection>
        <ContactCTA />
      </RevealSection>
    </>
  );
}

/* =============================
   Inline story / product visuals (SVG)
   ============================= */

/** A single palmate cassava leaf — broad pointed leaflets fanning out from a petiole tip. */
function CassavaLeafCluster({
  cx,
  cy,
  scale = 1,
  rotate = 0,
}: {
  cx: number;
  cy: number;
  scale?: number;
  rotate?: number;
}) {
  const n = 6;
  const spread = 300; // leaflets fan across ~300°, leaving a gap at the bottom where the petiole attaches
  const start = -spread / 2;
  return (
    <g transform={`translate(${cx},${cy}) scale(${scale}) rotate(${rotate})`}>
      {/* Petiole — short stem connecting the leaf cluster to the branch */}
      <path d="M0,0 L0,16" stroke="url(#cassavaStem)" strokeWidth="2.5" strokeLinecap="round" />
      {Array.from({ length: n }).map((_, i) => {
        const angle = start + (spread / (n - 1)) * i;
        const len = 46 + (i % 2 === 0 ? 6 : -4);
        const w = len * 0.34;
        return (
          <path
            key={i}
            d={`M0,0 C${-w},${-len * 0.22} ${-w * 0.8},${-len * 0.65} 0,${-len} C${w * 0.8},${-len * 0.65} ${w},${-len * 0.22} 0,0 Z`}
            fill="url(#cassavaLeafFill)"
            stroke="url(#cassavaLeafEdge)"
            strokeWidth="1.4"
            strokeLinejoin="round"
            transform={`rotate(${angle})`}
          />
        );
      })}
    </g>
  );
}

/** Story-section illustration — stylized cassava plant (stem, palmate leaves, fanned roots). */
function CassavaStoryVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center product-visual-float-sm">
      <svg viewBox="0 0 400 420" width="80%" aria-hidden="true">
        <defs>
          <linearGradient id="cassavaLeafFill" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2c7536" />
            <stop offset="100%" stopColor="#57ab49" />
          </linearGradient>
          <linearGradient id="cassavaLeafEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9de072" />
            <stop offset="100%" stopColor="#4f9a44" />
          </linearGradient>
          <linearGradient id="cassavaStem" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8a6a3e" />
            <stop offset="100%" stopColor="#6b4d29" />
          </linearGradient>
          <linearGradient id="cassavaRoot" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ab8a5c" />
            <stop offset="100%" stopColor="#7a5c36" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="200" cy="404" rx="95" ry="10" fill="var(--pt-sage-700)" opacity="0.1" />

        {/* Roots — fan out from the base */}
        {[-78, -50, -24, 0, 24, 50, 78].map((dx, i) => (
          <path
            key={i}
            d={`M200,356 Q${200 + dx * 0.5},386 ${200 + dx},408`}
            stroke="url(#cassavaRoot)"
            strokeWidth={12 - Math.abs(i - 3) * 1.4}
            fill="none"
            strokeLinecap="round"
          />
        ))}

        {/* Main trunk */}
        <path
          d="M200,360 Q193,270 205,190 Q211,132 196,64"
          stroke="url(#cassavaStem)"
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
        />
        {/* Bark texture lines */}
        <path d="M195,330 Q191,270 199,214" stroke="#5a3f20" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M205,300 Q209,250 203,206" stroke="#5a3f20" strokeWidth="1" fill="none" opacity="0.3" />

        {/* Branches */}
        <path d="M203,268 Q168,244 138,208" stroke="url(#cassavaStem)" strokeWidth="6.5" fill="none" strokeLinecap="round" />
        <path d="M202,206 Q160,196 122,166" stroke="url(#cassavaStem)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M203,150 Q246,132 276,104" stroke="url(#cassavaStem)" strokeWidth="6.5" fill="none" strokeLinecap="round" />
        <path d="M201,108 Q238,92 262,66" stroke="url(#cassavaStem)" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M198,326 Q152,320 112,296" stroke="url(#cassavaStem)" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Leaf clusters — layered from back to front, filling the silhouette */}
        <CassavaLeafCluster cx={112} cy={292} scale={0.82} rotate={100} />
        <CassavaLeafCluster cx={138} cy={204} scale={0.95} rotate={110} />
        <CassavaLeafCluster cx={122} cy={162} scale={0.78} rotate={125} />
        <CassavaLeafCluster cx={196} cy={60} scale={0.8} rotate={5} />
        <CassavaLeafCluster cx={262} cy={62} scale={0.9} rotate={-40} />
        <CassavaLeafCluster cx={276} cy={100} scale={1.05} rotate={-55} />
        <CassavaLeafCluster cx={203} cy={146} scale={0.7} rotate={-15} />
      </svg>
    </div>
  );
}

function StarchMoundVisual() {
  return (
    <div
      className="w-full h-full flex items-center justify-center product-visual-float-sm"
      style={{
        background:
          "radial-gradient(ellipse at 70% 30%, var(--pt-cream) 0%, var(--pt-sage-100) 70%)",
      }}
    >
      <svg viewBox="0 0 240 240" width="70%" aria-hidden="true">
        <defs>
          <radialGradient id="tbsGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--pt-sage-400)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--pt-sage-400)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="tbsMound" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="var(--pt-cream)" />
            <stop offset="100%" stopColor="var(--pt-wheat-soft)" />
          </radialGradient>
        </defs>
        {/* Ambient glow */}
        <circle cx="120" cy="120" r="112" fill="url(#tbsGlow)" />
        {/* Base shadow */}
        <ellipse cx="120" cy="185" rx="68" ry="9" fill="var(--pt-sage-700)" opacity="0.12" />
        {/* Powder mound — tinh bột sắn */}
        <path
          d="M52,178 Q45,110 120,95 Q195,110 188,178 Q188,202 120,206 Q52,202 52,178 Z"
          fill="url(#tbsMound)"
        />
        {/* Blue accent rim along the mound's edge */}
        <path
          d="M52,178 Q45,110 120,95 Q195,110 188,178"
          fill="none"
          stroke="var(--pt-sage-500)"
          strokeWidth="2"
          opacity="0.25"
        />
        {/* Fine granule texture on the mound */}
        {Array.from({ length: 26 }).map((_, i) => {
          const angle = (i / 26) * Math.PI * 2;
          const r = 19 + (i % 5) * 12;
          const cx = 120 + Math.cos(angle) * r * 0.95;
          const cy = 140 + Math.sin(angle) * r * 0.5;
          const isGold = i % 3 !== 0;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={1 + (i % 3) * 0.7}
              fill={isGold ? "var(--pt-sage-700)" : "var(--pt-sage-500)"}
              opacity={0.1 + (i % 4) * 0.04}
            />
          );
        })}
        {/* Floating dust granules — blue + gold, gently twinkle above the mound */}
        {Array.from({ length: 9 }).map((_, i) => {
          const cx = 66 + (i * 104) % 112;
          const cy = 42 + ((i * 37) % 62);
          const isGold = i % 2 === 0;
          return (
            <circle
              key={i}
              className="product-visual-sparkle"
              cx={cx}
              cy={cy}
              r={2 + (i % 4) * 1.2}
              fill={isGold ? "var(--pt-wheat-soft)" : "var(--pt-sage-500)"}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}

function StarchVisual() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 30% 70%, var(--pt-sage-600) 0%, var(--pt-sage-700) 70%)",
      }}
    >
      <svg viewBox="0 0 240 240" width="75%" aria-hidden="true">
        {/* Starch crystal pattern — slowly orbits the core */}
        <g className="product-visual-spin" style={{ transformOrigin: "120px 120px" }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i / 14) * Math.PI * 2;
            const r = 40 + (i % 3) * 22;
            const cx = 120 + Math.cos(a) * r;
            const cy = 120 + Math.sin(a) * r;
            return (
              <circle
                key={i}
                className="product-visual-pulse"
                cx={cx}
                cy={cy}
                r={6 + (i % 4) * 3}
                fill="var(--pt-wheat-soft)"
                opacity={0.5 + (i % 3) * 0.2}
                style={{ transformOrigin: `${cx}px ${cy}px`, animationDelay: `${i * 0.18}s` }}
              />
            );
          })}
        </g>
        <circle cx="120" cy="120" r="28" fill="var(--pt-wheat-soft)" />
        <circle cx="120" cy="120" r="12" fill="var(--pt-sage-700)" />
      </svg>
    </div>
  );
}