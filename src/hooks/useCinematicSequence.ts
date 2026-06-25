"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Phase types for the cinematic loader sequence.
 */
export type CinematicPhase = "entering" | "bloom" | "exit" | "done";

/**
 * Configuration options for the cinematic sequence.
 */
export interface UseCinematicSequenceOptions {
  /**
   * Delay before bloom phase starts (ms). Default: 500
   */
  bloomDelay?: number;
  /**
   * Delay before exit phase starts (ms). Default: 2500
   */
  exitDelay?: number;
  /**
   * Total duration before done phase (ms). Default: 3200
   */
  totalDuration?: number;
  /**
   * Reduced motion delay multiplier. Default: 0.1
   */
  reducedMotionMultiplier?: number;
  /**
   * Whether to reset scroll position on mount. Default: true
   */
  resetScroll?: boolean;
  /**
   * Focus target when done. Default: "main"
   */
  focusTarget?: string;
  /**
   * Announcement text for screen readers. Default: "Nội dung đã sẵn sàng."
   */
  announcementText?: string;
}

/**
 * Default options for the cinematic sequence.
 */
const DEFAULT_OPTIONS: Required<UseCinematicSequenceOptions> = {
  bloomDelay: 500,
  exitDelay: 2500,
  totalDuration: 3200,
  reducedMotionMultiplier: 0.1,
  resetScroll: true,
  focusTarget: "main",
  announcementText: "Nội dung đã sẵn sàng.",
};

/**
 * Result returned by useCinematicSequence.
 */
export interface UseCinematicSequenceReturn {
  /**
   * Current phase of the animation.
   */
  phase: CinematicPhase;
  /**
   * Whether reduced motion is preferred.
   */
  reducedMotion: boolean;
  /**
   * Ref to the stalk SVG path element for animation.
   */
  stalkRef: React.RefObject<SVGPathElement | null>;
  /**
   * Whether bloom animation should be active.
   */
  isBloom: boolean;
  /**
   * Whether exit animation should be active.
   */
  isExit: boolean;
  /**
   * Manually skip to done phase.
   */
  skipToDone: () => void;
}

/**
 * useCinematicSequence — separates animation logic from CinematicLoader.
 *
 * Handles:
 * - Phase state management (entering → bloom → exit → done)
 * - Reduced motion detection and handling
 * - Scroll reset on mount
 * - Focus management when done
 * - Accessibility announcements
 * - Wheat stalk SVG path animation setup
 *
 * Per R3 consensus:
 * - Uses CSS keyframes for animations (no Framer Motion/GSAP)
 * - Respects prefers-reduced-motion
 * - Announces content ready via aria-live
 * - Moves focus to main content on exit
 */
export function useCinematicSequence(
  options: UseCinematicSequenceOptions = {}
): UseCinematicSequenceReturn {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  const [phase, setPhase] = useState<CinematicPhase>("entering");
  const [reducedMotion, setReducedMotion] = useState(false);
  const stalkRef = useRef<SVGPathElement>(null);

  // Set up reduced motion listener
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Main animation timeline
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Reset scroll to top
    if (opts.resetScroll) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    if (reducedMotion) {
      // Reduced motion: fast timeline
      const multiplier = opts.reducedMotionMultiplier;
      timeouts.push(
        setTimeout(() => setPhase("bloom"), opts.bloomDelay * multiplier),
        setTimeout(
          () => setPhase("exit"),
          opts.bloomDelay * multiplier + opts.exitDelay * multiplier
        ),
        setTimeout(
          () => setPhase("done"),
          opts.totalDuration * multiplier
        )
      );
    } else {
      // Normal timeline from consensus
      timeouts.push(
        setTimeout(() => setPhase("bloom"), opts.bloomDelay),
        setTimeout(() => setPhase("exit"), opts.exitDelay),
        setTimeout(() => setPhase("done"), opts.totalDuration)
      );
    }

    // Set up wheat stalk animation
    const setupStalkAnimation = () => {
      if (stalkRef.current && !reducedMotion) {
        const pathLength = stalkRef.current.getTotalLength();
        stalkRef.current.style.strokeDasharray = `${pathLength}`;
        stalkRef.current.style.strokeDashoffset = `${pathLength}`;

        // Trigger reflow and animate
        void stalkRef.current.getBoundingClientRect();
        stalkRef.current.style.transition =
          "stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
        stalkRef.current.style.strokeDashoffset = "0";
      }
    };

    // Delay stalk setup slightly to ensure DOM is ready
    const stalkTimeout = setTimeout(setupStalkAnimation, 100);
    timeouts.push(stalkTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [
    reducedMotion,
    opts.bloomDelay,
    opts.exitDelay,
    opts.totalDuration,
    opts.reducedMotionMultiplier,
    opts.resetScroll,
  ]);

  // Focus and announcement when done
  useEffect(() => {
    if (phase === "done") {
      // Move focus to main content
      const focusTarget = document.querySelector(opts.focusTarget);
      if (focusTarget instanceof HTMLElement) {
        focusTarget.setAttribute("tabindex", "-1");
        focusTarget.focus();
      }

      // Announce content ready
      const announcer = document.createElement("div");
      announcer.setAttribute("aria-live", "polite");
      announcer.setAttribute("aria-atomic", "true");
      announcer.className = "sr-only";
      announcer.textContent = opts.announcementText;
      document.body.appendChild(announcer);
      setTimeout(() => announcer.remove(), 1000);
    }
  }, [phase, opts.focusTarget, opts.announcementText]);

  // Skip to done handler
  const skipToDone = useCallback(() => {
    setPhase("done");
  }, []);

  return {
    phase,
    reducedMotion,
    stalkRef,
    isBloom: phase === "bloom" || phase === "exit",
    isExit: phase === "exit",
    skipToDone,
  };
}
