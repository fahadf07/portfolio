"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Reveal } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 pb-10 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-blue/25 via-violet/25 to-rose/25 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-5xl font-semibold tracking-tight sm:text-8xl">
            Let’s <span className="grad-text">talk</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mute">
            Looking for a summer internship or part-time role during the school year? I’d love to hear from you.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${profile.email}`}
              className="rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-black"
            >
              Email me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur"
            >
              LinkedIn ↗
            </motion.a>
            {profile.github && (
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur"
              >
                GitHub ↗
              </motion.a>
            )}
{profile.resume && (            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur"
            >
              Resume (PDF)
            </motion.a>)}
          </div>
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-32 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-line pt-6 text-xs text-mute sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <p>{profile.location}</p>
      </footer>
    </section>
  );
}
