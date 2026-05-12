# Auxilio

> Your Safety, Your Control.
> Emergency response, rebuilt for the AI era.

A premium, investor-grade marketing site for **Auxilio** — an AI-powered emergency response infrastructure platform that replaces outdated dispatch systems with real-time AI coordination, simultaneous responder mobilization, and software-defined public safety infrastructure.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** with custom design tokens (`ink`, `signal`, `steel`, `haze` palettes)
- **Framer Motion** for animation
- **Lenis** for smooth scrolling
- **Lucide** icons
- **CVA** + **Radix Slot** for typed component variants

## Theme

Red (signal) + dark blue (ink / steel). Calibrated for a calm-under-pressure, mission-critical command center feel.

## Structure

```
src/
├── app/
│   ├── layout.tsx           — Root layout, fonts, Lenis, navbar, footer
│   ├── page.tsx             — Composed home page (18 sections)
│   └── globals.css          — Design tokens, Lenis styles, masks
├── components/
│   ├── lenis-provider.tsx
│   ├── navbar.tsx           — Sticky pill nav + mobile menu
│   ├── footer.tsx           — Big wordmark footer with index columns
│   ├── ui/
│   │   ├── button.tsx       — CVA variants
│   │   ├── badge.tsx
│   │   ├── ambient-grid.tsx
│   │   ├── logo.tsx
│   │   ├── section-heading.tsx
│   │   └── section-divider.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── live-dispatch.tsx          — Centerpiece interactive simulation
│       ├── how-it-works.tsx           — Sticky horizontal storytelling
│       ├── system-architecture.tsx    — 6-layer interactive diagram
│       ├── dispatch-engine.tsx        — Decision-graph visualization
│       ├── officer-platform.tsx       — Phone mockup + features
│       ├── criteria-database.tsx      — Relationship graph
│       ├── communication.tsx          — Citizen + officer dual-screen
│       ├── hardware-replacement.tsx   — Cost-savings comparison
│       ├── multi-transport.tsx
│       ├── use-cases.tsx
│       ├── security.tsx
│       ├── technical-architecture.tsx — Code panel + latency graph
│       ├── api-infrastructure.tsx     — Endpoint list + webhooks
│       ├── enterprise.tsx
│       ├── metrics.tsx                — Animated counter grid
│       ├── future-vision.tsx
│       └── cta-footer.tsx             — Animated world grid
└── lib/utils.ts
```

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design notes

- **Sections never sit naked** — every block has its own ambient glow + grid mask + radial fade.
- **Animations are deliberate**, not flashy. Reduced-motion is respected.
- **Typography**: Inter for everything; tracking and leading hand-tuned per scale.
- **Live dispatch** is the centerpiece — click "Trigger SOS" to run the 5-second pipeline.
