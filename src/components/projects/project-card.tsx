import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </>
  );

  return (
    <article className="flex min-h-64 flex-col justify-between rounded-lg border bg-card p-5 text-card-foreground">
      {project.detailHref ? (
        <Link
          href={project.detailHref}
          className="space-y-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {content}
        </Link>
      ) : (
        <div className="space-y-5">{content}</div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={project.github}>
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </Link>
        </Button>
        {project.demo ? (
          <Button variant="ghost" size="sm" asChild>
            <Link href={project.demo}>
              <ExternalLink className="size-4" aria-hidden="true" />
              Demo
            </Link>
          </Button>
        ) : null}
      </div>
    </article>
  );
}
