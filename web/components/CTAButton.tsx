"use client";

import { site } from "@/content/site";

type Props = {
  children: React.ReactNode;
  /** Identificador da origem do clique (para analytics/A-B) */
  location: string;
  variant?: "primary" | "light";
  className?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export default function CTAButton({
  children,
  location,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "bg-leaf text-white hover:bg-leaf-dark"
      : "bg-sand text-forest hover:bg-white";

  function handleClick() {
    // Dispara eventos de analytics se os pixels estiverem carregados.
    try {
      window.gtag?.("event", "cta_click", { location });
      window.fbq?.("track", "InitiateCheckout", { location });
    } catch {
      /* silencioso — analytics é best-effort */
    }
  }

  return (
    <a
      href={site.checkoutUrl}
      onClick={handleClick}
      data-cta={location}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
