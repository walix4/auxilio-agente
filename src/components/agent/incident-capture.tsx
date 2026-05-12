"use client";

import { motion } from "framer-motion";
import { Camera, FileCheck, ScanLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "./phone-frame";

export function IncidentCapture() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              theme="light"
              eyebrow="04 · Incident capture"
              title={
                <>
                  The report writes itself —{" "}
                  <span className="text-signal-600">on scene.</span>
                </>
              }
              description="Plate, make, model, year, color. Three angles of the vehicle. Suspect tags applied at dispatch. Auxilio Agente captures it all in the field and pre-fills the incident report before the officer leaves the scene."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Camera,
                  title: "3-angle vehicle capture",
                  body: "Front, side, back — auto-aligned and stamped with GPS + time.",
                },
                {
                  icon: ScanLine,
                  title: "Plate OCR",
                  body: "Reads plates from camera, validates against AB-7368 format.",
                },
                {
                  icon: FileCheck,
                  title: "Auto-report",
                  body: "Tags + vehicle + route + audio log compile into one submission.",
                },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-signal-50 ring-1 ring-signal-200">
                    <f.icon className="size-4 text-signal-600" />
                  </span>
                  <div className="mt-3 font-display text-[15px] font-semibold text-[#0B1735]">
                    {f.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-[1.5] text-slate-600">
                    {f.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-12 -z-10 rounded-full bg-signal-100/60 blur-3xl" />
              <PhoneFrame
                src="/agent-screens/vehicle-details.png"
                alt="Auxilio Agente — Vehicle details capture screen"
                height={680}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
