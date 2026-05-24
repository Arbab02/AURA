import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — PrimeInspect" },
      { name: "description", content: "Real reviews from used-car buyers, collectors, and out-of-state buyers who trusted PrimeInspect." },
      { property: "og:title", content: "Reviews — PrimeInspect" },
      { property: "og:description", content: "Real buyer testimonials from PrimeInspect inspections." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Michael T.", role: "Out-of-State Buyer · 2019 Porsche Cayman S", text: "Bought this car from 800 miles away. PrimeInspect found hidden body filler on the rear quarter panel and a transmission oil leak that the dealer tried to hide. Saved me from a $6,000 mistake. The phone call debrief was incredibly reassuring." },
  { name: "Sarah K.", role: "First-time Buyer · 2017 Honda Civic", text: "I had no idea what to look for. Their report gave me confidence to negotiate $1,200 off based on the brake and tire findings. Easy to read and the photos were a game changer." },
  { name: "Daniel R.", role: "Classic Collector · 1969 Mustang Fastback", text: "Specialized classic inspection caught a rebuilt firewall I would never have noticed. The inspector was clearly experienced with vintage cars." },
  { name: "Priya M.", role: "Used EV Buyer · 2021 Tesla Model 3", text: "The battery health analysis was exactly what I needed. Found a degraded cell pack the seller didn't disclose. Walked away from the deal." },
  { name: "James L.", role: "Dealer Trade · 2020 RAM 1500", text: "Booked Elite for same-day. Inspector was on site within 4 hours and I had the report that night. Bought the truck with full confidence." },
  { name: "Aisha N.", role: "Family Buyer · 2018 Toyota Sienna", text: "Comprehensive, clear, and reasonably priced. The red flag/yellow flag system made decision-making simple. Recommended to everyone I know." },
];

const stats = [
  { v: "4.9", l: "Average rating" },
  { v: "12k+", l: "Inspections completed" },
  { v: "$8.2M", l: "Saved for buyers in 2024" },
  { v: "98%", l: "Would recommend" },
];

function ReviewsPage() {
  return (
    <>
      <section className="container-prime pt-16 pb-12 md:pt-24">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── Reviews
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          What our buyers say.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Read real experiences from out-of-state buyers, collectors, and everyday car seekers
          who trusted PrimeInspect before their purchase.
        </p>
      </section>

      <section className="container-prime pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-8 text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">{s.v}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prime pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((r) => (
            <figure key={r.name} className="break-inside-avoid rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <blockquote className="text-foreground/85 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <p className="font-semibold text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
            <Link to="/book">Book Your Inspection</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
