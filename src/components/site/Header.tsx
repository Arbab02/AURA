import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/sample-report", label: "Sample Report" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="container-prime flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group" aria-label="PrimeInspect home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-elegant transition-transform group-hover:scale-105">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Prime<span className="text-accent">Inspect</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-muted"
              activeProps={{ className: "text-foreground bg-muted" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex h-10 px-5 rounded-full bg-primary hover:bg-primary/90 shadow-elegant">
            <Link to="/book">Book Inspection</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prime flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium rounded-md hover:bg-muted"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <Link to="/book" onClick={() => setOpen(false)}>Book Inspection</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
