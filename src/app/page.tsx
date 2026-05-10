const sectionPlaceholders = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "workflow", label: "Workflow" },
  { id: "stack", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="container py-10 sm:py-14">
      <section className="grid min-h-[50vh] content-center gap-4 py-12">
        <p className="text-sm font-medium text-muted-foreground">
          Phase 1 layout shell
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Portfolio structure placeholder
        </h1>
      </section>

      <div className="space-y-8">
        {sectionPlaceholders.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-40 scroll-mt-24 rounded-lg border bg-background p-6"
          >
            <h2 className="text-2xl font-semibold">{section.label}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Anchor target reserved for a later phase.
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
