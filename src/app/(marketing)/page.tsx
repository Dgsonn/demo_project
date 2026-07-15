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

      {/* 02 — Manifesto section — Chapter style */}
      <section 
        className="section relative overflow-hidden" 
        style={{ background: "var(--pt-cream)" }}
        aria-label="Câu chuyện Phúc Thịnh"
      >
        {/* Background illustration - golden rice field */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              <linearGradient id="wheatGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8d090"/>
                <stop offset="30%" stopColor="#d4b060"/>
                <stop offset="70%" stopColor="#c9a040"/>
                <stop offset="100%" stopColor="#b08030"/>
              </linearGradient>
              <linearGradient id="wheatHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f5e8c0"/>
                <stop offset="50%" stopColor="#d4a840"/>
                <stop offset="100%" stopColor="#b89030"/>
              </linearGradient>
              <linearGradient id="stalkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9a8030"/>
                <stop offset="50%" stopColor="#c9a850"/>
                <stop offset="100%" stopColor="#8a7020"/>
              </linearGradient>
              <linearGradient id="leafGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#6a7a40"/>
                <stop offset="50%" stopColor="#8a9a50"/>
                <stop offset="100%" stopColor="#a0b060"/>
              </linearGradient>
              <linearGradient id="fieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f5e8b0"/>
                <stop offset="40%" stopColor="#d4a84b"/>
                <stop offset="100%" stopColor="#b8923a"/>
              </linearGradient>
              <radialGradient id="sunGlow" cx="70%" cy="20%" r="50%">
                <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#fff8e0" stopOpacity="0"/>
              </radialGradient>
            </defs>
            
            {/* Sun glow effect */}
            <rect x="0" y="0" width="1200" height="600" fill="url(#sunGlow)" opacity="0.5"/>
            
            {/* Sky with soft gradient */}
            <rect x="0" y="0" width="1200" height="180" fill="#e8f0f8" opacity="0.4"/>
            
            {/* Distant mountains - soft purple/blue */}
            <path d="M0,150 Q200,100 400,130 Q600,80 800,110 Q1000,90 1200,120 L1200,200 L0,200 Z" fill="#a8b8c8" opacity="0.25"/>
            <path d="M0,170 Q300,130 600,150 Q900,120 1200,140 L1200,210 L0,210 Z" fill="#98a8b8" opacity="0.2"/>
            
            {/* Green field layer - midground with soft edge */}
            <path d="M0,200 Q200,170 400,185 Q600,160 800,175 Q1000,165 1200,180 L1200,340 L0,340 Z" fill="#7ab86a" opacity="0.2"/>
            
            {/* Golden rice field - foreground with natural texture */}
            <path d="M0,320 Q250,300 500,310 Q750,290 1000,305 Q1100,298 1200,310 L1200,600 L0,600 Z" fill="url(#fieldGrad)" opacity="0.3"/>
            
            {/* Wheat row lines - more subtle */}
            {[...Array(30)].map((_, i) => (
              <path key={`rrow${i}`} 
                d={`M${i * 42},330 Q${i * 42 + 20},${325 + (i % 3) * 8} ${i * 42 + 15},600`}
                stroke="#c9a840" strokeWidth="3" fill="none" opacity="0.12"
              />
            ))}
            
            {/* Left side - 4 wheat stalks (realistic style) */}
            <g transform="translate(40, 80)" opacity="0.45">
              {/* Wheat stalk 1 - main */}
              <g>
                <path d="M30,280 Q25,200 35,120 Q40,60 30,0" stroke="url(#stalkGrad)" strokeWidth="2.5" fill="none"/>
                {/* Node */}
                <ellipse cx="32" cy="180" rx="3" ry="2" fill="#7a6020"/>
                {/* Leaves - using gradient */}
                <path d="M32,200 Q-20,180 -40,150 Q-30,140 -10,160" fill="url(#leafGrad)" opacity="0.85"/>
                <path d="M33,140 Q60,110 80,90 Q75,80 55,100" fill="url(#leafGrad)" opacity="0.75"/>
                {/* Wheat head grains with awns */}
                {[...Array(9)].map((_, i) => (
                  <g key={`g1l${i}`}>
                    <ellipse cx={20 - i*2} cy={0 + i*12} rx="5" ry="10" fill="url(#wheatHighlight)" transform={`rotate(-20, ${20-i*2}, ${i*12})`}/>
                    <line x1={20 - i*2} y1={-8 + i*12} x2={15 - i*4} y2={-30 + i*12} stroke="#a08030" strokeWidth="0.4" opacity="0.5"/>
                  </g>
                ))}
                {[...Array(9)].map((_, i) => (
                  <g key={`g1r${i}`}>
                    <ellipse cx={40 + i*2} cy={0 + i*12} rx="5" ry="10" fill="url(#wheatGold)" transform={`rotate(20, ${40+i*2}, ${i*12})`}/>
                    <line x1={40 + i*2} y1={-8 + i*12} x2={45 + i*4} y2={-30 + i*12} stroke="#a08030" strokeWidth="0.4" opacity="0.5"/>
                  </g>
                ))}
              </g>
              
              {/* Wheat stalk 2 */}
              <g transform="translate(70, 30)">
                <path d="M20,250 Q30,180 25,100 Q20,40 30,-20" stroke="url(#stalkGrad)" strokeWidth="2" fill="none"/>
                <ellipse cx="24" cy="150" rx="2.5" ry="1.5" fill="#7a6020"/>
                <path d="M24,180 Q-15,160 -35,130 Q-25,120 -5,140" fill="url(#leafGrad)" opacity="0.75"/>
                <path d="M25,120 Q50,95 70,75 Q65,65 45,85" fill="url(#leafGrad)" opacity="0.65"/>
                {[...Array(8)].map((_, i) => (
                  <g key={`g2l${i}`}>
                    <ellipse cx={12 - i*1.5} cy={-15 + i*11} rx="4.5" ry="9" fill="url(#wheatHighlight)" transform={`rotate(-18, ${12-i*1.5}, ${-15+i*11})`}/>
                    <line x1={12 - i*1.5} y1={-22 + i*11} x2={8 - i*3} y2={-40 + i*11} stroke="#a08030" strokeWidth="0.3" opacity="0.45"/>
                  </g>
                ))}
                {[...Array(8)].map((_, i) => (
                  <g key={`g2r${i}`}>
                    <ellipse cx={28 + i*1.5} cy={-15 + i*11} rx="4.5" ry="9" fill="url(#wheatGold)" transform={`rotate(18, ${28+i*1.5}, ${-15+i*11})`}/>
                    <line x1={28 + i*1.5} y1={-22 + i*11} x2={32 + i*3} y2={-40 + i*11} stroke="#a08030" strokeWidth="0.3" opacity="0.45"/>
                  </g>
                ))}
              </g>
              
              {/* Wheat stalk 3 */}
              <g transform="translate(120, 10)">
                <path d="M15,270 Q5,190 15,110 Q20,50 10,0" stroke="url(#stalkGrad)" strokeWidth="2" fill="none"/>
                <ellipse cx="14" cy="170" rx="2" ry="1.5" fill="#7a6020"/>
                <path d="M14,190 Q-20,170 -45,145 Q-35,135 -10,155" fill="url(#leafGrad)" opacity="0.75"/>
                {[...Array(7)].map((_, i) => (
                  <g key={`g3l${i}`}>
                    <ellipse cx={8 - i*1.5} cy={5 + i*10} rx="4" ry="8" fill="url(#wheatHighlight)" transform={`rotate(-15, ${8-i*1.5}, ${5+i*10})`}/>
                    <line x1={8 - i*1.5} y1={-2 + i*10} x2={5 - i*3} y2={-18 + i*10} stroke="#a08030" strokeWidth="0.3" opacity="0.4"/>
                  </g>
                ))}
                {[...Array(7)].map((_, i) => (
                  <g key={`g3r${i}`}>
                    <ellipse cx={22 + i*1.5} cy={5 + i*10} rx="4" ry="8" fill="url(#wheatGold)" transform={`rotate(15, ${22+i*1.5}, ${5+i*10})`}/>
                    <line x1={22 + i*1.5} y1={-2 + i*10} x2={25 + i*3} y2={-18 + i*10} stroke="#a08030" strokeWidth="0.3" opacity="0.4"/>
                  </g>
                ))}
              </g>
              
              {/* Wheat stalk 4 - drooping */}
              <g transform="translate(160, 40)">
                <path d="M10,240 Q25,180 50,120 Q65,80 55,30" stroke="url(#stalkGrad)" strokeWidth="1.8" fill="none"/>
                <path d="M15,200 Q-15,180 -35,155 Q-25,145 0,165" fill="url(#leafGrad)" opacity="0.7"/>
                {[...Array(6)].map((_, i) => (
                  <g key={`g4l${i}`}>
                    <ellipse cx={40 - i*2} cy={115 + i*9} rx="3.5" ry="7" fill="url(#wheatHighlight)" transform={`rotate(-20, ${40-i*2}, ${115+i*9})`}/>
                    <line x1={40 - i*2} y1={109 + i*9} x2={36 - i*4} y2={95 + i*9} stroke="#a08030" strokeWidth="0.25" opacity="0.4"/>
                  </g>
                ))}
                {[...Array(6)].map((_, i) => (
                  <g key={`g4r${i}`}>
                    <ellipse cx={55 + i*2} cy={115 + i*9} rx="3.5" ry="7" fill="url(#wheatGold)" transform={`rotate(10, ${55+i*2}, ${115+i*9})`}/>
                    <line x1={55 + i*2} y1={109 + i*9} x2={60 + i*4} y2={95 + i*9} stroke="#a08030" strokeWidth="0.25" opacity="0.4"/>
                  </g>
                ))}
              </g>
            </g>

            {/* Right side - 4 wheat stalks (mirrored) */}
            <g transform="translate(900, 80)" opacity="0.45">
              {/* Wheat stalk 1 */}
              <g>
                <path d="M30,280 Q25,200 35,120 Q40,60 30,0" stroke="url(#stalkGrad)" strokeWidth="2.5" fill="none"/>
                <ellipse cx="32" cy="180" rx="3" ry="2" fill="#7a6020"/>
                <path d="M32,200 Q-20,180 -40,150 Q-30,140 -10,160" fill="url(#leafGrad)" opacity="0.85"/>
                <path d="M33,140 Q60,110 80,90 Q75,80 55,100" fill="url(#leafGrad)" opacity="0.75"/>
                {[...Array(9)].map((_, i) => (
                  <g key={`gr1l${i}`}>
                    <ellipse cx={20 - i*2} cy={0 + i*12} rx="5" ry="10" fill="url(#wheatHighlight)" transform={`rotate(-20, ${20-i*2}, ${i*12})`}/>
                    <line x1={20 - i*2} y1={-8 + i*12} x2={15 - i*4} y2={-30 + i*12} stroke="#a08030" strokeWidth="0.4" opacity="0.5"/>
                  </g>
                ))}
                {[...Array(9)].map((_, i) => (
                  <g key={`gr1r${i}`}>
                    <ellipse cx={40 + i*2} cy={0 + i*12} rx="5" ry="10" fill="url(#wheatGold)" transform={`rotate(20, ${40+i*2}, ${i*12})`}/>
                    <line x1={40 + i*2} y1={-8 + i*12} x2={45 + i*4} y2={-30 + i*12} stroke="#a08030" strokeWidth="0.4" opacity="0.5"/>
                  </g>
                ))}
              </g>
              
              {/* Wheat stalk 2 */}
              <g transform="translate(70, 30)">
                <path d="M20,250 Q30,180 25,100 Q20,40 30,-20" stroke="url(#stalkGrad)" strokeWidth="2" fill="none"/>
                <ellipse cx="24" cy="150" rx="2.5" ry="1.5" fill="#7a6020"/>
                <path d="M24,180 Q-15,160 -35,130 Q-25,120 -5,140" fill="url(#leafGrad)" opacity="0.75"/>
                <path d="M25,120 Q50,95 70,75 Q65,65 45,85" fill="url(#leafGrad)" opacity="0.65"/>
                {[...Array(8)].map((_, i) => (
                  <g key={`gr2l${i}`}>
                    <ellipse cx={12 - i*1.5} cy={-15 + i*11} rx="4.5" ry="9" fill="url(#wheatHighlight)" transform={`rotate(-18, ${12-i*1.5}, ${-15+i*11})`}/>
                    <line x1={12 - i*1.5} y1={-22 + i*11} x2={8 - i*3} y2={-40 + i*11} stroke="#a08030" strokeWidth="0.3" opacity="0.45"/>
                  </g>
                ))}
                {[...Array(8)].map((_, i) => (
                  <g key={`gr2r${i}`}>
                    <ellipse cx={28 + i*1.5} cy={-15 + i*11} rx="4.5" ry="9" fill="url(#wheatGold)" transform={`rotate(18, ${28+i*1.5}, ${-15+i*11})`}/>
                    <line x1={28 + i*1.5} y1={-22 + i*11} x2={32 + i*3} y2={-40 + i*11} stroke="#a08030" strokeWidth="0.3" opacity="0.45"/>
                  </g>
                ))}
              </g>
              
              {/* Wheat stalk 3 */}
              <g transform="translate(120, 10)">
                <path d="M15,270 Q5,190 15,110 Q20,50 10,0" stroke="url(#stalkGrad)" strokeWidth="2" fill="none"/>
                <ellipse cx="14" cy="170" rx="2" ry="1.5" fill="#7a6020"/>
                <path d="M14,190 Q-20,170 -45,145 Q-35,135 -10,155" fill="url(#leafGrad)" opacity="0.75"/>
                {[...Array(7)].map((_, i) => (
                  <g key={`gr3l${i}`}>
                    <ellipse cx={8 - i*1.5} cy={5 + i*10} rx="4" ry="8" fill="url(#wheatHighlight)" transform={`rotate(-15, ${8-i*1.5}, ${5+i*10})`}/>
                    <line x1={8 - i*1.5} y1={-2 + i*10} x2={5 - i*3} y2={-18 + i*10} stroke="#a08030" strokeWidth="0.3" opacity="0.4"/>
                  </g>
                ))}
                {[...Array(7)].map((_, i) => (
                  <g key={`gr3r${i}`}>
                    <ellipse cx={22 + i*1.5} cy={5 + i*10} rx="4" ry="8" fill="url(#wheatGold)" transform={`rotate(15, ${22+i*1.5}, ${5+i*10})`}/>
                    <line x1={22 + i*1.5} y1={-2 + i*10} x2={25 + i*3} y2={-18 + i*10} stroke="#a08030" strokeWidth="0.3" opacity="0.4"/>
                  </g>
                ))}
              </g>
              
              {/* Wheat stalk 4 */}
              <g transform="translate(160, 40)">
                <path d="M10,240 Q25,180 50,120 Q65,80 55,30" stroke="url(#stalkGrad)" strokeWidth="1.8" fill="none"/>
                <path d="M15,200 Q-15,180 -35,155 Q-25,145 0,165" fill="url(#leafGrad)" opacity="0.7"/>
                {[...Array(6)].map((_, i) => (
                  <g key={`gr4l${i}`}>
                    <ellipse cx={40 - i*2} cy={115 + i*9} rx="3.5" ry="7" fill="url(#wheatHighlight)" transform={`rotate(-20, ${40-i*2}, ${115+i*9})`}/>
                    <line x1={40 - i*2} y1={109 + i*9} x2={36 - i*4} y2={95 + i*9} stroke="#a08030" strokeWidth="0.25" opacity="0.4"/>
                  </g>
                ))}
                {[...Array(6)].map((_, i) => (
                  <g key={`gr4r${i}`}>
                    <ellipse cx={55 + i*2} cy={115 + i*9} rx="3.5" ry="7" fill="url(#wheatGold)" transform={`rotate(10, ${55+i*2}, ${115+i*9})`}/>
                    <line x1={55 + i*2} y1={109 + i*9} x2={60 + i*4} y2={95 + i*9} stroke="#a08030" strokeWidth="0.25" opacity="0.4"/>
                  </g>
                ))}
              </g>
            </g>
          </svg>
        </div>

        {/* Main content - centered */}
        <RevealSection className="relative z-10 mx-auto max-w-3xl px-6 text-center py-24">
          <SectionHeader
            eyebrow={t.manifesto.eyebrow}
            align="center"
            title={
              <>
                {t.manifesto.titleA}
                <br />
                <span style={{ color: "var(--pt-sage-500)" }}>
                  {t.manifesto.titleB}
                </span>
              </>
            }
            description={t.manifesto.description}
          />
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
   Inline product visuals (SVG)
   ============================= */

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