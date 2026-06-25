"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useReveal — trigger 1 lần khi element vào viewport.
 * Trả về { ref, visible } để gắn class khi visible.
 *
 * Dùng IntersectionObserver, threshold 0.15, unobserve sau lần đầu
 * (chỉ reveal 1 lần, không re-trigger khi scroll lên xuống).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — hiển thị ngay
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -80px 0px",
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, visible };
}
