import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Camera, Cpu, Wrench, Gauge, Car, Star,
  CheckCircle2, AlertTriangle, Clock, FileText, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-inspection.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeInspect — Inspect Before You Invest" },
      { name: "description", content: "Premium mobile pre-purchase vehicle inspections. 150+ checkpoints, OBD scans, HD photos. Independent, certified, buyer-first." },
      { property: "og:title", content: "PrimeInspect — Inspect Before You Invest" },
      { property: "og:description", content: "Premium mobile pre-purchase vehicle inspections delivered to your inbox." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ServicesBento />
      <PackagesPreview />
      <HowItWorksPreview />
      <ReportPreview />
      <ReviewsPreview />
      <FinalCTA />
    </>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-noise opacity-60" aria-hidden />
      <div className="container-prime relative pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Nationwide mobile inspectors available
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-balance">
              Inspect Before
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                You Invest.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
              PrimeInspect helps used car buyers identify hidden damage, costly mechanical repairs,
              and bad deals with comprehensive mobile pre-purchase vehicle inspections —
              delivered straight to your inbox.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 px-7 rounded-full bg-primary hover:bg-primary/90 shadow-elegant text-base">
                <Link to="/book">
                  Book Inspection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 rounded-full border-border text-base">
                <Link to="/sample-report">View Sample Report</Link>
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 max-w-xl">
              {[
                { k: "150+", v: "Checkpoints" },
                { k: "100+", v: "HD Photos & OBD codes" },
                { k: "ASE", v: "Certified inspectors only" },
                { k: "100%", v: "Independent reports" },
              ].map((s) => (
                <div key={s.v} className="flex items-baseline gap-3">
                  <dt className="font-display text-3xl font-bold text-primary">{s.k}</dt>
                  <dd className="text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-accent opacity-10 blur-3xl rounded-[3rem]" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-premium bg-card">
                <img
                  src={heroImg}
                  alt="ASE certified inspector examining a vehicle engine bay"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                />
                {/* Floating badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-3 py-1.5 text-xs font-medium shadow-elegant">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Inspection in progress
                </div>
                {/* Floating spec card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-premium p-4">
                  <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3">
                    <span>OBD Live Scan</span>
                    <span className="text-success">● ONLINE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <Row k="ENGINE RPM" v="750" ok />
                    <Row k="ABS MODULE" v="ACTIVE" ok />
                    <Row k="SRS AIRBAG" v="SECURE" ok />
                    <Row k="MIL STATUS" v="INACTIVE" ok />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, ok }: { k: string; v: string; ok?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-1.5 last:border-0">
      <span className="text-muted-foreground text-[11px] tracking-wider">{k}</span>
      <span className={`font-mono text-[11px] font-semibold ${ok ? "text-success" : "text-foreground"}`}>{v}</span>
    </div>
  );
}

/* ---------- Trust bar ---------- */
function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "ASE Certified" },
    { icon: CheckCircle2, label: "Secure Booking" },
    { icon: Star, label: "4.9 / 5 Rating" },
    { icon: FileText, label: "Independent Advice" },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-prime py-6">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground text-center mb-4">
          Trusted by used car buyers nationwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/80">
              <Icon className="h-5 w-5 text-accent" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem section ---------- */
function ProblemSection() {
  return (
    <section className="container-prime py-20 md:py-28">
      <div className="max-w-3xl">
        <SectionLabel>The hidden truth</SectionLabel>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
          Used cars can hide expensive problems.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          A clean history report doesn't guarantee a mechanically sound vehicle.
          Sellers often mask issues — or are simply unaware of mounting defects.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
          <div className="inline-flex items-center gap-2 rounded-full bg-warning/15 text-warning-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="h-3.5 w-3.5" /> What the seller shows
          </div>
          <p className="mt-4 text-foreground">
            A beautifully detailed, polished exterior that appears clean, showroom-ready,
            and well-maintained on a dealer lot or driveway.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Clean, glossy paint and waxed finish",
              "Vacuumed interior carpet and leather dressing",
              "Detailed engine bay sprayed with silicone shine",
              "Tires dressed with high-gloss tire shine",
              'Claims of "mechanic inspected" and "ready to drive"',
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-muted-foreground/60 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 shadow-premium relative overflow-hidden">
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="h-3.5 w-3.5" /> What an inspection reveals
          </div>
          <p className="mt-4 text-primary-foreground/85">
            Physical structural scans, computerized diagnostic reports, and underbody inspections
            show the vehicle's true mechanical state.
          </p>
          <ul className="mt-6 space-y-3 relative">
            {[
              ["Accident repairs", "Bondo filler detected under fresh panels"],
              ["ECU Codes", "Hidden faults cleared 10 miles ago (not reset)"],
              ["Underbody rust", "Severe frame oxidation and failing weld joints"],
              ["Fluid contamination", "Blown head gasket markers in coolant"],
              ["Worn suspension", "Leaking struts, dry-rotted bushings, tire wear"],
            ].map(([h, b]) => (
              <li key={h} className="flex gap-3 text-sm">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-destructive flex-shrink-0" />
                <span><strong className="text-primary-foreground">{h}:</strong> <span className="text-primary-foreground/75">{b}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services bento ---------- */
function ServicesBento() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-prime py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionLabel>Every angle covered</SectionLabel>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
              What our inspectors evaluate on-site.
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/services">All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid gap-4 md:gap-5 md:grid-cols-6 auto-rows-[12rem]">
          <BentoCard className="md:col-span-3 md:row-span-2" icon={Car} title="Exterior & Body Scan" desc="Paint thickness mapping, panel alignment, body filler detection across all body panels." featured />
          <BentoCard className="md:col-span-3" icon={Cpu} title="OBD Diagnostics" desc="Live module code pull and historical fault scan." />
          <BentoCard className="md:col-span-2" icon={Wrench} title="Engine Bay" desc="Belts, hoses, leaks, fluid health." />
          <BentoCard className="md:col-span-1" icon={Gauge} title="Tires & Wheels" desc="Tread, wear pattern, age." />
          <BentoCard className="md:col-span-2" icon={ShieldCheck} title="Frame & Chassis" desc="Rust, weld integrity, structural alignment." />
          <BentoCard className="md:col-span-2" icon={Camera} title="100+ HD Photos" desc="Every finding documented in high definition." />
          <BentoCard className="md:col-span-2" icon={CheckCircle2} title="Braking System" desc="Pad thickness, rotor wear, brake fluid." />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon, title, desc, className = "", featured = false,
}: {
  icon: typeof Car; title: string; desc: string; className?: string; featured?: boolean;
}) {
  return (
    <div className={`group rounded-3xl border border-border p-6 flex flex-col justify-between transition-all hover:shadow-elegant hover:-translate-y-0.5 ${featured ? "bg-gradient-primary text-primary-foreground" : "bg-card"} ${className}`}>
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${featured ? "bg-background/15 backdrop-blur" : "bg-accent/10 text-accent"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-6">
        <h3 className={`font-display text-xl font-semibold ${featured ? "text-primary-foreground" : "text-foreground"}`}>{title}</h3>
        <p className={`mt-1.5 text-sm ${featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{desc}</p>
      </div>
    </div>
  );
}

/* ---------- Packages preview ---------- */
function PackagesPreview() {
  const pkgs = [
    { name: "Standard", price: 50, tag: "Core Vehicle Verification", desc: "Visual checks and road validation for everyday buyers.", feats: ["Visual multi-point check", "Structural evaluation", "Road validation test", "Digital condition report"] },
    { name: "Premium", price: 100, tag: "Diagnostic & History", desc: "Buyers who want OBD scans and full vehicle history.", feats: ["All Standard services", "OBD computer fault scan", "Full vehicle history report", "Seller coordination"], featured: true },
    { name: "Elite", price: 150, tag: "Priority & Briefing", desc: "Same-day scheduling and dedicated telephone brief.", feats: ["All Premium services", "1-on-1 telephone debrief", "Priority same-day scheduling", "Buyer-first advisory"] },
  ];
  return (
    <section className="container-prime py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Transparent pricing</SectionLabel>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
          Choose the right inspection package.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Clear upfront pricing. No hidden mileage fees. Select what fits your budget.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pkgs.map((p) => (
          <div key={p.name} className={`relative rounded-3xl border p-8 flex flex-col ${p.featured ? "border-primary bg-primary text-primary-foreground shadow-premium md:-translate-y-4" : "border-border bg-card shadow-soft"}`}>
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                <Star className="h-3 w-3 fill-current" /> Most Popular
              </span>
            )}
            <p className={`text-xs font-medium uppercase tracking-wider ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.tag}</p>
            <h3 className={`mt-2 font-display text-2xl font-bold ${p.featured ? "text-primary-foreground" : "text-foreground"}`}>{p.name} Service</h3>
            <p className={`mt-2 text-sm ${p.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{p.desc}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold">${p.price}</span>
              <span className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/ inspection</span>
            </div>

            <ul className="mt-6 space-y-3 flex-1">
              {p.feats.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${p.featured ? "text-accent" : "text-success"}`} />
                  <span className={p.featured ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                </li>
              ))}
            </ul>

            <Button asChild className={`mt-8 rounded-full h-11 ${p.featured ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90"}`}>
              <Link to="/book">Select Package</Link>
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Need custom evaluations? We also offer specific services for EVs, Classics, Exotics, and RVs.{" "}
        <Link to="/services" className="text-accent font-medium hover:underline">See specialty services →</Link>
      </p>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorksPreview() {
  const steps = [
    { n: "01", title: "Book Online", desc: "Select your package, input vehicle details, and supply seller contact in under 3 minutes." },
    { n: "02", title: "We Coordinate", desc: "Our dispatch team contacts the seller, verifies location, and schedules the inspector." },
    { n: "03", title: "Inspector Evaluates", desc: "Certified mobile inspector travels on-site to run diagnostic scans and road test." },
    { n: "04", title: "Receive Digital Report", desc: "Review 150+ check points, HD photos, OBD codes, and repair priorities on your dashboard." },
  ];
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-5" aria-hidden />
      <div className="container-prime relative py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel dark>The process</SectionLabel>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
            How PrimeInspect works.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/75">
            We manage all coordination with the seller to perform the mobile check-up seamlessly.
          </p>
        </div>

        <ol className="mt-14 grid gap-px md:grid-cols-4 bg-border/20 rounded-3xl overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-primary p-8">
              <div className="font-mono text-accent text-sm font-medium">STEP {s.n}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Sample report preview ---------- */
function ReportPreview() {
  return (
    <section className="container-prime py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <SectionLabel>Clarity, not clutter</SectionLabel>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
            Clear reports, not confusing checklists.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just dump a list of checkboxes. Every report is compiled into a
            web-accessible digital dashboard summarizing urgent repairs, upcoming
            maintenance, and high-quality photos.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/10 text-destructive flex-shrink-0">●</div>
              <div>
                <h4 className="font-semibold">Red Flags</h4>
                <p className="text-sm text-muted-foreground">Urgent safety or repair concerns — major oil leaks, frame cracks, worn tires below 3/32", active engine fault codes.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-warning/15 text-warning flex-shrink-0">●</div>
              <div>
                <h4 className="font-semibold">Pending Notes</h4>
                <p className="text-sm text-muted-foreground">Upcoming maintenance markers — worn brake pads, minor fluid leaks, paint repair marks, old tires.</p>
              </div>
            </li>
          </ul>
          <Button asChild className="mt-8 rounded-full" size="lg">
            <Link to="/sample-report">Explore Sample Report <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-accent opacity-10 blur-3xl rounded-3xl" aria-hidden />
          <div className="relative rounded-3xl bg-card border border-border shadow-premium overflow-hidden">
            <div className="p-6 border-b border-border bg-surface">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-muted-foreground">2018 FORD MUSTANG GT</p>
                  <p className="text-xs text-muted-foreground mt-1">VIN: 1FA6P8CF9J5XXXXXX · 42,310 mi</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Condition Score</p>
                  <p className="font-display text-3xl font-bold text-success">82<span className="text-base text-muted-foreground">/100</span></p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ReportRow level="red" title="Rear frame rail repainted" body="Body filler detected in right quarter panel." />
              <ReportRow level="yellow" title="Front brake pads worn to 4mm" body="Rotors show minor lip." />
              <ReportRow level="green" title="Transmission shifts smoothly" body="OBD system scan shows no active errors." />
              <div className="rounded-2xl bg-surface border border-border p-5 mt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Inspector's Debrief Notes</p>
                <p className="text-sm text-foreground/80 italic leading-relaxed">
                  "The car presents well aesthetically, but paint thickness mapping confirms a non-factory respray
                  on the passenger side. Diagnostic scan pulled a historical engine code (P0300 misfire) but no
                  active warning lights."
                </p>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5"><Camera className="h-3.5 w-3.5" /> Digital PDF includes 84 high-definition photos of every finding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportRow({ level, title, body }: { level: "red" | "yellow" | "green"; title: string; body: string }) {
  const colors = {
    red: "bg-destructive",
    yellow: "bg-warning",
    green: "bg-success",
  } as const;
  return (
    <div className="flex gap-3">
      <span className={`mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0 ${colors[level]}`} />
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{body}</p>
      </div>
    </div>
  );
}

/* ---------- Reviews preview ---------- */
function ReviewsPreview() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-prime py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionLabel>Real buyers</SectionLabel>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
            What our buyers say.
          </h2>
        </div>

        <figure className="max-w-3xl mx-auto rounded-3xl bg-card border border-border shadow-elegant p-8 md:p-12 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-warning text-warning" />
            ))}
          </div>
          <blockquote className="font-display text-xl md:text-2xl leading-relaxed text-foreground text-balance">
            "Bought this car from 800 miles away. PrimeInspect found hidden body filler on the
            rear quarter panel and a transmission oil leak that the dealer tried to hide.
            Saved me from a $6,000 mistake."
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <p className="font-semibold text-foreground">Michael T.</p>
            <p className="text-muted-foreground">Out-of-State Buyer · 2019 Porsche Cayman S</p>
          </figcaption>
        </figure>

        <div className="mt-8 text-center">
          <Link to="/reviews" className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1">
            Read all reviews <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="container-prime py-20 md:py-28">
      <div className="relative rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 overflow-hidden shadow-premium">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="relative max-w-2xl">
          <Clock className="h-8 w-8 text-accent mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
            Do not guess. Inspect before you buy.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            Identify issues with paint thickness, check codes, review detailed undercar photos,
            and ensure you pay a fair price. Secure your inspection today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-7 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground text-base">
              <Link to="/book">Book Your Inspection <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 rounded-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base">
              <a href="tel:+18005557746"><Phone className="mr-2 h-4 w-4" /> Call an Inspector</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable ---------- */
function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase ${dark ? "text-accent" : "text-accent"}`}>
      <span className="h-px w-8 bg-accent" />
      {children}
    </span>
  );
}
