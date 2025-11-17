import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import ProfessionalExperience from "@/components/professional-exp/professional-exp";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProfessionalExperience />
      <Projects />
    </main>
  );
}
