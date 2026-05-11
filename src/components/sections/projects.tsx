import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/sections/section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work, ready to grow."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
