# Portfolio Website — Technical Implementation Plan

## Context

`_specs/product-spec.md` defines a minimalist, single-page portfolio for Lyman Chan with seven sections, a defined brand tone, and Next.js / TypeScript / Tailwind / Vercel as the prescribed stack. The repo is currently empty (no `package.json`, no source files, no scaffolding) aside from `CLAUDE.md`, `README.md`, and the `_specs` / `_plans` folders. This plan turns the product spec into a phased build that respects CLAUDE.md's "simplicity first" and "surgical changes" rules.

**Final deliverable of this plan file**: on approval, the same content should be copied to `_plans/technical-plan.md` (per the user's `/plan` command) as the persistent in-repo artifact.

**Confirmed decisions (from clarifying questions):**
- Theme: dark + light with toggle.
- Project content source: typed TS data file (`src/data/projects.ts`).
- Testing scope: lint + typecheck only for MVP (no Vitest, no Playwright).

---

## Stack

- **Framework**: Next.js 15 (App Router) + React 19.
- **Language**: TypeScript (strict mode).
- **Styling**: Tailwind CSS v4 + shadcn/ui (only the primitives actually used).
- **Icons**: lucide-react.
- **Motion**: framer-motion, reserved for subtle entrance/hover transitions only.
- **Theme**: `next-themes` for class-based dark/light toggle.
- **Hosting**: Vercel + custom domain.
- **Tooling**: ESLint (Next config), Prettier with `prettier-plugin-tailwindcss`, `tsc --noEmit` in CI.

No CMS, no MDX, no test runner in MVP. These belong in the future-expansion section of the spec.

---

## Target file/folder layout

```
portfolio-site/
├─ public/
│  ├─ resume.pdf                     # source-of-truth resume (placeholder until real PDF supplied)
│  └─ og-image.png                   # social preview
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                  # root layout, fonts, ThemeProvider, metadata
│  │  ├─ page.tsx                    # composes the seven sections
│  │  ├─ globals.css                 # Tailwind layers + CSS variables for theme tokens
│  │  └─ not-found.tsx               # minimal 404
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ site-header.tsx          # sticky nav with anchor links + theme toggle
│  │  │  └─ site-footer.tsx          # simple footer with links
│  │  ├─ sections/
│  │  │  ├─ hero.tsx
│  │  │  ├─ about.tsx
│  │  │  ├─ projects.tsx
│  │  │  ├─ workflow.tsx             # development workflow section
│  │  │  ├─ tech-stack.tsx
│  │  │  └─ contact.tsx              # contact + professional links (resume CTA lives in hero + nav)
│  │  ├─ projects/
│  │  │  └─ project-card.tsx         # accepts Project; supports optional detail link
│  │  ├─ ui/                         # shadcn-generated primitives only (button, badge, etc.)
│  │  ├─ theme-provider.tsx          # next-themes wrapper
│  │  └─ theme-toggle.tsx
│  ├─ data/
│  │  ├─ profile.ts                  # name, tagline, about copy, links
│  │  ├─ projects.ts                 # Project[] typed array
│  │  └─ tech-stack.ts               # grouped tech list
│  ├─ lib/
│  │  └─ utils.ts                    # cn() helper from shadcn
│  └─ types/
│     └─ project.ts                  # Project type
├─ .eslintrc.json / eslint.config.mjs
├─ .prettierrc
├─ next.config.ts
├─ tailwind.config.ts (or v4 inline config)
├─ tsconfig.json
├─ package.json
└─ README.md (replace placeholder with real instructions at end)
```

Rationale: sections are isolated under `components/sections` so adding/removing one is a one-file edit; all content lives in `src/data` so contributors edit data, not JSX (satisfies success criterion: "adding a new project requires no design work").

---

## Phased delivery

Each phase ends with a green build, a manual visual check, and a commit. Phases are independently reviewable.

### Phase 0 — Project scaffolding & tooling

**Goal**: empty Next.js app boots cleanly with linting and typechecking wired up.

Steps:
1. `npx create-next-app@latest` into the repo (TypeScript, Tailwind, App Router, ESLint, src/, import alias `@/*`, no Turbopack flag toggling beyond the default).
2. Add Prettier + `prettier-plugin-tailwindcss`; add `format` script.
3. Add `typecheck` script (`tsc --noEmit`).
4. Configure `tailwind.config.ts` content paths and a small custom theme: font family (Inter via `next/font`), CSS-variable-based colors compatible with `next-themes`.
5. Replace the boilerplate `app/page.tsx` and `app/layout.tsx` with empty shells; delete unused boilerplate assets.
6. Commit: "chore: scaffold next.js app with tailwind, eslint, prettier".

**Verify**: `npm run dev` renders blank page; `npm run lint`, `npm run typecheck`, `npm run build` all pass.

### Phase 1 — Theme system, layout shell, design tokens

**Goal**: dark/light toggle works, base typography and spacing tokens are in place, header/footer skeletons render across the page.

Steps:
1. Install `next-themes`, `lucide-react`, `framer-motion`.
2. Initialize shadcn/ui (`npx shadcn@latest init`); generate only `button` and `badge` primitives.
3. Create `theme-provider.tsx` and `theme-toggle.tsx`; wrap root layout.
4. Define design tokens in `globals.css`: background, foreground, muted, border, accent — both light and dark.
5. Build `site-header.tsx` with anchor links (#about, #projects, #workflow, #stack, #contact), Resume button, theme toggle. Mobile: hamburger or simple stacked menu (keep simple — no drawer library).
6. Build `site-footer.tsx` with the three professional links and a copyright line.
7. Wire header + footer into `app/layout.tsx`; set global metadata (title, description, OpenGraph fields).

**Verify**: toggle flips theme without flash (suppressHydrationWarning + class strategy); anchors scroll smoothly; header is sticky; mobile layout works at 375px.

### Phase 2 — Content data layer

**Goal**: all site copy lives in typed TS modules so sections become pure presentation.

Steps:
1. Define `src/types/project.ts` with `Project` type: `slug`, `title`, `description`, `tech: string[]`, `github: string`, `demo?: string`, `detailHref?: string`.
2. Create `src/data/profile.ts` with name, role, tagline, about paragraphs, contact links, resume path (`/resume.pdf`).
3. Create `src/data/projects.ts` with placeholder `Project[]` (real entries filled in by author later — flagged as `// TODO: replace with real projects` only where the open question requires user input).
4. Create `src/data/tech-stack.ts` grouped by category (language, framework, tooling).
5. Drop a placeholder `public/resume.pdf` (1-page PDF stub) until the real PDF is supplied.

**Verify**: `tsc --noEmit` clean; data files importable from any section.

### Phase 3 — Section implementation

**Goal**: all seven sections render with real layout, typography, and content from the data layer.

Order (build top to bottom of the page so visual rhythm is checked progressively):

1. **Hero** — name, role, tagline, three CTAs (View Projects → `#projects`, Download Resume → `/resume.pdf`, Contact → `#contact`). Subtle entrance fade via framer-motion (one-shot, not on every scroll).
2. **About** — two short paragraphs from `profile.ts`.
3. **Projects** — responsive grid (1 col mobile, 2 col md, 3 col lg) of `ProjectCard`. Card shows title, description, tech badges, GitHub icon link, optional Demo link. Whole card becomes a link only if `detailHref` is set; otherwise links are individual.
4. **Workflow** — three or four short stat-style blocks (spec-driven, phased, AI-assisted, human-reviewed) with one-line descriptions. No diagrams, no animations.
5. **Tech Stack** — grouped chips/badges; `lucide-react` or simple text labels. No animated logos.
6. **Contact** — three large icon links (GitHub, LinkedIn, Email mailto). Resume CTA repeats here as a secondary action.

Each section is wrapped in `<section id="...">` with consistent vertical rhythm using a `Section` wrapper component (defined in `components/sections/section.tsx` if it removes duplication — only extract if used 3+ times).

**Verify**:
- All three user journeys from spec §8 work in under the stated time on desktop and mobile.
- Lighthouse on local production build: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- No console warnings; no hydration mismatch.
- Keyboard tab order is correct through hero CTAs → nav → each section.

### Phase 4 — Polish & SEO

**Goal**: the site feels finished and is discoverable.

Steps:
1. Per-section anchor offset for sticky header (CSS `scroll-margin-top`).
2. `robots.txt`, `sitemap.ts`, OpenGraph image (`og-image.png`), favicon set.
3. `metadata` in `app/layout.tsx`: title template, description, OG, twitter card, canonical URL placeholder.
4. Add `prefers-reduced-motion` guard to framer-motion animations.
5. Validate color contrast ratios in both themes (WCAG AA minimum).
6. Replace boilerplate `README.md` with a short project README (stack, dev commands, deploy notes).

**Verify**: view page source and confirm metadata; run axe or Lighthouse a11y audit; toggle reduced motion in OS and confirm animations short-circuit.

### Phase 5 — Deployment

**Goal**: live on Vercel under the custom domain.

Steps:
1. Push to GitHub, connect repo to Vercel project.
2. Confirm preview deployments work for non-main branches.
3. Configure custom domain (DNS records — author handles registrar side).
4. Add `VERCEL_URL`-aware canonical/OG handling if needed.
5. Smoke test the production URL on a real mobile device.

**Verify**: success criteria from spec §9 are checked off one by one against the deployed site.

---

## Critical files to modify or create

- `package.json` — created in Phase 0.
- `src/app/layout.tsx`, `src/app/page.tsx` — root composition, metadata.
- `src/app/globals.css`, `tailwind.config.ts` — design tokens.
- `src/components/layout/site-header.tsx` — sticky nav + theme toggle (the most-touched component).
- `src/components/sections/*.tsx` — one file per section.
- `src/data/profile.ts`, `src/data/projects.ts`, `src/data/tech-stack.ts` — single source of truth for site copy. **These are the only files the author should edit to update content post-launch.**
- `src/components/projects/project-card.tsx` — the structural commitment that lets new projects drop in without redesign.

---

## Reuse and existing patterns

The codebase has no existing source to reuse. External patterns to lean on instead of inventing:

- shadcn/ui's generated `button` and `badge` rather than custom variants.
- `next/font` for Inter (no manual font-loading code).
- `next-themes` `ThemeProvider` rather than a hand-rolled theme context.
- Tailwind's `prose` utilities via `@tailwindcss/typography` only if the About section grows past two paragraphs (defer until needed — simplicity first).

---

## Verification

End-to-end check before declaring MVP done, mapping directly to spec §9:

1. `npm run lint && npm run typecheck && npm run build` all green.
2. Run `npm run start` and walk all three user journeys on desktop and on a 375px-wide viewport.
3. Lighthouse mobile run on the production build: ≥ 95 across all four categories.
4. Theme toggle flips with no flash on initial load (test both system-default-dark and system-default-light).
5. Tab through the page from a fresh load — no keyboard traps, focus is always visible.
6. Add a fake `Project` entry to `src/data/projects.ts` and confirm it renders correctly with no other file edits — this validates the "new project = content edit only" success criterion.
7. Deployed site reachable on custom domain over HTTPS; OG preview renders correctly when the URL is pasted into a chat client.

---

## Out of scope (deferred — do not build now)

- MDX, blog, project detail pages.
- Contact form backend / Resend integration.
- Analytics dashboards.
- CMS.
- Vitest / Playwright tests.
- Animated hero set-pieces, scroll-linked effects.

These are listed in spec §11 and remain future work.

## Open content questions (author to resolve, not blocking technical plan)

Carried over from spec §12 — they affect copy, not architecture, and should be answered before or during Phase 2:

- Final custom domain.
- Initial featured projects list.
- Resume PDF source and update cadence.
- "Open to work" status line in hero — yes/no.
- Whether to surface social proof (GitHub stats, courses) in v1.
