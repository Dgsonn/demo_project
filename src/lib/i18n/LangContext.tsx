"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "vi" | "en" | "zh";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "pt-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "vi" || saved === "en" || saved === "zh") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
