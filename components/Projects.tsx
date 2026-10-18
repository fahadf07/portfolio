"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { project } from "@/lib/data";
import { Reveal, SectionTitle } from "./ui";
import InventoryDemo from "./InventoryDemo";

function Tilt({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 150, damping: 20 });
  return (
    <motion.div
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle
        eyebrow="Projects"
        title={
          <>
            Things I’ve <span className="grad-text">built</span>.
          </>
        }
      />

      <Reveal>
        <Tilt>
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-gradient-to-b from-[#111114] to-[#070708] p-6 sm:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet/20 blur-[100px]" />

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">{project.kicker}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-mute">{project.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                <dl className="mt-8 space-y-5 text-sm">
                  <div>
                    <dt className="font-semibold text-fg">What it does</dt>
                    <dd className="mt-1 leading-relaxed text-mute">{project.built}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-fg">Outcome</dt>
                    <dd className="mt-1 leading-relaxed text-mute">{project.outcome}</dd>
                  </div>
                </dl>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.03]"
                  >
                    View code ↗
                  </a>
                )}
              </div>

              <div className="min-w-0">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-mute">↓ Try it — it’s interactive</p>
                <InventoryDemo />
              </div>
            </div>
          </div>
        </Tilt>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-5 rounded-[28px] border border-dashed border-white/15 p-8 text-center">
          <p className="text-lg font-medium">More on the way.</p>
          <p className="mt-1 text-sm text-mute">
            Currently learning and building through my York coursework. New projects land here.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
