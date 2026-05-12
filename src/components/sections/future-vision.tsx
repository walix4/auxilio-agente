"use client";

import { motion } from "framer-motion";
import { Globe2, Orbit, Radar, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Predictive intelligence",
    detail:
      "Forecasted incident probability surfaces — pre-positioning officers before the call comes.",
  },
  {
    icon: Globe2,
    title: "City-scale coordination",
    detail:
      "Cross-agency, cross-jurisdiction, cross-modality dispatch as a single municipal fabric.",
  },
  {
    icon: Orbit,
    title: "Autonomous response optimization",
    detail:
      "AI continuously rewrites dispatch policy under closed-loop reinforcement — measurably better, daily.",
  },
  {
    icon: Radar,
    title: "Software-defined emergency systems",
    detail:
      "Hardware fleets become endpoints. Public safety becomes a programmable surface.",
  },
];

export function FutureVision() {
  return (
    <section className="relative isolate scroll-mt-32 overflow-hidden py-28 lg:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-700/10 blur-[180px]" />
      </div>

      {/* Big orbital sphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
      >
        <div className="relative size-[820px] max-w-[90vw] max-h-[90vw]">
          {[1, 2, 3, 4].map((r) => (
            <motion.div
              key={r}
              className="absolute inset-0 rounded-full border border-white/[0.06]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 60 + r * 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transform: `rotateX(${r * 12}deg)`,
              }}
            >
              <span className="absolute -top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-signal-400 shadow-[0_0_12px_rgba(255,85,96,0.8)]" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Future Vision"
          title={
            <>
              AI-native<br />
              <span className="gradient-text-signal">public safety infrastructure.</span>
            </>
          }
          description="The next decade of public safety will not be defined by faster radios or smarter scanners. It will be defined by the coordination layer — and Auxilio is building it."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/[0.08] bg-ink-950/50 p-5 backdrop-blur-md"
            >
              <div className="flex size-10 items-center justify-center rounded-xl border border-signal-500/30 bg-signal-500/10 text-signal-300">
                <p.icon className="size-[18px]" />
              </div>
              <div className="mt-4 font-display text-[14.5px] font-semibold text-white">
                {p.title}
              </div>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-haze-300">
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
