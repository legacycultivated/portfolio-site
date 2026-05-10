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
      <section className="grid min-h-[60vh] content-center gap-6 py-12">
        <p className="text-sm font-medium text-muted-foreground">
          Portfolio architecture shell
        </p>
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Lyman Chan
          </h1>
          <p className="text-lg text-muted-foreground">
            Initial layout, navigation, theme, and component structure are in
            place. Final section content and styling belong to later phases.
          </p>
        </div>
      </section>

      <div className="space-y-8">
        {sectionPlaceholders.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-lg border bg-background p-6"
          >
            <h2 className="text-2xl font-semibold">{section.label}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Placeholder for the future {section.label.toLowerCase()} section.
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
