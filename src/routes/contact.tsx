import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, MessageCircle, Star, Phone, Video, Instagram, Home } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Saptarishis Astrology" },
      { name: "description", content: "Book an astrology consultation with Soniya Sharma. Fill the form to continue on WhatsApp." },
      { property: "og:title", content: "Book a Consultation — Saptarishis Astrology" },
      { property: "og:description", content: "Reach Soniya Sharma in Gaur City 1, Greater Noida West." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10">
        <div className="text-xs uppercase tracking-[0.25em] text-gold">Contact</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">
          Book your <span className="text-gradient-gold">consultation</span>
        </h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">
          Share your details below — submitting will open WhatsApp with everything pre-filled so we
          can confirm your appointment.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 rounded-3xl border border-border/60 bg-card/60 backdrop-blur p-7 md:p-10 shadow-deep">
          <ContactForm />
        </div>

        <aside className="lg:col-span-2 space-y-5">
          <InfoCard icon={MapPin} title="Visit the office" body={SITE.address} />
          <InfoCard icon={Clock} title="Working hours" body={SITE.hours} />
          <InfoCard icon={Star} title="Google rating" body={`${SITE.rating} ★ — Women-owned business`} />
          <a
            href={SITE.instagram}
            target="_blank" rel="noreferrer"
            className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-5 flex gap-4 items-center hover:border-gold/40 transition"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card border border-gold/30 text-gold">
              <Instagram className="h-5 w-5" />
            </span>
            <div>
              <h4 className="text-base">Follow on Instagram</h4>
              <p className="text-sm text-muted-foreground mt-1">@saptarishis_astrology_service</p>
            </div>
          </a>

          <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-5">
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Consultation charges</h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>Call Consultation</span>
                </div>
                <span className="font-display text-xl text-foreground">{SITE.pricing.currency}{SITE.pricing.call.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Video className="h-4 w-4 text-gold" />
                  <span>Meeting / Video Call</span>
                </div>
                <span className="font-display text-xl text-foreground">{SITE.pricing.currency}{SITE.pricing.meeting.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Home className="h-4 w-4 text-gold" />
                  <span>Vastu Consultation</span>
                </div>
                <span className="font-display text-xl text-foreground">{SITE.pricing.currency}{SITE.pricing.vastu.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <a
            href={waLink(`Namaste ${SITE.astrologer} ji, I would like to consult you.`)}
            target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-gold px-6 py-4 text-sm font-medium text-primary-foreground shadow-glow"
          >
            <MessageCircle className="h-4 w-4" /> Chat directly on WhatsApp
          </a>

          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-deep">
            <iframe
              title="Saptarishis Astrology location"
              src={SITE.mapsEmbed}
              className="w-full h-72 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-5 flex gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card border border-gold/30 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h4 className="text-base">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{body}</p>
      </div>
    </div>
  );
}
