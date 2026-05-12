"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  Cpu,
  Database,
  Lock,
  Network,
  Smartphone,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const LAYERS = [
  {
    id: "user",
    title: "Auxilio User App",
    role: "Citizen device · iOS, Android, wearable",
    icon: Smartphone,
    detail:
      "Hardened SOS surface with biometric trigger, silent mode, and offline SMS fallback. Streams device telemetry to the dispatch core.",
    chips: ["biometric_trigger", "offline_sms", "haptic_protocol"],
  },
  {
    id: "blockchain",
    title: "Blockchain Validation Layer",
    role: "Tamper-resistant incident registry",
    icon: Lock,
    detail:
      "Every incident anchor — trigger time, GPS, dispatch list, audio hash — is immutably committed. Forensic-grade audit, even under coercion.",
    chips: ["incident_anchor", "audit_trail", "evidence_hash"],
  },
  {
    id: "ai",
    title: "AI Dispatch Core",
    role: "Real-time coordination engine",
    icon: Cpu,
    detail:
      "The brain. Validates, scores, geo-resolves, and fans simultaneous dispatch decisions across nearest authorized responders. Sub-5s budget.",
    chips: ["promise_all", "redis_geo", "policy_engine"],
  },
  {
    id: "agent",
    title: "Auxilio Agent App",
    role: "Officer cockpit · iOS, Android, vehicle",
    icon: Network,
    detail:
      "Replaces radios, plate scanners, dispatch terminals. Live nav, encrypted radio, suspect intel, plate + face recognition — in one surface.",
    chips: ["live_nav", "intel_packet", "encrypted_radio"],
  },
  {
    id: "fleet",
    title: "Multi-Mode Response Units",
    role: "Vehicles, drones, foot, marine",
    icon: Truck,
    detail:
      "Auxilio is transport-agnostic. Cars, motorcycles, drones, bikes, boats, foot patrols — all addressable as first-class responder types.",
    chips: ["transport_agnostic", "drone_dispatch", "marine_units"],
  },
  {
    id: "criteria",
    title: "Criteria AI Database",
    role: "Cross-incident intelligence layer",
    icon: Database,
    detail:
      "Pattern recognition, repeat-suspect graphs, vehicle and jurisdiction heatmaps. The intelligence loop that compounds with every incident.",
    chips: ["pattern_graph", "repeat_detect", "heatmap_engine"],
  },
];

export function SystemArchitecture() {
  const [active, setActive] = useState(LAYERS[2].id);
  const activeLayer = LAYERS.find((l) => l.id === active)!;

  return (
    <section
      id="architecture"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-30 mask-radial" />
        <div className="absolute -bottom-32 left-1/4 h-[420px] w-[820px] rounded-full bg-steel-700/15 blur-[140px]" />
        <div className="absolute -top-24 right-1/4 h-[360px] w-[620px] rounded-full bg-signal-500/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="System Architecture"
          title={
            <>
              Six layers.<br />
              <span className="gradient-text-signal">One operating system</span>
              {" "}for emergency infrastructure.
            </>
          }
          description="Auxilio is not an app, a database, or a CAD system. It is the coordination fabric between citizens, officers, agencies, and machines — designed for the AI era."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Diagram */}
          <div className="lg:col-span-8">
            <div className="relative panel-deep overflow-hidden rounded-3xl p-6 sm:p-10">
              <div className="relative">
                {/* Connection lines */}
                <Connections active={active} />

                <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {LAYERS.map((l, i) => (
                    <LayerNode
                      key={l.id}
                      layer={l}
                      index={i}
                      active={active === l.id}
                      onSelect={() => setActive(l.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Active detail panel */}
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-950/60 p-5 sm:p-6">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-500/40 to-transparent"
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayer.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-signal-500/30 bg-signal-500/10 text-signal-300">
                        <activeLayer.icon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                          {activeLayer.role}
                        </div>
                        <h3 className="mt-1 font-display text-2xl font-medium tracking-[-0.02em] text-white">
                          {activeLayer.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.6] text-haze-300">
                          {activeLayer.detail}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {activeLayer.chips.map((c) => (
                            <span
                              key={c}
                              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-haze-200"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Side intel */}
          <div className="lg:col-span-4 space-y-4">
            <SideStat
              eyebrow="WebSocket Infrastructure"
              title="Persistent low-latency channels"
              detail="Bi-directional streams keep officer GPS, incident state, and dispatcher commands in lockstep. Reconnection is automatic and resumed."
              metric={{ value: "p99 < 80ms", label: "round-trip" }}
              icon={Network}
            />
            <SideStat
              eyebrow="Redis Geospatial"
              title="Sub-millisecond proximity"
              detail="Range queries against millions of indexed responders return ranked candidates in single-digit milliseconds — even under load."
              metric={{ value: "p99 < 6ms", label: "GEORADIUSBYMEMBER" }}
              icon={Boxes}
            />
            <SideStat
              eyebrow="Edge Redundancy"
              title="No single point of failure"
              detail="Multi-region active/active with regional failover, SMS fallback for offline citizens, and circuit-broken downstream calls."
              metric={{ value: "99.99%", label: "uptime architecture" }}
              icon={Lock}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerNode({
  layer,
  index,
  active,
  onSelect,
}: {
  layer: (typeof LAYERS)[number];
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  const Icon = layer.icon;
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      data-id={layer.id}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
        active
          ? "border-signal-500/40 bg-signal-500/[0.06] shadow-[0_0_0_1px_rgba(255,34,51,0.25),0_20px_60px_-25px_rgba(255,34,51,0.45)]"
          : "border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035]"
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-xl border transition-colors",
            active
              ? "border-signal-500/40 bg-signal-500/15 text-signal-200"
              : "border-white/10 bg-white/[0.04] text-haze-200 group-hover:text-white"
          )}
        >
          <Icon className="size-[18px]" />
        </div>
        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.18em]",
            active ? "text-signal-300" : "text-haze-400"
          )}
        >
          L0{index + 1}
        </span>
      </div>
      <div className="mt-4">
        <div className="font-display text-[16px] font-semibold tracking-[-0.01em] text-white">
          {layer.title}
        </div>
        <div className="mt-1 text-[12.5px] text-haze-300">{layer.role}</div>
      </div>
      {active && (
        <motion.span
          aria-hidden
          layoutId="layer-active-glow"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(255,34,51,0.18), transparent 60%)",
          }}
        />
      )}
    </motion.button>
  );
}

function Connections({ active }: { active: string }) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="conn-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,34,51,0.4)" />
          <stop offset="100%" stopColor="rgba(56,102,230,0.4)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SideStat({
  eyebrow,
  title,
  detail,
  metric,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  detail: string;
  metric: { value: string; label: string };
  icon: typeof Network;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6 }}
      className="panel-deep relative overflow-hidden rounded-2xl p-5"
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-steel-500/30 bg-steel-500/10 text-steel-200">
          <Icon className="size-[18px]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
            {eyebrow}
          </div>
          <div className="mt-1 font-display text-[15px] font-semibold text-white">
            {title}
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13.5px] leading-[1.55] text-haze-300">{detail}</p>
      <div className="mt-4 flex items-end justify-between border-t border-white/[0.06] pt-3">
        <div className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-white">
          {metric.value}
        </div>
        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
          {metric.label}
        </div>
      </div>
    </motion.div>
  );
}
