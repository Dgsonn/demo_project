/**
 * CinematicLoaderWrapper — mounts CinematicLoader on the homepage `/` only.
 *
 *  - Dynamic import (ssr:false) keeps it out of the initial bundle and avoids
 *    hydration mismatch.
 *  - sessionStorage "pt-cinematic-played": the intro plays ONCE per browser
 *    session (survives F5, resets on a new tab/session).
 *  - When the loader plays, we add `loader-playing` to <html>. The hero CSS
 *    holds itself hidden only under that class, so RETURN visits (loader
 *    skipped) show the hero instantly. `onDone` removes the class once the
 *    hand-off completes.
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CinematicLoader = dynamic(
  () => import("./CinematicLoader").then((m) => m.CinematicLoader),
  { ssr: false },
);

export function CinematicLoaderWrapper() {
  const [shouldShow, setShouldShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const key = "pt-cinematic-played";
    try {
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        document.documentElement.classList.add("loader-playing");
        setShouldShow(true);
      }
    } catch {
      // private mode / storage blocked → still play, still gate the hero
      document.documentElement.classList.add("loader-playing");
      setShouldShow(true);
    }
    // safety net: never leave the hero stuck hidden if we unmount mid-intro
    return () => document.documentElement.classList.remove("loader-playing");
  }, []);

  const handleDone = useCallback(() => {
    document.documentElement.classList.remove("loader-playing");
  }, []);

  if (!mounted || !shouldShow) return null;

  return <CinematicLoader onDone={handleDone} />;
}
