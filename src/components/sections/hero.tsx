"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Radio, Satellite, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NODE_POSITIONS = [
  { x: 18, y: 32, delay: 0.0, size: 5 },
  { x: 30, y: 58, delay: 0.4, size: 4 },
  { x: 42, y: 22, delay: 0.8, size: 6 },
  { x: 55, y: 70, delay: 1.2, size: 4 },
  { x: 62, y: 38, delay: 1.6, size: 5 },
  { x: 72, y: 18, delay: 2.0, size: 4 },
  { x: 80, y: 55, delay: 2.4, size: 5 },
  { x: 88, y: 30, delay: 2.8, size: 4 },
  { x: 25, y: 75, delay: 0.6, size: 4 },
  { x: 48, y: 50, delay: 1.4, size: 7 },
];

const TIMELINE_EVENTS = [
  { t: "00:00", label: "SOS triggered", icon: Zap },
  { t: "00:01", label: "AI validates", icon: Shield },
  { t: "00:02", label: "Geofence resolved", icon: Satellite },
  { t: "00:04", label: "50 officers dispatched", icon: Radio },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Layered background */}
      <BackgroundLayers />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-signal-500/25 bg-signal-500/[0.06] px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
              <span className="relative size-1.5 rounded-full bg-signal-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-200">
              Auxilio · Public Safety Infrastructure
            </span>
            <span className="font-mono text-[11px] text-haze-400">→ v25.04</span>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Headline column */}
          <div className="lg:col-span-7 lg:col-start-1">
            <h1 className="font-display text-display-xl font-medium tracking-[-0.04em] text-white text-balance">
              <SplitWords text="Emergency response," delay={0.1} />
              <br />
              <span className="relative inline-block">
                <SplitWords text="rebuilt for the" delay={0.4} />{" "}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 1.0, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    className="gradient-text-signal"
                  >
                    AI era.
                  </motion.span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-signal-500/80 via-signal-500/30 to-transparent"
                  />
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-7 max-w-xl text-[17px] leading-[1.6] text-haze-300 text-pretty"
            >
              Auxilio replaces outdated dispatch systems with real-time AI
              coordination, simultaneous responder mobilization, and
              software-defined public safety infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" asChild>
                <a href="#dispatch">
                  <Play className="size-3.5 fill-white" />
                  Watch live dispatch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#architecture">
                  Explore architecture
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 max-w-2xl"
            >
              {[
                { v: "5s", l: "full dispatch" },
                { v: "50", l: "officers in parallel" },
                { v: "AES-256", l: "encrypted radio" },
                { v: "Real-time", l: "AI geolocation" },
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

          {/* Live map / dispatch panel */}
          <div className="lg:col-span-5">
            <DispatchOrb />
          </div>
        </div>

        {/* Bottom timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 lg:mt-24"
        >
          <DispatchTimeline />
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundLayers() {
  return (
    <>
      {/* Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-50 mask-radial" />
        <div className="absolute inset-0 bg-grid-bold bg-grid-lg opacity-25 mask-fade-b" />
      </div>

      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] left-1/2 h-[760px] w-[1100px] -translate-x-1/2 rounded-full bg-signal-700/15 blur-[160px]" />
        <div className="absolute -bottom-[20%] right-[10%] h-[520px] w-[520px] rounded-full bg-steel-700/20 blur-[120px]" />
        <div className="absolute top-1/3 left-[5%] h-[280px] w-[280px] rounded-full bg-signal-500/12 blur-[100px]" />
      </div>

      {/* Animated nodes — large pattern behind */}
      <div aria-hidden className="pointer-events-none absolute inset-0 mask-radial">
        {NODE_POSITIONS.map((n, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
          >
            <div className="relative">
              <span
                className="absolute inset-0 rounded-full bg-signal-500/40 blur-[10px] animate-pulse"
                style={{ width: n.size * 2.5, height: n.size * 2.5, left: -n.size * 0.75, top: -n.size * 0.75 }}
              />
              <span
                className="block rounded-full bg-signal-400 ring-1 ring-signal-300/40"
                style={{ width: n.size, height: n.size }}
              />
              <span
                className="absolute rounded-full border border-signal-500/40 animate-pulse-ring"
                style={{
                  width: n.size,
                  height: n.size,
                  animationDelay: `${n.delay}s`,
                  left: 0,
                  top: 0,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Concentric rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-32 hidden lg:block"
      >
        <div className="relative size-[640px] opacity-40">
          {[1, 2, 3, 4, 5].map((r) => (
            <motion.div
              key={r}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4 + r * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-full border border-white/[0.06]"
              style={{ transform: `scale(${r * 0.2})` }}
            />
          ))}
        </div>
      </div>

      {/* Top scan line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[200vh] mask-fade-b"
      >
        <div className="absolute inset-x-0 h-[2px] scanline animate-scan" />
      </div>
    </>
  );
}

function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function DispatchOrb() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative perspective-1000"
    >
      <div className="relative panel-deep overflow-hidden rounded-[28px] p-1">
        {/* Header chip */}
        <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-haze-300">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-80" />
              <span className="relative size-1.5 rounded-full bg-signal-500" />
            </span>
            Live · Sector 7
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 backdrop-blur">
            34.0522° N · 118.2437° W
          </div>
        </div>

        {/* The map area */}
        <div className="relative h-[480px] sm:h-[520px] overflow-hidden rounded-[24px] bg-gradient-to-br from-ink-900 via-ink-850 to-ink-950">
          <MapGrid />
          <RadialPulse />
          <ResponderDots />
          <ConnectionLines />
          <CrosshairCenter />

          {/* Bottom HUD */}
          <div className="absolute inset-x-3 bottom-3 z-20 grid grid-cols-3 gap-2">
            <HudTile label="ETA" value="01:42" />
            <HudTile label="Officers" value="50 / 50" />
            <HudTile label="Channel" value="ENC-7F·A2" />
          </div>

          {/* Status banner */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute left-1/2 top-16 z-20 -translate-x-1/2 rounded-full border border-signal-500/40 bg-signal-500/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-signal-200 backdrop-blur"
          >
            ▮ Dispatch confirmed · 04.83s
          </motion.div>
        </div>
      </div>

      {/* Floating chips */}
      <FloatingChip
        className="-left-6 top-20"
        title="Encrypted radio"
        sub="50 officers · live"
        accent
      />
      <FloatingChip
        className="-right-4 bottom-28"
        title="Suspect intel"
        sub="Plate match · 87%"
      />
    </motion.div>
  );
}

function MapGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 600 520"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="hg-line" x1="0" y1="0" x2="600" y2="520">
          <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
        <radialGradient id="hg-spot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,34,51,0.25)" />
          <stop offset="100%" stopColor="rgba(255,34,51,0)" />
        </radialGradient>
      </defs>

      {/* Streets / paths */}
      {[80, 160, 240, 320, 400, 480].map((y) => (
        <path
          key={y}
          d={`M0 ${y} Q 200 ${y - 24}, 380 ${y + 8} T 600 ${y - 12}`}
          stroke="url(#hg-line)"
          strokeWidth="1"
          fill="none"
        />
      ))}
      {[100, 220, 340, 460].map((x) => (
        <path
          key={x}
          d={`M${x} 0 Q ${x + 22} 180, ${x - 8} 340 T ${x + 16} 520`}
          stroke="url(#hg-line)"
          strokeWidth="1"
          fill="none"
        />
      ))}

      {/* Center hot zone */}
      <circle cx="300" cy="260" r="180" fill="url(#hg-spot)" />
    </svg>
  );
}

function RadialPulse() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {[0, 0.6, 1.2, 1.8].map((d) => (
        <motion.span
          key={d}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-500/35"
          initial={{ width: 40, height: 40, opacity: 0 }}
          animate={{ width: 360, height: 360, opacity: [0, 0.7, 0] }}
          transition={{ duration: 3.4, delay: d, repeat: Infinity }}
        />
      ))}
      <div className="relative size-3">
        <span className="absolute inset-0 rounded-full bg-signal-500 blur-md" />
        <span className="relative block size-3 rounded-full bg-signal-400 ring-2 ring-signal-300/40" />
      </div>
    </div>
  );
}

function ResponderDots() {
  const dots = Array.from({ length: 18 }).map((_, i) => {
    const angle = (i / 18) * Math.PI * 2;
    const r = 100 + (i % 4) * 32;
    const x = 50 + (Math.cos(angle) * r) / 6;
    const y = 50 + (Math.sin(angle) * r) / 6;
    return { x, y, i };
  });

  return (
    <div className="absolute inset-0">
      {dots.map((d) => (
        <motion.div
          key={d.i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + d.i * 0.05, duration: 0.4 }}
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <span className="block size-1.5 rounded-full bg-steel-300 ring-1 ring-white/30" />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2 + (d.i % 3) * 0.3, repeat: Infinity }}
              className="absolute -inset-1 rounded-full bg-steel-400/30 blur-[3px]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ConnectionLines() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      {[
        { x: 22, y: 30 },
        { x: 78, y: 28 },
        { x: 80, y: 70 },
        { x: 18, y: 72 },
        { x: 60, y: 18 },
        { x: 40, y: 82 },
      ].map((p, i) => (
        <motion.line
          key={i}
          x1="50"
          y1="50"
          x2={p.x}
          y2={p.y}
          stroke="rgba(255,34,51,0.4)"
          strokeWidth="0.18"
          strokeDasharray="0.6 0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

function CrosshairCenter() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[180px] pointer-events-none">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      <span className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <span className="absolute inset-0 rounded-full border border-dashed border-white/15" />
    </div>
  );
}

function HudTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-900/70 px-3 py-2 backdrop-blur">
      <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-haze-400">
        {label}
      </div>
      <div className="font-display text-base font-semibold text-white">{value}</div>
    </div>
  );
}

function FloatingChip({
  className,
  title,
  sub,
  accent,
}: {
  className?: string;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className={`absolute hidden md:block ${className}`}
    >
      <div className="rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 backdrop-blur-xl shadow-panel">
        <div className="flex items-center gap-2">
          <span
            className={`size-1.5 rounded-full ${
              accent ? "bg-signal-500" : "bg-steel-300"
            } animate-pulse`}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-300">
            {title}
          </span>
        </div>
        <div className="mt-1 font-display text-[13px] font-medium text-white">{sub}</div>
      </div>
    </motion.div>
  );
}

function DispatchTimeline() {
  return (
    <div className="relative panel rounded-2xl p-4 sm:p-6">
      <div className="absolute inset-x-6 top-0 hairline-x" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {TIMELINE_EVENTS.map((e, i) => (
          <div key={e.label} className="flex items-start gap-3">
            <div className="relative shrink-0">
              <span className="flex size-9 items-center justify-center rounded-full bg-signal-500/10 ring-1 ring-signal-500/30">
                <e.icon className="size-4 text-signal-300" />
              </span>
              {i < TIMELINE_EVENTS.length - 1 && (
                <span className="hidden sm:block absolute left-full top-4 w-[calc(100%+2rem)] h-px bg-gradient-to-r from-signal-500/40 via-white/10 to-transparent" />
              )}
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-haze-400">
                T+{e.t}
              </div>
              <div className="text-[14px] font-medium text-white">{e.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
