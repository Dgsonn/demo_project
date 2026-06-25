"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PtLogo } from "./PtLogo";

const NAV = [
  { href: "/", label: "Trang chủ" },
  { href: "san-pham", label: "Sản phẩm", isDropdown: true },
  { href: "/san-pham/bot-mi", label: "Bột mì", parent: "Sản phẩm" },
  { href: "/san-pham/bot-bien-tinh", label: "Bột biến tính", parent: "Sản phẩm" },
  { href: "#chat-luong", label: "Chất lượng" },
  { href: "#lien-he", label: "Liên hệ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainNav = NAV.filter((item) => !item.parent);
  const productItems = NAV.filter((item) => item.parent === "Sản phẩm");

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
        <Link href="/" aria-label="Phúc Thịnh Flour — Trang chủ" className="flex items-center header-logo-pulse" data-pt-header-logo>
          <PtLogo variant="icon" height={32} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative py-6 -my-6 px-6 -mx-6"
              onMouseEnter={() => item.isDropdown && setDropdownOpen(true)}
              onMouseLeave={() => {
                if (item.isDropdown) {
                  setTimeout(() => setDropdownOpen(false), 100);
                }
              }}
            >
              {item.isDropdown ? (
                <>
                  <button
                    className="pt-nav-link text-sm font-medium text-[var(--pt-ink)] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-0.5 min-w-[180px] bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-[var(--pt-line)] py-2"
                      style={{ animation: "dropdown-fade-in 0.2s ease-out" }}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {productItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-[var(--pt-ink)] hover:bg-[var(--pt-sage-50)] hover:text-[var(--pt-sage-700)] transition-colors nav-dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subItem.label}
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
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#lien-he"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-sm"
          >
            Yêu cầu mẫu
          </Link>
        </div>
      </div>
    </header>
  );
}
