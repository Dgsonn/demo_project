"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n/useT";

/**
 * CinematicLoader v10 — "Logo keyhole" reveal
 * (idea borrowed from telec.com.vn's letter-mask splash)
 *
 * Narrative (once per session, first visit only):
 *   1. A small hexagon-shaped window — masked to the real logo silhouette —
 *      opens at the centre of the screen, filled with a brand-color gradient.
 *   2. The window grows until it fills the viewport; wordmark and tagline
 *      fade in over it.
 *   3. The whole loader cross-dissolves away, revealing the real header/hero
 *      already in place underneath — no flying element, no target math.
 */

const HEADER_LOGO_SRC = "/pt-header-logo.svg";

// Logo mark size — square box, same as <HexMark size={220} /> on the
// homepage hero (also used for the reduced-motion static splash).
const MARK_H = 220;
const MARK_W = 220;

// Timeline (ms) — tunable. Earlier beats are driven by CSS animation delays.
const EXIT_AT = 2700; // loader begins to cross-dissolve into the real page
const ROOT_FADE = 700;
const REDUCED_HOLD = 900;

export function CinematicLoader({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [reduced, setReduced] = useState(false);
  const t = useT();

  const timers = useRef<number[]>([]);
  const finishedRef = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    clearTimers();
    // hand-off: hero rises in NOW, cross-dissolving under the fading loader
    document.documentElement.classList.add("hero-go");
    setExiting(true);
    window.setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("hero-go");
      setVisible(false);
      onDone?.();
    }, ROOT_FADE);
  }, [clearTimers, onDone]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReduced = mq.matches;
    setReduced(isReduced);

    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    if (isReduced) {
      timers.current.push(window.setTimeout(finish, REDUCED_HOLD));
      return () => {
        clearTimers();
        document.body.style.overflow = "";
        document.documentElement.classList.remove("hero-go");
      };
    }

    timers.current.push(window.setTimeout(finish, EXIT_AT));

    return () => {
      clearTimers();
      document.body.style.overflow = "";
      document.documentElement.classList.remove("hero-go");
    };
  }, [clearTimers, finish]);

  if (!visible) return null;

  return (
    <div
      className={`ptl-root${exiting ? " is-exiting" : ""}`}
      role="presentation"
    >
      {/* film grain — same technique as the hero, bridges loader → page */}
      <div
        className="ptl-grain"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {reduced ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ptl-static-mark"
            src={HEADER_LOGO_SRC}
            alt=""
            aria-hidden="true"
            height={MARK_H}
            width={MARK_W}
          />
          <div className="ptl-static-word">{t.header.brandName} {t.header.brandTag}</div>
        </>
      ) : (
        <>
          {/* Ambient glow behind the keyhole, brightest while it's still small */}
          <div className="ptl-reveal-glow" aria-hidden="true" />

          {/* Beat 1 — logo-shaped keyhole opens and grows to fill the screen */}
          <div className="ptl-reveal-wrap" aria-hidden="true">
            <div className="ptl-reveal-fill" />
            <div className="ptl-reveal-shine" />
          </div>

          {/* Drifting stars over the reveal */}
          {Array.from({ length: 10 }).map((_, i) => {
            const left = 12 + ((i * 37) % 76);
            const top = 12 + ((i * 53) % 76);
            return (
              <span
                key={i}
                className="ptl-reveal-star"
                aria-hidden="true"
                style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${1.2 + i * 0.17}s` }}
              />
            );
          })}

          {/* Beat 2 — the real logo mark stamps in, centred over the reveal */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ptl-reveal-logo"
            src={HEADER_LOGO_SRC}
            alt=""
            aria-hidden="true"
            height={MARK_H}
            width={MARK_W}
            style={{ height: MARK_H, width: MARK_W }}
          />

          <div className="ptl-word">
            {t.header.brandName} {t.header.brandTag}
          </div>
          <div className="ptl-tag">
            {t.loader.tagline}
          </div>
        </>
      )}

      <span className="sr-only" aria-live="polite">
        {t.loader.loading}
      </span>
    </div>
  );
}
