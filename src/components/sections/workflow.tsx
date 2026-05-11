import { Section } from "@/components/sections/section";

const workflowItems = [
  {
    title: "Spec-driven",
    description:
      "Start with intent, audience, constraints, and success criteria before implementation.",
  },
  {
    title: "Phased",
    description:
      "Ship reviewable increments that keep architecture, content, and polish separate.",
  },
  {
    title: "AI-assisted",
    description:
      "Use AI tooling to accelerate execution while keeping decisions explicit and reviewed.",
  },
  {
    title: "Human-reviewed",
    description:
      "Verify changes against the plan, the product spec, and the actual running app.",
  },
];

export function Workflow() {
  return (
    <Section
      id="workflow"
      eyebrow="Workflow"
      title="Process before polish."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {workflowItems.map((item) => (
          <article key={item.title} className="rounded-lg border p-5">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
