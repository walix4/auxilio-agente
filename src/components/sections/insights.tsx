"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const INSIGHTS = [
  {
    tag: "Architecture",
    title: "Inside the 5-second dispatch: how Auxilio collapses the response loop",
    description:
      "An engineering tour of the geospatial Redis layer, parallel WebSocket fan-out, and AI validation pipeline that activates fifty officers from a single tap.",
    date: "Feb 10, 2026",
    readTime: "9 min read",
  },
  {
    tag: "Public Safety",
    title: "Why software is replacing $100M of public-safety hardware",
    description:
      "Radios, plate scanners, dispatch terminals, and radar guns — the hardware stack of legacy law enforcement is being absorbed into a single AI-native mobile platform.",
    date: "Jan 28, 2026",
    readTime: "12 min read",
  },
  {
    tag: "Encryption",
    title: "Encrypted incident channels: building tamper-resistant comms",
    description:
      "How we engineered ephemeral, role-scoped radio rooms with audit-grade evidence logging — and why government deployments demand them as table stakes.",
    date: "Jan 14, 2026",
    readTime: "7 min read",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-20 mask-radial" />
        <div className="absolute -bottom-32 right-1/3 h-[420px] w-[820px] rounded-full bg-steel-700/15 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Field Briefings"
            title={
              <>
                Engineering notes from<br />
                <span className="gradient-text-signal">the response edge.</span>
              </>
            }
            description="Architecture deep-dives, deployment field reports, and original research on how AI-native infrastructure is reshaping emergency coordination."
          />
          <Button variant="outline" size="md" className="self-start lg:self-auto">
            View all briefings
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {INSIGHTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all hover:border-white/15 hover:bg-white/[0.035]"
            >
              <div
                aria-hidden
                className="relative h-44 w-full overflow-hidden border-b border-white/[0.06]"
              >
                <div className="absolute inset-0 bg-grid-fine bg-grid-sm opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-br from-signal-500/15 via-transparent to-steel-700/20" />
                <div className="absolute inset-x-6 bottom-5 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-haze-300">
                  <span className="rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 backdrop-blur">
                    {post.tag}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                  <Calendar className="size-3" />
                  {post.date}
                </div>
                <h3 className="mt-4 font-display text-[18px] font-semibold leading-[1.3] tracking-[-0.015em] text-white">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-[1.6] text-haze-300">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 font-mono text-[10.5px] uppercase tracking-[0.18em]">
                  <span className="text-haze-400">Read briefing</span>
                  <span className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-haze-300 transition-colors group-hover:border-signal-500/40 group-hover:text-signal-300">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
