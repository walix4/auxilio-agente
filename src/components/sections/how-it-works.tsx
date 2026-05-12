"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Crosshair,
  Database,
  Fingerprint,
  Map,
  Network,
  Radio,
  Satellite,
  Siren,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    n: "01",
    label: "User presses SOS",
    icon: Siren,
    body:
      "A single tap on the citizen device triggers a hardened request. Biometric confirmation, severity classification, and device attestation happen in less than 250 ms.",
    chips: ["biometric_confirm", "device_attest", "severity_class"],
  },
  {
    n: "02",
    label: "AI validates",
    icon: Fingerprint,
    body:
      "On-device and edge models score signal quality, motion context, and incident probability — filtering false alarms before they consume responder bandwidth.",
    chips: ["edge_inference", "anomaly_score", "decision_boundary"],
  },
  {
    n: "03",
    label: "Redis geo query",
    icon: Crosshair,
    body:
      "A geospatial range query returns ~268 candidate responders within a 1.2 km radius — sorted by ETA, vehicle class, and current load. Sub-millisecond.",
    chips: ["GEORADIUSBYMEMBER", "p99 < 6ms", "spatial_index"],
  },
  {
    n: "04",
    label: "Jurisdiction filter",
    icon: Map,
    body:
      "Boundary databases resolve the legally authorized agency — stripping unauthorized responders, flagging mutual aid, and confirming policy compliance.",
    chips: ["geofence_db", "policy_engine", "authority_check"],
  },
  {
    n: "05",
    label: "Parallel dispatch",
    icon: Network,
    body:
      "Promise.all fans 50 simultaneous WebSocket frames — each with the incident packet, suspect intelligence, and route polyline — to nearest authorized officers.",
    chips: ["Promise.all × 50", "ws_fanout", "sms_fallback"],
  },
  {
    n: "06",
    label: "Encrypted radio room",
    icon: Radio,
    body:
      "An ephemeral AES-256 channel materializes for the incident. Officer, dispatcher, and citizen voices join an audited, tamper-resistant communication surface.",
    chips: ["AES-256", "key_rotation", "audit_trail"],
  },
  {
    n: "07",
    label: "Officer navigation",
    icon: Satellite,
    body:
      "Each responder receives an ETA-optimized polyline, suspect manifest, plate intelligence, and an automatic update stream — surfaced inside the Auxilio Agent app.",
    chips: ["polyline_stream", "intel_packet", "live_eta"],
  },
  {
    n: "08",
    label: "Live GPS streaming",
    icon: Database,
    body:
      "Officer positions stream back at 2 Hz over persistent low-latency connections. Dispatchers, supervisors, and the citizen device watch the response unfold in real time.",
    chips: ["gps:officer:*", "ws_persist", "2Hz_stream"],
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 8 cards — translate 0 .. -(7/8) of width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87.5%"]);
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative scroll-mt-32"
      style={{ height: "560vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* BG */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-30 mask-radial" />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-steel-700/15 blur-[140px]" />
        </div>

        <div className="container-wide relative z-10 pt-24 lg:pt-32">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="How Auxilio Works"
              title={
                <>
                  Eight precision steps.<br />
                  <span className="gradient-text-steel">One unbroken signal path.</span>
                </>
              }
            />
            <div className="hidden lg:block text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-haze-400">
                scroll →
              </p>
              <p className="mt-1 max-w-xs text-[13px] text-haze-300">
                Each step takes milliseconds. The pipeline runs concurrently
                where it can — sequentially only where authority demands it.
              </p>
            </div>
          </div>

          {/* Progress rail */}
          <div className="mt-10 mb-6 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-haze-400">
            <span>T+0</span>
            <div className="relative h-px flex-1 bg-white/[0.06]">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-signal-700 via-signal-500 to-signal-300"
                style={{ width: lineProgress }}
              />
            </div>
            <span>T+5s</span>
          </div>
        </div>

        {/* Horizontal rail */}
        <div className="relative flex flex-1 items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex shrink-0 gap-6 px-6 lg:px-10"
          >
            {STEPS.map((step, i) => (
              <Card key={step.n} step={step} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const Icon = step.icon;
  return (
    <article className="relative w-[88vw] max-w-[640px] shrink-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-ink-900 to-ink-950 p-8 lg:p-10 shadow-panel">
      {/* corner crosses */}
      <span aria-hidden className="absolute left-4 top-4 size-2 text-white/15">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
        <span className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-current" />
      </span>
      <span aria-hidden className="absolute right-4 bottom-4 size-2 text-white/15">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
        <span className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-current" />
      </span>

      {/* Soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-signal-500/10 blur-[80px]"
      />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="font-display text-[64px] font-black leading-none tracking-[-0.04em] text-white/[0.08]">
            {step.n}
          </div>
          <div className="flex size-12 items-center justify-center rounded-2xl border border-signal-500/30 bg-signal-500/10 text-signal-300">
            <Icon className="size-5" />
          </div>
        </div>
        <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-haze-400">
          step {String(index + 1).padStart(2, "0")} / 08
        </div>
      </div>

      <h3 className="mt-8 font-display text-3xl font-medium tracking-[-0.02em] text-white">
        {step.label}
      </h3>
      <p className="mt-4 max-w-[480px] text-[15px] leading-[1.6] text-haze-300">
        {step.body}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {step.chips.map((c) => (
          <span
            key={c}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-haze-200"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Mini mock */}
      <div className="mt-8 rounded-xl border border-white/[0.08] bg-ink-950/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
            telemetry · {step.n}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-signal-300">
            <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
            live
          </span>
        </div>
        <div className="flex items-end gap-1 h-14">
          {Array.from({ length: 32 }).map((_, i) => {
            const h = 18 + ((i * 7 + index * 11) % 38);
            return (
              <div
                key={i}
                className="w-[3px] rounded-sm bg-gradient-to-t from-signal-700/30 to-signal-300/80"
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
