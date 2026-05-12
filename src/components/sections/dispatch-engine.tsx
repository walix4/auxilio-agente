"use client";

import { motion } from "framer-motion";
import { Brain, GitBranch, Layers, Sparkles, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const FEATURES = [
  {
    icon: Brain,
    title: "Severity classification",
    detail:
      "Multi-modal models grade incident severity from device telemetry, audio context, motion, and historical patterns.",
  },
  {
    icon: Workflow,
    title: "Concurrent decisioning",
    detail:
      "Geo-resolution, jurisdiction filtering, and responder ranking run in parallel — never serially.",
  },
  {
    icon: GitBranch,
    title: "Policy-aware routing",
    detail:
      "Mutual aid, off-duty rules, and weapon-class authorization are encoded — not hand-waved.",
  },
  {
    icon: Layers,
    title: "Adaptive load balancing",
    detail:
      "Officers under cumulative incident load are de-prioritized to protect response capacity.",
  },
];

export function DispatchEngine() {
  return (
    <section id="dispatch-engine" className="relative scroll-mt-32 py-28 lg:py-40">
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -top-32 right-[10%] h-[420px] w-[820px] rounded-full bg-signal-700/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="AI Dispatch Engine"
              title={
                <>
                  The brain behind every<br />
                  <span className="gradient-text-signal">5-second response.</span>
                </>
              }
              description="Auxilio's dispatch engine ingests incident signals, scores them, and orchestrates concurrent dispatch decisions across the geosphere. It does not wait."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl border border-signal-500/30 bg-signal-500/10 text-signal-300">
                    <f.icon className="size-4" />
                  </div>
                  <div className="mt-3 font-display text-[14.5px] font-semibold text-white">
                    {f.title}
                  </div>
                  <p className="mt-1.5 text-[13px] leading-[1.55] text-haze-300">
                    {f.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <DecisionGraph />
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionGraph() {
  // Conceptual ML-graph visualization
  const left = [
    { y: 12, label: "biometric" },
    { y: 28, label: "gps_fix" },
    { y: 44, label: "audio_ctx" },
    { y: 60, label: "motion" },
    { y: 76, label: "history" },
    { y: 92, label: "device_attest" },
  ];
  const mid = [
    { y: 18, label: "L1" },
    { y: 36, label: "L2" },
    { y: 54, label: "L3" },
    { y: 72, label: "L4" },
    { y: 90, label: "L5" },
  ];
  const out = [
    { y: 22, label: "severity" },
    { y: 44, label: "geo_query" },
    { y: 66, label: "auth_filter" },
    { y: 88, label: "fanout" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7 }}
      className="relative panel-deep overflow-hidden rounded-3xl p-6 sm:p-8"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-signal-300" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
            decision_graph · live
          </span>
        </div>
        <div className="font-mono text-[11px] text-haze-400">
          model: ax-dispatch · v3.4.1
        </div>
      </div>

      <div className="relative h-[420px]">
        <svg
          viewBox="0 0 800 420"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="dg-conn" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="50%" stopColor="rgba(255,34,51,0.55)" />
              <stop offset="100%" stopColor="rgba(56,102,230,0.4)" />
            </linearGradient>
          </defs>

          {/* connections left -> mid */}
          {left.map((l, li) =>
            mid.map((m, mi) => {
              const sx = 80;
              const sy = (l.y / 100) * 380 + 20;
              const ex = 380;
              const ey = (m.y / 100) * 380 + 20;
              const delay = li * 0.05 + mi * 0.04;
              return (
                <motion.path
                  key={`lm-${li}-${mi}`}
                  d={`M${sx} ${sy} C ${sx + 100} ${sy}, ${ex - 100} ${ey}, ${ex} ${ey}`}
                  stroke="url(#dg-conn)"
                  strokeWidth="0.8"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay }}
                />
              );
            })
          )}
          {/* connections mid -> out */}
          {mid.map((m, mi) =>
            out.map((o, oi) => {
              const sx = 380;
              const sy = (m.y / 100) * 380 + 20;
              const ex = 700;
              const ey = (o.y / 100) * 380 + 20;
              const delay = 0.4 + mi * 0.05 + oi * 0.04;
              return (
                <motion.path
                  key={`mo-${mi}-${oi}`}
                  d={`M${sx} ${sy} C ${sx + 100} ${sy}, ${ex - 100} ${ey}, ${ex} ${ey}`}
                  stroke="url(#dg-conn)"
                  strokeWidth="0.8"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.55 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay }}
                />
              );
            })
          )}

          {/* moving pulses on a few central paths */}
          {[
            { d: "M80 80 C 180 80, 280 100, 380 100" },
            { d: "M80 220 C 180 220, 280 200, 380 220" },
            { d: "M380 100 C 480 100, 600 220, 700 220" },
            { d: "M380 220 C 480 220, 600 250, 700 270" },
          ].map((p, i) => (
            <circle key={i} r="2.4" fill="#FF5560">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                begin={`${0.6 + i * 0.2}s`}
                path={p.d}
              />
            </circle>
          ))}
        </svg>

        {/* Node columns */}
        <NodeColumn nodes={left} x="left-[20px]" />
        <NodeColumn nodes={mid} x="left-1/2 -translate-x-1/2" mid />
        <NodeColumn nodes={out} x="right-[20px]" right />
      </div>

      {/* Inputs / outputs labels */}
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4 font-mono text-[10.5px] uppercase tracking-[0.18em]">
        <div className="text-haze-400">inputs · 6 features</div>
        <div className="text-center text-haze-400">5 hidden layers</div>
        <div className="text-right text-haze-400">4 dispatch decisions</div>
      </div>
    </motion.div>
  );
}

function NodeColumn({
  nodes,
  x,
  mid,
  right,
}: {
  nodes: { y: number; label: string }[];
  x: string;
  mid?: boolean;
  right?: boolean;
}) {
  return (
    <div className={`absolute top-0 h-full w-[100px] ${x}`}>
      {nodes.map((n) => (
        <div
          key={n.label}
          className="absolute -translate-y-1/2"
          style={{
            top: `${n.y}%`,
            left: right ? "auto" : 0,
            right: right ? 0 : "auto",
          }}
        >
          <div
            className={`flex items-center gap-2 ${right ? "flex-row-reverse" : ""}`}
          >
            <span className="relative block size-2.5 shrink-0 rounded-full bg-signal-400 ring-2 ring-signal-300/40">
              <span className="absolute inset-0 animate-pulse rounded-full bg-signal-500/40 blur-[3px]" />
            </span>
            {!mid && (
              <span className="rounded border border-white/10 bg-ink-900/80 px-1.5 py-0.5 font-mono text-[10px] text-haze-200 backdrop-blur">
                {n.label}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
