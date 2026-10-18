"use client";

import { Counter, Reveal, SectionTitle, SpotCard } from "./ui";
import { profile, stats, availability } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle
        eyebrow="About"
        title={
          <>
            Built in the <span className="grad-text">rush</span>.<br />Trained in code.
          </>
        }
        sub="Over a year and a half of fast, accurate, customer-facing work taught me how real systems break under load. Now I’m learning how to build them."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <SpotCard className="h-full p-6">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <span className="grad-text">
                  <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </span>
              </div>
              <p className="mt-3 text-sm leading-snug text-mute">{s.label}</p>
            </SpotCard>
          </Reveal>
        ))}

        <Reveal className="col-span-2 md:col-span-2" delay={0.1}>
          <SpotCard className="h-full p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">Education</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{profile.school}</h3>
            <p className="mt-1 text-mute">{profile.program}</p>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="rounded-full bg-white/8 px-3 py-1">Year 2</span>
              <span className="rounded-full bg-white/8 px-3 py-1">Expected {profile.grad}</span>
            </div>
          </SpotCard>
        </Reveal>

        <Reveal className="col-span-2 md:col-span-2" delay={0.18}>
          <SpotCard className="h-full p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">Availability</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Open to summer roles.
            </h3>
            <p className="mt-2 text-mute">{availability}</p>
          </SpotCard>
        </Reveal>
      </div>
    </section>
  );
}
