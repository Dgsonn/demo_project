import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductHero } from "@/components/landing/ProductHero";
import { FeatureRow } from "@/components/landing/FeatureRow";
import { SpecTable } from "@/components/landing/SpecTable";
import { ApplicationRow } from "@/components/landing/ApplicationRow";
import { ContactCTA } from "@/components/ContactCTA";
import { PRODUCTS, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.tagline,
  };
}

export default async function ProductLanding({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <>
      <ProductHero product={p} />

      {/* 3 đặc tính nổi bật */}
      <section className="section relative overflow-hidden" style={{ background: "#3a5430" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="absolute" style={{ width: "clamp(450px, 40vw, 750px)", height: "auto", right: "-6%", top: "-15%", opacity: 0.06, transform: "rotate(-15deg) scaleX(-1)" }}>
            <defs><path id="ft-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#e8d4a8" stroke="#d4b878" strokeWidth="0.5" /></defs>
            <ellipse cx="100" cy="185" rx="30" ry="5" fill="#d4b878" />
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#c9a868" stroke="#b89848" strokeWidth="1.5" />
            <path d="M92,140 Q100,143 108,140" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
            <path d="M90,160 Q100,163 110,160" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
            <path d="M100,120 L100,85" stroke="#a8c4a0" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#ft-leaf" transform="rotate(0)" /><use href="#ft-leaf" transform="rotate(45)" /><use href="#ft-leaf" transform="rotate(90)" /><use href="#ft-leaf" transform="rotate(-45)" /><use href="#ft-leaf" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#d4b878" />
            </g>
          </svg>
          <svg viewBox="0 0 200 200" className="absolute hidden md:block" style={{ width: "clamp(300px, 25vw, 500px)", height: "auto", left: "-4%", bottom: "-10%", opacity: 0.04, transform: "rotate(20deg)" }}>
            <defs><path id="ft-leaf2" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#e8d4a8" stroke="#d4b878" strokeWidth="0.5" /></defs>
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#c9a868" stroke="#b89848" strokeWidth="1.5" />
            <path d="M100,120 L100,85" stroke="#a8c4a0" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#ft-leaf2" transform="rotate(0)" /><use href="#ft-leaf2" transform="rotate(45)" /><use href="#ft-leaf2" transform="rotate(90)" /><use href="#ft-leaf2" transform="rotate(-45)" /><use href="#ft-leaf2" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#d4b878" />
            </g>
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#a8c4a0" }}>Đặc tính nổi bật</p>
            <h2 className="headline-lg mt-3" style={{ color: "var(--pt-cream)" }}>
              {p.featuresTitle}
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.features.map((f, i) => (
              <FeatureRow key={i} index={i + 1} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Ứng dụng */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 30% 20%, var(--pt-cream) 0%, var(--pt-cream) 40%, var(--pt-cream-deep) 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="absolute" style={{ width: "clamp(500px, 42vw, 800px)", height: "auto", left: "-10%", top: "5%", opacity: 0.08, transform: "rotate(10deg)" }}>
            <defs><path id="app-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#388e3c" stroke="#2e7d32" strokeWidth="0.5" /></defs>
            <ellipse cx="100" cy="185" rx="30" ry="5" fill="#eee" />
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
            <path d="M92,140 Q100,143 108,140" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" />
            <path d="M90,160 Q100,163 110,160" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" />
            <path d="M100,120 L100,85" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#app-leaf" transform="rotate(0)" /><use href="#app-leaf" transform="rotate(45)" /><use href="#app-leaf" transform="rotate(90)" /><use href="#app-leaf" transform="rotate(-45)" /><use href="#app-leaf" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#2e7d32" />
            </g>
          </svg>
          <svg viewBox="0 0 200 200" className="absolute hidden lg:block" style={{ width: "clamp(400px, 35vw, 650px)", height: "auto", right: "-8%", bottom: "-12%", opacity: 0.06, transform: "rotate(-18deg) scaleX(-1)" }}>
            <defs><path id="app-leaf2" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#388e3c" stroke="#2e7d32" strokeWidth="0.5" /></defs>
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
            <path d="M100,120 L100,85" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#app-leaf2" transform="rotate(0)" /><use href="#app-leaf2" transform="rotate(45)" /><use href="#app-leaf2" transform="rotate(90)" /><use href="#app-leaf2" transform="rotate(-45)" /><use href="#app-leaf2" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#2e7d32" />
            </g>
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Ứng dụng</p>
            <h2 className="headline-lg mt-3" style={{ color: "var(--pt-sage-700)" }}>
              {p.appsTitle}
            </h2>
          </div>
          <div className="mt-10 space-y-6">
            {p.applications.map((a, i) => (
              <ApplicationRow key={i} {...a} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Bảng thông số */}
      <section className="section relative overflow-hidden" style={{ background: "#3a5430" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="absolute" style={{ width: "clamp(500px, 45vw, 850px)", height: "auto", left: "-8%", top: "-20%", opacity: 0.05, transform: "rotate(12deg)" }}>
            <defs><path id="sp-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#e8d4a8" stroke="#d4b878" strokeWidth="0.5" /></defs>
            <ellipse cx="100" cy="185" rx="30" ry="5" fill="#d4b878" />
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#c9a868" stroke="#b89848" strokeWidth="1.5" />
            <path d="M92,140 Q100,143 108,140" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
            <path d="M90,160 Q100,163 110,160" fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
            <path d="M100,120 L100,85" stroke="#a8c4a0" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#sp-leaf" transform="rotate(0)" /><use href="#sp-leaf" transform="rotate(45)" /><use href="#sp-leaf" transform="rotate(90)" /><use href="#sp-leaf" transform="rotate(-45)" /><use href="#sp-leaf" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#d4b878" />
            </g>
          </svg>
          <svg viewBox="0 0 200 200" className="absolute hidden md:block" style={{ width: "clamp(350px, 30vw, 600px)", height: "auto", right: "-6%", bottom: "-8%", opacity: 0.04, transform: "rotate(-25deg) scaleX(-1)" }}>
            <defs><path id="sp-leaf2" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" fill="#e8d4a8" stroke="#d4b878" strokeWidth="0.5" /></defs>
            <path d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" fill="#c9a868" stroke="#b89848" strokeWidth="1.5" />
            <path d="M100,120 L100,85" stroke="#a8c4a0" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(100, 85)">
              <use href="#sp-leaf2" transform="rotate(0)" /><use href="#sp-leaf2" transform="rotate(45)" /><use href="#sp-leaf2" transform="rotate(90)" /><use href="#sp-leaf2" transform="rotate(-45)" /><use href="#sp-leaf2" transform="rotate(-90)" />
              <circle cx="0" cy="0" r="3" fill="#d4b878" />
            </g>
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#a8c4a0" }}>Thông số kỹ thuật</p>
            <h2 className="headline-lg mt-3" style={{ color: "var(--pt-cream)" }}>
              Tiêu chuẩn chất lượng
            </h2>
            <p className="lede mt-3" style={{ color: "#c8ddc5" }}>
              Thông số mang tính tham khảo. Để nhận TDS đầy đủ và COA theo lô,
              vui lòng liên hệ đội ngũ B2B.
            </p>
          </div>
          <div className="mt-8">
            <SpecTable rows={p.specs} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#lien-he" className="btn-light-primary">
              Yêu cầu báo giá & TDS
            </Link>
            <Link href="/#lien-he" className="btn-light-secondary">
              Tìm đại lý
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
