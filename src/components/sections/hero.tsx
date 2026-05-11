"use client";

import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="grid min-h-[calc(100vh-4rem)] content-center py-16 sm:py-20">
      <motion.div
        className="max-w-3xl space-y-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.45, ease: "easeOut" }
        }
      >
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {profile.role}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="#projects">
              View Projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={profile.resumeHref}>Download Resume</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">
              <Mail className="size-4" aria-hidden="true" />
              Contact
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
