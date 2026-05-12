"use client";

import { motion } from "framer-motion";
import {
  CircleAlert,
  Lock,
  MessageSquare,
  Send,
  Volume,
  VolumeOff,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const USER_THREAD = [
  { who: "user", t: "00:01", text: "Help. Suspect broke in." },
  { who: "auto", t: "00:01", text: "GPS confirmed · 5th & Spring" },
  { who: "officer", t: "00:03", text: "Unit 14 dispatched. Stay where you are." },
  { who: "user", t: "00:14", text: "Hidden in closet. Hostile downstairs." },
  { who: "officer", t: "00:18", text: "Acknowledged. ETA 1:42. Silent mode active." },
];

const PRESETS = [
  "I am safe",
  "I cannot speak",
  "Suspect armed",
  "Need medical",
];

export function Communication() {
  return (
    <section
      id="communication"
      className="relative isolate scroll-mt-32 py-28 lg:py-40"
    >
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -bottom-32 right-1/4 h-[420px] w-[820px] rounded-full bg-signal-700/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Communication System"
          title={
            <>
              Silent. Encrypted.<br />
              <span className="gradient-text-signal">Built for the worst moments.</span>
            </>
          }
          description="Voice gives you away. Auxilio's primary channel is text-only, haptic-driven, and tap-preset — designed for people hiding from the source of their emergency."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Citizen view */}
          <div className="lg:col-span-6">
            <PanelTitle
              label="Citizen Device · Silent Mode"
              icon={VolumeOff}
              right="haptic_only"
            />
            <div className="panel-deep mt-3 overflow-hidden rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-1.5">
                    <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
                    <span className="relative size-1.5 rounded-full bg-signal-500" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-200">
                    Active SOS · screen blacked out
                  </span>
                </div>
                <Lock className="size-3.5 text-haze-300" />
              </div>

              <div className="bg-black p-5 sm:p-6 min-h-[420px]">
                {/* Black silent mode mock */}
                <div className="space-y-3">
                  {USER_THREAD.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className={
                        m.who === "user"
                          ? "ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-signal-600 px-3.5 py-2 text-[13px] text-white"
                          : m.who === "officer"
                            ? "mr-auto max-w-[80%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[13px] text-haze-100"
                            : "mx-auto rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-center font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-300"
                      }
                    >
                      {m.who !== "auto" && (
                        <div className="mb-0.5 font-mono text-[9.5px] uppercase tracking-[0.18em] opacity-70">
                          {m.who === "user" ? "you" : "officer · unit 14"} · {m.t}
                        </div>
                      )}
                      {m.text}
                    </motion.div>
                  ))}
                </div>

                {/* Quick presets */}
                <div className="mt-6">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-haze-400">
                    tap to send · no sound · no light
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {PRESETS.map((p) => (
                      <button
                        key={p}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-[12.5px] text-haze-100 transition-colors hover:border-signal-500/40 hover:bg-signal-500/[0.08]"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Haptic indicator */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <div className="flex items-center gap-2">
                    <Zap className="size-3.5 text-signal-300" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
                      haptic protocol
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        className="block h-3 w-1 rounded-full bg-signal-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Officer view */}
          <div className="lg:col-span-6">
            <PanelTitle
              label="Officer Console · Encrypted Channel"
              icon={MessageSquare}
              right="ENC-7F·A2"
            />
            <div className="panel-deep mt-3 overflow-hidden rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div className="flex items-center gap-2">
                  <Volume className="size-3.5 text-signal-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-haze-200">
                    incident AX-9A21F · 50 listeners
                  </span>
                </div>
                <span className="font-mono text-[11px] text-haze-400">AES-256</span>
              </div>

              <div className="p-5 sm:p-6 min-h-[420px] space-y-3">
                <SystemEvent text="Channel created · 50 keys distributed · k_v 4F2A1" />
                <OfficerLine name="Dispatch" t="00:03" body="Armed robbery — 5th & Spring. Code 3." accent />
                <OfficerLine name="Unit 14 (Lead)" t="00:04" body="Copy. Approach south. ETA 1:42." />
                <OfficerLine name="Unit 22" t="00:05" body="Setting perimeter at Hill & 6th." />
                <SystemEvent text="Suspect intel pushed → 50 devices · plate 7XKA243 · 87%" />
                <OfficerLine name="Unit 14 (Lead)" t="00:09" body="Visual on subject heading north on Hill." />
                <OfficerLine name="Air Unit 4" t="00:11" body="Aerial covering. Tracking northbound." />

                {/* Composer */}
                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2">
                  <CircleAlert className="size-4 text-signal-300" />
                  <input
                    placeholder="Broadcast to ENC-7F·A2..."
                    className="flex-1 bg-transparent text-[13.5px] text-white outline-none placeholder:text-haze-500"
                  />
                  <button className="flex size-9 items-center justify-center rounded-full bg-signal-600 text-white hover:bg-signal-500">
                    <Send className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PanelTitle({
  label,
  icon: Icon,
  right,
}: {
  label: string;
  icon: typeof Lock;
  right: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-haze-300">
        <Icon className="size-3.5" />
        {label}
      </div>
      <div className="font-mono text-[11px] text-haze-400">// {right}</div>
    </div>
  );
}

function OfficerLine({
  name,
  t,
  body,
  accent,
}: {
  name: string;
  t: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-start gap-3"
    >
      <div
        className={
          "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border " +
          (accent
            ? "border-signal-500/40 bg-signal-500/15 text-signal-200"
            : "border-white/10 bg-white/[0.03] text-haze-200")
        }
      >
        <span className="font-mono text-[10px] font-semibold">
          {name
            .split(" ")
            .map((s) => s[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
      <div className="flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-haze-400">
          {name} · T+{t}
        </div>
        <div className="text-[13.5px] text-haze-100">{body}</div>
      </div>
    </motion.div>
  );
}

function SystemEvent({ text }: { text: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
      ▮ {text}
    </div>
  );
}
