"use client";

import { motion } from "framer-motion";
import { Check, Bell, Tag, Star, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TIMELINE = [
  {
    t: "T+0.0s",
    title: "Push lands",
    body: "Encrypted dispatch packet arrives — the phone vibrates whether the screen is locked or not.",
    icon: Bell,
  },
  {
    t: "T+0.4s",
    title: "Context attached",
    body: "Victim photo, address, distance, ETA, and a 1-min acceptance window appear on the lock screen card.",
    icon: Tag,
  },
  {
    t: "T+1.2s",
    title: "Threat tags",
    body: "AI-classified tags — Urgent, Violence, Sexual, Robbery — load before the officer even unlocks.",
    icon: Star,
  },
  {
    t: "T+1 tap",
    title: "Accept Emergency",
    body: "One thumb. Channel opens, route locks, the cohort sees the officer is on the move.",
    icon: Check,
  },
];

export function DispatchAcceptance() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" id="features">
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="01 · Accept emergency"
              title={
                <>
                  From SOS to{" "}
                  <span className="gradient-text-signal">accepted</span> in a
                  single tap.
                </>
              }
              description="Officers don't scroll through queues. The closest, best-matched responders see the same card at the same time — and the first tap wins the call. No radio dispatch round-trip. No paper log. No lag."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {["Urgent", "Violence", "Sexual", "Robbery", "Hostage", "Pursuit"].map(
                (tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      i === 0
                        ? "bg-signal-600 text-white"
                        : "border border-white/10 bg-white/[0.04] text-haze-200"
                    }`}
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-4">
              <span
                aria-hidden
                className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-signal-500/40 via-white/10 to-transparent"
              />
              {TIMELINE.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative flex gap-4 panel-deep p-5 lg:p-6"
                >
                  <span className="relative shrink-0">
                    <span className="flex size-[54px] items-center justify-center rounded-xl bg-signal-500/10 ring-1 ring-signal-500/30">
                      <item.icon className="size-5 text-signal-300" />
                    </span>
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-signal-300">
                        {item.t}
                      </span>
                      <span className="h-px flex-1 bg-white/5" />
                    </div>
                    <h3 className="mt-1.5 font-display text-[18px] font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-[1.55] text-haze-300">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/[0.08] px-5 py-4"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-500/30">
                <Check className="size-4 text-green-400" />
              </span>
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-green-300">
                  Officer Arrived
                </div>
                <div className="font-display text-[15px] font-medium text-white">
                  Auto-confirmed via geofence · Family network notified
                </div>
              </div>
              <Clock className="ml-auto size-4 text-green-300" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
