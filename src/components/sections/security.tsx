"use client";

import { motion } from "framer-motion";
import {
  Eye,
  FileSearch,
  Fingerprint,
  KeyRound,
  Lock,
  Network,
  Scale,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const PILLARS = [
  {
    icon: Lock,
    title: "Encrypted incident channels",
    detail:
      "AES-256 ephemeral channels per incident. Keys rotate per-event, never reused, never exported.",
  },
  {
    icon: FileSearch,
    title: "Audit trails",
    detail:
      "Every dispatch decision, key access, and data view is signed and committed to an immutable forensic ledger.",
  },
  {
    icon: Fingerprint,
    title: "Role-based access",
    detail:
      "Officer, supervisor, dispatcher, auditor — least-privilege, time-bound, with break-glass attestation.",
  },
  {
    icon: Eye,
    title: "Evidence logging",
    detail:
      "Plate scans, face matches, and audio snippets are sealed at capture — chain-of-custody preserved end-to-end.",
  },
  {
    icon: Network,
    title: "Tamper-resistant architecture",
    detail:
      "Hardware-backed device attestation. Anti-rollback. Sealed time. Coercion-resistant trigger paths.",
  },
  {
    icon: Scale,
    title: "Policy & jurisdictional compliance",
    detail:
      "Bring your agency's policy as code. Auxilio enforces — and records — every gate before action.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -top-32 right-1/3 h-[420px] w-[820px] rounded-full bg-signal-700/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Security · Government Grade"
              title={
                <>
                  Security is not<br />
                  <span className="gradient-text-signal">a feature.</span>
                  {" "}It is the substrate.
                </>
              }
              description="Auxilio is built to operate where compromise is the adversary's first move. Every channel, decision, and artifact is signed, sealed, and auditable."
            />
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <CertCard label="SOC 2 Type II" sub="audited" />
              <CertCard label="FedRAMP" sub="moderate" />
              <CertCard label="CJIS" sub="aligned" />
              <CertCard label="ISO 27001" sub="certified" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.035]"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-signal-500/25 bg-signal-500/10 text-signal-300">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-[15px] font-semibold tracking-[-0.01em] text-white">
                {p.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-haze-300">
                {p.detail}
              </p>
              <div className="mt-4 hairline-x" />
              <div className="mt-3 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                <span>chain-of-custody</span>
                <span className="flex items-center gap-1.5 text-signal-300">
                  <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
                  sealed
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Encryption diagram strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 panel-deep relative overflow-hidden rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-300">
                <KeyRound className="size-3.5" />
                Per-incident key rotation
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-white">
                Sealed at capture. Verified on access.
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.55] text-haze-300">
                A new key envelope is minted per incident — distributed only to
                authorized devices, rotated every 30s, and destroyed at clear.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <KeyStage label="Generate" detail="HSM-backed · k_v 4F2A1" />
                <KeyStage label="Distribute" detail="50 devices · WS · ack" />
                <KeyStage label="Rotate" detail="every 30s · destroyed at clear" />
              </div>

              {/* Key flow line */}
              <div className="mt-5 relative h-2 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-signal-500 to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CertCard({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
        <Shield className="size-3.5" />
        {sub}
      </div>
      <div className="mt-2 font-display text-[15px] font-semibold tracking-[-0.01em] text-white">
        {label}
      </div>
    </div>
  );
}

function KeyStage({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-signal-500" />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-signal-300">
          {label}
        </span>
      </div>
      <div className="mt-2 font-mono text-[12px] text-haze-200">{detail}</div>
    </div>
  );
}
