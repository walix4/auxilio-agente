"use client";

import { motion } from "framer-motion";
import { Users, Shield, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "./phone-frame";

const FEATURES = [
  {
    icon: Users,
    title: "Trusted networks",
    body: "Officers build their own circles — partners, supervisors, family, squad — and choose who sees their status, location, and shift.",
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

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-12 -z-10 bg-radial-fade blur-3xl" />
              <PhoneFrame
                src="/agent-screens/my-network.jpg"
                alt="Auxilio Agente — My Network screen"
                height={680}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="panel-deep flex items-start gap-4 p-5 lg:p-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-signal-500/10 ring-1 ring-signal-500/30">
                    <f.icon className="size-5 text-signal-300" />
                  </span>
                  <div>
                    <h3 className="font-display text-[19px] font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.55] text-haze-300">
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-steel-500 to-ink-700 ring-2 ring-ink-950 text-[10px] font-bold text-white"
                  >
                    SC
                  </span>
                ))}
              </div>
              <div className="text-[13.5px] text-haze-200">
                <span className="font-semibold text-white">12 squads · 1,023 contacts</span>{" "}
                — built from the officer's existing roster, not a vendor's.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
