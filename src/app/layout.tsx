/**
 * RootLayout — per R3 consensus:
 *  - CinematicLoader is NOT here — moved to CinematicLoaderWrapper (homepage only)
 *  - Viewport export with themeColor
 *  - openGraph.images and twitter card
 *  - metadataBase set to real URL
 */

import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5d8a4d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ptflour.example.com"),
  title: {
    default: "PT Flour — Bột mì & Bột biến tính chất lượng cao",
    template: "%s · PT Flour",
  },
  description:
    "Bột mì và bột biến tính đạt chuẩn ISO 22000, HACCP, FDA. Protein 11%, tinh khiết 99.9%. Xuất khẩu 40+ quốc gia. Phản hồi báo giá trong 24h.",
  openGraph: {
    title: "PT Flour — Bột mì & Bột biến tính",
    description:
      "Bột mì và bột biến tính đạt chuẩn ISO 22000, HACCP, FDA. Xuất khẩu 40+ quốc gia.",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PT Flour — Bột mì & Bột biến tính xuất khẩu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Flour — Bột mì & Bột biến tính",
    description:
      "Bột mì và bột biến tính đạt chuẩn ISO 22000, HACCP, FDA. Xuất khẩu 40+ quốc gia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-[var(--pt-ink)]">
        {/*
          Pre-paint gate: on a true first visit, hide the hero from frame 0 so
          the cinematic loader can cover it without a flash. Only READS the
          session flag (the loader sets it authoritatively). The 8s fallback
          guarantees the hero can never stay stuck hidden if the loader fails.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!sessionStorage.getItem('pt-cinematic-played')){var d=document.documentElement;d.classList.add('loader-playing');setTimeout(function(){d.classList.remove('loader-playing')},8000)}}catch(e){}",
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
