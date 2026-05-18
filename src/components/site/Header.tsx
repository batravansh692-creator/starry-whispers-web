import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Sparkles, Menu, X, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/70">
      <div className="bg-gradient-gold/90 text-primary-foreground text-xs">
        <div className="mx-auto max-w-6xl px-5 h-9 flex items-center justify-between gap-4">
          <span className="hidden sm:inline tracking-wide">✦ Authentic Vedic Astrology · 5.0 Google Rated · Greater Noida</span>
          <a href={`tel:+${SITE.whatsapp}`} className="inline-flex items-center gap-1.5 font-medium">
            <Phone className="h-3.5 w-3.5" /> {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-display text-xl leading-tight">
            <span className="block text-gradient-gold font-semibold">Saptarishis</span>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground -mt-0.5">
              Astrology · Soniya Sharma
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(`Namaste ${SITE.astrologer} ji, I would like to book a consultation.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/70 bg-background">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
