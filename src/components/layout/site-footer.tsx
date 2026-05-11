import Link from "next/link";

import { profile } from "@/data/profile";

const footerLinks = [
  { href: profile.links.github, label: "GitHub" },
  { href: profile.links.linkedin, label: "LinkedIn" },
  { href: profile.links.email, label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Lyman Chan</p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
