"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple, Shield, Radio, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneFrame } from "./phone-frame";

export function AgentHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Background />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-md border border-signal-500/25 bg-signal-500/[0.06] px-3 py-1.5 backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
              <span className="relative size-1.5 rounded-full bg-signal-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-200">
              Auxilio Agente · iOS & Android
            </span>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-display-xl font-medium tracking-[-0.04em] text-white text-balance"
            >
              The badge in <br />
              <span className="gradient-text-signal">your pocket.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-7 max-w-xl text-[17px] leading-[1.6] text-haze-300 text-pretty"
            >
              Auxilio Agente turns every officer into a node in the dispatch
              network. Accept emergencies in one tap, navigate live to the
              incident, and capture everything that matters — from suspect tags
              to vehicle plates — straight from the field.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" asChild className="rounded-lg">
                <a href="#download">
                  <Apple className="size-4" />
                  Download Agente
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-lg">
                <a href="#features">
                  See it in action
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 max-w-2xl"
            >
              {[
                { v: "1-tap", l: "accept dispatch" },
                { v: "Live", l: "turn-by-turn nav" },
                { v: "Encrypted", l: "officer channel" },
                { v: "Offline", l: "incident capture" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                    {s.v}
                  </dt>
                  <dd className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                    {s.l}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-10 -z-10 bg-radial-fade blur-3xl" />
              <PhoneFrame
                src="/agent-screens/accept-emergency.jpg"
                alt="Auxilio Agente — Accept Emergency screen"
                height={680}
                priority
              />

              <FloatingChip
                className="-left-4 top-32 lg:-left-12"
                icon={Radio}
                title="Incoming dispatch"
                sub="04.8s after SOS"
                accent
              />
              <FloatingChip
                className="-right-2 bottom-36 lg:-right-10"
                icon={MapPin}
                title="2.1 mi · ETA 4 min"
                sub="Route locked"
              />
              <FloatingChip
                className="-left-2 bottom-12 lg:-left-14"
                icon={Shield}
                title="Encrypted channel"
                sub="ENC-7F · A2"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  className,
  icon: Icon,
  title,
  sub,
  accent,
}: {
  className?: string;
  icon: typeof Shield;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className={`absolute hidden md:block ${className}`}
    >
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-900/85 px-3.5 py-2.5 backdrop-blur-xl shadow-panel">
        <span
          className={`flex size-8 items-center justify-center rounded-lg ${
            accent
              ? "bg-signal-500/15 text-signal-300 ring-1 ring-signal-500/30"
              : "bg-white/[0.04] text-haze-200 ring-1 ring-white/10"
          }`}
        >
          <Icon className="size-3.5" />
        </span>
        <div>
          <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-haze-400">
            {title}
          </div>
          <div className="font-display text-[12.5px] font-medium text-white">
            {sub}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Background() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-50 mask-radial" />
        <div className="absolute inset-0 bg-grid-bold bg-grid-lg opacity-25 mask-fade-b" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[10%] left-1/3 h-[680px] w-[900px] -translate-x-1/2 rounded-full bg-signal-700/20 blur-[140px]" />
        <div className="absolute -bottom-[10%] right-[5%] h-[480px] w-[480px] rounded-full bg-steel-700/25 blur-[120px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[200vh] mask-fade-b"
      >
        <div className="absolute inset-x-0 h-[2px] scanline animate-scan" />
      </div>
    </>
  );
}
