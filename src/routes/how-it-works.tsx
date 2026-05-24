import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ClipboardCheck, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — PrimeInspect" },
      { name: "description", content: "Four simple steps: book online, we coordinate, inspector evaluates, you receive a digital report." },
      { property: "og:title", content: "How PrimeInspect Works" },
      { property: "og:description", content: "Four simple steps to a complete pre-purchase vehicle inspection." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

const steps = [
  { n: "01", icon: Calendar, title: "Book Online", desc: "Select your package, input vehicle details, and supply seller contact information in under 3 minutes. We accept inspections nationwide.", time: "3 min" },
  { n: "02", icon: Users, title: "We Coordinate", desc: "Our dispatch team contacts the seller, verifies the location, and schedules the inspector immediately — usually within hours of your booking.", time: "1–4 hrs" },
  { n: "03", icon: ClipboardCheck, title: "Inspector Evaluates", desc: "Our certified mobile inspector travels on-site to run diagnostic scans, check structural integrity, road test, and photograph every finding.", time: "60–120 min on-site" },
  { n: "04", icon: FileText, title: "Receive Digital Report", desc: "Review 150+ check points, high-definition photos, OBD codes, and repair priorities on your dashboard within hours of inspection completion.", time: "Same day" },
];

function HowItWorksPage() {
  return (
    <>
      <section className="container-prime pt-16 pb-12 md:pt-24">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── The process
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          How PrimeInspect works.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          We manage all coordination with the seller to perform the mobile check-up seamlessly.
          Four simple steps. No paperwork. No driving required.
        </p>
      </section>

      <section className="container-prime pb-20">
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={s.n} className="group relative grid md:grid-cols-12 gap-6 rounded-3xl border border-border bg-card p-8 md:p-10 hover:shadow-elegant transition-shadow">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                <span className="font-display text-6xl md:text-7xl font-bold text-accent leading-none">{s.n}</span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{s.time}</span>
              </div>
              <div className="md:col-span-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground mb-5">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute right-6 bottom-6 h-5 w-5 text-muted-foreground/30 rotate-90" />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full h-12 px-7 bg-primary hover:bg-primary/90">
            <Link to="/book">Start Your Inspection <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
