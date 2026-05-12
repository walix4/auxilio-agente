"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Apple, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgentCta() {
  return (
    <section id="download" className="relative overflow-hidden bg-white py-32 text-[#0B1735]">
      <div className="absolute inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.5] mask-radial"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,23,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,23,53,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 size-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-100/60 blur-[140px]" />
      </div>

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-md border border-signal-500/30 bg-signal-50 px-3 py-1.5">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
              <span className="relative size-1.5 rounded-full bg-signal-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-700">
              Available now · iOS 16+ · Android 13+
            </span>
          </div>

          <h2 className="mt-7 font-display text-display-lg font-medium tracking-[-0.04em] text-[#0B1735] text-balance">
            Put Auxilio Agente on{" "}
            <span className="text-signal-600">every badge.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-[1.6] text-slate-600 text-pretty">
            Government-vetted distribution. Department-wide rollout in under 48
            hours. Single sign-on against your existing officer roster.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild className="rounded-lg">
              <a href="#">
                <Apple className="size-4" />
                Download on App Store
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="rounded-lg border border-[#0B1735]/15 bg-white text-[#0B1735] shadow-none hover:bg-slate-50 hover:border-[#0B1735]/30"
            >
              <a href="#">
                <PlayStoreIcon />
                Get it on Google Play
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="rounded-lg bg-transparent text-[#0B1735] hover:bg-slate-100"
            >
              <Link href="/#cta">
                Department rollout
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-500">
            <span>SOC 2 Type II</span>
            <span className="size-1 rounded-full bg-slate-300" />
            <span>CJIS Compliant</span>
            <span className="size-1 rounded-full bg-slate-300" />
            <span>AES-256 Channel</span>
            <span className="size-1 rounded-full bg-slate-300" />
            <span>Zero-trust Auth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        d="M3.5 1.7 L13.5 11.6 L17.2 7.9 Z M3.5 22.3 L17.2 16.1 L13.5 12.4 Z M2 2.5 L2 21.5 L12.6 12 Z M18.4 8.6 L22.1 10.7 Q 22.9 11.2 22.9 12 Q 22.9 12.8 22.1 13.3 L18.4 15.4 L14.6 11.6 Z"
        fill="currentColor"
      />
    </svg>
  );
}
