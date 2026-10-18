"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/data";

function Word({ w, range, p }: { w: string; range: [number, number]; p: MotionValue<number> }) {
  const opacity = useTransform(p, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {w}
    </motion.span>
  );
}

/** Apple-style scroll-scrubbed statement: words light up as you scroll */
export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const words = profile.tagline.split(" ");

  return (
    <section ref={ref} className="relative px-5 py-40">
      <p className="mx-auto max-w-5xl text-balance text-center text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl md:text-7xl">
        {words.map((w, i) => {
          const start = i / words.length;
          const end = start + 1.4 / words.length;
          return <Word key={i} w={w} range={[start, Math.min(end, 1)]} p={scrollYProgress} />;
        })}
      </p>
    </section>
  );
}
