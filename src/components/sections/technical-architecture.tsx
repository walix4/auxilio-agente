"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  Code,
  GitMerge,
  Globe2,
  Network,
  Radio,
  Shield,
  Wifi,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const PRIMITIVES = [
  { icon: Wifi, label: "WebSockets", detail: "Persistent low-latency channels" },
  { icon: Globe2, label: "Redis GEO", detail: "Spatial indexes · sub-ms" },
  { icon: GitMerge, label: "Promise.all dispatch", detail: "Parallel fanout" },
  { icon: Boxes, label: "Geofencing", detail: "Boundary + policy resolution" },
  { icon: Network, label: "AI inference", detail: "Edge + region" },
  { icon: Cloud, label: "Edge redundancy", detail: "Active/active multi-region" },
  { icon: Radio, label: "Offline SMS fallback", detail: "Coercion-resistant" },
  { icon: Shield, label: "AES-256 channels", detail: "Per-incident keys" },
];

export function TechnicalArchitecture() {
  return (
    <section className="relative isolate scroll-mt-32 py-28 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -bottom-24 right-1/4 h-[420px] w-[820px] rounded-full bg-steel-700/15 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Technical Architecture"
          title={
            <>
              Engineered for<br />
              <span className="gradient-text-steel">millisecond decisions.</span>
            </>
          }
          description="Auxilio is a low-latency, parallel-by-default system. Every primitive — from socket frames to spatial indexes — is chosen for the 5-second SLO."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Code panel */}
          <div className="lg:col-span-7">
            <CodePanel />

            {/* Latency graph */}
            <div className="mt-4 panel-deep overflow-hidden rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
                    dispatch_latency · 24h
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em]">
                  <span className="text-signal-300">p50 1.8s</span>
                  <span className="text-haze-300">p99 4.2s</span>
                  <span className="text-haze-400">SLO 5.0s</span>
                </div>
              </div>
              <div className="p-5">
                <LatencyChart />
              </div>
            </div>
          </div>

          {/* Primitive grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {PRIMITIVES.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.035]"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg border border-steel-500/30 bg-steel-500/10 text-steel-200">
                    <p.icon className="size-4" />
                  </div>
                  <div className="mt-3 font-display text-[13.5px] font-semibold text-white">
                    {p.label}
                  </div>
                  <div className="mt-1 text-[12px] text-haze-300">
                    {p.detail}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <BenchTile value="50k" label="dispatches / sec" />
              <BenchTile value="2M" label="active sockets" />
              <BenchTile value="6 regions" label="active / active" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6 }}
      className="panel-deep overflow-hidden rounded-3xl"
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
        <div className="flex items-center gap-2">
          <Code className="size-3.5 text-signal-300" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
            dispatch.ts
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="size-1.5 rounded-full bg-signal-500/60" />
          <span className="size-1.5 rounded-full bg-haze-500/60" />
          <span className="size-1.5 rounded-full bg-haze-500/60" />
        </div>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.7] text-haze-200">
        <code>
          <Line c="signal">{`async function dispatchIncident(incident: Incident) {`}</Line>
          <Line>{`  const fix     = await acquireGps(incident.deviceId);    // < 250ms`}</Line>
          <Line>{`  const auth    = await resolveJurisdiction(fix.geo);     // < 6ms`}</Line>
          <Line>{`  const ranked  = await redis.geosearch({                  // < 6ms`}</Line>
          <Line>{`    key: "officers:active",`}</Line>
          <Line>{`    from: fix.geo, radius: 1.2km, sort: "ASC", count: 268`}</Line>
          <Line>{`  });`}</Line>
          <Line>{``}</Line>
          <Line c="muted">{`  // policy gates: authority, vehicle class, fatigue, BOLO conflict`}</Line>
          <Line>{`  const eligible = policy.filter(ranked, auth);            // < 4ms`}</Line>
          <Line c="signal">{`  const winners  = eligible.slice(0, 50);                   // 50 in parallel`}</Line>
          <Line>{``}</Line>
          <Line>{`  const channel  = await radio.spawnChannel({ aes: 256 }); // < 80ms`}</Line>
          <Line c="signal">{`  await Promise.all(winners.map(o => fanout(o, {           // PARALLEL`}</Line>
          <Line>{`    incident, channel, route: route.for(o, fix), intel: intel(incident),`}</Line>
          <Line>{`  })));                                                    // < 1.2s`}</Line>
          <Line>{``}</Line>
          <Line>{`  return audit.commit({ ...incident, channel, dispatched: winners });`}</Line>
          <Line c="signal">{`}`}</Line>
        </code>
      </pre>
    </motion.div>
  );
}

function Line({
  children,
  c,
}: {
  children: React.ReactNode;
  c?: "signal" | "muted";
}) {
  const cls =
    c === "signal"
      ? "text-signal-300"
      : c === "muted"
        ? "text-haze-500"
        : "text-haze-200";
  return <div className={cls}>{children}</div>;
}

function LatencyChart() {
  // Generate deterministic-ish bars
  const bars = Array.from({ length: 60 }).map((_, i) => {
    const base = 30;
    const noise = ((i * 13 + 7) % 25) - 12;
    const spike = i === 22 || i === 41 ? 30 : 0;
    return Math.max(20, Math.min(78, base + noise + spike));
  });
  return (
    <div className="relative">
      {/* SLO line */}
      <div className="absolute inset-x-0 top-[18%] flex items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-300">
          SLO 5s
        </span>
        <div className="h-px flex-1 border-t border-dashed border-signal-500/40" />
      </div>
      <div className="flex h-[120px] items-end gap-[3px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-steel-700/40 via-steel-500/60 to-signal-400/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}

function BenchTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 text-center">
      <div className="font-display text-lg font-semibold tabular-nums text-white">
        {value}
      </div>
      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-haze-400">
        {label}
      </div>
    </div>
  );
}
