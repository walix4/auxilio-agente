"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, User, MessageCircle, History, Users2, Contact, Settings, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "./phone-frame";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: User, label: "Profile" },
  { icon: MessageCircle, label: "Chat" },
  { icon: History, label: "History" },
  { icon: Users2, label: "Network" },
  { icon: Contact, label: "Contact" },
  { icon: Settings, label: "Setting" },
  { icon: LifeBuoy, label: "Help & Support" },
];

export function OfficerControl() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-12 -z-10 bg-radial-steel blur-3xl" />
              <PhoneFrame
                src="/agent-screens/drawer.jpg"
                alt="Auxilio Agente — Officer profile drawer"
                height={680}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="05 · Officer control"
              title={
                <>
                  One drawer.{" "}
                  <span className="gradient-text-steel">
                    Every shift function.
                  </span>
                </>
              }
              description="Dashboard, chat, history, contacts, networks, support — Auxilio Agente collapses every admin surface a working officer needs into a single drawer. No tabbing across apps. No re-authenticating mid-shift."
            />

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group flex flex-col items-start gap-3 panel rounded-xl p-4 transition-colors hover:border-signal-500/30"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-white/10 transition-colors group-hover:bg-signal-500/10 group-hover:ring-signal-500/30">
                    <item.icon className="size-4 text-haze-200 transition-colors group-hover:text-signal-300" />
                  </span>
                  <div className="font-display text-[14px] font-medium text-white">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-steel-500 to-ink-700 ring-2 ring-ink-950"
                  >
                    <svg viewBox="0 0 24 24" className="size-4 text-white" fill="currentColor">
                      <circle cx="12" cy="9" r="4" />
                      <path d="M2 21 Q 12 13, 22 21 Z" />
                    </svg>
                  </span>
                ))}
              </div>
              <div className="text-[13.5px] text-haze-200">
                <span className="font-semibold text-white">12,400+ officers</span>{" "}
                already running Auxilio Agente in the field.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
