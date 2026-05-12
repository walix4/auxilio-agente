"use client";

import { motion } from "framer-motion";
import { Bike, Car, Footprints, Plane, Sailboat, Truck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const UNITS = [
  {
    icon: Car,
    title: "Patrol vehicles",
    eta: "1m 42s",
    detail: "Cars, SUVs, K-9 units. Standard patrol fleet.",
    chip: "primary",
  },
  {
    icon: Bike,
    title: "Motorcycles",
    eta: "1m 08s",
    detail: "Lane-splitting urban response.",
    chip: "ground",
  },
  {
    icon: Footprints,
    title: "Foot patrols",
    eta: "0m 38s",
    detail: "On-scene officers in dense areas.",
    chip: "ground",
  },
  {
    icon: Plane,
    title: "Air units",
    eta: "2m 12s",
    detail: "Helicopters, drones, fixed-wing surveillance.",
    chip: "air",
  },
  {
    icon: Sailboat,
    title: "Marine units",
    eta: "3m 45s",
    detail: "Harbor, river, coastal response.",
    chip: "marine",
  },
  {
    icon: Truck,
    title: "Tactical / SWAT",
    eta: "4m 30s",
    detail: "Heavy response vehicles for high-severity incidents.",
    chip: "tactical",
  },
];

export function MultiTransport() {
  return (
    <section className="relative scroll-mt-32 py-28 lg:py-40">
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Multi-Transport Response Units"
          title={
            <>
              Transport-agnostic by design.<br />
              <span className="gradient-text-steel">Every unit is a first-class responder.</span>
            </>
          }
          description="Cars are not the API. Auxilio routes, ranks, and coordinates across every transport class — so the closest authorized responder is dispatched, regardless of how they get there."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {UNITS.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.035]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-[180px] w-[180px] rounded-full bg-steel-500/10 blur-[60px] opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border border-steel-500/30 bg-steel-500/10 text-steel-200">
                  <u.icon className="size-5" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-haze-300">
                  {u.chip}
                </span>
              </div>
              <div className="mt-5 font-display text-[16px] font-semibold tracking-[-0.01em] text-white">
                {u.title}
              </div>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-haze-300">
                {u.detail}
              </p>
              <div className="mt-4 flex items-end justify-between border-t border-white/[0.06] pt-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
                    sample ETA
                  </div>
                  <div className="font-display text-lg font-semibold tabular-nums text-white">
                    {u.eta}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-300">
                  <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
                  routable
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
