import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductHero({ product }: { product: Product }) {
  const dark = product.slug === "bot-bien-tinh";
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "min(82svh, 720px)",
        background: product.hero.tint,
        color: dark ? "var(--pt-cream)" : "#3d4a3a",
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
            ? "radial-gradient(circle at 30% 50%, transparent 40%, rgba(45, 58, 43, 0.15) 100%)"
            : "radial-gradient(circle at 70% 50%, transparent 50%, rgba(69, 106, 57, 0.06) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-6 lg:pt-8 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left content */}
        <div className="text-left">
          <p
            className="pt-rise eyebrow"
            style={{ color: dark ? "var(--pt-sage-300)" : "#3d4a3a" }}
          >
            {dark ? "Dòng công nghiệp" : "Dòng chính"}
          </p>
          <h1 className="pt-rise text-display mt-4" style={{ maxWidth: "18ch", color: dark ? "var(--pt-cream)" : "#3d4a3a" }}>
            {product.name}
          </h1>
          <p
            className="pt-rise lede mt-5 max-w-lg"
            style={{ color: dark ? "var(--pt-sage-300)" : "#3d4a3a" }}
          >
            {product.tagline}
          </p>
          <p 
            className="pt-rise mt-6 max-w-lg text-base leading-relaxed" 
            style={{ color: dark ? "var(--pt-sage-300)" : "#3d4a3a" }}
          >
            {product.description}
          </p>
          <div className="pt-rise mt-9 flex flex-wrap gap-3">
            <Link
              href="/#lien-he"
              className={dark ? "btn-light-primary" : "btn-primary"}
            >
              Yêu cầu báo giá
            </Link>
            <Link
              href="/#chat-luong"
              className={dark ? "btn-light-secondary" : "btn-secondary"}
            >
              Xem chứng nhận
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex items-start justify-center lg:justify-end">
          <div 
            className="hero-right-appear"
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
  if (slug === "bot-mi") {
    return (
      <svg viewBox="0 0 400 400" width="100%">
        <defs>
          <radialGradient id="w" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--pt-cream)" />
            <stop offset="100%" stopColor="var(--pt-wheat-soft)" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="110" ry="160" fill="url(#w)" />
        <line x1="200" y1="60" x2="200" y2="340" stroke="var(--pt-sage-700)" strokeWidth="1.5" opacity="0.25" />
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1={75 + i * 18}
            x2={130 - i * 4}
            y2={85 + i * 18}
            stroke="var(--pt-sage-700)"
            strokeWidth="1.5"
            opacity="0.18"
          />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`r${i}`}
            x1="200"
            y1={75 + i * 18}
            x2={270 + i * 4}
            y2={85 + i * 18}
            stroke="var(--pt-sage-700)"
            strokeWidth="1.5"
            opacity="0.18"
          />
        ))}
      </svg>
    );
  }
  // bot-bien-tinh
  return (
    <svg viewBox="0 0 400 400" width="100%">
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const r = 60 + (i % 4) * 28;
        return (
          <circle
            key={i}
            cx={200 + Math.cos(a) * r}
            cy={200 + Math.sin(a) * r}
            r={8 + (i % 5) * 4}
            fill="var(--pt-wheat-soft)"
            opacity={0.4 + (i % 3) * 0.2}
          />
        );
      })}
      <circle cx="200" cy="200" r="48" fill="var(--pt-wheat-soft)" />
      <circle cx="200" cy="200" r="20" fill="var(--pt-sage-700)" />
    </svg>
  );
}
