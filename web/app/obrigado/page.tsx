import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Obrigado — ${site.brand}`,
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-forest px-5 text-center text-sand">
      <div className="max-w-xl">
        <div
          aria-hidden
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-leaf text-3xl text-white"
        >
          ✓
        </div>
        <h1 className="font-serif text-3xl font-bold text-gold sm:text-4xl">
          {site.obrigado.title}
        </h1>
        <p className="mt-4 text-lg text-sand/85">{site.obrigado.text}</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-sand px-6 py-3 font-semibold text-forest transition-transform hover:-translate-y-0.5"
        >
          {site.obrigado.cta}
        </Link>
      </div>
    </main>
  );
}
