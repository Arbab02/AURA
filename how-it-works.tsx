import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — PrimeInspect" },
      { name: "description", content: "Answers to common questions about PrimeInspect pre-purchase vehicle inspections, pricing, reports, and scheduling." },
      { property: "og:title", content: "FAQ — PrimeInspect" },
      { property: "og:description", content: "Frequently asked questions about PrimeInspect inspections." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What is a pre-purchase vehicle inspection?", a: "A pre-purchase vehicle inspection (PPI) is a comprehensive third-party evaluation of a used vehicle's condition before you buy it. PrimeInspect covers 150+ checkpoints including mechanical, structural, electronic, and cosmetic systems — all documented with HD photos and OBD diagnostic codes." },
  { q: "Do I need to be present at the inspection?", a: "No. We handle all coordination with the seller. You'll never need to be on-site. We send you a complete digital report with photos and the inspector's notes once the inspection is complete." },
  { q: "Do you road test the car?", a: "Yes. Every PrimeInspect package includes a road test where the inspector evaluates acceleration, braking, transmission shifts, suspension behavior, alignment, and any unusual noises or vibrations under real driving conditions." },
  { q: "How fast do I receive the inspection report?", a: "Most reports are delivered the same day as the inspection. Standard and Premium packages typically deliver within a few hours of completion. Elite includes priority same-day scheduling plus a 1-on-1 telephone debrief." },
  { q: "Is this the same as a vehicle history report?", a: "No. A vehicle history report (like Carfax) shows registered events — accidents, ownership transfers, title status. A PrimeInspect inspection is a physical examination of the car's current mechanical and structural state. The Premium package includes both." },
  { q: "What if the inspector finds major issues?", a: "Major issues are flagged as Red Flags in your report with photos and detailed notes. You can use the report to negotiate a lower price, request repairs from the seller, or walk away from the deal entirely. PrimeInspect is buyer-first — we never upsell repairs." },
  { q: "Where do you operate?", a: "PrimeInspect operates nationwide across the United States with a network of certified mobile inspectors. When you book, we dispatch the closest available certified inspector to the vehicle's location." },
  { q: "Are your inspectors certified?", a: "Yes. Every PrimeInspect inspector is ASE certified (Automotive Service Excellence) with a minimum of 5 years of professional automotive experience. We verify credentials before any inspector joins our network." },
  { q: "Can I cancel or reschedule?", a: "Yes. You can cancel or reschedule up to 4 hours before the scheduled inspection time at no charge. Same-day cancellations may incur a partial service fee." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, Apple Pay, and Google Pay. Payment is processed securely at the time of booking." },
];

function FaqPage() {
  return (
    <>
      <section className="container-prime pt-16 pb-12 md:pt-24">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── Help center
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          Frequently asked questions.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Have questions? We've compiled clear answers. Still need help? Reach out anytime.
        </p>
      </section>

      <section className="container-prime pb-20 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl bg-card px-6 shadow-soft data-[state=open]:shadow-elegant transition-shadow">
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-3xl bg-surface border border-border p-8 text-center">
          <h3 className="font-display text-xl font-semibold">Still have questions?</h3>
          <p className="mt-2 text-muted-foreground">Our team is happy to help — typically within an hour.</p>
          <div className="mt-5 flex justify-center gap-3 flex-wrap">
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/book">Book Inspection</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
