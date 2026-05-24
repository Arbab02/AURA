@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

/*
 * PrimeInspect — Premium White Edition
 * Palette: white base, deep navy primary, accent blue
 * Typography: Urbanist (display) + Epilogue (body)
 */

@theme inline {
  --font-sans: "Epilogue", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Urbanist", ui-sans-serif, system-ui, sans-serif;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-surface: var(--surface);
  --color-surface-foreground: var(--surface-foreground);
}

:root {
  --radius: 1rem;

  /* Core surfaces */
  --background: oklch(1 0 0);
  --foreground: oklch(0.18 0.04 265);
  --surface: oklch(0.975 0.008 250);
  --surface-foreground: oklch(0.18 0.04 265);

  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.04 265);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.04 265);

  /* Brand: deep navy primary, accent blue */
  --primary: oklch(0.22 0.06 265);
  --primary-foreground: oklch(0.99 0.003 250);
  --secondary: oklch(0.96 0.012 250);
  --secondary-foreground: oklch(0.22 0.06 265);
  --muted: oklch(0.965 0.008 250);
  --muted-foreground: oklch(0.48 0.025 260);
  --accent: oklch(0.58 0.12 250);
  --accent-foreground: oklch(0.99 0.003 250);

  --destructive: oklch(0.58 0.22 27);
  --destructive-foreground: oklch(0.99 0.003 250);
  --success: oklch(0.62 0.14 155);
  --success-foreground: oklch(0.99 0.003 250);
  --warning: oklch(0.78 0.15 75);
  --warning-foreground: oklch(0.18 0.04 265);

  --border: oklch(0.92 0.01 255);
  --input: oklch(0.92 0.01 255);
  --ring: oklch(0.58 0.12 250);

  /* Gradients & shadows */
  --gradient-primary: linear-gradient(135deg, oklch(0.22 0.06 265), oklch(0.38 0.1 255));
  --gradient-accent: linear-gradient(135deg, oklch(0.58 0.12 250), oklch(0.72 0.1 235));
  --gradient-hero: radial-gradient(ellipse at top right, oklch(0.97 0.02 250) 0%, oklch(1 0 0) 60%);

  --shadow-soft: 0 1px 2px 0 oklch(0.22 0.06 265 / 0.04), 0 4px 16px -2px oklch(0.22 0.06 265 / 0.06);
  --shadow-elegant: 0 8px 32px -8px oklch(0.22 0.06 265 / 0.12), 0 2px 6px oklch(0.22 0.06 265 / 0.04);
  --shadow-premium: 0 24px 64px -16px oklch(0.22 0.06 265 / 0.18), 0 4px 12px oklch(0.22 0.06 265 / 0.06);
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    font-feature-settings: "ss01", "cv11";
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
    font-weight: 700;
  }

  ::selection {
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
  }
}

@layer utilities {
  .bg-gradient-primary { background-image: var(--gradient-primary); }
  .bg-gradient-accent  { background-image: var(--gradient-accent); }
  .bg-gradient-hero    { background-image: var(--gradient-hero); }
  .shadow-soft     { box-shadow: var(--shadow-soft); }
  .shadow-elegant  { box-shadow: var(--shadow-elegant); }
  .shadow-premium  { box-shadow: var(--shadow-premium); }

  .container-prime {
    width: 100%;
    margin-inline: auto;
    padding-inline: 1.25rem;
    max-width: 80rem;
  }
  @media (min-width: 768px) {
    .container-prime { padding-inline: 2rem; }
  }

  .text-balance { text-wrap: balance; }
  .text-pretty  { text-wrap: pretty; }

  .grid-noise {
    background-image:
      linear-gradient(to right, oklch(0.22 0.06 265 / 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, oklch(0.22 0.06 265 / 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }
}
