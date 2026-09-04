"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";
import { PostCard } from "./PostCard";
import { useT } from "@/lib/i18n/useT";
import type { Post } from "@/lib/posts";

export function NewsListContent({ posts }: { posts: Post[] }) {
  const t = useT();

  return (
    <section
      id="tin-tuc"
      className="section"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 80% 0%, color-mix(in srgb, var(--pt-wheat-soft) 18%, transparent) 0%, transparent 100%), var(--pt-cream)",
      }}
      aria-label={t.news.eyebrow}
    >
      <RevealSection className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={t.news.eyebrow}
          align="center"
          title={t.news.title}
          description={t.news.description}
        />

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-[var(--pt-ink-soft)]">{t.news.empty}</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} readMore={t.news.readMore} />
            ))}
          </div>
        )}
      </RevealSection>
    </section>
  );
}
