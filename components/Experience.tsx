"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { Reveal, SectionTitle, SpotCard } from "./ui";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-28">
      <SectionTitle
        eyebrow="Experience"
        title={
          <>
            Where I’ve been <span className="grad-text">tested</span>.
          </>
        }
      />
      <div ref={ref} className="relative pl-8 sm:pl-12">
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/10 sm:left-[15px]" />
        <motion.div
          style={{ height: h }}
          className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-blue via-violet to-rose sm:left-[15px]"
        />
        {experience.map((e) => (
          <Reveal key={e.role + e.dates}>
            <div className="relative">
              <span className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-2 border-blue bg-black sm:-left-[45px] sm:h-[18px] sm:w-[18px]" />
              <SpotCard className="p-7 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{e.role}</h3>
                  <p className="text-sm text-mute">{e.dates}</p>
                </div>
                <p className="mt-1 text-blue">
                  {e.org} <span className="text-mute">· {e.place}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-[#c7c7cc]">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                      {p}
                    </li>
                  ))}
                </ul>
              </SpotCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
