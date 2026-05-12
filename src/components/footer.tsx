"use client";

import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const COLS = [
  {
    title: "Agente",
    links: [
      { label: "Accept emergency", href: "#features" },
      { label: "Navigate live", href: "#features" },
      { label: "Field network", href: "#features" },
      { label: "Incident capture", href: "#features" },
      { label: "Officer control", href: "#features" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "App Store", href: "#download" },
      { label: "Google Play", href: "#download" },
      { label: "System requirements", href: "#download" },
    ],
  },
  {
    title: "Departments",
    links: [
      { label: "Rollout in 48h", href: "#download" },
      { label: "Single sign-on", href: "#download" },
      { label: "Compliance", href: "#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#download" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-50 mask-fade-b" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10 pt-24 pb-10">
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-haze-400 mb-4">
            // The badge in your pocket
          </p>
          <h3
            aria-hidden
            className="font-display text-[clamp(3.5rem,12vw,11rem)] font-black leading-none tracking-[-0.05em] text-stroke select-none"
          >
            AGENTE
          </h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-haze-300">
              Auxilio Agente is the field app for badged responders — one tap to
              accept, live nav to the scene, and full incident capture on the
              ground.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
              <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
              iOS 16+ · Android 13+
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-haze-400">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-[13.5px] text-haze-200 transition-colors hover:text-white"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline-x mt-16 mb-6" />

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-haze-400">
            <span>© 2026 Auxilio Systems, Inc.</span>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Trust Center</a>
            <a href="#" className="hover:text-white">SOC 2</a>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-haze-400">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              ▮
            </motion.span>
            v25.04 · build 4F2A1
          </div>
        </div>
      </div>
    </footer>
  );
}
