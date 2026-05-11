import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { Workflow } from "@/components/sections/workflow";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
      <Workflow />
      <TechStack />
      <Contact />
    </div>
  );
}
