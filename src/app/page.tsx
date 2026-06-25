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
import { useReveal } from "@/hooks/useReveal";

function RevealSection({ 
  children, 
  className = "", 
  style = {} 
}: { 
  children: React.ReactNode; 
  className?: string;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

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
  return (
    <>
      <CinematicLoaderWrapper />
      
      {/* 01 — B2B Hero */}
      <HeroHook />
      <TrustStrip />

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
            eyebrow="Câu chuyện"
            align="center"
            title={
              <>
                Một dòng. Một hạt.
                <br />
                <span style={{ color: "var(--pt-sage-500)" }}>
                  Một tiêu chuẩn.
                </span>
              </>
            }
            description="Chúng tôi chọn lọc lúa mì từ vùng nguyên liệu Việt Nam, tinh chế qua dây chuyền hiện đại và kiểm định nghiêm ngặt — để mỗi gram bột đến tay bạn đều đồng nhất, an toàn và đáng tin cậy."
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
            eyebrow="Sản phẩm"
            title="Hai dòng chính. Một chất lượng."
            description="Từ bột mì truyền thống đến bột biến tính công nghiệp — đáp ứng mọi nhu cầu sản xuất."
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bột mì Phúc Thịnh */}
            <ProductTile
              href="/san-pham/bot-mi"
              eyebrow="Dòng chính"
              title="Bột mì Phúc Thịnh"
              specHighlight="11% Protein"
              certBadges={["ISO 22000", "HACCP"]}
              tagline="Cho bánh mì, bánh ngọt và mì sợi."
              bullets={[
                "Protein 11% — gluten cao, độ đàn hồi tốt",
                "Hạt mịn đồng đều, không tạp chất",
                "Đạt ISO 22000 · HACCP · FDA",
              ]}
              ctaPrimary="Yêu cầu mẫu"
              ctaSecondary="Tải TDS"
              visual={<WheatVisual />}
            />
            {/* Bột biến tính Phúc Thịnh */}
            <ProductTile
              href="/san-pham/bot-bien-tinh"
              eyebrow="Dòng công nghiệp"
              title="Bột biến tính Phúc Thịnh"
              specHighlight="99.9% Tinh khiết"
              certBadges={["ISO 22000", "FDA"]}
              tagline="Modified starch cho ngành thực phẩm & sản xuất."
              bullets={[
                "Ổn định cấu trúc, kéo dài thời hạn sản phẩm",
                "Tùy biến theo ứng dụng: xốp, đặc, gel",
                "An toàn thực phẩm — tiêu chuẩn quốc tế",
              ]}
              ctaPrimary="Yêu cầu mẫu"
              ctaSecondary="Tải TDS"
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
        {/* Background cassava plants — large decorative illustrations */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 200 200"
            className="absolute"
            style={{
              width: "clamp(400px, 35vw, 700px)",
              height: "auto",
              left: "-5%",
              top: "10%",
              opacity: 0.1,
              transform: "rotate(-20deg)",
            }}
          >
            <defs>
              <path id="ql-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#388e3c" stroke="#2e7d32" strokeWidth="0.5" />
            </defs>
            <ellipse cx="100" cy="185" rx="30" ry="5" fill="#eeeeee" />
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
            <path d="M92,140 Q100,143 108,140" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
            <path d="M90,160 Q100,163 110,160" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
            <path d="M100,120 L100,85" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#ql-leaf" transform="rotate(0)" />
              <use href="#ql-leaf" transform="rotate(45)" />
              <use href="#ql-leaf" transform="rotate(90)" />
              <use href="#ql-leaf" transform="rotate(-45)" />
              <use href="#ql-leaf" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#2e7d32" />
            </g>
          </svg>

          <svg
            viewBox="0 0 200 200"
            className="absolute hidden md:block"
            style={{
              width: "clamp(350px, 30vw, 600px)",
              height: "auto",
              right: "-8%",
              bottom: "5%",
              opacity: 0.08,
              transform: "rotate(15deg) scaleX(-1)",
            }}
          >
            <defs>
              <path id="ql-leaf-r" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#388e3c" stroke="#2e7d32" strokeWidth="0.5" />
            </defs>
            <ellipse cx="100" cy="185" rx="30" ry="5" fill="#eeeeee" />
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
            <path d="M100,120 L100,85" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#ql-leaf-r" transform="rotate(0)" />
              <use href="#ql-leaf-r" transform="rotate(45)" />
              <use href="#ql-leaf-r" transform="rotate(90)" />
              <use href="#ql-leaf-r" transform="rotate(-45)" />
              <use href="#ql-leaf-r" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#2e7d32" />
            </g>
          </svg>
        </div>
        <RevealSection className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Chất lượng & Kiểm định"
            title={
              <>
                Bảy bước kiểm định.
                <br />
                Một cam kết.
              </>
            }
            description="Mỗi mẻ bột đi qua bảy bước kiểm tra, từ cánh đồng đến nhà máy, trước khi đến tay bạn."
          />
          
          <div className="mt-12">
            <QualityGrid />
          </div>
          
          {/* CTA bridge */}
          <div className="mt-14 flex justify-center">
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
          </div>
        </RevealSection>
      </section>

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

function WheatVisual() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 70% 30%, var(--pt-cream) 0%, var(--pt-sage-100) 70%)",
      }}
    >
      <svg viewBox="0 0 240 240" width="70%" aria-hidden="true">
        <defs>
          <radialGradient id="grain" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--pt-cream)" />
            <stop offset="100%" stopColor="var(--pt-wheat-soft)" />
          </radialGradient>
        </defs>
        {/* Stylized wheat grain */}
        <ellipse cx="120" cy="120" rx="65" ry="95" fill="url(#grain)" />
        <line
          x1="120" y1="40" x2="120" y2="200"
          stroke="var(--pt-sage-700)" strokeWidth="1.2" opacity="0.25"
        />
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1="120"
            y1={55 + i * 18}
            x2={70 - i * 4}
            y2={62 + i * 18}
            stroke="var(--pt-sage-700)"
            strokeWidth="1.2"
            opacity="0.18"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i + 9}
            x1="120"
            y1={55 + i * 18}
            x2={170 + i * 4}
            y2={62 + i * 18}
            stroke="var(--pt-sage-700)"
            strokeWidth="1.2"
            opacity="0.18"
          />
        ))}
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
        {/* Starch crystal pattern */}
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const r = 40 + (i % 3) * 22;
          return (
            <circle
              key={i}
              cx={120 + Math.cos(a) * r}
              cy={120 + Math.sin(a) * r}
              r={6 + (i % 4) * 3}
              fill="var(--pt-wheat-soft)"
              opacity={0.5 + (i % 3) * 0.2}
            />
          );
        })}
        <circle cx="120" cy="120" r="28" fill="var(--pt-wheat-soft)" />
        <circle cx="120" cy="120" r="12" fill="var(--pt-sage-700)" />
      </svg>
    </div>
  );
}