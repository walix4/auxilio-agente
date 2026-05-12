"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TESTIMONIALS = [
  {
    quote:
      "Auxilio collapsed our dispatch loop from minutes into seconds. Fifty officers mobilized on a single tap — no radio call, no terminal lookup, no jurisdiction guesswork. It is the first software I have seen that actually replaces decades of fragmented hardware.",
    name: "Cameron Williamson",
    role: "Chief of Police, Metro Division",
    affiliation: "30,000-officer agency",
  },
  {
    quote:
      "Our students used to fumble through emergency hotlines. With silent SOS and geofenced response, we route the nearest authorized responder in under thirty seconds — without ever exposing identity to a bad actor on campus.",
    name: "Michel Karanazivius",
    role: "Director of Public Safety",
    affiliation: "Tier-1 university, 64,000 enrolled",
  },
  {
    quote:
      "We evaluated every command-center vendor on the market. Auxilio was the only platform built for AI-native coordination at city scale. Federated dispatch across agencies finally feels like infrastructure, not integration debt.",
    name: "Daniela Mellinetor",
    role: "Smart City Resilience Director",
    affiliation: "Municipal deployment, 2.1M residents",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-20 mask-radial" />
        <div className="absolute -top-32 right-1/4 h-[420px] w-[820px] rounded-full bg-signal-500/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Field Voices"
          title={
            <>
              The agencies running it<br />
              <span className="gradient-text-signal">say it best.</span>
            </>
          }
          description="From metropolitan police forces to university campuses to smart-city operators — operators on the ground describe what changes when dispatch becomes software-defined."
        />

        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all hover:border-white/15 hover:bg-white/[0.035]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-signal-500/10 blur-[80px] opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl border border-signal-500/25 bg-signal-500/10 text-signal-300">
                  <Quote className="size-4" />
                </div>
                <div className="flex gap-0.5 text-signal-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="mt-6 flex-1 text-[14.5px] leading-[1.65] text-haze-200">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-7 border-t border-white/[0.06] pt-5">
                <div className="font-display text-[15px] font-semibold tracking-[-0.01em] text-white">
                  {t.name}
                </div>
                <div className="mt-1 text-[12.5px] leading-[1.45] text-haze-300">
                  {t.role}
                </div>
                <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                  {t.affiliation}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
