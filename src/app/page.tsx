import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="space-y-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
