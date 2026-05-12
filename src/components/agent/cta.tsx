"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Apple, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AgentCta() {
  return (
    <section id="download" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-50 mask-radial" />
        <div className="absolute left-1/2 top-1/2 size-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-700/15 blur-[140px]" />
      </div>

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-md border border-signal-500/25 bg-signal-500/[0.06] px-3 py-1.5 backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
              <span className="relative size-1.5 rounded-full bg-signal-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-200">
              Available now · iOS 16+ · Android 13+
            </span>
          </div>

          <h2 className="mt-7 font-display text-display-lg font-medium tracking-[-0.04em] text-white text-balance">
            Put Auxilio Agente on{" "}
            <span className="gradient-text-signal">every badge.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-[1.6] text-haze-300 text-pretty">
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
            <Button variant="outline" size="lg" asChild className="rounded-lg">
              <a href="#">
                <PlayStoreIcon />
                Get it on Google Play
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="rounded-lg">
              <Link href="/#cta">
                Department rollout
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
            <span>SOC 2 Type II</span>
            <span className="size-1 rounded-full bg-haze-500" />
            <span>CJIS Compliant</span>
            <span className="size-1 rounded-full bg-haze-500" />
            <span>AES-256 Channel</span>
            <span className="size-1 rounded-full bg-haze-500" />
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
