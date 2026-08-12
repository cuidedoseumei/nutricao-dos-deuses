import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.brand} — Nutrição vegana com ciência e filosofia do yoga`,
  description: site.hero.subtitle,
  keywords: [
    "alimentação vegana",
    "nutrição vegana",
    "e-book vegano",
    "alimentação sáttvica",
    "yoga",
    "minerais dieta vegana",
    "vitamina B12 vegano",
  ],
  openGraph: {
    title: `${site.brand}`,
    description: site.hero.subtitle,
    url: siteUrl,
    siteName: site.brand,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand,
    description: site.hero.subtitle,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
