import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 sm:py-20", className)}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] md:gap-12">
        <div className="space-y-3">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
