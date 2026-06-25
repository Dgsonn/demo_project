/**
 * not-found.tsx — Custom 404 page
 *
 * Displays a branded 404 page when a route is not found.
 * Provides navigation back to home and contact options.
 *
 * Per R3 consensus: branded 404 with navigation back.
 */
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Trang không tìm thấy",
  description: "Trang bạn đang tìm kiếm không tồn tại.",
};

export default function NotFound() {
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
          404 — Không tìm thấy
        </p>

        {/* Heading */}
        <h1
          className="headline-lg mb-4"
          style={{ color: "var(--pt-sage-700)" }}
        >
          Trang này không tồn tại
        </h1>

        {/* Description */}
        <p
          className="lede mb-8"
          style={{ color: "var(--pt-ink)" }}
        >
          Có thể liên kết đã hết hạn hoặc bạn đã nhập sai địa chỉ.
          Hãy quay về trang chủ hoặc liên hệ với chúng tôi.
        </p>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Quay về trang chủ
          </Link>
          <Link href="/#lien-he" className="btn-secondary">
            Liên hệ hỗ trợ
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
            Hoặc truy cập:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/"
              className="hover:underline"
              style={{ color: "var(--pt-sage-600)" }}
            >
              Trang chủ
            </Link>
            <Link
              href="/san-pham/bot-mi"
              className="hover:underline"
              style={{ color: "var(--pt-sage-600)" }}
            >
              Bột mì Phúc Thịnh
            </Link>
            <Link
              href="/san-pham/bot-bien-tinh"
              className="hover:underline"
              style={{ color: "var(--pt-sage-600)" }}
            >
              Bột biến tính
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
