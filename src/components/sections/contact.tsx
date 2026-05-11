import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Section } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    href: profile.links.github,
    label: "GitHub",
    icon: Github,
  },
  {
    href: profile.links.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: profile.links.email,
    label: "Email",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Professional links.">
      <div className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg border p-5 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="size-5" aria-hidden="true" />
                <span className="mt-4 block font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <Button variant="outline" asChild>
          <Link href={profile.resumeHref}>Download Resume</Link>
        </Button>
      </div>
    </Section>
  );
}
