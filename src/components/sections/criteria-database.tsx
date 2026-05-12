"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Database,
  GitGraph,
  Network,
  Repeat,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "patterns",
    label: "Patterns",
    icon: TrendingUp,
    title: "Pattern recognition across incidents",
    detail:
      "Auxilio learns from every dispatch — surfacing emerging clusters, modus operandi shifts, and time-of-day anomalies before commanders ask.",
  },
  {
    id: "repeats",
    label: "Repeat suspects",
    icon: Repeat,
    title: "Repeat suspect detection",
    detail:
      "Cross-incident correlation builds a graph of repeat actors, vehicles, and locations — even when names and plates change between events.",
  },
  {
    id: "vehicle",
    label: "Vehicle intel",
    icon: GitGraph,
    title: "Vehicle intelligence graph",
    detail:
      "Plates, descriptions, registration history, and BOLO state — bound together with relationship edges and decay-weighted confidence scores.",
  },
  {
    id: "heatmaps",
    label: "Heatmaps",
    icon: Network,
    title: "Jurisdiction heatmaps",
    detail:
      "Spatial-temporal density maps for command staff. Drill into beats, watches, or response classes — instantly.",
  },
];

export function CriteriaDatabase() {
  const [tab, setTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === tab)!;

  return (
    <section
      id="criteria-database"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -top-32 left-1/4 h-[420px] w-[820px] rounded-full bg-signal-700/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Criteria Intelligence Database"
          title={
            <>
              Palantir-grade intelligence,<br />
              <span className="gradient-text-signal">purpose-built for emergency response.</span>
            </>
          }
          description="Every incident teaches Auxilio. Every dispatch sharpens the next. Patterns, repeats, vehicles, and jurisdictions — connected as one living graph."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {TABS.map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all",
                      active
                        ? "border-signal-500/40 bg-signal-500/[0.08] text-signal-200"
                        : "border-white/10 bg-white/[0.02] text-haze-300 hover:border-white/20 hover:text-white"
                    )}
                  >
                    <Icon className="size-3.5" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-white">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-md text-[14.5px] leading-[1.6] text-haze-300">
                  {active.detail}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <Stat label="Cross-incident correlation" value="0.91" sub="F1 score" />
              <Stat label="Repeat detection" value="2.4×" sub="vs CAD baseline" />
              <Stat label="Indexed actors" value="1.2M" sub="rolling graph" />
              <Stat label="Inference latency" value="< 40ms" sub="p99" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <RelationshipGraph activeTab={tab} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
        {label}
      </div>
      <div className="mt-2 font-display text-2xl font-semibold tabular-nums text-white">
        {value}
      </div>
      <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-500">
        {sub}
      </div>
    </div>
  );
}

function RelationshipGraph({ activeTab }: { activeTab: string }) {
  // Build a deterministic graph
  const nodes = [
    { id: "A1", x: 50, y: 50, label: "Incident · 9A21F", kind: "incident", size: 16 },
    { id: "A2", x: 22, y: 30, label: "Suspect · J.D.", kind: "person", size: 11 },
    { id: "A3", x: 74, y: 28, label: "Plate · 7XKA243", kind: "vehicle", size: 11 },
    { id: "A4", x: 80, y: 64, label: "Sector 7", kind: "place", size: 10 },
    { id: "A5", x: 18, y: 70, label: "BOLO · 0421", kind: "alert", size: 10 },
    { id: "A6", x: 52, y: 12, label: "Incident · 8B11A", kind: "incident", size: 12 },
    { id: "A7", x: 50, y: 90, label: "Incident · 7C73D", kind: "incident", size: 12 },
    { id: "A8", x: 12, y: 50, label: "Pattern · MO-14", kind: "pattern", size: 10 },
    { id: "A9", x: 88, y: 48, label: "Beat · 14", kind: "place", size: 9 },
  ];
  const edges: [string, string, number][] = [
    ["A1", "A2", 0.9],
    ["A1", "A3", 0.7],
    ["A1", "A4", 0.5],
    ["A1", "A5", 0.4],
    ["A1", "A6", 0.6],
    ["A1", "A7", 0.55],
    ["A2", "A8", 0.65],
    ["A2", "A6", 0.45],
    ["A3", "A9", 0.4],
    ["A6", "A8", 0.5],
    ["A7", "A4", 0.35],
    ["A2", "A5", 0.5],
  ];

  const colorFor = (kind: string) => {
    switch (kind) {
      case "incident":
        return "bg-signal-500 ring-signal-300/50";
      case "person":
        return "bg-steel-300 ring-steel-200/50";
      case "vehicle":
        return "bg-amber-300 ring-amber-200/50";
      case "place":
        return "bg-emerald-300 ring-emerald-200/50";
      case "alert":
        return "bg-pink-300 ring-pink-200/50";
      case "pattern":
        return "bg-purple-300 ring-purple-200/50";
      default:
        return "bg-white";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7 }}
      className="relative panel-deep overflow-hidden rounded-3xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
        <div className="flex items-center gap-2">
          <Database className="size-3.5 text-signal-300" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
            criteria.graph · live
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
          <span className="hidden sm:inline">{activeTab.toUpperCase()}</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
            indexing
          </span>
        </div>
      </div>

      {/* Graph */}
      <div className="relative h-[460px] sm:h-[520px] overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="rg-edge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,34,51,0.55)" />
              <stop offset="100%" stopColor="rgba(56,102,230,0.5)" />
            </linearGradient>
          </defs>
          {edges.map(([a, b, w], i) => {
            const na = nodes.find((n) => n.id === a)!;
            const nb = nodes.find((n) => n.id === b)!;
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="url(#rg-edge)"
                strokeWidth={0.18 + w * 0.4}
                strokeLinecap="round"
                strokeOpacity={0.35 + w * 0.4}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 + i * 0.06 }}
              />
            );
          })}
          {/* moving particles along central edges */}
          {edges.slice(0, 5).map(([a, b], i) => {
            const na = nodes.find((n) => n.id === a)!;
            const nb = nodes.find((n) => n.id === b)!;
            const path = `M${na.x} ${na.y} L${nb.x} ${nb.y}`;
            return (
              <circle key={`p-${i}`} r="0.5" fill="#FF5560">
                <animateMotion dur={`${2 + i * 0.4}s`} repeatCount="indefinite" path={path} />
              </circle>
            );
          })}
        </svg>

        {nodes.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <span
                className={cn(
                  "block rounded-full ring-2",
                  colorFor(n.kind)
                )}
                style={{ width: n.size, height: n.size }}
              />
              <span
                className={cn(
                  "absolute inset-0 rounded-full opacity-50 blur-[6px]",
                  colorFor(n.kind).split(" ")[0]
                )}
              />
              <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-ink-900/80 px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-haze-200 backdrop-blur">
                {n.label}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Legend */}
        <div className="absolute right-4 top-4 z-10 hidden sm:flex flex-col gap-1 rounded-xl border border-white/10 bg-ink-900/70 p-3 font-mono text-[10px] uppercase tracking-[0.16em] text-haze-300 backdrop-blur">
          {[
            ["bg-signal-500", "incident"],
            ["bg-steel-300", "person"],
            ["bg-amber-300", "vehicle"],
            ["bg-emerald-300", "place"],
            ["bg-purple-300", "pattern"],
          ].map(([c, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className={`size-1.5 rounded-full ${c}`} />
              {l}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
