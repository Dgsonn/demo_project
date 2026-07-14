"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/lib/i18n/useT";

const PARTNERS: { name: string; initials: string }[] = [
  { name: "SAIGON BAKERY Co.", initials: "SB" },
  { name: "VIETMART GROUP", initials: "VM" },
  { name: "MEKONG GRAIN", initials: "MG" },
  { name: "ĐÔNG Á BÁNH", initials: "ĐA" },
  { name: "HÀ NỘI FLOUR MILLS", initials: "HN" },
  { name: "AN PHÚ FOOD", initials: "AP" },
  { name: "TÂN BÌNH BISCUIT", initials: "TB" },
  { name: "CỬU LONG MILLS", initials: "CL" },
];

function PartnerLogo({ initials }: { initials: string }) {
  return (
    <svg
      width="52"
      height="28"
      viewBox="0 0 52 28"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <rect
        x="0.75"
        y="0.75"
        width="50.5"
        height="26.5"
        rx="4"
        fill="var(--pt-sage-100)"
        stroke="var(--pt-line)"
        strokeWidth="1.5"
      />
      <text
        x="26"
        y="19"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.08em"
        fill="var(--pt-ink-soft)"
        fontFamily="var(--font-be-vietnam), system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}

export function TrustStrip() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [isPaused, setIsPaused] = useState(false);
  const t = useT();

  return (
    <section
      ref={ref}
      aria-label="Đối tác tin cậy"
      style={{
        background: "white",
        borderTop: "1px solid var(--pt-line)",
        borderBottom: "1px solid var(--pt-line)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="flex items-center justify-between gap-4">
          <p
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--pt-ink-soft)" }}
          >
            {t.trustStrip.label}
          </p>

          {/* WCAG 2.2.2 SC 2.2.2 — manual pause/play control */}
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? t.trustStrip.play : t.trustStrip.pause}
            aria-pressed={isPaused}
            suppressHydrationWarning
            style={{
              flexShrink: 0,
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1.5px solid var(--pt-line)",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--pt-ink-soft)",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--pt-sage-500)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--pt-sage-700)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--pt-line)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--pt-ink-soft)";
            }}
          >
            {isPaused ? (
              /* Play icon */
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                <path d="M2 1.5l7 4.5-7 4.5V1.5z" />
              </svg>
            ) : (
              /* Pause icon */
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                <rect x="1" y="1" width="3" height="10" rx="1" />
                <rect x="6" y="1" width="3" height="10" rx="1" />
              </svg>
            )}
          </button>
        </div>

        <div
          className="mt-6 relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
          }}
        >
          <div
            className="pt-marquee flex gap-12 whitespace-nowrap"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-3 shrink-0"
                style={{ opacity: 0.75 }}
              >
                <PartnerLogo initials={partner.initials} />
                <span
                  style={{
                    color: "var(--pt-ink-soft)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                  }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
