/**
 * Separate root layout for /admin — deliberately does NOT render
 * SiteHeader/SiteFooter (the public marketing nav). This is an internal
 * dashboard, not a marketing page. See route-groups.md: a subtree with no
 * layout.js above it needs its own <html>/<body> root layout.
 */
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quản trị — Phúc Thịnh Flour",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream text-[var(--pt-ink)]">
        {children}
      </body>
    </html>
  );
}
