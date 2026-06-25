/**
 * ProductTile — per R3 consensus field priority:
 * 1. Eyebrow (segment)
 * 2. Product name
 * 3. Spec highlight (protein pill badge) — most prominent
 * 4. Cert badges row (ISO 22000, HACCP, FDA) — visually prominent
 * 5. Application tagline
 * 6. Bullets (de-emphasized)
 * 7. CTA primary: "Yêu cầu mẫu"
 * 8. CTA secondary: "Tải TDS"
 *
 * Dark variant: white cert text on dark sage.
 */

import Link from "next/link";
import type { ReactNode } from "react";

type CertBadge = "ISO 22000" | "HACCP" | "FDA" | "VietGAP" | "SGS";

const CERT_DISPLAY: Record<CertBadge, { abbr: string; label: string }> = {
  "ISO 22000": { abbr: "ISO", label: "ISO 22000" },
  "HACCP":     { abbr: "HACCP", label: "HACCP" },
  "FDA":       { abbr: "FDA", label: "FDA" },
  "VietGAP":   { abbr: "VietGAP", label: "VietGAP" },
  "SGS":       { abbr: "SGS", label: "SGS" },
};

type Props = {
  href: string;
  eyebrow: string;
  title: string;
  /** e.g. "11% Protein" — shown as prominent pill badge */
  specHighlight?: string;
  /** Cert badges shown as icons row */
  certBadges?: CertBadge[];
  tagline: string;
  bullets: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  visual: ReactNode;
  dark?: boolean;
};

export function ProductTile({
  href,
  eyebrow,
  title,
  specHighlight,
  certBadges,
  tagline,
  bullets,
  ctaPrimary,
  ctaSecondary,
  visual,
  dark = false,
}: Props) {
  const certColor = dark ? "var(--pt-wheat-soft)" : "var(--pt-sage-700)";
  const textMuted = dark ? "var(--pt-wheat-soft)" : "var(--pt-ink-soft)";
  const accentColor = dark ? "var(--pt-sage-300)" : "var(--pt-sage-500)";

  return (
    <article
      className="pt-card relative overflow-hidden rounded-3xl group"
      style={{
        background: dark ? "var(--pt-sage-700)" : "var(--pt-cream-deep)",
        color: dark ? "var(--pt-cream)" : "var(--pt-sage-700)",
        minHeight: 560,
      }}
    >
      {/* Visual top — 60% */}
      <div className="pt-card-visual relative h-[58%] w-full overflow-hidden">
        {visual}
        <div
          className="absolute top-5 left-6 eyebrow"
          style={{ color: textMuted }}
        >
          {eyebrow}
        </div>
      </div>

      {/* Content — 40% */}
      <div className="relative px-12 lg:px-14 pt-10 pb-20">
        {/* 1. Product name */}
        <h3 className="headline-md">{title}</h3>

        {/* 2. Spec highlight pill — most prominent */}
        {specHighlight && (
          <div className="mt-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                background: dark ? "rgba(163,193,148,0.2)" : "color-mix(in srgb, var(--pt-sage-500) 15%, transparent)",
                color: accentColor,
                border: `1px solid ${dark ? "rgba(163,193,148,0.35)" : "rgba(93,138,77,0.25)"}`,
              }}
              aria-label={`Thông số: ${specHighlight}`}
            >
              {specHighlight}
            </span>
          </div>
        )}

        {/* 3. Cert badges row */}
        {certBadges && certBadges.length > 0 && (
          <div
            className="mt-3 flex flex-wrap gap-2"
            role="list"
            aria-label="Chứng nhận"
          >
            {certBadges.map((cert) => {
              const info = CERT_DISPLAY[cert];
              return (
                <span
                  key={cert}
                  role="listitem"
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium"
                  style={{
                    background: dark ? "rgba(163,193,148,0.15)" : "rgba(93,138,77,0.08)",
                    color: certColor,
                    border: `1px solid ${dark ? "rgba(232,212,168,0.3)" : "rgba(93,138,77,0.2)"}`,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: certColor }}
                    aria-hidden="true"
                  />
                  {info.abbr}
                </span>
              );
            })}
          </div>
        )}

        {/* 4. Tagline */}
        <p className="mt-3 text-base" style={{ color: textMuted }}>
          {tagline}
        </p>

        {/* 5. Bullets — de-emphasized */}
        <ul className="mt-4 space-y-1.5 text-sm" aria-label="Đặc tính sản phẩm">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span
                className="mt-2 inline-block w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: textMuted, opacity: 0.6 }}
                aria-hidden="true"
              />
              <span className="opacity-80">{b}</span>
            </li>
          ))}
        </ul>

        {/* 6+7. CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={href}
            className={dark ? "btn-light-primary" : "btn-primary"}
            aria-label={`${ctaPrimary} — ${title}`}
          >
            {ctaPrimary}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              style={{ marginLeft: 6 }}
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
          <Link
            href="/#lien-he"
            className={dark ? "btn-light-secondary" : "btn-secondary"}
            aria-label={`${ctaSecondary} — ${title}`}
          >
            {ctaSecondary}
          </Link>
        </div>
      </div>
    </article>
  );
}
