import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — PrimeInspect" },
      { name: "description", content: "Transparent inspection pricing: Standard $50, Premium $100, Elite $150. No hidden mileage fees." },
      { property: "og:title", content: "Packages & Pricing — PrimeInspect" },
      { property: "og:description", content: "Clear upfront pricing for mobile pre-purchase vehicle inspections." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

const packages = [
  {
    name: "Standard",
    price: 50,
    tag: "Core Vehicle Verification",
    desc: "Visual checks and road validation for everyday buyers.",
    feats: ["Visual multi-point check", "Structural evaluation", "Comprehensive road validation test", "Digital condition report", "40+ HD photos"],
  },
  {
    name: "Premium",
    price: 100,
    tag: "Diagnostic & History",
    desc: "Buyers who want OBD scans and full vehicle history.",
    feats: ["All Standard services", "OBD computer fault diagnostic scan", "Full vehicle history report", "Inspector coordination with seller", "80+ HD photos"],
    featured: true,
  },
  {
    name: "Elite",
    price: 150,
    tag: "Priority & Briefing",
    desc: "Same-day scheduling and dedicated telephone brief.",
    feats: ["All Premium services", "1-on-1 dedicated telephone brief", "Priority same-day scheduling", "Buyer-first inspection advisory", "120+ HD photos"],
  },
];

const compare = [
  ["Physical Paint & Body Scan", "Yes (Paint Gauge)", "Rarely Checked", "No Check", "Subjective"],
  ["Live OBD2 Scan", "Yes (Module Code pull)", "Sometimes", "No Check", "Subjective"],
  ["High-Definition Photos", "Yes (40–120+)", "No photos", "No photos", "Angle photos"],
  ["Frame & Rust Scan", "Yes (Creep & inspect)", "On lift only", "No physical check", "Subjective"],
  ["Seller Coordination", "Yes (Full management)", "No", "No", "No"],
  ["Road Test Evaluation", "Yes (Under conditions)", "Sometimes", "No", "No"],
  ["Buyer-Focused Advocacy", "Yes (No upsell)", "Often upsells", "Independent DB", "Seller Biased"],
];

function PackagesPage() {
  return (
    <>
      <section className="container-prime pt-16 pb-12 md:pt-24 text-center">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── Packages
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto text-balance">
          Choose the right inspection package.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Clear upfront pricing. No hidden mileage fees. Select what fits your budget.
        </p>
      </section>

      <section className="container-prime pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-8 flex flex-col ${p.featured ? "border-primary bg-primary text-primary-foreground shadow-premium md:-translate-y-4" : "border-border bg-card shadow-soft"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </span>
              )}
              <p className={`text-xs font-medium uppercase tracking-wider ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.tag}</p>
              <h3 className={`mt-2 font-display text-2xl font-bold`}>{p.name} Service</h3>
              <p className={`mt-2 text-sm ${p.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">${p.price}</span>
                <span className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/ inspection</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${p.featured ? "text-accent" : "text-success"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`mt-8 rounded-full h-11 ${p.featured ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90"}`}>
                <Link to="/book">Select Package</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-prime py-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">── Compare</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Compare inspection options.</h2>
            <p className="mt-3 text-muted-foreground">
              Why a dedicated pre-purchase vehicle inspection stands out compared to basic alternatives.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-soft">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left p-5 font-semibold">Feature Evaluated</th>
                  <th className="text-left p-5 font-semibold text-accent">PrimeInspect</th>
                  <th className="text-left p-5 font-medium text-muted-foreground">Basic Mechanic</th>
                  <th className="text-left p-5 font-medium text-muted-foreground">History Report</th>
                  <th className="text-left p-5 font-medium text-muted-foreground">Seller Claims</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-0">
                    <td className="p-5 font-medium">{row[0]}</td>
                    <td className="p-5 text-foreground">
                      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" />{row[1]}</span>
                    </td>
                    {row.slice(2).map((cell, i) => (
                      <td key={i} className="p-5 text-muted-foreground">
                        {cell === "No" || cell === "No Check" || cell === "No physical check" || cell === "No photos" ? (
                          <span className="inline-flex items-center gap-1.5"><X className="h-4 w-4 text-destructive/70" />{cell}</span>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
