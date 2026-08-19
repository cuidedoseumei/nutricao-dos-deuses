import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.brand} — Nutrição vegetal, minerais e a sabedoria do yoga e do Ayurveda`,
  description: site.hero.subtitle,
  keywords: [
    "alimentação viva",
    "alimentação vegana",
    "nutrição vegetal",
    "plant based",
    "minerais dieta vegana",
    "vitamina B12 vegano",
    "vitalidade",
    "longevidade",
    "alimentação consciente",
    "yoga",
    "ayurveda",
    "alimentação sáttvica",
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
