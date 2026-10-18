"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

function Typewriter({ lines }: { lines: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = lines[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === full) t = setTimeout(() => setDel(true), 1800);
    else if (del && text === "") {
      setDel(false);
      setI((i + 1) % lines.length);
    } else
      t = setTimeout(
        () => setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        del ? 22 : 48
      );
    return () => clearTimeout(t);
  }, [text, del, i, lines]);

  return (
    <span>
      {text}
      <span className="animate-blink ml-0.5 inline-block w-[2px] translate-y-[2px] bg-blue align-baseline">&nbsp;</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5"
      onMouseMove={(e) => {
        mx.set((e.clientX / window.innerWidth - 0.5) * 120);
        my.set((e.clientY / window.innerHeight - 0.5) * 120);
      }}
    >
      {/* aurora */}
      <motion.div style={{ x: sx, y: sy }} className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute left-[0%] top-[12%] h-[80vw] w-[80vw] max-h-[620px] max-w-[620px] sm:left-[8%] sm:h-[46vw] sm:w-[46vw] rounded-full bg-blue/30 blur-[120px]" />
        <div className="animate-drift-b absolute right-[0%] top-[30%] h-[75vw] w-[75vw] max-h-[560px] max-w-[560px] sm:right-[6%] sm:top-[22%] sm:h-[40vw] sm:w-[40vw] rounded-full bg-violet/30 blur-[120px]" />
        <div className="animate-drift-a absolute bottom-[4%] left-[20%] h-[65vw] w-[65vw] max-h-[480px] max-w-[480px] sm:left-[34%] sm:h-[34vw] sm:w-[34vw] rounded-full bg-rose/20 blur-[120px]" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <motion.div style={{ y, opacity: fade, scale }} className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-xs text-mute backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          {profile.program} · Class of {profile.grad}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.2rem,12vw,9rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
        >
          Hi, I’m <span className="grad-text">{profile.first}</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mx-auto mt-8 h-8 whitespace-nowrap text-base text-mute min-[400px]:text-lg sm:text-2xl"
        >
          <Typewriter lines={profile.rotator} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-fg px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03] hover:bg-white"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur transition hover:scale-[1.03] hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-9 w-5 justify-center rounded-full border border-white/25 pt-2">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-0.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
