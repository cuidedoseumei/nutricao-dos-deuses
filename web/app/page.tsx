import { site } from "@/content/site";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import EbookMockup from "@/components/EbookMockup";

export default function Home() {
  return (
    <main>
      {/* 1. HERO */}
      <header className="bg-forest text-sand">
        <div className="mx-auto grid w-full max-w-content items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-gold">
              {site.hero.eyebrow}
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              {site.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-sand/85">
              {site.hero.subtitle}
            </p>
            <div className="mt-8">
              <CTAButton location="hero">{site.hero.cta}</CTAButton>
            </div>
            <p className="mt-4 text-sm text-sand/70">{site.hero.reassurance}</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <EbookMockup className="w-56 drop-shadow-2xl sm:w-72" />
          </div>
        </div>
      </header>

      {/* 2. DOR */}
      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {site.dor.title}
          </h2>
          {site.dor.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-lg text-graphite/80">
              {p}
            </p>
          ))}
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {site.dor.pains.map((pain) => (
            <li
              key={pain}
              className="rounded-xl border border-graphite/10 bg-white px-5 py-4 text-graphite/90 shadow-sm"
            >
              {pain}
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. MECANISMO ÚNICO */}
      <Section tone="forest">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gold sm:text-4xl">
            {site.mecanismo.title}
          </h2>
          <p className="mt-5 text-lg text-sand/85">{site.mecanismo.lead}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.mecanismo.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <h3 className="font-serif text-2xl font-semibold text-gold">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sand/80">{pillar.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. O QUE VOCÊ VAI APRENDER */}
      <Section tone="white">
        <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl">
          {site.aprender.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.aprender.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-graphite/10 bg-sand p-6 shadow-sm"
            >
              <div
                aria-hidden
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-leaf/15 text-xl text-leaf"
              >
                ✦
              </div>
              <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-graphite/75">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PROVA / AUTORIDADE */}
      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {site.prova.title}
          </h2>
          <p className="mt-5 text-lg text-graphite/80">{site.prova.text}</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {site.prova.badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-leaf/30 bg-white px-4 py-2 text-sm font-medium text-forest"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6. AUTOR */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {site.autor.title}
          </h2>
          <p className="mt-5 text-lg text-graphite/80">{site.autor.text}</p>
        </div>
      </Section>

      {/* 7. OFERTA */}
      <Section tone="forest" id="oferta">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-bold text-gold sm:text-4xl">
            {site.oferta.title}
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl bg-white text-graphite shadow-2xl">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-graphite/10 p-8 md:border-b-0 md:border-r">
                <h3 className="font-serif text-2xl font-semibold">
                  {site.oferta.productName}
                </h3>
                <ul className="mt-4 space-y-3">
                  {site.oferta.productItems.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-leaf" aria-hidden>
                        ✓
                      </span>
                      <span className="text-graphite/80">{it}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mt-8 font-semibold text-forest">
                  {site.oferta.bonusTitle}
                </h4>
                <ul className="mt-3 space-y-3">
                  {site.oferta.bonus.map((b) => (
                    <li key={b.name} className="flex gap-3">
                      <span className="text-gold" aria-hidden>
                        ★
                      </span>
                      <span>
                        <span className="font-medium">{b.name}</span>
                        <span className="text-graphite/70"> — {b.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center bg-sand p-8 text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-leaf">
                  {site.oferta.priceLabel}
                </p>
                <p className="mt-2 text-lg text-graphite/50 line-through">
                  {site.oferta.priceAnchor}
                </p>
                <p className="font-serif text-6xl font-bold text-forest">
                  {site.oferta.price}
                </p>
                <p className="mt-2 text-sm text-graphite/70">
                  {site.oferta.priceNote}
                </p>
                <CTAButton location="oferta" className="mt-6 w-full">
                  {site.oferta.cta}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. GARANTIA */}
      <Section tone="sand">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div
            aria-hidden
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-gold bg-white font-serif text-lg font-bold text-forest"
          >
            7 dias
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              {site.garantia.title}
            </h2>
            <p className="mt-3 text-graphite/80">{site.garantia.text}</p>
          </div>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-bold sm:text-4xl">
            {site.faq.title}
          </h2>
          <div className="mt-10 divide-y divide-graphite/10">
            {site.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="text-leaf transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-graphite/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. CTA FINAL */}
      <Section tone="forest">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gold sm:text-4xl">
            {site.ctaFinal.title}
          </h2>
          <p className="mt-4 text-lg text-sand/85">{site.ctaFinal.text}</p>
          <div className="mt-8">
            <CTAButton location="cta_final">{site.ctaFinal.cta}</CTAButton>
          </div>
        </div>
      </Section>

      {/* 11. RODAPÉ */}
      <footer className="bg-graphite text-sand/70">
        <div className="mx-auto w-full max-w-content px-5 py-10 sm:px-8">
          <p className="text-xs leading-relaxed">{site.footer.disclaimer}</p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} {site.footer.rights} · {site.brand}
          </p>
        </div>
      </footer>
    </main>
  );
}
