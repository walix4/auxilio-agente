"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Plane,
  Shield,
  Theater,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const CASES = [
  {
    icon: Shield,
    title: "Police departments",
    detail:
      "Replace radios, scanners, and dispatch terminals across an entire force. Federate jurisdictions for mutual aid.",
    metric: "30,000+ officers supported",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    detail:
      "Campus-wide silent SOS, geofenced response, and parental notification — without exposing identity to bad actors.",
    metric: "Sub-30s on-foot response",
  },
  {
    icon: Building2,
    title: "Smart cities",
    detail:
      "City-grade incident orchestration, cross-agency dispatch, and intelligence loops at municipal scale.",
    metric: "Federated dispatch fabric",
  },
  {
    icon: Plane,
    title: "Airports",
    detail:
      "Concourse-aware dispatch, perimeter integration, and TSA-cleared coordination across terminals.",
    metric: "Concourse-grade routing",
  },
  {
    icon: Factory,
    title: "Industrial facilities",
    detail:
      "Sensor-triggered SOS, hazard-class responder routing, and integrated guard force orchestration.",
    metric: "Sensor-tied triggers",
  },
  {
    icon: Theater,
    title: "Event security",
    detail:
      "Crowd-density-aware dispatch for stadiums, conferences, festivals — with VIP escort logic.",
    metric: "100K+ attendee scale",
  },
  {
    icon: HeartPulse,
    title: "Emergency medical",
    detail:
      "Co-dispatch EMS units alongside police. Triage data flows from device to ambulance in flight.",
    metric: "Multi-agency triage",
  },
  {
    icon: Users,
    title: "Private security",
    detail:
      "Apartment, retail, and corporate security firms get fleet-grade coordination — without building it.",
    metric: "Per-site geofencing",
  },
  {
    icon: Cpu,
    title: "Critical infrastructure",
    detail:
      "Substations, ports, data centers — high-value targets get tactical-class response by default.",
    metric: "SLA-backed routing",
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -bottom-32 left-1/4 h-[420px] w-[820px] rounded-full bg-steel-700/15 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Use Cases"
          title={
            <>
              Wherever response time<br />
              <span className="gradient-text-signal">is the difference.</span>
            </>
          }
          description="From municipal police to private security firms, Auxilio operates anywhere a coordinated response must collapse from minutes into seconds."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:border-white/15 hover:bg-white/[0.035]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full bg-signal-500/10 blur-[70px] opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="flex size-11 items-center justify-center rounded-xl border border-signal-500/25 bg-signal-500/10 text-signal-300">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.01em] text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-haze-300">
                {c.detail}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10.5px] uppercase tracking-[0.18em]">
                <span className="text-haze-400">{c.metric}</span>
                <span className="flex size-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-haze-300 transition-colors group-hover:border-signal-500/40 group-hover:text-signal-300">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
