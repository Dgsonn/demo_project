"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * CinematicLoader v8 — "Cây sắn Việt" (From a Vietnamese Cassava)
 *
 * Narrative (once per session, first visit only):
 *   1. A seed sprouts and grows into a cassava plant.
 *   2. A single grain detaches and falls like a droplet onto a calm lake.
 *   3. Concentric ripples spread; the company logo surfaces from the centre.
 *   4. The logo flies to the top-left and LANDS exactly on the real header
 *      logo — a seamless hand-off from loading screen into the landing page.
 */

const HEADER_LOGO_SRC = "/pt-header-logo.svg";

// Mark size while it floats centre-stage (header forces aspect ≈ 1.4)
const MARK_H = 92;
const MARK_W = Math.round(MARK_H * 1.4);

// Timeline (ms) — tunable. Earlier beats are driven by CSS animation delays.
const FLIGHT_START = 4200; // logo leaves centre for the header corner
const FLIGHT_DUR = 900;
const EXIT_AT = 5100; // loader begins to fade as the logo lands (cross-dissolve)
const ROOT_FADE = 700;
const REDUCED_HOLD = 900;

// Wheat head kernels (viewBox 0 0 200 280) — staggered fill-in
const KERNELS: { cx: number; cy: number; rot: number }[] = [
  { cx: 92, cy: 116, rot: -20 },
  { cx: 108, cy: 110, rot: 20 },
  { cx: 92, cy: 100, rot: -20 },
  { cx: 108, cy: 94, rot: 20 },
  { cx: 93, cy: 84, rot: -18 },
  { cx: 107, cy: 78, rot: 18 },
  { cx: 100, cy: 68, rot: 0 },
];

export function CinematicLoader({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [reduced, setReduced] = useState(false);

  const stemRef = useRef<SVGPathElement | null>(null);
  const markRef = useRef<HTMLImageElement | null>(null);
  const wordRef = useRef<HTMLDivElement | null>(null);
  const tagRef = useRef<HTMLDivElement | null>(null);
  const timers = useRef<number[]>([]);
  const flownRef = useRef(false);
  const finishedRef = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    clearTimers();
    setExiting(true);
    window.setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("hero-go");
      setVisible(false);
      onDone?.();
    }, ROOT_FADE);
  }, [clearTimers, onDone]);

  const flyToHeader = useCallback(() => {
    if (flownRef.current) return;
    flownRef.current = true;

    // hand-off: hero rises in NOW, in sync with the logo arriving
    document.documentElement.classList.add("hero-go");
    wordRef.current?.classList.add("is-leaving");
    tagRef.current?.classList.add("is-leaving");

    const mark = markRef.current;
    const target = document.querySelector<HTMLElement>("[data-pt-header-logo]");
    if (!mark || !target || typeof mark.animate !== "function") return;

    const from = mark.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const s = to.height / from.height;

    mark.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)", opacity: 1, offset: 0 },
        {
          transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${s})`,
          opacity: 1,
          offset: 0.82,
        },
        {
          transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${s})`,
          opacity: 0,
          offset: 1,
        },
      ],
      { duration: FLIGHT_DUR, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" },
    );
  }, []);

  const skip = useCallback(() => {
    clearTimers();
    flyToHeader();
    timers.current.push(window.setTimeout(finish, FLIGHT_DUR + 60));
  }, [clearTimers, finish, flyToHeader]);

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

    // Beat 1 — draw the stem along its real length (organic line-draw)
    const stem = stemRef.current;
    if (stem) {
      const len = stem.getTotalLength();
      stem.style.strokeDasharray = `${len}`;
      stem.style.strokeDashoffset = `${len}`;
      // force reflow so the transition runs from the offset
      void stem.getBoundingClientRect();
      stem.style.transition = "stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s";
      stem.style.strokeDashoffset = "0";
    }

    timers.current.push(window.setTimeout(flyToHeader, FLIGHT_START));
    timers.current.push(window.setTimeout(finish, EXIT_AT));

    return () => {
      clearTimers();
      document.body.style.overflow = "";
      document.documentElement.classList.remove("hero-go");
    };
  }, [clearTimers, finish, flyToHeader]);

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
          <div className="ptl-static-word">Phúc Thịnh Flour</div>
        </>
      ) : (
        <>
          {/* Beat 1 — cassava plant */}
          <svg
            className="ptl-plant"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMax meet"
            aria-hidden="true"
          >
            {/* Shadow */}
            <ellipse className="ptl-shadow" cx="100" cy="185" rx="30" ry="5" />

            {/* Single tuber */}
            <path className="ptl-tuber" d="M100,120 C115,125 125,145 110,180 C105,190 95,190 90,180 C75,145 85,125 100,120 Z" />
            <path className="ptl-tuber-line" d="M92,140 Q100,143 108,140" />
            <path className="ptl-tuber-line" d="M90,160 Q100,163 110,160" />

            {/* Stem */}
            <line className="ptl-stem" x1="100" y1="120" x2="100" y2="85" />

            {/* Leaf cluster */}
            <g transform="translate(100, 85)">
              <g transform="rotate(0)">
                <path className="ptl-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" />
              </g>
              <g transform="rotate(45)">
                <path className="ptl-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" />
              </g>
              <g transform="rotate(90)">
                <path className="ptl-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" />
              </g>
              <g transform="rotate(-45)">
                <path className="ptl-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" />
              </g>
              <g transform="rotate(-90)">
                <path className="ptl-leaf" d="M0,0 C-10,-10 -12,-35 0,-42 C12,-35 10,-10 0,0 Z" />
              </g>
              <circle className="ptl-leaf-center" cx="0" cy="0" r="3" />
            </g>
          </svg>

          {/* Beat 3 — logo surfaces */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={markRef}
            className="ptl-mark"
            src={HEADER_LOGO_SRC}
            alt=""
            aria-hidden="true"
            height={MARK_H}
            width={MARK_W}
            style={{ height: MARK_H, width: MARK_W }}
          />
          <div className="ptl-word" ref={wordRef}>
            Phúc Thịnh Flour
          </div>
          <div className="ptl-tag" ref={tagRef}>
            Từ củ sắn Việt, đến tay bạn
          </div>

          <button type="button" className="ptl-skip" onClick={skip}>
            Bỏ qua
          </button>
        </>
      )}

      <span className="sr-only" aria-live="polite">
        Đang tải nội dung…
      </span>
    </div>
  );
}
