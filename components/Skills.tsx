"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { coursework, skills } from "@/lib/data";
import { Reveal, SectionTitle } from "./ui";

export default function Skills() {
  const tabs = Object.keys(skills);
  const [tab, setTab] = useState(tabs[0]);
  const loop = [...coursework, ...coursework];

  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Skills"
          title={
            <>
              The <span className="grad-text">toolkit</span>.
            </>
          }
          sub="Pick a category to explore."
        />

        <Reveal>
          <div className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-line bg-white/5 p-1 backdrop-blur">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {tab === t && (
                  <motion.span
                    layoutId="skill-pill"
                    className="absolute inset-0 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative ${tab === t ? "text-black" : "text-mute hover:text-fg"}`}>{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-12 min-h-[190px] max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.ul
              key={tab}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-wrap justify-center gap-3"
            >
              {skills[tab].map((s) => (
                <motion.li
                  key={s}
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="cursor-default rounded-2xl border border-line bg-card px-5 py-3 text-lg font-medium tracking-tight transition-colors hover:border-blue/60 hover:bg-blue/10 sm:text-xl"
                >
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden" aria-label="Relevant coursework">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-mute">
          Coursework
        </p>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
        <div className="animate-marquee flex w-max gap-4">
          {loop.map((c, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line px-6 py-3 text-lg text-mute"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
