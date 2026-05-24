import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Cpu, Wrench, Gauge, ShieldCheck, Camera, Zap, Crown, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PrimeInspect" },
      { name: "description", content: "Comprehensive mobile pre-purchase vehicle inspection services. Standard, Premium, Elite, plus specialty inspections for EVs, classics, exotics, and RVs." },
      { property: "og:title", content: "Services — PrimeInspect" },
      { property: "og:description", content: "Mobile pre-purchase inspection services covering every angle of your vehicle." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const core = [
  { icon: Car, t: "Exterior & Body Panels", d: "Paint thickness mapping, panel alignment, dent and filler detection across every body panel." },
  { icon: Cpu, t: "OBD2 Diagnostics", d: "Live module fault scan plus historical code pull to expose cleared engine codes." },
  { icon: Wrench, t: "Engine Bay Inspection", d: "Belts, hoses, gaskets, mounts, fluid health, leak detection, and visual integrity." },
  { icon: Gauge, t: "Tires & Wheels", d: "Tread depth, age, wear pattern analysis, wheel and rim condition." },
  { icon: ShieldCheck, t: "Frame & Chassis", d: "Underbody rust check, weld inspection, structural alignment verification." },
  { icon: Camera, t: "100+ HD Photos", d: "Every finding documented with high-resolution imagery in your digital report." },
];

const specialty = [
  { icon: Zap, t: "EV & Hybrid", d: "Battery state of health, charging system, regenerative braking, high-voltage safety." },
  { icon: Crown, t: "Classic Cars", d: "Originality verification, restoration quality, rust mapping, era-appropriate components." },
  { icon: Crown, t: "Exotic & Luxury", d: "Specialized exotic protocols, carbon panel inspection, performance brake systems." },
  { icon: Truck, t: "RV Inspection", d: "House systems, slide-outs, roof integrity, plumbing, propane, and chassis evaluation." },
];

function ServicesPage() {
  return (
    <>
      <section className="container-prime pt-16 pb-12 md:pt-24">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── Inspection services
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          Every system. Every component. Every finding.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Our mobile inspectors evaluate over 150 checkpoints across mechanical, structural,
          electronic, and cosmetic dimensions of your potential vehicle.
        </p>
      </section>

      <section className="container-prime py-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Core inspection coverage</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {core.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-3xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-0.5 transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-prime py-16">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">── Specialty</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Specialty vehicle services</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {specialty.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl bg-card border border-border p-7">
                <Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prime py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to book?</h2>
            <p className="mt-2 text-primary-foreground/75">Select a package and we'll handle everything else.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90">
              <Link to="/packages">View Packages <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
