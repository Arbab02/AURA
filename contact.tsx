import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Calendar as CalIcon, Car, MapPin, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Inspection — PrimeInspect" },
      { name: "description", content: "Book your mobile pre-purchase vehicle inspection in under 3 minutes. Select a package, share vehicle and seller details, done." },
      { property: "og:title", content: "Book Your Inspection — PrimeInspect" },
      { property: "og:description", content: "Schedule a PrimeInspect mobile inspection in under 3 minutes." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const packages = [
  { id: "standard", name: "Standard", price: 50, desc: "Core verification" },
  { id: "premium",  name: "Premium",  price: 100, desc: "Most popular — OBD + history", featured: true },
  { id: "elite",    name: "Elite",    price: 150, desc: "Priority + telephone brief" },
];

function BookPage() {
  const [pkg, setPkg] = useState("premium");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Booking received", { description: "Our dispatch team will contact you shortly." });
    }, 900);
  };

  if (done) return <BookingSuccess />;

  return (
    <>
      <section className="container-prime pt-16 pb-8 md:pt-24">
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent">
          ── Book inspection
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          Schedule your inspection.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Takes under 3 minutes. Our dispatch team will reach out to the seller within hours.
        </p>
      </section>

      <section className="container-prime pb-20">
        <form onSubmit={onSubmit} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Section icon={Car} title="Vehicle Details" sub="Tell us about the car you're inspecting">
              <div className="grid sm:grid-cols-3 gap-5">
                <Field id="year" label="Year" required />
                <Field id="make" label="Make" required />
                <Field id="model" label="Model" required />
              </div>
              <Field id="vin" label="VIN (optional)" />
              <Field id="mileage" label="Mileage (approximate)" type="number" />
            </Section>

            <Section icon={MapPin} title="Seller & Location" sub="Where is the vehicle located?">
              <Field id="sellerName" label="Seller name" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="sellerPhone" label="Seller phone" type="tel" required />
                <Field id="sellerEmail" label="Seller email (optional)" type="email" />
              </div>
              <Field id="address" label="Vehicle address" required />
              <div className="grid sm:grid-cols-3 gap-5">
                <Field id="city" label="City" required />
                <Field id="state" label="State" required />
                <Field id="zip" label="ZIP" required />
              </div>
            </Section>

            <Section icon={CalIcon} title="Preferred Schedule" sub="When would you like the inspection?">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="date" label="Preferred date" type="date" required />
                <Field id="time" label="Preferred time window" placeholder="e.g. Morning, Afternoon" required />
              </div>
              <div>
                <Label htmlFor="notes" className="text-sm font-medium">Notes for the inspector (optional)</Label>
                <Textarea id="notes" name="notes" rows={3} className="mt-2 rounded-xl resize-none" placeholder="Anything specific you want us to look at?" />
              </div>
            </Section>

            <Section icon={User} title="Your Contact" sub="Where should we send the report?">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="buyerName" label="Your name" required />
                <Field id="buyerPhone" label="Phone" type="tel" required />
              </div>
              <Field id="buyerEmail" label="Email (report delivery)" type="email" required />
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-elegant">
                <h3 className="font-display text-lg font-semibold">Select Package</h3>
                <RadioGroup value={pkg} onValueChange={setPkg} className="mt-4 space-y-3">
                  {packages.map((p) => {
                    const selected = pkg === p.id;
                    return (
                      <label
                        key={p.id}
                        htmlFor={`pkg-${p.id}`}
                        className={`flex items-center justify-between rounded-2xl border-2 p-4 cursor-pointer transition-all ${selected ? "border-accent bg-accent/5" : "border-border hover:border-foreground/20"}`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={p.id} id={`pkg-${p.id}`} />
                          <div>
                            <p className="font-semibold text-sm flex items-center gap-2">
                              {p.name}
                              {p.featured && <span className="text-[9px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-1.5 py-0.5 rounded">Popular</span>}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                          </div>
                        </div>
                        <p className="font-display font-bold">${p.price}</p>
                      </label>
                    );
                  })}
                </RadioGroup>

                <div className="mt-6 pt-6 border-t border-border space-y-2 text-sm">
                  <Row k="Package" v={packages.find((p) => p.id === pkg)!.name} />
                  <Row k="Service fee" v="$0" />
                  <Row k="Total" v={`$${packages.find((p) => p.id === pkg)!.price}`} bold />
                </div>

                <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full rounded-full bg-primary hover:bg-primary/90 h-12">
                  {submitting ? "Processing..." : <>Confirm Booking <ArrowRight className="ml-2 h-4 w-4" /></>}
                </Button>
                <p className="mt-3 text-[11px] text-muted-foreground text-center">
                  Secure booking · You'll only be charged after the inspection is scheduled.
                </p>
              </div>

              <div className="rounded-2xl bg-surface border border-border p-5 text-xs text-muted-foreground space-y-2">
                <p className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" /> Free cancellation up to 4 hours before</p>
                <p className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" /> Seller coordination handled</p>
                <p className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" /> Digital report delivered same day</p>
              </div>
            </div>
          </aside>
        </form>
      </section>
    </>
  );
}

function Section({ icon: Icon, title, sub, children }: { icon: typeof Car; title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7 md:p-8 shadow-soft">
      <div className="flex items-start gap-4 mb-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground flex-shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{sub}</p>
        </div>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({ id, label, type = "text", required, placeholder }: { id: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium">{label}</Label>
      <Input id={id} name={id} type={type} required={required} placeholder={placeholder} className="mt-2 rounded-xl h-11" />
    </div>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span className={bold ? "font-display font-bold text-lg" : "font-medium"}>{v}</span>
    </div>
  );
}

function BookingSuccess() {
  return (
    <section className="container-prime py-24 max-w-2xl text-center">
      <div className="grid h-20 w-20 mx-auto place-items-center rounded-full bg-success/10 text-success">
        <CheckCircle2 className="h-10 w-10" />
      </div>
      <h1 className="mt-8 font-display text-4xl md:text-5xl font-bold">Booking received.</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Our dispatch team will contact the seller within the next 1–4 hours and confirm the
        inspection time. You'll receive an email confirmation shortly.
      </p>
      <div className="mt-10 rounded-3xl bg-surface border border-border p-6 text-left">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">What happens next</p>
        <ol className="mt-3 space-y-2 text-sm">
          <li>1. Dispatch coordinates with the seller</li>
          <li>2. Certified inspector visits the vehicle on-site</li>
          <li>3. Digital report delivered to your inbox same day</li>
        </ol>
      </div>
    </section>
  );
}
