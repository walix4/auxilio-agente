"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Plug, Server, Webhook } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const ENDPOINTS = [
  { method: "POST", path: "/v1/incidents", desc: "Create a new SOS incident" },
  { method: "GET", path: "/v1/incidents/:id", desc: "Stream incident state" },
  { method: "POST", path: "/v1/dispatch/parallel", desc: "Fan out to N officers" },
  { method: "GET", path: "/v1/officers/nearby", desc: "Geo-ranked candidate list" },
  { method: "POST", path: "/v1/channels/spawn", desc: "Mint encrypted channel" },
  { method: "POST", path: "/v1/intel/correlate", desc: "Run criteria graph query" },
];

const WEBHOOKS = [
  "incident.created",
  "incident.dispatched",
  "officer.assigned",
  "officer.arrived",
  "channel.opened",
  "channel.closed",
  "intel.match.suspect",
  "intel.match.vehicle",
  "audit.event",
];

export function ApiInfrastructure() {
  return (
    <section id="api" className="relative isolate scroll-mt-32 py-28 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="API · Infrastructure"
          title={
            <>
              Programmable<br />
              <span className="gradient-text-signal">public safety infrastructure.</span>
            </>
          }
          description="Auxilio exposes every primitive — dispatch, geofencing, intelligence, channels — through versioned APIs, signed webhooks, and a real-time event firehose. Build the public safety stack you need."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Endpoints */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6 }}
              className="panel-deep overflow-hidden rounded-3xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div className="flex items-center gap-2">
                  <Plug className="size-3.5 text-signal-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
                    api.auxilio.io · v1
                  </span>
                </div>
                <span className="font-mono text-[11px] text-haze-400">
                  REST · gRPC · WebSocket
                </span>
              </div>
              <ul className="divide-y divide-white/[0.06]">
                {ENDPOINTS.map((e) => (
                  <li
                    key={e.path}
                    className="flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={
                          "rounded-md border px-1.5 py-0.5 font-mono text-[10.5px] font-semibold " +
                          (e.method === "POST"
                            ? "border-signal-500/30 bg-signal-500/10 text-signal-300"
                            : "border-steel-500/30 bg-steel-500/10 text-steel-200")
                        }
                      >
                        {e.method}
                      </span>
                      <span className="truncate font-mono text-[13px] text-white">
                        {e.path}
                      </span>
                    </div>
                    <span className="hidden sm:block truncate text-[12.5px] text-haze-300">
                      {e.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Webhooks */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 panel-deep overflow-hidden rounded-3xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div className="flex items-center gap-2">
                  <Webhook className="size-3.5 text-signal-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
                    signed webhooks · 9 events
                  </span>
                </div>
                <span className="font-mono text-[11px] text-haze-400">
                  HMAC-SHA256
                </span>
              </div>
              <div className="flex flex-wrap gap-2 p-5">
                {WEBHOOKS.map((w) => (
                  <span
                    key={w}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-haze-200"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Infra cards */}
          <div className="lg:col-span-5 space-y-4">
            <InfraCard
              icon={Server}
              eyebrow="Deployment"
              title="Cloud, VPC, or air-gapped"
              detail="Multi-tenant cloud, customer-isolated VPC, or fully on-premise — same APIs, same SLAs, same software."
            />
            <InfraCard
              icon={Globe}
              eyebrow="Federation"
              title="Cross-jurisdiction by default"
              detail="Mutual aid, federal task forces, and inter-agency dispatch are first-class — not bolt-on integrations."
            />
            <InfraCard
              icon={Cpu}
              eyebrow="SDKs"
              title="TypeScript · Python · Go · Swift · Kotlin"
              detail="Native SDKs in every language your stack already runs. Type-safe, generated, versioned."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfraCard({
  icon: Icon,
  eyebrow,
  title,
  detail,
}: {
  icon: typeof Server;
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
    >
      <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
        <Icon className="size-3.5 text-signal-300" />
        {eyebrow}
      </div>
      <div className="mt-3 font-display text-[16px] font-semibold tracking-[-0.01em] text-white">
        {title}
      </div>
      <p className="mt-2 text-[13px] leading-[1.55] text-haze-300">{detail}</p>
    </motion.div>
  );
}
