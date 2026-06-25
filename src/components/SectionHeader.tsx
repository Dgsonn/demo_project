"use client";

import { useReveal } from "@/hooks/useReveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

/**
 * SectionHeader — tiêu đề section nhất quán toàn trang.
 * Reveal khi scroll vào view, stagger eyebrow → title → description.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={align === "center" ? "text-center" : "text-left"}
      style={{ maxWidth: align === "center" ? 720 : undefined }}
    >
      <p
        className="eyebrow"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0s",
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="headline-lg mt-3"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          color: "var(--pt-sage-700)",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="lede mt-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
