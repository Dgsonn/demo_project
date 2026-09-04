"use client";

import { useEffect } from "react";

/**
 * Next 16's Link does not scroll-into-view when a click only changes the
 * hash on the SAME route (pathname unchanged) — it just updates history.
 * Cross-route hash navigation (e.g. from /san-pham/x to /#tin-tuc) already
 * works natively, so this only steps in for the same-page case.
 */
export function AnchorScrollHandler() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a[href*='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const el = document.getElementById(url.hash.slice(1));
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", url.hash);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
