import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sample-report")({
  head: () => ({
    meta: [
      { title: "Sample Inspection Report — PrimeInspect" },
      { name: "description", content: "Preview a real PrimeInspect pre-purchase vehicle inspection report — condition score, red flags, maintenance notes, inspector debrief." },
      { property: "og:title", content: "Sample Inspection Report — PrimeInspect" },
      { property: "og:description", content: "See exactly what you receive in a PrimeInspect report." },
      { property: "og:url", content: "/sample-report" },
    ],
    links: [{ rel: "canonical", href: "/sample-report" }],
  }),
  component: SampleReportPage,
});

const findings = [
  { lvl: "red", title: "Rear frame rail repainted", body: "Body filler detected in right quarter panel; paint thickness 412 µm vs factory 118 µm. Likely past collision repair." },
  { lvl: "red", title: "Historical engine code P0300", body: "Random misfire code stored in ECU memory, cleared approximately 10 miles ago. No active warnings." },
  { lvl: "yellow", title: "Front brake pads at 4mm", body: "Rotors show minor lip. Pads will need replacement within 5,000–8,000 miles." },
  { lvl: "yellow", title: "Minor oil seep — valve cover gasket", body: "No active leak, but residue suggests gasket aging. Monitor over next 3,000 miles." },
  { lvl: "green", title: "Transmission shifts smoothly", body: "Full throttle and part-throttle shifts crisp. Fluid clean and at proper level." },
  { lvl: "green", title: "OBD system scan — no active errors", body: "All readiness monitors complete and passed." },
  { lvl: "green", title: "Tires within healthy spec", body: "Tread 7/32\" all corners. Manufacture date 2022." },
];

const levelStyles = {
  red: { dot: "bg-destructive", label: "Red Flag", chip: "bg-destructive/10 text-destructive" },
  yellow: { dot: "bg-warning", label: "Maintenance", chip: "bg-warning/15 text-warning-foreground" },
  green: { dot: "bg-success", label: "Passed", chip: "bg-success/10 text-success" },
} as const;

function SampleReportPage() {
  return (
    <>
      <section className="container-prime pt-16 pb-12 md:pt-24">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── Sample Report
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          See exactly what you receive.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Every PrimeInspect report follows the same clear structure — a condition score,
          categorized findings, and a personal debrief from your inspector.
        </p>
      </section>

      <section className="container-prime pb-20">
        <div className="rounded-3xl border border-border bg-card shadow-premium overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
            <div className="relative grid md:grid-cols-3 gap-6 items-end">
              <div className="md:col-span-2">
                <p className="text-xs font-mono tracking-wider text-accent">INSPECTION REPORT #INS-2024-08412</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">2018 Ford Mustang GT</h2>
                <p className="mt-2 text-sm text-primary-foreground/70 font-mono">
                  VIN: 1FA6P8CF9J5XXXXXX · 42,310 mi · 5.0L V8 · Manual
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Inspector: J. Martinez (ASE #M2245678) · Inspected Aug 14, 2024 · Dallas, TX
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60">Condition Score</p>
                <p className="font-display text-6xl font-bold text-success leading-none mt-1">82<span className="text-2xl text-primary-foreground/50">/100</span></p>
                <p className="text-xs text-primary-foreground/70 mt-1">Good — Minor repairs needed</p>
              </div>
            </div>
          </div>

          {/* Summary chips */}
          <div className="grid grid-cols-3 border-b border-border">
            <SummaryCell n="2" label="Red Flags" tone="destructive" />
            <SummaryCell n="2" label="Maintenance" tone="warning" />
            <SummaryCell n="3" label="Passed" tone="success" />
          </div>

          {/* Findings */}
          <div className="p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold mb-6">Detailed Findings</h3>
            <ul className="space-y-5">
              {findings.map((f, i) => {
                const s = levelStyles[f.lvl as keyof typeof levelStyles];
                return (
                  <li key={i} className="flex gap-4 pb-5 border-b border-border last:border-0 last:pb-0">
                    <span className={`mt-2 h-2.5 w-2.5 rounded-full flex-shrink-0 ${s.dot}`} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <h4 className="font-semibold">{f.title}</h4>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${s.chip}`}>{s.label}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 rounded-2xl bg-surface border border-border p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Inspector's Debrief Notes</p>
              <p className="text-foreground/80 italic leading-relaxed">
                "The car presents well aesthetically, but paint thickness mapping confirms a non-factory respray
                on the passenger side. A computer diagnostic scan pulled a historical engine code (P0300 misfire)
                but no active warning lights. Recommended to inspect brake replacement timelines soon. Overall,
                a solid candidate at the right price — negotiate based on the bodywork history."
              </p>
              <p className="mt-4 text-sm font-medium">— J. Martinez, ASE Certified Inspector</p>
            </div>

            <p className="mt-6 text-xs text-muted-foreground flex items-center gap-2">
              <Camera className="h-4 w-4" /> Full report includes 84 high-definition photos of every finding.
            </p>
          </div>

          <div className="border-t border-border bg-surface p-6 flex flex-wrap gap-3 justify-between items-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <FileText className="h-4 w-4" /> Sample report — for demonstration only
            </p>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full" disabled>
                <Download className="mr-2 h-4 w-4" /> Download PDF Sample
              </Button>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <Link to="/book">Book Your Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SummaryCell({ n, label, tone }: { n: string; label: string; tone: "destructive" | "warning" | "success" }) {
  const toneText = {
    destructive: "text-destructive",
    warning: "text-warning",
    success: "text-success",
  }[tone];
  return (
    <div className="p-6 text-center border-r border-border last:border-0">
      <p className={`font-display text-4xl font-bold ${toneText}`}>{n}</p>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
