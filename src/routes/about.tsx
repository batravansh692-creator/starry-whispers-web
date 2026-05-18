import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ShieldCheck, Sparkles, Heart, ArrowRight } from "lucide-react";
import heroCosmos from "@/assets/hero-cosmos.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Soniya Sharma | Saptarishis Astrology" },
      { name: "description", content: "Meet Soniya Sharma — Vedic astrologer in Greater Noida West guiding clients with clarity, compassion and shastra." },
      { property: "og:title", content: "About Soniya Sharma — Saptarishis Astrology" },
      { property: "og:description", content: "Vedic astrologer in Greater Noida West, 5.0 rated, women-owned." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">About</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Meet <span className="text-gradient-gold">Soniya Sharma</span>
          </h1>
          <p className="mt-6 text-muted-foreground">
            Soniya Sharma is the founder of Saptarishis Astrology Service — a 5.0-rated, women-owned
            Vedic astrology practice based in Gaur City 1, Greater Noida West. For over a decade,
            she has helped clients across India and abroad navigate marriage, career, health and
            spiritual questions with traditional Parashari astrology and a deeply human touch.
          </p>
          <p className="mt-4 text-muted-foreground">
            Her approach blends classical shastra with practical, livable remedies — no fear, no
            unnecessary rituals, just honest insight into what the chart is genuinely saying.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <Card icon={Star} title="5.0 on Google" text="Consistently rated by happy clients." />
            <Card icon={ShieldCheck} title="Women-owned" text="A safe space for every conversation." />
            <Card icon={Sparkles} title="Classical methods" text="Parashari + Jaimini + transits." />
          </div>
        </div>

        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-border/60 shadow-deep min-h-[420px]">
          <img src={heroCosmos} alt="Cosmic sky" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 p-8">
            <Heart className="h-6 w-6 text-gold" />
            <p className="mt-3 font-display text-2xl text-gold leading-snug">
              "Every chart is a map of grace. My work is to help you read it without fear."
            </p>
            <p className="mt-3 text-sm text-muted-foreground">— {SITE.astrologer}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl border border-gold/30 bg-gradient-cosmic p-10 md:p-14 starry relative overflow-hidden">
          <h2 className="font-display text-3xl md:text-4xl text-gradient-gold">Let's begin a conversation</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Whether it's a single question or a full chart reading — you're welcome here.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Card({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-5">
      <Icon className="h-5 w-5 text-gold" />
      <h4 className="mt-3 text-lg">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{text}</p>
    </div>
  );
}
