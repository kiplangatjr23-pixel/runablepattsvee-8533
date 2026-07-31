import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "../../lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-gold/15 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt={SITE.full}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/30 md:h-12 md:w-12"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-lg font-semibold tracking-wide text-cream">
              Patts Vee
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">
              Events & Catering
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-sm font-light text-cream/80 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden rounded-full bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-all hover:bg-gold-bright hover:shadow-[0_0_28px_-6px_rgba(201,162,75,0.7)] md:inline-block"
          >
            Book an Event
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-gold/30 p-2.5 text-cream lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-gold/15 bg-surface-2/95 p-5 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-cream/85 transition-colors hover:bg-gold/10 hover:text-gold"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.15em] text-ink"
            >
              Book an Event
            </a>
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 text-sm text-cream/80"
            >
              <Phone size={15} className="text-gold" /> {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
