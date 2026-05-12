"use client";

import { motion } from "framer-motion";
import { Users, Shield, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const FEATURES = [
  {
    icon: Users,
    title: "Trusted networks",
    body: "Officers build their own circles — partners, supervisors, family — and choose who sees their status, location, and shift.",
  },
  {
    icon: Shield,
    title: "Cohort awareness",
    body: "Every officer within a 5km radius of an active call appears on the map with bearing, ETA, and badge tier.",
  },
  {
    icon: MessageSquare,
    title: "Encrypted chat",
    body: "Channel-isolated messaging keyed to incident IDs. Closes automatically when the call is resolved.",
  },
];

export function FieldNetwork() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="03 · Field network"
          title={
            <>
              Every officer is a{" "}
              <span className="gradient-text-signal">node</span>, not a number.
            </>
          }
          description="Auxilio Agente isn't a radio. It's a peer-to-peer mesh of badged responders, their networks, and the people who depend on them."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <NetworkVisual />
          </div>
          <div className="grid gap-4 lg:col-span-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="panel-deep p-5 lg:p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-signal-500/10 ring-1 ring-signal-500/30">
                  <f.icon className="size-4 text-signal-300" />
                </span>
                <h3 className="mt-4 font-display text-[19px] font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-haze-300">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkVisual() {
  const contacts = [
    { angle: 14, dist: 38, label: "Dispatch", primary: true },
    { angle: 70, dist: 60, label: "Supervisor" },
    { angle: 138, dist: 64, label: "Cohort", warn: true },
    { angle: 198, dist: 50, label: "Family" },
    { angle: 252, dist: 72, label: "Squad 7" },
    { angle: 312, dist: 46, label: "Partner", warn: true },
  ];

  const ambient = [
    { angle: 32, dist: 78 },
    { angle: 95, dist: 84 },
    { angle: 165, dist: 86 },
    { angle: 280, dist: 80 },
    { angle: 340, dist: 76 },
    { angle: 50, dist: 24 },
  ];

  const polar = (angle: number, dist: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 50 + (dist / 2) * Math.sin(rad),
      y: 50 - (dist / 2) * Math.cos(rad),
    };
  };

  return (
    <div className="relative aspect-square panel-deep overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900" />
      <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
      <div className="absolute -inset-1/4 bg-radial-fade opacity-30 blur-2xl" />

      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {[14, 28, 42].map((r) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.15"
          />
        ))}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="rgba(255,34,51,0.22)"
          strokeWidth="0.2"
          strokeDasharray="0.8 0.7"
        />
        <line x1="50" y1="3" x2="50" y2="97" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="3" y1="50" x2="97" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        {contacts.map((c) => {
          const p = polar(c.angle, c.dist);
          return (
            <line
              key={`bear-${c.label}`}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke={
                c.primary
                  ? "rgba(255,34,51,0.45)"
                  : c.warn
                  ? "rgba(255,90,100,0.22)"
                  : "rgba(255,255,255,0.07)"
              }
              strokeWidth="0.14"
              strokeDasharray="0.6 0.7"
            />
          );
        })}
      </svg>

      <div className="absolute inset-[3%] rounded-full animate-radar">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg 240deg, rgba(255,34,51,0.04) 270deg, rgba(255,34,51,0.20) 330deg, rgba(255,90,100,0.55) 357deg, rgba(255,255,255,0.85) 360deg, transparent 361deg)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1.2].map((d) => (
          <span
            key={d}
            className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-500/30 animate-pulse-ring"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </div>

      {[
        { d: "N", style: "top-2.5 left-1/2 -translate-x-1/2" },
        { d: "E", style: "right-2.5 top-1/2 -translate-y-1/2" },
        { d: "S", style: "bottom-2.5 left-1/2 -translate-x-1/2" },
        { d: "W", style: "left-2.5 top-1/2 -translate-y-1/2" },
      ].map((c) => (
        <span
          key={c.d}
          className={`absolute ${c.style} font-mono text-[9.5px] font-semibold tracking-[0.18em] text-haze-500`}
        >
          {c.d}
        </span>
      ))}

      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-ink-900/70 px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] backdrop-blur">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
            <span className="relative size-1.5 rounded-full bg-signal-500" />
          </span>
          <span className="text-signal-200">
            Tracking · {contacts.length + ambient.length} nodes
          </span>
        </div>
        <div className="rounded-md border border-white/10 bg-ink-900/70 px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-haze-400 backdrop-blur">
          40.7178° N · 74.0431° W
        </div>
      </div>

      <div className="absolute right-3 top-3 z-10 rounded-md border border-white/10 bg-ink-900/70 px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-haze-400 backdrop-blur">
        5km · scan 3.0s
      </div>

      <div className="absolute bottom-3 left-3 z-10 font-mono text-[9.5px] uppercase tracking-[0.16em] text-haze-500">
        Range · 1km / 3km / 5km
      </div>

      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-md border border-green-500/30 bg-green-500/10 px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-green-300 backdrop-blur">
        <span className="size-1.5 rounded-full bg-green-400" />
        Link · stable
      </div>

      {ambient.map((b, i) => {
        const p = polar(b.angle, b.dist);
        return (
          <span
            key={`amb-${i}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <span className="block size-[5px] rounded-full bg-steel-300/80 ring-1 ring-steel-200/30" />
          </span>
        );
      })}

      {contacts.map((c, i) => {
        const p = polar(c.angle, c.dist);
        return (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex flex-col items-center gap-1">
              <div
                className={`relative flex items-center justify-center rounded-full ring-1 ${
                  c.primary
                    ? "size-8 bg-signal-500/90 ring-signal-300/50"
                    : c.warn
                    ? "size-7 bg-ink-900 ring-signal-400/40"
                    : "size-7 bg-ink-900 ring-white/15"
                }`}
              >
                {c.primary && (
                  <span className="absolute inset-0 rounded-full bg-signal-500/40 blur-md" />
                )}
                <Shield
                  className={`relative size-3.5 ${
                    c.primary ? "text-white" : c.warn ? "text-signal-300" : "text-steel-300"
                  }`}
                />
              </div>
              <span
                className={`relative rounded-md border px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.15em] ${
                  c.primary
                    ? "border-signal-500/50 bg-signal-500/10 text-signal-200"
                    : c.warn
                    ? "border-signal-500/30 bg-ink-900/80 text-signal-200"
                    : "border-white/10 bg-ink-900/80 text-haze-300"
                }`}
              >
                {c.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-1.5">
          <div className="relative flex size-11 items-center justify-center rounded-full bg-signal-500 ring-2 ring-signal-300/50 shadow-[0_0_30px_rgba(255,34,51,0.6)]">
            <span className="absolute inset-0 rounded-full bg-signal-500 blur-md opacity-70" />
            <span className="absolute -inset-2 rounded-full border border-signal-500/40 animate-ping" />
            <Shield className="relative size-5 text-white" />
          </div>
          <span className="rounded-md border border-signal-500/50 bg-signal-500/15 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-signal-100">
            You
          </span>
        </div>
      </div>
    </div>
  );
}
