/**
 * error.tsx — App Router error boundary
 *
 * Catches client-side errors (500s) and displays a branded error page.
 * User can retry or navigate back to home.
 *
 * Per R3 consensus: branded error page with navigation.
 */
"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error for debugging
    console.error("Application error:", error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--pt-cream)" }}
    >
      <div className="text-center max-w-md">
        {/* Error icon */}
        <div className="mb-8">
          <svg
            viewBox="0 0 80 80"
            width="80"
            height="80"
            className="mx-auto"
            aria-hidden="true"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="color-mix(in srgb, var(--pt-sage-500) 10%, transparent)"
              stroke="var(--pt-sage-500)"
              strokeWidth="2"
            />
            <path
              d="M40 24v20M40 52v4"
              stroke="var(--pt-error)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Error code */}
        <p
          className="text-sm font-medium tracking-widest uppercase mb-3"
          style={{ color: "var(--pt-sage-500)" }}
        >
          Đã xảy ra lỗi
        </p>

        {/* Error message */}
        <h1
          className="headline-lg mb-4"
          style={{ color: "var(--pt-sage-700)" }}
        >
          Không thể tải trang này
        </h1>

        <p
          className="lede mb-8"
          style={{ color: "var(--pt-ink)" }}
        >
          Đã có lỗi không mong muốn xảy ra. Vui lòng thử lại hoặc quay về
          trang chủ.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Thử lại
          </button>
          <Link href="/" className="btn-secondary">
            Quay về trang chủ
          </Link>
        </div>

        {/* Support hint */}
        <p
          className="text-sm mt-8"
          style={{ color: "var(--pt-ink)", opacity: 0.6 }}
        >
          Nếu sự cố tiếp tục, vui lòng liên hệ hỗ trợ.
        </p>
      </div>
    </div>
  );
}
