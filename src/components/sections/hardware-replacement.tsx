"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Gauge,
  Headphones,
  Monitor,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const REPLACED = [
  {
    icon: Headphones,
    title: "Land mobile radios",
    detail: "Per-officer radio fleet, repeaters, base stations.",
    cost: "$4,500 / officer",
    annual: "~$310 / yr",
  },
  {
    icon: Gauge,
    title: "Radar guns",
    detail: "Doppler radar, calibration, certification overhead.",
    cost: "$2,200 / unit",
    annual: "~$140 / yr",
  },
  {
    icon: Camera,
    title: "Plate scanners",
    detail: "Dedicated ALPR cameras, in-vehicle compute, datalinks.",
    cost: "$26,000 / vehicle",
    annual: "~$2,400 / yr",
  },
  {
    icon: Monitor,
    title: "Dispatch terminals",
    detail: "MDT hardware, ruggedized mounts, CAD licensing.",
    cost: "$5,800 / vehicle",
    annual: "~$1,100 / yr",
  },
];

export function HardwareReplacement() {
  return (
    <section className="relative isolate scroll-mt-32 py-28 lg:py-40">
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-signal-700/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Hardware Replacement · Cost Savings"
          title={
            <>
              <span className="gradient-text-signal">$100M+ in hardware,</span>
              <br />
              replaced by software.
            </>
          }
          description="Auxilio collapses four hardware fleets into one AI-powered mobile platform — eliminating procurement cycles, certification overhead, and the maintenance bill that comes with them."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Replaced grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {REPLACED.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
                >
                  {/* Strikethrough effect line */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-5 right-5 top-1/2 h-px origin-left scale-x-0 bg-gradient-to-r from-signal-500/60 via-signal-500/40 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                  />
                  <div className="flex items-start justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-haze-300">
                      <item.icon className="size-[18px]" />
                    </div>
                    <span className="rounded-full border border-signal-500/30 bg-signal-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-300">
                      replaced
                    </span>
                  </div>
                  <div className="mt-4 font-display text-[15px] font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[12.5px] text-haze-400">{item.detail}</div>
                  <div className="mt-4 flex items-end justify-between border-t border-white/[0.06] pt-3 font-mono text-[10.5px] uppercase tracking-[0.18em]">
                    <div>
                      <div className="text-haze-500">capex</div>
                      <div className="mt-0.5 text-haze-200">{item.cost}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-haze-500">opex</div>
                      <div className="mt-0.5 text-haze-200">{item.annual}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Replacement card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7 }}
              className="relative panel-deep h-full overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              {/* Glow accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-signal-500/15 blur-[80px]"
              />

              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-300">
                <ArrowRight className="size-3.5" /> Replaced by
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-500 to-signal-700 text-white shadow-glow-signal">
                  <Smartphone className="size-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                    Auxilio Agent
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-300">
                    one mobile platform · zero new hardware
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[14.5px] leading-[1.6] text-haze-300">
                One device. One software stack. Encrypted radio, plate
                recognition, dispatch terminal, and AI intelligence —
                interchangeable across vehicle, foot, motorcycle, and air units.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <Stat label="Cost / officer" value="-94%" sub="vs hardware fleet" />
                <Stat label="Deploy time" value="< 1 day" sub="per agency" />
                <Stat label="Certification" value="0" sub="hardware to recert" />
                <Stat label="Total saved" value="$100M+" sub="at city scale" />
              </div>

              {/* Big total bar */}
              <div className="mt-7 rounded-2xl border border-signal-500/40 bg-signal-500/[0.06] p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-signal-200">
                      Capex eliminated · pilot city (2,500 officers)
                    </div>
                    <div className="mt-1 font-display text-3xl font-semibold tabular-nums tracking-[-0.02em] text-white">
                      $96.2M
                    </div>
                  </div>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-signal-200">
                    yr 1
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-signal-700 via-signal-500 to-signal-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
        {label}
      </div>
      <div className="mt-1.5 font-display text-xl font-semibold tabular-nums text-white">
        {value}
      </div>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-haze-500">
        {sub}
      </div>
    </div>
  );
}
