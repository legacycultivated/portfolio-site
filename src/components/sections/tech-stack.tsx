import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/sections/section";
import { techStack } from "@/data/tech-stack";

export function TechStack() {
  return (
    <Section id="stack" eyebrow="Stack" title="Built with a focused toolset.">
      <div className="space-y-6">
        {techStack.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
