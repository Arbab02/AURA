import { Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-prime py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">
                Prime<span className="text-accent">Inspect</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Independent mobile pre-purchase vehicle inspections. Inspect before you invest.
            </p>
          </div>

          <FooterCol title="Company" links={[
            { to: "/", label: "Home" },
            { to: "/how-it-works", label: "How It Works" },
            { to: "/reviews", label: "Reviews" },
            { to: "/contact", label: "Contact" },
          ]} />

          <FooterCol title="Services" links={[
            { to: "/services", label: "All Services" },
            { to: "/packages", label: "Packages & Pricing" },
            { to: "/sample-report", label: "Sample Report" },
            { to: "/faq", label: "FAQ" },
          ]} />

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +1 (800) 555-7746</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@primeinspect.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Nationwide US Mobile</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PrimeInspect. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            ASE Certified · Independent · Buyer-First
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
