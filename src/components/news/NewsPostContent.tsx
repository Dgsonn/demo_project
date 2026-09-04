"use client";

import Link from "next/link";
import { RevealSection } from "@/components/RevealSection";
import { useT } from "@/lib/i18n/useT";
import type { Post } from "@/lib/posts";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("vi-VN", { dateStyle: "long" }).format(new Date(iso));
}

export function NewsPostContent({ post }: { post: Post }) {
  const t = useT();

  return (
    <>
      <section className="section-tight" style={{ background: "var(--pt-cream)" }}>
        <RevealSection className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            href="/#tin-tuc"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--pt-sage-600)" }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.news.backToList}
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs">
            <span
              className="rounded-full px-2.5 py-0.5 font-semibold"
              style={{
                background: "color-mix(in srgb, var(--pt-sage-500) 12%, transparent)",
                color: "var(--pt-sage-600)",
              }}
            >
              {post.category}
            </span>
            <span className="text-[var(--pt-ink-soft)]">
              {t.news.publishedOn} <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
          </div>

          <h1 className="headline-lg mt-4" style={{ color: "var(--pt-sage-700)" }}>
            {post.title}
          </h1>
          <p className="lede mt-4">{post.excerpt}</p>
        </RevealSection>
      </section>

      <section className="section-tight">
        <RevealSection className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-[var(--pt-ink)]">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>
      </section>

      <section className="section" style={{ background: "var(--pt-cream)" }}>
        <RevealSection className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="headline-md" style={{ color: "var(--pt-sage-700)" }}>
            {t.news.ctaTitle}
          </h2>
          <p className="lede mt-3">{t.news.ctaText}</p>
          <Link href="/#yeu-cau-mau" className="btn-primary mt-8 inline-flex">
            {t.news.ctaButton}
          </Link>
        </RevealSection>
      </section>
    </>
  );
}
