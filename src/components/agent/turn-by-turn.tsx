"use client";

import { motion } from "framer-motion";
import { Footprints, Car, Clock, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "./phone-frame";

const METRICS = [
  { icon: Users, label: "Distance", value: "4.2m" },
  { icon: Clock, label: "Duration", value: "4.2m" },
  { icon: Car, label: "Driving", value: "4.2m" },
  { icon: Footprints, label: "Walking", value: "4.2m" },
];

export function TurnByTurn() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-12 -z-10 bg-radial-steel blur-3xl" />
              <PhoneFrame
                src="/agent-screens/route-map.png"
                alt="Auxilio Agente — Route navigation screen"
                height={680}
              />
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading
              eyebrow="02 · Navigate live"
              title={
                <>
                  Turn-by-turn routing,{" "}
                  <span className="gradient-text-steel">cohort-aware</span> the
                  whole way.
                </>
              }
              description="The map doesn't just show the incident — it shows every other Auxilio officer converging on it. One-tap call to the victim, dispatch, partner, or supervisor lives on the right rail. The cohort sees your bearing in real time."
            />

            <div className="mt-10 grid grid-cols-2 gap-3 max-w-xl">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 panel rounded-xl px-4 py-3"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/10">
                    <m.icon className="size-4 text-steel-300" />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
                      {m.label}
                    </div>
                    <div className="font-display text-[18px] font-semibold text-white">
                      {m.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <ul className="mt-8 space-y-3 text-[14.5px] text-haze-200">
              {[
                "Real-time bearing of every responding officer on the same map.",
                "Right-rail quick actions: re-center, escalate, suspect intel, encrypted call.",
                "Auto-mute non-critical notifications once a dispatch is accepted.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
