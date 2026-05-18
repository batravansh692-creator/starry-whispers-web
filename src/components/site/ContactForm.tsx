import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20)
    .regex(/^[0-9+\-\s()]+$/, "Only numbers and + - ( ) allowed"),
  service: z.string().min(1, "Please select a service"),
  dob: z.string().max(20).optional().or(z.literal("")),
  tob: z.string().max(20).optional().or(z.literal("")),
  pob: z.string().max(120).optional().or(z.literal("")),
  message: z.string().max(800).optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "", phone: "", service: "", dob: "", tob: "", pob: "", message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const onChange = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormState;
        if (!errs[key]) errs[key] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const lines = [
      `Namaste ${SITE.astrologer} ji,`,
      ``,
      `I would like to book a consultation.`,
      ``,
      `*Name:* ${d.name}`,
      `*Phone:* ${d.phone}`,
      `*Service:* ${d.service}`,
      d.dob ? `*Date of Birth:* ${d.dob}` : null,
      d.tob ? `*Time of Birth:* ${d.tob}` : null,
      d.pob ? `*Place of Birth:* ${d.pob}` : null,
      d.message ? `*Message:* ${d.message}` : null,
    ].filter(Boolean).join("\n");

    window.open(waLink(lines), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name *" error={errors.name}>
          <Input value={form.name} onChange={(e) => onChange("name", e.target.value)} placeholder="Your name" />
        </Field>
        <Field label="Phone / WhatsApp *" error={errors.phone}>
          <Input value={form.phone} onChange={(e) => onChange("phone", e.target.value)} placeholder="+91 ..." />
        </Field>
      </div>

      <Field label="Service Interested In *" error={errors.service}>
        <Select value={form.service} onValueChange={(v) => onChange("service", v)}>
          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
            ))}
            <SelectItem value="Other / Not sure">Other / Not sure</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Date of Birth"><Input type="date" value={form.dob} onChange={(e) => onChange("dob", e.target.value)} /></Field>
        <Field label="Time of Birth"><Input type="time" value={form.tob} onChange={(e) => onChange("tob", e.target.value)} /></Field>
        <Field label="Place of Birth"><Input value={form.pob} onChange={(e) => onChange("pob", e.target.value)} placeholder="City, Country" /></Field>
      </div>

      <Field label="Your Question / Message" error={errors.message}>
        <Textarea rows={4} value={form.message} onChange={(e) => onChange("message", e.target.value)} placeholder="Share briefly what you'd like guidance on..." />
      </Field>

      <Button type="submit" size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-glow">
        <MessageCircle className="h-4 w-4 mr-2" /> Send via WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Submitting opens WhatsApp with your details pre-filled — just press send.
      </p>
    </form>
  );
}

function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
