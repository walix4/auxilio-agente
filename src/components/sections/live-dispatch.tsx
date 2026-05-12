"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crosshair,
  MapPin,
  Radio,
  Route,
  Shield,
  Siren,
  Users,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Stage = {
  key: string;
  label: string;
  detail: string;
  icon: typeof Shield;
  duration: number;
  log: string[];
};

const STAGES: Stage[] = [
  {
    key: "trigger",
    label: "SOS triggered",
    detail: "Citizen device · biometric confirmation",
    icon: Siren,
    duration: 0.6,
    log: [
      "▮ Incoming SOS · device #A7F3-2C19",
      "  ↳ biometric_confirm: passed",
      "  ↳ severity_class: HIGH",
    ],
  },
  {
    key: "gps",
    label: "GPS acquisition",
    detail: "Sub-meter precision · 34.0522° N, 118.2437° W",
    icon: Crosshair,
    duration: 0.7,
    log: [
      "▮ Acquiring satellite lock...",
      "  ↳ accuracy: 0.84m  altitude: 86m",
      "  ↳ moving: false  speed: 0.0 m/s",
    ],
  },
  {
    key: "jurisdiction",
    label: "Jurisdiction lookup",
    detail: "Geofence resolved · LAPD · Sector 7",
    icon: Shield,
    duration: 0.7,
    log: [
      "▮ Geofence query → boundary_db",
      "  ↳ matched: LAPD · Sector 7 · Beat 14",
      "  ↳ legal_authority: AUTHORIZED",
    ],
  },
  {
    key: "scan",
    label: "Officer proximity scan",
    detail: "Redis GEO · 50 closest authorized responders",
    icon: Users,
    duration: 0.9,
    log: [
      "▮ ZRANGEBYRADIUS officers:active 1.2km",
      "  ↳ candidates: 268",
      "  ↳ filtered (auth+status+vehicle): 50",
    ],
  },
  {
    key: "dispatch",
    label: "Parallel dispatch",
    detail: "Promise.all → 50 officers · simultaneous",
    icon: Route,
    duration: 1.0,
    log: [
      "▮ Promise.all([dispatch × 50])",
      "  ↳ socket.io fanout · ack 47/50",
      "  ↳ retry queue: 3 (sms_fallback)",
    ],
  },
  {
    key: "radio",
    label: "Encrypted radio room",
    detail: "AES-256 · room ENC-7F·A2 · live",
    icon: Radio,
    duration: 0.6,
    log: [
      "▮ Spawn ephemeral channel ENC-7F·A2",
      "  ↳ keys rotated · k_v: 4F2A1",
      "  ↳ participants: 50 + dispatcher",
    ],
  },
  {
    key: "nav",
    label: "Navigation routes",
    detail: "ETA-optimized routes · streamed live",
    icon: MapPin,
    duration: 0.5,
    log: [
      "▮ Routing engine → 50 polylines",
      "  ↳ avg ETA: 1m 42s · min 0m 38s",
      "  ↳ stream: gps:officer:* @ 2Hz",
    ],
  },
];

const TOTAL = STAGES.reduce((a, s) => a + s.duration, 0);

export function LiveDispatch() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 of TOTAL
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const reset = () => {
    setRunning(false);
    setDone(false);
    setProgress(0);
    setActiveIndex(-1);
    setLogs([]);
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const start = () => {
    reset();
    setRunning(true);
    startRef.current = performance.now();
    const tick = (now: number) => {
      if (!startRef.current) return;
      const elapsed = (now - startRef.current) / 1000;
      const p = Math.min(elapsed / TOTAL, 1);
      setProgress(p);

      // determine active stage
      let acc = 0;
      let idx = -1;
      for (let i = 0; i < STAGES.length; i++) {
        acc += STAGES[i].duration;
        if (elapsed <= acc) {
          idx = i;
          break;
        }
      }
      if (idx === -1) idx = STAGES.length - 1;
      setActiveIndex(idx);

      // append logs progressively
      setLogs((prev) => {
        const target: string[] = [];
        let consumed = 0;
        for (let i = 0; i <= idx; i++) {
          if (i < idx) {
            target.push(...STAGES[i].log);
            consumed += STAGES[i].duration;
          } else {
            const frac = Math.min((elapsed - consumed) / STAGES[i].duration, 1);
            const linesToShow = Math.ceil(frac * STAGES[i].log.length);
            target.push(...STAGES[i].log.slice(0, linesToShow));
          }
        }
        return target.length > prev.length ? target : prev;
      });

      if (p >= 1) {
        setRunning(false);
        setDone(true);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const elapsedSeconds = (progress * 5).toFixed(2);

  return (
    <section
      id="dispatch"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-30 mask-radial" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Live Dispatch · Interactive"
          title={
            <>
              From SOS to{" "}
              <span className="gradient-text-signal">50 officers</span> in{" "}
              <span className="gradient-text-signal">5 seconds.</span>
            </>
          }
          description="Tap to trigger a real simulated incident. Watch Auxilio's AI dispatch core resolve jurisdiction, scan the geosphere, and mobilize the nearest authorized responders — in parallel."
          variant="signal"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Map */}
          <div className="lg:col-span-7">
            <div className="relative panel-deep overflow-hidden rounded-[28px]">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                  <Badge variant="live">Sector 7 · live</Badge>
                  <div className="hidden sm:block font-mono text-[11px] text-haze-400">
                    incident_id: AX-9A21F
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    onClick={start}
                    className="gap-2"
                    disabled={running}
                  >
                    <Siren className="size-3.5" />
                    {done ? "Run again" : "Trigger SOS"}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={reset}
                    className="text-haze-300"
                  >
                    Reset
                  </Button>
                </div>
              </div>

              {/* Map canvas */}
              <div className="relative h-[460px] sm:h-[560px] bg-gradient-to-br from-ink-900 via-ink-850 to-ink-950">
                <SimMapGrid />
                {progress > 0 && <SimRadar progress={progress} />}
                <SimOfficers
                  active={activeIndex >= 3}
                  dispatched={activeIndex >= 4}
                />
                {activeIndex >= 4 && <SimRoutes progress={progress} />}
                <SimCenter />

                {/* Live event banner */}
                <AnimatePresence>
                  {activeIndex >= 0 && (
                    <motion.div
                      key={activeIndex}
                      initial={{ y: -16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full border border-signal-500/40 bg-signal-500/10 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-signal-200 backdrop-blur"
                    >
                      {STAGES[activeIndex]?.label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom HUD */}
                <div className="absolute inset-x-3 bottom-3 z-20 grid grid-cols-4 gap-2">
                  <HudTile label="Elapsed" value={`${elapsedSeconds}s`} pulse={running} />
                  <HudTile
                    label="Officers"
                    value={`${activeIndex >= 4 ? Math.min(50, Math.round(((progress - 0.55) / 0.2) * 50) + 0) : 0} / 50`}
                  />
                  <HudTile label="Channel" value={activeIndex >= 5 ? "ENC-7F·A2" : "—"} />
                  <HudTile
                    label="Status"
                    value={done ? "DISPATCHED" : running ? "ACTIVE" : "STANDBY"}
                    accent={done || running}
                  />
                </div>

                {/* Idle prompt */}
                {!running && !done && (
                  <button
                    onClick={start}
                    className="group absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  >
                    <span className="relative inline-flex">
                      <span className="absolute inset-0 rounded-full bg-signal-500/40 blur-xl animate-pulse" />
                      <span className="relative inline-flex items-center gap-2 rounded-full bg-signal-600 px-5 py-3 font-display text-sm font-semibold text-white shadow-glow-signal transition group-hover:bg-signal-500">
                        <Siren className="size-4" />
                        Trigger SOS
                      </span>
                    </span>
                  </button>
                )}

                {/* Done overlay */}
                <AnimatePresence>
                  {done && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-signal-500/40 bg-ink-900/85 px-6 py-5 text-center backdrop-blur-xl shadow-glow-signal"
                    >
                      <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-signal-300">
                        DISPATCH COMPLETE
                      </div>
                      <div className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em] text-white">
                        {(TOTAL).toFixed(2)}s
                      </div>
                      <div className="mt-1 text-[12.5px] text-haze-300">
                        50 officers en route · Channel ENC-7F·A2 live
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Stages + log */}
          <div className="lg:col-span-5 space-y-4">
            {/* Stages */}
            <div className="panel-deep rounded-2xl p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                    Pipeline
                  </div>
                  <div className="font-display text-[15px] font-medium text-white">
                    7 stages · sub-5s SLO
                  </div>
                </div>
                <div className="font-mono text-xs text-haze-400">
                  {Math.round(progress * 100)}%
                </div>
              </div>

              <ol className="space-y-2.5">
                {STAGES.map((s, i) => {
                  const completed = i < activeIndex || done;
                  const active = i === activeIndex && running;
                  return (
                    <li
                      key={s.key}
                      className={cn(
                        "relative flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300",
                        active
                          ? "border-signal-500/40 bg-signal-500/[0.06]"
                          : completed
                            ? "border-white/[0.08] bg-white/[0.02]"
                            : "border-white/[0.05] bg-white/[0.01]"
                      )}
                    >
                      <div
                        className={cn(
                          "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full transition-colors",
                          active
                            ? "bg-signal-500/20 ring-1 ring-signal-500/40 text-signal-200"
                            : completed
                              ? "bg-white/[0.06] ring-1 ring-white/10 text-white"
                              : "bg-white/[0.02] ring-1 ring-white/[0.06] text-haze-500"
                        )}
                      >
                        <s.icon className="size-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-[13.5px] font-medium text-white">
                            {s.label}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
                            {s.duration.toFixed(1)}s
                          </div>
                        </div>
                        <div className="mt-0.5 truncate text-[12px] text-haze-300">
                          {s.detail}
                        </div>
                      </div>
                      {active && (
                        <motion.span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 rounded-xl border border-signal-500/40"
                          animate={{ opacity: [0.2, 0.7, 0.2] }}
                          transition={{ duration: 1.4, repeat: Infinity }}
                        />
                      )}
                    </li>
                  );
                })}
              </ol>

              {/* Progress bar */}
              <div className="mt-5">
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-signal-700 via-signal-500 to-signal-300"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
                  <span>T+0s</span>
                  <span>T+5s</span>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="panel-deep rounded-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Wifi className="size-3.5 text-signal-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-300">
                    dispatch.console
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="size-1.5 rounded-full bg-signal-500/60" />
                  <span className="size-1.5 rounded-full bg-haze-500/60" />
                  <span className="size-1.5 rounded-full bg-haze-500/60" />
                </div>
              </div>
              <div className="h-[260px] overflow-hidden p-4 font-mono text-[12px] leading-[1.6]">
                {logs.length === 0 ? (
                  <span className="text-haze-500">
                    waiting for incident...
                    <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-signal-400 align-middle" />
                  </span>
                ) : (
                  <div className="space-y-0.5 mask-fade-t">
                    {logs.slice(-14).map((l, i) => (
                      <motion.div
                        key={`${l}-${i}`}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          l.startsWith("▮")
                            ? "text-signal-300"
                            : "text-haze-300"
                        )}
                      >
                        {l}
                      </motion.div>
                    ))}
                    {running && (
                      <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-signal-400 align-middle" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimMapGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="sg-line" x1="0" y1="0" x2="800" y2="600">
          <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>
      {/* Major streets */}
      {Array.from({ length: 12 }).map((_, i) => {
        const y = (i + 1) * 50;
        return (
          <path
            key={`h-${i}`}
            d={`M0 ${y} Q 200 ${y - 18 + i * 3}, 420 ${y + 6} T 800 ${y - 8}`}
            stroke="url(#sg-line)"
            strokeWidth="0.8"
            fill="none"
          />
        );
      })}
      {Array.from({ length: 10 }).map((_, i) => {
        const x = (i + 1) * 80;
        return (
          <path
            key={`v-${i}`}
            d={`M${x} 0 Q ${x + 18} 200, ${x - 6} 400 T ${x + 12} 600`}
            stroke="url(#sg-line)"
            strokeWidth="0.8"
            fill="none"
          />
        );
      })}
      {/* District blocks */}
      {[
        [120, 90, 140, 90],
        [320, 200, 180, 110],
        [560, 130, 160, 110],
        [180, 360, 200, 130],
        [500, 380, 220, 140],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill="rgba(255,255,255,0.012)"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.6"
        />
      ))}
    </svg>
  );
}

function SimRadar({ progress }: { progress: number }) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {[0, 0.5, 1.0, 1.5].map((d) => (
        <motion.span
          key={d}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-500/35"
          initial={{ width: 30, height: 30, opacity: 0 }}
          animate={{
            width: 460,
            height: 460,
            opacity: [0, 0.7, 0],
          }}
          transition={{ duration: 3, delay: d, repeat: Infinity }}
        />
      ))}
      {/* Sweep */}
      <motion.div
        className="absolute left-1/2 top-1/2 size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,34,51,0.0) 0deg, rgba(255,34,51,0.32) 18deg, rgba(255,34,51,0.0) 30deg)",
          maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 60%, transparent 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function SimOfficers({ active, dispatched }: { active: boolean; dispatched: boolean }) {
  // 50 dots in concentric pattern around center
  const dots = Array.from({ length: 50 }).map((_, i) => {
    const ring = Math.floor(i / 10);
    const slot = i % 10;
    const angle = (slot / 10) * Math.PI * 2 + (ring % 2 === 0 ? 0 : Math.PI / 10);
    const radius = 70 + ring * 50; // px
    const x = 50 + (Math.cos(angle) * radius) / 8; // %
    const y = 50 + (Math.sin(angle) * radius) / 6;
    return { i, x, y, delay: i * 0.018 };
  });

  return (
    <div className="absolute inset-0">
      {dots.map((d) => (
        <motion.div
          key={d.i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: active ? 1 : 0.4,
            scale: 1,
          }}
          transition={{ delay: d.delay, duration: 0.4 }}
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={
              dispatched
                ? { y: 0, scale: [1, 1.6, 1] }
                : { y: 0 }
            }
            transition={{ duration: 1.2, delay: d.delay, repeat: dispatched ? Infinity : 0, repeatDelay: 1 }}
            className="relative"
          >
            <span
              className={cn(
                "block size-1.5 rounded-full ring-1 transition-all duration-300",
                dispatched
                  ? "bg-signal-300 ring-signal-300/60 shadow-[0_0_8px_rgba(255,85,96,0.7)]"
                  : active
                    ? "bg-steel-200 ring-white/30"
                    : "bg-steel-400 ring-white/15"
              )}
            />
            {dispatched && (
              <motion.span
                animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.6, delay: d.delay, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-signal-400/40 blur-[2px]"
              />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function SimRoutes({ progress }: { progress: number }) {
  // 8 representative route lines
  const routes = [
    { x: 18, y: 22 },
    { x: 80, y: 18 },
    { x: 86, y: 64 },
    { x: 14, y: 70 },
    { x: 50, y: 8 },
    { x: 50, y: 92 },
    { x: 32, y: 40 },
    { x: 70, y: 56 },
  ];
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      {routes.map((r, i) => (
        <g key={i}>
          <motion.path
            d={`M${r.x} ${r.y} Q ${(r.x + 50) / 2 + (i % 2 === 0 ? -8 : 8)} ${(r.y + 50) / 2}, 50 50`}
            stroke="rgba(255,34,51,0.55)"
            strokeWidth="0.18"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="0.8 1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.05 + i * 0.06 }}
          />
          <circle r="0.45" fill="#FF5560">
            <animateMotion
              dur={`${1.6 + i * 0.1}s`}
              repeatCount="indefinite"
              begin={`${0.3 + i * 0.08}s`}
              path={`M${r.x} ${r.y} Q ${(r.x + 50) / 2 + (i % 2 === 0 ? -8 : 8)} ${(r.y + 50) / 2}, 50 50`}
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${1.6 + i * 0.1}s`}
              begin={`${0.3 + i * 0.08}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function SimCenter() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative"
      >
        <span className="absolute inset-0 size-4 -translate-x-1/4 -translate-y-1/4 rounded-full bg-signal-500/40 blur-md" />
        <span className="relative block size-2.5 rounded-full bg-signal-400 ring-2 ring-signal-300/60 shadow-[0_0_12px_rgba(255,34,51,0.85)]" />
      </motion.div>
    </div>
  );
}

function HudTile({
  label,
  value,
  accent,
  pulse,
}: {
  label: string;
  value: string;
  accent?: boolean;
  pulse?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-ink-900/80 px-3 py-2 backdrop-blur transition-colors",
        accent
          ? "border-signal-500/40"
          : "border-white/[0.08]"
      )}
    >
      <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-haze-400">
        {label}
      </div>
      <div
        className={cn(
          "font-display text-[15px] font-semibold tabular-nums",
          accent ? "text-signal-300" : "text-white",
          pulse && "animate-pulse"
        )}
      >
        {value}
      </div>
    </div>
  );
}
