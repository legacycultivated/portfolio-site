"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#workflow", label: "Workflow" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
          onClick={closeMenu}
        >
          Lyman Chan
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button size="sm" asChild>
            <Link href={profile.resumeHref}>Resume</Link>
          </Button>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <nav className="border-t md:hidden" aria-label="Mobile primary">
          <div className="container grid gap-1 py-3">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="justify-start"
                asChild
              >
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button className="mt-2 justify-start" asChild>
              <Link href={profile.resumeHref} onClick={closeMenu}>
                Resume
              </Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
