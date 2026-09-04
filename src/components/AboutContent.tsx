"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";
import { useT } from "@/lib/i18n/useT";

/**
 * Nội dung trang Giới thiệu.
 * Văn bản lấy từ dictionary (`about`) nên sửa nội dung chỉ cần sửa một chỗ,
 * và tự động áp dụng cho cả ba ngôn ngữ.
 */
export function AboutContent() {
  const t = useT();

  return (
    <>
      {/* Mở đầu */}
      <section
        id="gioi-thieu"
        className="section"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 0%, color-mix(in srgb, var(--pt-wheat-soft) 18%, transparent) 0%, transparent 100%), var(--pt-cream)",
        }}
        aria-label={t.about.eyebrow}
      >
        <RevealSection className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <SectionHeader
            eyebrow={t.about.eyebrow}
            align="center"
            title={t.about.title}
            description={t.about.lede}
          />
        </RevealSection>
      </section>

      {/* Lịch sử hình thành */}
      <section className="section" aria-label={t.about.historyEyebrow}>
        <RevealSection className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeader
            eyebrow={t.about.historyEyebrow}
            title={t.about.historyTitle}
          />

          <ol className="mt-12 flex flex-col gap-0">
            {t.about.milestones.map((m, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10"
              >
                {/* Cột mốc + đường nối */}
                <div className="flex flex-col items-center">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-full"
                    style={{ background: "var(--pt-sage-500)" }}
                    aria-hidden="true"
                  />
                  {i < t.about.milestones.length - 1 && (
                    <span
                      className="w-px flex-1"
                      style={{ background: "var(--pt-line)" }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="pb-10">
                  <p
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "var(--pt-wheat-soft)" }}
                  >
                    {m.year}
                  </p>
                  <h3
                    className="mt-1 text-xl font-semibold"
                    style={{ color: "var(--pt-sage-700)" }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[var(--pt-ink-soft)]">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </RevealSection>
      </section>

      {/* Tầm nhìn & Sứ mệnh */}
      <section className="section" style={{ background: "var(--pt-cream)" }} aria-label={t.about.visionLabel}>
        <RevealSection className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { label: t.about.visionLabel, text: t.about.visionText },
              { label: t.about.missionLabel, text: t.about.missionText },
            ].map((block) => (
              <div
                key={block.label}
                className="rounded-[var(--pt-radius-lg)] border p-8"
                style={{
                  background: "white",
                  borderColor: "var(--pt-line)",
                  boxShadow: "var(--pt-shadow-sm)",
                }}
              >
                <span
                  className="inline-block h-1 w-10 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--pt-wheat-soft), var(--pt-sage-400))",
                  }}
                  aria-hidden="true"
                />
                <h3
                  className="mt-5 text-2xl font-semibold"
                  style={{ color: "var(--pt-sage-700)" }}
                >
                  {block.label}
                </h3>
                <p className="mt-3 text-[var(--pt-ink-soft)]">{block.text}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="section" aria-label={t.about.valuesEyebrow}>
        <RevealSection className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeader
            eyebrow={t.about.valuesEyebrow}
            title={t.about.valuesTitle}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-[var(--pt-radius-lg)] border p-6"
                style={{ borderColor: "var(--pt-line)", background: "white" }}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    background: "var(--pt-sage-100)",
                    color: "var(--pt-sage-600)",
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 text-lg font-semibold"
                  style={{ color: "var(--pt-sage-700)" }}
                >
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--pt-ink-soft)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Sơ đồ tổ chức */}
      <section className="section" style={{ background: "var(--pt-cream)" }} aria-label={t.about.orgEyebrow}>
        <RevealSection className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeader
            eyebrow={t.about.orgEyebrow}
            title={t.about.orgTitle}
            description={t.about.orgNote}
          />

          <div className="mt-12 flex flex-col items-center">
            {/* Cấp cao nhất */}
            <div
              className="rounded-[var(--pt-radius-md)] px-8 py-4 text-center font-semibold text-white"
              style={{ background: "var(--pt-sage-600)" }}
            >
              {t.about.orgTop}
            </div>

            {/* Đường nối dọc */}
            <span
              className="h-8 w-px"
              style={{ background: "var(--pt-line)" }}
              aria-hidden="true"
            />

            {/* Các phòng ban */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.about.orgUnits.map((u) => (
                <div
                  key={u.title}
                  className="rounded-[var(--pt-radius-md)] border p-5 text-center"
                  style={{ background: "white", borderColor: "var(--pt-line)" }}
                >
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--pt-sage-700)" }}
                  >
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--pt-ink-soft)]">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* CTA */}
      <section className="section" aria-label={t.about.ctaTitle}>
        <RevealSection className="mx-auto max-w-3xl px-6 text-center">
          <h2
            className="headline-lg"
            style={{ color: "var(--pt-sage-700)" }}
          >
            {t.about.ctaTitle}
          </h2>
          <p className="lede mt-4">{t.about.ctaText}</p>
          <Link href="/#yeu-cau-mau" className="btn-primary mt-8 inline-flex">
            {t.about.ctaButton}
          </Link>
        </RevealSection>
      </section>
    </>
  );
}
