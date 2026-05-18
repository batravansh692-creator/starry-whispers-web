import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Sparkles, MessageCircle, MapPin, Clock, ShieldCheck, Quote, CheckCircle2, Phone } from "lucide-react";
import portrait from "@/assets/astrologer-portrait.jpg";
import desk from "@/assets/astrologer-desk.jpg";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";
import * as Icons from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saptarishis Astrology by Soniya Sharma | Vedic Astrologer, Greater Noida" },
      { name: "description", content: "Vedic astrology, kundli, marriage matching, vastu, numerology and tarot by Soniya Sharma in Gaur City 1, Greater Noida West." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-3 py-1 text-xs text-gold shadow-soft">
              <Star className="h-3.5 w-3.5 fill-current" /> 5.0 on Google · Women-owned · Greater Noida
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.04]">
              Find clarity in the <span className="text-gradient-gold">stars</span>,
              <br className="hidden md:block" /> answers in your <span className="text-gradient-gold">chart</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Personalised Vedic astrology consultations by <strong className="text-foreground font-medium">{SITE.astrologer}</strong> — for marriage, career,
              finance, health and life's deeper questions. Traditional shastra, modern compassion.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={waLink(`Namaste ${SITE.astrologer} ji, I'd like to book a consultation.`)}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Consult on WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium hover:bg-secondary shadow-soft">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
              <Stat k="15+" v="Years guiding clients" />
              <Stat k="5000+" v="Charts read" />
              <Stat k="5.0★" v="Google rating" />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card shadow-deep aspect-[4/5]">
              <img src={portrait} alt={`${SITE.astrologer}, Vedic Astrologer`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6">
                <p className="font-display text-2xl text-foreground">{SITE.astrologer}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mt-1">Founder · Vedic Astrologer</p>
              </div>
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 rounded-2xl bg-card shadow-deep border border-border px-5 py-4 items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground"><Star className="h-5 w-5 fill-current" /></span>
              <div>
                <p className="text-sm font-semibold">5.0 Google Rating</p>
                <p className="text-xs text-muted-foreground">Hundreds of happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border/70 bg-card/60">
        <div className="mx-auto max-w-6xl px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { i: ShieldCheck, t: "Confidential" },
            { i: Sparkles, t: "Classical Vedic" },
            { i: Star, t: "5.0 Google Rated" },
            { i: CheckCircle2, t: "Honest Remedies" },
          ].map(({ i: I, t }) => (
            <div key={t} className="flex items-center gap-3 justify-center md:justify-start">
              <I className="h-5 w-5 text-gold" />
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="What I offer"
          title="Consultations rooted in tradition"
          subtitle="From birth chart analysis to vastu and remedies — every session is personal, private and practical."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ?? Sparkles;
            return (
              <div key={s.slug} className="group relative rounded-2xl border border-border bg-card p-7 hover:border-gold/60 hover:-translate-y-1 transition-all shadow-soft hover:shadow-deep">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <a href={waLink(`Namaste ${SITE.astrologer} ji, I'd like to know more about: ${s.title}.`)}
                  target="_blank" rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline">
                  Enquire <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-medium text-gold hover:bg-gold/5">
            View all 8 services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-card/60 border-y border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-deep aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img src={desk} alt={`${SITE.astrologer} at work`} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Saptarishis"
              title="Honest readings. Real remedies."
              subtitle="No fear-based advice, no unnecessary rituals. Just clear guidance rooted in classical Vedic astrology and over 15 years of practice."
            />
            <ul className="mt-8 space-y-5">
              <Why icon={ShieldCheck} title="Confidential & non-judgmental" text="Your story stays between us. Always." />
              <Why icon={Sparkles} title="Classical Vedic methods" text="Parashari + Jaimini techniques with dasha and transit precision." />
              <Why icon={Star} title="5.0 rated on Google" text="Trusted by hundreds of families across India and abroad." />
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow">
                Meet Soniya <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:+${SITE.whatsapp}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium shadow-soft">
                <Phone className="h-4 w-4 text-gold" /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="What clients say"
          title="A 5.0 rated practice — for a reason"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-6 w-6 text-gold/70" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gradient-cosmic p-10 md:p-16 shadow-deep starry">
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">
              Ready for clarity?
            </h2>
            <p className="mt-4 text-foreground/80">
              Book a personal consultation — online or in person at our Gaur City 1 office.
              Share your details and we'll continue the conversation on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
                Book consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waLink("Namaste, I'd like a quick astrology consultation.")} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-6 py-3.5 text-sm font-medium shadow-soft">
                <MessageCircle className="h-4 w-4 text-gold" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <p className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.address}</p>
              <p className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const TESTIMONIALS = [
  { name: "Priya S.", role: "Noida", text: "Soniya ji's reading was incredibly accurate and her remedies are practical. My marriage timing prediction came true exactly." },
  { name: "Rahul M.", role: "Delhi", text: "Genuine, honest and to the point. No fear tactics, just clear guidance. The career advice changed my path completely." },
  { name: "Ananya K.", role: "Gurugram", text: "The kundli session felt like a deep conversation, not a transaction. Highly recommend for anyone seeking clarity." },
];

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-gradient-gold">{k}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function Why({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-gold/15 border border-gold/30 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h4 className="text-lg text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{text}</p>
      </div>
    </li>
  );
}
