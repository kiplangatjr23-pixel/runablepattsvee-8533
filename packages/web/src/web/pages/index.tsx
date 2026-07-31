import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { Phone, MapPin, Check, Star, Quote, ChevronDown } from "lucide-react";
import { Nav } from "../components/site/nav";
import { Reveal } from "../components/site/reveal";
import { Booking } from "../components/site/booking";
import {
  SITE,
  STATS,
  SERVICES,
  GALLERY,
  PACKAGES,
  TESTIMONIALS,
  NAV,
} from "../lib/site";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-gold/50" />
      <span className="eyebrow">{children}</span>
      <span className="h-px w-8 bg-gold/50" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-surface text-cream">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-surface" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(23,167,150,0.18),transparent_55%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1200px] px-5 pt-28 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Premium Catering · Migori, Kenya</span>
            </div>
            <h1 className="font-serif text-[clamp(2.9rem,7.5vw,6rem)] font-semibold leading-[1.02] text-cream">
              Where every event <br className="hidden sm:block" />
              becomes a <span className="gold-text italic">feast</span> to remember
            </h1>
            <p className="mt-7 max-w-xl text-lg font-light text-cream/80">
              From intimate weddings to grand corporate galas, Patts Vee crafts
              unforgettable culinary experiences — beautifully presented, flawlessly served.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-ink transition-all hover:bg-gold-bright hover:shadow-[0_0_36px_-6px_rgba(201,162,75,0.8)]"
              >
                Book Your Event
              </a>
              <a
                href="#services"
                className="rounded-full border border-cream/25 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Explore Our Menu
              </a>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70 transition-colors hover:text-gold"
          aria-label="Scroll down"
        >
          <ChevronDown className="animate-bounce" />
        </a>
      </section>

      {/* STATS */}
      <section className="border-y border-gold/10 bg-ink/60">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4 md:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-serif text-4xl font-semibold text-gold md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="noise py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <img
                src="/images/gallery-chef.jpg"
                alt="Chef plating a gourmet dish"
                className="rounded-3xl border border-gold/15 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/25 bg-surface-2/95 p-6 backdrop-blur-md sm:block">
                <div className="font-serif text-3xl text-gold">12+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted">
                  Years crafting <br /> memorable feasts
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">About Patts Vee</p>
              <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
                Passion on every plate, <span className="gold-text">grace</span> at every table
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-cream/75">
                Patts Vee Events & Catering was born from a simple belief — that
                great food brings people together. For over a decade we've turned
                weddings, corporate functions and private celebrations across
                Migori and beyond into occasions guests never forget.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-cream/75">
                Our chefs blend local flavour with refined technique, our team
                serves with warmth, and every detail — from styling to the final
                dessert — is handled with care. You dream it; we plate it.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Fresh, made-to-order menus",
                  "Full-service event styling",
                  "Professional chefs & waitstaff",
                  "Any location, any headcount",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-cream/85">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-teal/25 text-teal-bright">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES / MENU */}
      <section id="services" className="bg-ink/50 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl text-cream md:text-5xl">
              Catering for <span className="gold-text">every occasion</span>
            </h2>
            <p className="mt-4 text-cream/70">
              One team, one standard of excellence — whatever you're celebrating.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = (Icons[s.icon as keyof typeof Icons] ||
                Icons.UtensilsCrossed) as React.ComponentType<{ size?: number; className?: string }>;
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.08}>
                  <div className="card-hairline group h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(201,162,75,0.35)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal/40 to-navy/40 text-gold ring-1 ring-gold/20">
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl text-cream">{s.title}</h3>
                    <p className="mt-3 text-sm text-cream/70">{s.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-sm text-cream/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Our work</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl text-cream md:text-5xl">
              A taste of the <span className="gold-text">experience</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal
                key={g.src}
                delay={(i % 3) * 0.08}
                className={g.tall ? "row-span-2" : ""}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border border-gold/10 ${
                    g.tall ? "min-h-[280px] md:min-h-[520px]" : "min-h-[180px] md:min-h-[250px]"
                  }`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-light text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.alt}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-ink/50 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl text-cream md:text-5xl">
              Packages built <span className="gold-text">around you</span>
            </h2>
            <p className="mt-4 text-cream/70">
              Transparent starting points — every event is tailored to your taste
              and budget.
            </p>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    p.featured
                      ? "border border-gold/50 bg-gradient-to-b from-surface-2 to-ink shadow-[0_30px_70px_-30px_rgba(201,162,75,0.5)]"
                      : "card-hairline"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ink">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-cream">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-serif text-4xl text-gold">{p.price}</span>
                    <span className="mb-1 text-xs uppercase tracking-[0.15em] text-muted">
                      {p.unit}
                    </span>
                  </div>
                  <ul className="mt-7 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-cream/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-teal-bright" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className={`mt-8 rounded-full px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.15em] transition-all ${
                      p.featured
                        ? "bg-gold text-ink hover:bg-gold-bright hover:shadow-[0_0_30px_-6px_rgba(201,162,75,0.7)]"
                        : "border border-gold/40 text-gold hover:bg-gold hover:text-ink"
                    }`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Kind words</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl text-cream md:text-5xl">
              Loved by <span className="gold-text">our guests</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="card-hairline flex h-full flex-col rounded-2xl p-7">
                  <Quote size={30} className="text-gold/50" />
                  <div className="mt-3 flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-cream/85">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-gold/10 pt-4">
                    <div className="font-serif text-lg text-cream">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted">
                      {t.role}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative overflow-hidden bg-ink/60 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(23,167,150,0.15),transparent_55%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
          <Booking />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/15 bg-ink py-14">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt={SITE.full}
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/30"
                />
                <div className="leading-none">
                  <div className="font-serif text-xl text-cream">Patts Vee</div>
                  <div className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                    Events & Catering
                  </div>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm text-cream/60">{SITE.tagline}.</p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-gold">Explore</h4>
              <ul className="mt-4 space-y-2.5">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-sm text-cream/60 transition-colors hover:text-gold">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-gold">Reach us</h4>
              <ul className="mt-4 space-y-3 text-sm text-cream/60">
                <li>
                  <a href={SITE.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold">
                    <Phone size={15} className="text-gold" /> {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={SITE.locationMap} target="_blank" rel="noreferrer" className="flex items-start gap-2 transition-colors hover:text-gold">
                    <MapPin size={15} className="mt-0.5 text-gold" /> {SITE.location}
                  </a>
                </li>
                <li>
                  <a href="#booking" className="inline-block rounded-full bg-gold px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-bright">
                    Book an Event
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 text-xs text-cream/40 md:flex-row">
            <span>© {new Date().getFullYear()} Patts Vee Events & Catering. All rights reserved.</span>
            <span>Made with love in Migori, Kenya</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
