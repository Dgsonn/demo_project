"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PtLogo } from "./PtLogo";
import { useLang } from "@/lib/i18n/LangContext";
import { useT } from "@/lib/i18n/useT";

const NAV = [
  { href: "/", key: "home" as const },
  { href: "san-pham", key: "products" as const, isDropdown: true },
  { href: "/san-pham/tinh-bot-san", key: "tinhBotSan" as const, parent: "products" },
  { href: "/san-pham/bot-bien-tinh", key: "botBienTinh" as const, parent: "products" },
  { href: "#chat-luong", key: "quality" as const },
  { href: "#lien-he", key: "contact" as const },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { lang, setLang } = useLang();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setDropdownOpen(false);
      closeTimer.current = null;
    }, 150);
  };

  const mainNav = NAV.filter((item) => !item.parent);
  const productItems = NAV.filter((item) => item.parent === "products");

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--pt-bg) 88%, transparent)"
          : "color-mix(in srgb, var(--pt-bg) 65%, transparent)",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
        borderBottom: scrolled
          ? "1px solid var(--pt-line)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Phúc Thịnh Flour — Trang chủ" className="flex items-center gap-2.5 header-logo-pulse">
          <span data-pt-header-logo className="flex items-center">
            <PtLogo variant="icon" height={32} />
          </span>
          <span className="hidden sm:flex flex-col" style={{ lineHeight: 1.05 }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: 17,
                letterSpacing: "-0.01em",
                color: "var(--pt-sage-700)",
                fontFamily: "var(--font-be-vietnam), system-ui, sans-serif",
              }}
            >
              {t.header.brandName}
              <span style={{ color: "var(--pt-wheat-soft)" }}>.</span>
            </span>
            <span
              style={{
                fontSize: 9.5,
                fontWeight: 600,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--pt-sage-500)",
                marginTop: 1,
              }}
            >
              {t.header.brandTag}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative py-6 -my-6 px-6 -mx-6"
              onMouseEnter={() => item.isDropdown && openDropdown()}
              onMouseLeave={() => item.isDropdown && scheduleCloseDropdown()}
            >
              {item.isDropdown ? (
                <>
                  <button
                    className="pt-nav-link text-sm font-medium text-[var(--pt-ink)] transition-colors cursor-pointer"
                  >
                    {t.nav[item.key]}
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-0.5 min-w-[180px] bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-[var(--pt-line)] py-2"
                      style={{ animation: "dropdown-fade-in 0.2s ease-out" }}
                      onMouseEnter={openDropdown}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      {productItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-[var(--pt-ink)] hover:bg-[var(--pt-sage-50)] hover:text-[var(--pt-sage-700)] transition-colors nav-dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {t.nav[subItem.key]}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="pt-nav-link text-sm font-medium text-[var(--pt-ink)] transition-colors"
                >
                  {t.nav[item.key]}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switch */}
          <div
            className="flex items-center rounded-full p-0.5 text-xs font-semibold"
            style={{ border: "1px solid var(--pt-line)" }}
            role="group"
            aria-label="Chọn ngôn ngữ / Language"
          >
            <button
              type="button"
              onClick={() => setLang("vi")}
              aria-pressed={lang === "vi"}
              suppressHydrationWarning
              className="px-2 py-1 rounded-full transition-colors"
              style={{
                background: lang === "vi" ? "var(--pt-sage-500)" : "transparent",
                color: lang === "vi" ? "white" : "var(--pt-ink-soft)",
              }}
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              suppressHydrationWarning
              className="px-2 py-1 rounded-full transition-colors"
              style={{
                background: lang === "en" ? "var(--pt-sage-500)" : "transparent",
                color: lang === "en" ? "white" : "var(--pt-ink-soft)",
              }}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("zh")}
              aria-pressed={lang === "zh"}
              suppressHydrationWarning
              className="px-2 py-1 rounded-full transition-colors"
              style={{
                background: lang === "zh" ? "var(--pt-sage-500)" : "transparent",
                color: lang === "zh" ? "white" : "var(--pt-ink-soft)",
              }}
            >
              中文
            </button>
          </div>

          <Link
            href="#yeu-cau-mau"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-sm"
          >
            {t.nav.requestSample}
          </Link>
        </div>
      </div>
    </header>
  );
}
