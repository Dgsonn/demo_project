import Link from "next/link";
import type { Post } from "@/lib/posts";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("vi-VN", { dateStyle: "long" }).format(new Date(iso));
}

export function PostCard({ post, readMore }: { post: Post; readMore: string }) {
  return (
    <article
      className="pt-card group flex flex-col overflow-hidden rounded-[var(--pt-radius-lg)] border"
      style={{
        borderColor: "var(--pt-line)",
        background: "white",
        boxShadow: "var(--pt-shadow-sm)",
      }}
    >
      <div
        className="pt-card-visual flex h-40 items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--pt-sage-600) 0%, var(--pt-sage-700) 100%)",
        }}
        aria-hidden="true"
      >
        <span
          className="text-4xl font-bold"
          style={{ color: "var(--pt-wheat-soft)", fontFamily: "var(--font-playfair)" }}
        >
          PT
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs">
          <span
            className="rounded-full px-2.5 py-0.5 font-semibold"
            style={{
              background: "color-mix(in srgb, var(--pt-sage-500) 12%, transparent)",
              color: "var(--pt-sage-600)",
            }}
          >
            {post.category}
          </span>
          <time dateTime={post.date} className="text-[var(--pt-ink-soft)]">
            {formatDate(post.date)}
          </time>
        </div>

        <h3 className="mt-3 text-lg font-semibold" style={{ color: "var(--pt-sage-700)" }}>
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-[var(--pt-ink-soft)]">{post.excerpt}</p>

        <Link
          href={`/tin-tuc/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: "var(--pt-sage-600)" }}
        >
          {readMore}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
    </article>
  );
}
