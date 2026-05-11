import { Section } from "@/components/sections/section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A structured engineering mindset.">
      <div className="space-y-5 text-base leading-8 text-muted-foreground">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
