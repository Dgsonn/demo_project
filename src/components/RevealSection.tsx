"use client";

import { useReveal } from "@/hooks/useReveal";

/**
 * RevealSection — scroll-triggered reveal wrapper.
 * variant chọn kiểu animation: reveal (mặc định, trượt lên), reveal-left,
 * reveal-right, reveal-scale — xem globals.css.
 */
export function RevealSection({
  children,
  className = "",
  style = {},
  variant = "reveal",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale" | "reveal-stagger";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
