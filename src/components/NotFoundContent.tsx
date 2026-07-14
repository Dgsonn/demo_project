"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/useT";

export function NotFoundContent() {
  const t = useT();

  return (
    <div
      className="min-h-[70vh] flex items-center justify-center px-6"
      style={{ background: "var(--pt-cream)" }}
    >
      <div className="text-center max-w-md">
        {/* 404 illustration */}
        <div className="mb-8">
          <svg
            viewBox="0 0 120 100"
            width="120"
            height="100"
            className="mx-auto"
            aria-hidden="true"
          >
            {/* Wheat stalk with question mark */}
            <path
              d="M60 95 Q60 80 60 60 Q60 40 60 20"
              stroke="var(--pt-wheat-soft)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 70 Q50 65 45 55 M60 70 Q70 65 75 55"
              stroke="var(--pt-wheat-soft)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 50 Q52 45 48 38 M60 50 Q68 45 72 38"
              stroke="var(--pt-wheat-soft)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Question mark */}
            <text
              x="60"
              y="18"
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
              fill="var(--pt-sage-500)"
            >
              ?
            </text>
          </svg>
        </div>

        {/* 404 label */}
        <p
          className="text-sm font-medium tracking-widest uppercase mb-3"
          style={{ color: "var(--pt-sage-500)" }}
        >
          {t.notFound.label}
        </p>

        {/* Heading */}
        <h1
          className="headline-lg mb-4"
          style={{ color: "var(--pt-sage-700)" }}
        >
          {t.notFound.title}
        </h1>

        {/* Description */}
        <p
          className="lede mb-8"
          style={{ color: "var(--pt-ink)" }}
        >
          {t.notFound.description}
        </p>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            {t.notFound.backHome}
          </Link>
          <Link href="/#lien-he" className="btn-secondary">
            {t.notFound.contactSupport}
          </Link>
        </div>

        {/* Quick links */}
        <div
          className="mt-10 pt-6"
          style={{ borderTop: "1px solid var(--pt-line)" }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: "var(--pt-ink)", opacity: 0.7 }}
          >
            {t.notFound.orVisit}
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "var(--pt-sage-600)" }}
            >
              {t.notFound.home}
            </Link>
            <Link
              href="/san-pham/tinh-bot-san"
              className="hover:underline"
              style={{ color: "var(--pt-sage-600)" }}
            >
              {t.nav.tinhBotSan}
            </Link>
            <Link
              href="/san-pham/bot-bien-tinh"
              className="hover:underline"
              style={{ color: "var(--pt-sage-600)" }}
            >
              {t.nav.botBienTinh}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
