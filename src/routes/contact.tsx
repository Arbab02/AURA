import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PrimeInspect" },
      { name: "description", content: "Get in touch with PrimeInspect. Phone, email, or message form — we typically reply within an hour." },
      { property: "og:title", content: "Contact PrimeInspect" },
      { property: "og:description", content: "Reach the PrimeInspect team by phone, email, or contact form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent", { description: "We'll get back to you within an hour." });
    }, 800);
  };

  return (
    <>
      <section className="container-prime pt-16 pb-12 md:pt-24">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── Contact
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          Talk to a real inspector.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Questions about a specific vehicle, package, or area? Reach out — we typically respond within an hour.
        </p>
      </section>

      <section className="container-prime pb-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard icon={Phone} label="Call us" value="+1 (800) 555-7746" sub="Mon–Sun · 7am–9pm CT" />
            <ContactCard icon={Mail} label="Email" value="hello@primeinspect.com" sub="Reply within 1 hour" />
            <ContactCard icon={MessageSquare} label="Live chat" value="Start a conversation" sub="Available in business hours" />
            <ContactCard icon={MapPin} label="Service area" value="Nationwide US" sub="Mobile inspectors in 48 states" />
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
            <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill out the form and we'll get back to you shortly.</p>

            <div className="mt-6 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="name" label="Full name" required />
                <Field id="email" label="Email" type="email" required />
              </div>
              <Field id="phone" label="Phone (optional)" type="tel" />
              <Field id="subject" label="Subject" required />
              <div>
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <Textarea id="message" name="message" required rows={5} className="mt-2 rounded-xl resize-none" placeholder="Tell us about the vehicle or your question..." />
              </div>

              <Button type="submit" disabled={submitting} size="lg" className="rounded-full bg-primary hover:bg-primary/90 mt-2">
                {submitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon: Icon, label, value, sub }: { icon: typeof Phone; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4 hover:shadow-elegant transition-shadow">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 font-semibold">{value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium">{label}</Label>
      <Input id={id} name={id} type={type} required={required} className="mt-2 rounded-xl h-11" />
    </div>
  );
}
