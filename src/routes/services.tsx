import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, MessageCircle, Sparkles, Phone, Video, Home } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Astrology Services | Saptarishis by Soniya Sharma" },
      { name: "description", content: "Kundli reading, marriage matching, career guidance, vastu, muhurat, gemstone remedies, numerology and tarot." },
      { property: "og:title", content: "Astrology Services — Saptarishis" },
      { property: "og:description", content: "Eight authentic Vedic consultations from kundli to vastu and tarot." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.25em] text-gold">Services</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">
          Guidance for every <span className="text-gradient-gold">turning point</span>.
        </h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">
          Eight focused consultations — each one tailored to your unique chart and the question
          you're carrying right now.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ?? Sparkles;
          return (
            <article key={s.slug} className="group relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-7 hover:border-gold/50 transition shadow-deep">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-gold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <a
                    href={waLink(`Namaste ${SITE.astrologer} ji, I'm interested in: ${s.title}.`)}
                    target="_blank" rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur p-10 md:p-14 shadow-deep">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Pricing</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Consultation fees</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">Simple, transparent pricing for every kind of session.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-glow">
                  <Phone className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl">Call Consultation</h3>
              </div>
              <p className="text-sm text-muted-foreground">A focused phone session for quick guidance, follow-ups and specific questions.</p>
              <div className="mt-auto">
                <p className="font-display text-4xl text-gradient-gold">{SITE.pricing.currency}{SITE.pricing.call.toLocaleString("en-IN")}</p>
                <p className="text-xs text-muted-foreground mt-1">Per session · No hidden charges</p>
              </div>
              <a
                href={waLink(`Namaste ${SITE.astrologer} ji, I'd like to book a Call Consultation (₹${SITE.pricing.call}).`)}
                target="_blank" rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> Book this on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-glow">
                  <Video className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl">Meeting / Video Call</h3>
              </div>
              <p className="text-sm text-muted-foreground">In-depth face-to-face or video session for detailed kundli analysis and comprehensive guidance.</p>
              <div className="mt-auto">
                <p className="font-display text-4xl text-gradient-gold">{SITE.pricing.currency}{SITE.pricing.meeting.toLocaleString("en-IN")}</p>
                <p className="text-xs text-muted-foreground mt-1">Per session · No hidden charges</p>
              </div>
              <a
                href={waLink(`Namaste ${SITE.astrologer} ji, I'd like to book a Meeting / Video Consultation (₹${SITE.pricing.meeting}).`)}
                target="_blank" rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> Book this on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-glow">
                  <Home className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl">Vastu Consultation</h3>
              </div>
              <p className="text-sm text-muted-foreground">On-site or remote Vastu analysis for home, shop or workplace — with practical energy corrections.</p>
              <div className="mt-auto">
                <p className="font-display text-4xl text-gradient-gold">{SITE.pricing.currency}{SITE.pricing.vastu.toLocaleString("en-IN")}</p>
                <p className="text-xs text-muted-foreground mt-1">Per visit · No hidden charges</p>
              </div>
              <a
                href={waLink(`Namaste ${SITE.astrologer} ji, I'd like to book a Vastu Consultation (₹${SITE.pricing.vastu}).`)}
                target="_blank" rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> Book this on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl border border-gold/30 bg-gradient-cosmic p-10 md:p-14 starry relative overflow-hidden">
          <h2 className="font-display text-3xl md:text-4xl text-gradient-gold">Not sure which to choose?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Share a few details and we'll recommend the right consultation for you.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
