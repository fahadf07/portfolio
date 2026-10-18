import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import { MotionRoot } from "@/components/MotionRoot";

export default function Home() {
  return (
    <MotionRoot>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Terminal />
        <Contact />
      </main>
    </MotionRoot>
  );
}
