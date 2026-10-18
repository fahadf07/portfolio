"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["terminal", "Terminal"],
  ["contact", "Contact"],
] as const;

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass border-b border-line">
        <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 text-[13px]">
          <a href="#top" className="font-semibold tracking-tight text-fg">
            {profile.first}
            <span className="text-mute">.</span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {links.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition-colors ${active === id ? "text-fg" : "text-mute hover:text-fg"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {profile.resume ? (
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-fg px-3.5 py-1 text-xs font-medium text-black transition hover:bg-white"
            >
              Resume
            </a>
          ) : (
            <a
              href="#contact"
              className="rounded-full bg-fg px-3.5 py-1 text-xs font-medium text-black transition hover:bg-white"
            >
              Contact
            </a>
          )}
        </nav>
        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-blue via-violet to-rose"
        />
      </div>
    </header>
  );
}
