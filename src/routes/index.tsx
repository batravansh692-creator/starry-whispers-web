import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Sparkles, MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import heroCosmos from "@/assets/hero-cosmos.jpg";
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroCosmos} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative starry mx-auto max-w-6xl px-5 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/40 backdrop-blur px-3 py-1 text-xs text-gold">
              <Star className="h-3.5 w-3.5 fill-current" /> 5.0 on Google · Women-owned · Greater Noida
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
              Find clarity in the <span className="text-gradient-gold">stars</span>, answers in your <span className="text-gradient-gold">chart</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Personalised Vedic astrology consultations by {SITE.astrologer} — for marriage, career,
              finance, health and life's deeper questions. Traditional shastra, modern compassion.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={waLink(`Namaste ${SITE.astrologer} ji, I'd like to book a consultation.`)}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Consult on WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-card">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
              <Stat k="15+" v="Years guiding clients" />
              <Stat k="5000+" v="Charts read" />
              <Stat k="5.0★" v="Google rating" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="What I offer"
          title="Consultations rooted in tradition"
          subtitle="From birth chart analysis to vastu and remedies — every session is personal, private and practical."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ?? Sparkles;
            return (
              <div key={s.slug} className="group relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-6 hover:border-gold/50 transition shadow-deep">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl text-gold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:underline">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Why Saptarishis"
              title="Honest readings. Real remedies."
              subtitle="No fear-based advice, no unnecessary rituals. Just clear guidance rooted in classical Vedic astrology."
            />
            <ul className="mt-8 space-y-4">
              <Why icon={ShieldCheck} title="Confidential & non-judgmental" text="Your story stays between us. Always." />
              <Why icon={Sparkles} title="Classical Vedic methods" text="Parashari + Jaimini techniques with dasha and transit precision." />
              <Why icon={Star} title="5.0 rated on Google" text="Trusted by hundreds of families across India and abroad." />
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-deep aspect-[4/5]">
            <img src={heroCosmos} alt="Cosmic sky" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <p className="font-display text-2xl text-gold leading-snug">
                "The chart never lies — it only waits for someone patient enough to read it."
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Soniya Sharma</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-cosmic p-10 md:p-16 shadow-deep starry">
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">
              Ready for clarity?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a personal consultation — online or in person at our Gaur City 1 office.
              Share your details and we'll continue the conversation on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow">
                Book consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waLink("Namaste, I'd like a quick astrology consultation.")} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <p className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" />{SITE.address}</p>
              <p className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold" />{SITE.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gradient-gold">{k}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.25em] text-gold">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Why({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card border border-gold/30 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h4 className="text-lg text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{text}</p>
      </div>
    </li>
  );
}
