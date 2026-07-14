"use client";

import { useLang } from "./LangContext";
import { dictionary } from "./dictionary";

/** useT — trả về dictionary theo ngôn ngữ hiện tại */
export function useT() {
  const { lang } = useLang();
  return dictionary[lang];
}
