"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Car,
  CircuitBoard,
  Eye,
  MapPin,
  Mic,
  Navigation,
  ScanLine,
  Shield,
  Volume2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function OfficerPlatform() {
  return (
    <section
      id="officer-platform"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -bottom-20 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-steel-700/15 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Officer Agent · The Cockpit"
          title={
            <>
              The radio, the scanner, the dispatch terminal —{" "}
              <span className="gradient-text-signal">collapsed into one app.</span>
            </>
          }
          description="The Auxilio Agent app is the responder's mission surface. Live nav, encrypted comms, suspect intel, and recognition — designed for one-tap operation under stress."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Phone mockup */}
          <div className="lg:col-span-5">
            <PhoneMockup />
          </div>

          {/* Feature grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {OFFICER_FEATURES.map((f, i) => (
                <FeatureTile key={f.title} feature={f} index={i} />
              ))}
            </div>

            {/* Live response strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-signal-500/15 ring-1 ring-signal-500/35">
                  <CircuitBoard className="size-4 text-signal-300" />
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                    state machine
                  </div>
                  <div className="text-[14px] font-medium text-white">
                    standby → assigned → en-route → on-scene → cleared
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-signal-500/30 bg-signal-500/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-signal-200">
                <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
                en-route · 01:42
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OFFICER_FEATURES = [
  {
    icon: Navigation,
    title: "Live nav with ETA",
    detail:
      "Polylines stream in real time. Reroutes happen automatically as suspects move or traffic changes.",
  },
  {
    icon: Volume2,
    title: "Encrypted radio room",
    detail:
      "AES-256 voice channel, ephemeral keys, full audit. Activate with a single hardware-bound tap.",
  },
  {
    icon: ScanLine,
    title: "Plate recognition",
    detail:
      "Camera-fed OCR matches against active stolen, BOLO, and incident-linked vehicle databases.",
  },
  {
    icon: Eye,
    title: "Face recognition",
    detail:
      "On-device matching against authorized watchlists — with strict policy gating and full evidence logging.",
  },
  {
    icon: Mic,
    title: "Live suspect updates",
    detail:
      "Stream new descriptions, hostage status, and weapon class to all 50 responders mid-en-route.",
  },
  {
    icon: MapPin,
    title: "ETA & approach plan",
    detail:
      "Each responder sees a deconflicted approach vector — preventing crossfire and converging blind spots.",
  },
];

function FeatureTile({
  feature,
  index,
}: {
  feature: (typeof OFFICER_FEATURES)[number];
  index: number;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.035]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-[160px] w-[160px] rounded-full bg-signal-500/10 blur-[60px] opacity-0 transition-opacity group-hover:opacity-100"
      />
      <div className="flex size-10 items-center justify-center rounded-xl border border-steel-500/30 bg-steel-500/10 text-steel-200">
        <Icon className="size-[18px]" />
      </div>
      <div className="mt-4 font-display text-[15px] font-semibold text-white">
        {feature.title}
      </div>
      <p className="mt-1.5 text-[13px] leading-[1.55] text-haze-300">
        {feature.detail}
      </p>
    </motion.div>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[300px] sm:w-[340px]"
    >
      {/* Phone shell */}
      <div className="relative rounded-[42px] border border-white/15 bg-gradient-to-b from-ink-800 via-ink-900 to-ink-950 p-1.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="overflow-hidden rounded-[36px] bg-ink-950">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-haze-300">
            <span>9:41</span>
            <div className="absolute left-1/2 top-2.5 h-[22px] w-[100px] -translate-x-1/2 rounded-full bg-black" />
            <span>5G · 100%</span>
          </div>

          {/* Header banner */}
          <div className="px-4">
            <div className="rounded-2xl border border-signal-500/40 bg-signal-500/10 p-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-200">
                  <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
                  Active incident
                </span>
                <span className="font-mono text-[10px] text-haze-300">
                  AX-9A21F
                </span>
              </div>
              <div className="mt-1.5 font-display text-[14px] font-semibold text-white">
                Armed robbery · 5th & Spring
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {["ETA 1:42", "Unit 14", "Lead"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-1 text-center font-mono text-[10px] text-haze-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map area */}
          <div className="mx-4 mt-3 relative h-[200px] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-ink-900 to-ink-950">
            <svg
              viewBox="0 0 300 200"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="pm-line" x1="0" y1="0" x2="300" y2="200">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
              </defs>
              {[40, 80, 120, 160].map((y) => (
                <path
                  key={y}
                  d={`M0 ${y} Q 100 ${y - 12}, 300 ${y + 6}`}
                  stroke="url(#pm-line)"
                  strokeWidth="0.8"
                  fill="none"
                />
              ))}
              {/* Route */}
              <motion.path
                d="M40 170 Q 90 160, 130 130 T 210 80 Q 240 60, 260 40"
                stroke="#FF5560"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              {/* Officer pin */}
              <circle cx="40" cy="170" r="4" fill="#3866E6" />
              <circle cx="40" cy="170" r="9" fill="rgba(56,102,230,0.18)" />
              {/* Incident pin */}
              <circle cx="260" cy="40" r="5" fill="#FF2233" />
              <circle cx="260" cy="40" r="11" fill="rgba(255,34,51,0.2)" />
            </svg>

            <div className="absolute left-3 bottom-3 right-3 flex items-center justify-between rounded-lg border border-white/10 bg-ink-900/80 px-2.5 py-1.5 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-300">
                ETA 1:42 · 0.8 mi
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-300">
                ▮ Live
              </span>
            </div>
          </div>

          {/* Intel block */}
          <div className="m-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md border border-signal-500/30 bg-signal-500/10">
                <Car className="size-3.5 text-signal-300" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
                  Suspect vehicle · plate match 87%
                </div>
                <div className="text-[12px] font-medium text-white">
                  7XKA243 · Black sedan · headed N
                </div>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md border border-steel-500/30 bg-steel-500/10">
                <Camera className="size-3.5 text-steel-200" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
                  Description
                </div>
                <div className="text-[12px] font-medium text-white">
                  Male · 6'1" · navy hoodie · armed
                </div>
              </div>
            </div>
          </div>

          {/* Comms bar */}
          <div className="mx-4 mb-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-1 py-1">
            <button className="flex size-9 shrink-0 items-center justify-center rounded-full bg-signal-600 text-white">
              <Mic className="size-4" />
            </button>
            <span className="flex-1 px-2 font-mono text-[11px] text-haze-200">
              ENC-7F·A2 · 50 listening
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-300 pr-2">
              ▮ Push
            </span>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -left-10 top-32 hidden lg:block"
      >
        <div className="rounded-2xl border border-white/10 bg-ink-900/80 px-3 py-2.5 backdrop-blur-xl shadow-panel">
          <div className="flex items-center gap-2">
            <Shield className="size-3.5 text-signal-300" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-300">
              Auth · approved
            </span>
          </div>
          <div className="mt-1 font-display text-[12.5px] font-medium text-white">
            Mutual aid: LASD
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -right-12 bottom-32 hidden lg:block"
      >
        <div className="rounded-2xl border border-white/10 bg-ink-900/80 px-3 py-2.5 backdrop-blur-xl shadow-panel">
          <div className="flex items-center gap-2">
            <ScanLine className="size-3.5 text-steel-200" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-300">
              Plate scan
            </span>
          </div>
          <div className="mt-1 font-display text-[12.5px] font-medium text-white">
            7XKA243 · 87%
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
