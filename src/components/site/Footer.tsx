import { Link } from "@tanstack/react-router";
import { MapPin, Clock, MessageCircle, Sparkles } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-xl text-gradient-gold">Saptarishis Astrology</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Authentic Vedic astrology consultations by {SITE.astrologer} — guiding clients with
            clarity, compassion and tradition.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Visit</h4>
          <p className="mt-3 text-sm text-muted-foreground flex gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            <span>{SITE.address}</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground flex gap-2">
            <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            <span>{SITE.hours}</span>
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Soniya</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Book Consultation</Link></li>
            <li>
              <a
                href={waLink("Namaste, I'd like to book a consultation.")}
                target="_blank" rel="noreferrer"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Saptarishis Astrology Service by {SITE.astrologer}. All rights reserved.
      </div>
    </footer>
  );
}
