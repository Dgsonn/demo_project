"use client";

import Link from "next/link";
import { ProductHero } from "@/components/landing/ProductHero";
import { FeatureRow } from "@/components/landing/FeatureRow";
import { SpecTable } from "@/components/landing/SpecTable";
import { ApplicationRow } from "@/components/landing/ApplicationRow";
import { ContactCTA } from "@/components/ContactCTA";
import { RevealSection } from "@/components/RevealSection";
import { useLang } from "@/lib/i18n/LangContext";
import { useT } from "@/lib/i18n/useT";
import type { Product } from "@/lib/products";

export function ProductLandingClient({ product }: { product: Product }) {
  const { lang } = useLang();
  const t = useT();
  const p = product.content[lang];

  return (
    <>
      <ProductHero product={product} />

      {/* 3 đặc tính nổi bật */}
      <section className="section relative overflow-hidden" style={{ background: "#0a2540" }}>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <RevealSection className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#7fa8dd" }}>{t.productDetail.featuresLabel}</p>
            <h2 className="headline-lg mt-3" style={{ color: "var(--pt-cream)" }}>
              {p.featuresTitle}
            </h2>
          </RevealSection>
          <RevealSection
            variant="reveal-stagger"
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {p.features.map((f, i) => (
              <FeatureRow key={i} index={i + 1} {...f} />
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Ứng dụng */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 30% 20%, var(--pt-cream) 0%, var(--pt-cream) 40%, var(--pt-cream-deep) 100%)" }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <RevealSection className="max-w-2xl">
            <p className="eyebrow">{t.productDetail.applicationsLabel}</p>
            <h2 className="headline-lg mt-3" style={{ color: "var(--pt-sage-700)" }}>
              {p.appsTitle}
            </h2>
          </RevealSection>
          <div className="mt-10 space-y-6">
            {p.applications.map((a, i) => (
              <RevealSection key={i} variant={i % 2 === 1 ? "reveal-right" : "reveal-left"}>
                <ApplicationRow
                  title={a.title}
                  desc={a.desc}
                  tint={product.applicationTints[i]}
                  reverse={i % 2 === 1}
                />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bảng thông số */}
      <section className="section relative overflow-hidden" style={{ background: "#0a2540" }}>
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
          <RevealSection className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#7fa8dd" }}>{t.productDetail.specsLabel}</p>
            <h2 className="headline-lg mt-3" style={{ color: "var(--pt-cream)" }}>
              {t.productDetail.specsTitle}
            </h2>
            <p className="lede mt-3" style={{ color: "#c9dcf5" }}>
              {t.productDetail.specsNote}
            </p>
          </RevealSection>
          <RevealSection variant="reveal-scale" className="mt-8">
            <SpecTable rows={p.specs} />
          </RevealSection>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#yeu-cau-mau" className="btn-light-primary">
              {t.productDetail.ctaQuoteTds}
            </Link>
            <Link href="/#yeu-cau-mau" className="btn-light-secondary">
              {t.productDetail.ctaDealer}
            </Link>
          </div>
        </div>
      </section>

      <RevealSection>
        <ContactCTA />
      </RevealSection>
    </>
  );
}
