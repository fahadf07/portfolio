"use client";

import { useRef, useState } from "react";
import { coursework, experience, profile, project, skills } from "@/lib/data";
import { Reveal, SectionTitle } from "./ui";

type Line = { kind: "in" | "out"; text: string };

const WELCOME: Line[] = [
  { kind: "out", text: "Welcome to fahad-os 1.0 — type `help` to see what I can do." },
];

function run(cmd: string): string[] | "clear" {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "":
      return [];
    case "help":
      return [
        "Available commands:",
        "  whoami       who is this person?",
        "  about        short intro",
        "  skills       technical toolkit",
        "  projects     what I've built",
        "  experience   where I've worked",
        "  education    school & coursework",
        "  contact      how to reach me",
        "  clear        clear the screen",
      ];
    case "whoami":
    case "about":
      return [
        `${profile.name} — 2nd-year ${profile.program} student at ${profile.school}.`,
        profile.tagline,
      ];
    case "skills":
      return Object.entries(skills).map(([k, v]) => `${k.padEnd(16)} ${v.join(", ")}`);
    case "projects":
      return [`▸ ${project.title} (${project.tools.join(", ")})`, `  ${project.summary}`];
    case "experience":
      return experience.flatMap((e) => [`▸ ${e.role}, ${e.org} (${e.dates})`, ...e.points.map((p) => `  · ${p}`)]);
    case "education":
      return [`${profile.program} — ${profile.school}, expected ${profile.grad}`, `Coursework: ${coursework.join(", ")}`];
    case "contact":
      return [
        `email     ${profile.email}`,
        `linkedin  ${profile.linkedin}`,
        ...(profile.github ? [`github    ${profile.github}`] : []),
      ];
    case "clear":
      return "clear";
    case "sudo hire fahad":
    case "sudo hire me":
      return ["[sudo] permission granted ✔", "Excellent decision. Scroll down to the contact section 😉"];
    case "ls":
      return ["about  skills  projects  experience  education  contact"];
    default:
      return [`command not found: ${cmd.trim()} — try \`help\``];
  }
}

const SUGGEST = ["help", "skills", "projects", "contact", "sudo hire fahad"];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [val, setVal] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [hi, setHi] = useState(-1);
  const body = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const exec = (cmd: string) => {
    const res = run(cmd);
    if (cmd.trim()) setHist((h) => [cmd, ...h]);
    setHi(-1);
    if (res === "clear") setLines([]);
    else setLines((l) => [...l, { kind: "in", text: cmd }, ...res.map((t) => ({ kind: "out" as const, text: t }))]);
    setVal("");
    requestAnimationFrame(() => {
      if (body.current) body.current.scrollTop = body.current.scrollHeight;
    });
  };

  return (
    <section id="terminal" className="mx-auto max-w-4xl px-5 py-28">
      <SectionTitle
        eyebrow="Terminal"
        title={
          <>
            Prefer the <span className="grad-text">command line</span>?
          </>
        }
        sub="Poke around my portfolio the CS-student way."
      />
      <Reveal>
        <div
          className="overflow-hidden rounded-2xl border border-line bg-[#0a0a0c] shadow-[0_30px_80px_-20px_rgba(41,151,255,0.25)]"
          onClick={() => input.current?.focus({ preventScroll: true })}
        >
          <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="mx-auto pr-10 font-mono text-xs text-mute">fahad@portfolio: ~</span>
          </div>
          <div
            ref={body}
            className="no-scrollbar h-80 overflow-y-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm"
            role="log"
          >
            {lines.map((l, i) =>
              l.kind === "in" ? (
                <p key={i}>
                  <span className="text-emerald-400">➜</span> <span className="text-blue">~</span> {l.text}
                </p>
              ) : (
                <p key={i} className="whitespace-pre-wrap break-words text-[#c7c7cc]">
                  {l.text}
                </p>
              )
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                exec(val);
              }}
              className="flex items-center gap-2"
            >
              <span className="text-emerald-400">➜</span>
              <span className="text-blue">~</span>
              <input
                ref={input}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowUp" && hist.length) {
                    e.preventDefault();
                    const n = Math.min(hi + 1, hist.length - 1);
                    setHi(n);
                    setVal(hist[n]);
                  } else if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const n = hi - 1;
                    setHi(n);
                    setVal(n >= 0 ? hist[n] : "");
                  }
                }}
                aria-label="Terminal input"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                className="min-w-0 flex-1 bg-transparent text-fg caret-blue outline-none"
              />
            </form>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {SUGGEST.map((s) => (
            <button
              key={s}
              onClick={() => exec(s)}
              className="rounded-full border border-line bg-white/5 px-4 py-1.5 font-mono text-xs text-mute transition hover:border-blue/60 hover:text-fg"
            >
              {s}
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
