# Portfolio Website — Product Specification

## 1. Summary

A modern, minimalist portfolio website that presents Lyman Chan as a newly graduated software engineer entering the AI-assisted software industry. The site introduces who he is, showcases his projects, communicates how he works, and provides direct paths to his resume, GitHub, and contact channels.

The portfolio is itself a working demonstration of the spec-driven, AI-assisted engineering workflow it advocates — built in phases from a non-technical product spec, through technical planning, to reviewed implementation.

## 2. Goals

The portfolio must:

1. Make a strong, professional first impression on recruiters, hiring managers, and engineers within seconds of landing on the page.
2. Communicate technical capability and a structured engineering mindset without relying on jargon or visual noise.
3. Present current projects clearly and accommodate new projects without redesign.
4. Demonstrate that the author understands and uses modern AI-assisted development workflows responsibly.
5. Provide one-click access to resume, GitHub, LinkedIn, and email.
6. Serve as a long-term, expandable hub that the author returns to and grows over time.

## 3. Non-Goals

To keep the MVP focused, the following are explicitly out of scope for v1:

- A blog, articles section, or CMS.
- Individual deep-dive project case-study pages.
- Interactive demos, embedded sandboxes, or live coding widgets.
- A contact form backend, newsletter signup, or any user-submitted data.
- Authentication, admin dashboards, or any backend service.
- Analytics dashboards beyond a simple privacy-respecting page-view counter (deferred).
- Heavy animation, scroll effects, parallax, or "wow-factor" interactive set pieces.

## 4. Target Audience

Primary:

- **Recruiters and hiring managers** — typically non-technical, scanning quickly, looking for fit signals and links to resume/LinkedIn.
- **Technical interviewers and engineers** — looking at project quality, technical depth, and engineering judgment.

Secondary:

- Startup founders evaluating early hires.
- Potential collaborators or peers in the engineering community.

The site must read clearly to both groups simultaneously: technical enough to earn engineer respect, plain enough that a recruiter can extract a hiring signal in under thirty seconds.

## 5. Core Message

A single sentence that every page should reinforce:

> *Lyman is a software engineer who understands modern development workflows, builds real applications, thinks structurally, and uses AI-assisted tooling responsibly within an organized engineering process.*

If a section of the site does not contribute to this message, it does not belong in the MVP.

## 6. Brand and Tone

The personality of the site should feel:

- Confident but not arrogant.
- Professional but approachable.
- Technical but readable.
- Modern but clean.

Visual direction:

- Minimalist and typography-led.
- Clean spacing, restrained color palette, no visual clutter.
- Subtle, intentional motion only — never decorative animation.
- Mobile-first and fully responsive.
- Comparable in feel to high-quality developer portfolios and modern startup landing pages.

## 7. Site Sections (MVP)

The MVP is a single-page experience with anchored navigation. Each section below is required for v1.

### 7.1 Hero

The first thing every visitor sees. Must communicate identity and intent immediately.

Includes:

- Full name.
- A short role descriptor (e.g., software engineer focus).
- A one-line tagline.
- Primary calls-to-action: View Projects, Download Resume, Contact.

Success: a visitor can answer "who is this and what do they do" in under five seconds.

### 7.2 About

A short, plain-language professional introduction.

Includes:

- A brief background paragraph.
- Degree earned and graduation context.
- Engineering interests and areas of curiosity.
- Career direction.

Kept intentionally concise — this is a hook, not a biography.

### 7.3 Projects

A featured projects grid that grows over time without redesign.

Each project card displays:

- Project title.
- Short description (one or two sentences).
- Technologies used.
- GitHub link.
- Live demo link, when available.
- An optional path to a future detail page (deferred past MVP, but cards must support being made clickable later without restructuring).

Projects collectively should signal engineering capability, architectural thinking, practical implementation, and growth over time.

### 7.4 Development Workflow

A short, narrative section explaining how the portfolio (and the author's projects in general) are built. Frames AI as a productivity tool used inside a disciplined process.

Highlights:

- Spec-driven development.
- Phased implementation.
- AI-assisted workflows under human review.
- Structured planning before coding.

Tone is intentional and matter-of-fact, not promotional.

### 7.5 Tech Stack

A clear visual list of the technologies used in the portfolio itself, plus those used across featured projects.

Anchor technologies for the portfolio: Next.js, TypeScript, Tailwind CSS, Vercel, GitHub. Additional technologies appear as featured projects warrant.

### 7.6 Resume

Provides:

- A downloadable PDF resume (single click from the hero CTA and from navigation).
- Mobile-friendly access path.

The PDF is the source of truth; the site does not duplicate its content as separate copy.

### 7.7 Contact and Professional Links

Direct links to:

- GitHub.
- LinkedIn.
- Email.

A contact form is deferred; for v1, mailto and external links are sufficient.

## 8. User Journeys

The site should make these three journeys effortless:

1. **Recruiter scan** — lands on hero, scans tagline, downloads resume, clicks LinkedIn. Total time: under thirty seconds.
2. **Engineer evaluation** — lands on hero, scrolls to projects, opens a GitHub link, returns and reads the workflow section. Total time: two to four minutes.
3. **Direct contact** — finds an email or LinkedIn link from any section in one click.

If any of these journeys requires more than a couple of clicks or any scrolling guesswork, the design has failed.

## 9. Success Criteria

The MVP is considered successful when:

- The site is deployed to Vercel on a custom domain.
- The site renders cleanly on mobile, tablet, and desktop with no layout breakage.
- A recruiter unfamiliar with the author can locate the resume, GitHub, and LinkedIn within ten seconds of landing.
- All featured project cards link to working GitHub repositories (and live demos where applicable).
- The page loads quickly on a typical mobile connection and feels responsive.
- Adding a new project to the portfolio requires no design or layout work — only content.
- The author can review the live site against this spec and confirm every section delivers on its stated intent.

## 10. Constraints and Principles

- **Maintainability over cleverness.** Code and content should be easy to update months later without re-learning the system.
- **Polish over volume.** Fewer sections, done well, beats more sections done unevenly.
- **No premature features.** Anything not listed in section 7 is deferred to a future version.
- **AI-assisted, human-reviewed.** Every change passes through deliberate review; AI accelerates the work but does not own engineering decisions.
- **Phased delivery.** The site is built in reviewed increments, not a single large push.

## 11. Future Expansion (Out of MVP)

Captured here to reassure that the MVP design will accommodate them later, not to scope them in now:

- Individual project detail pages.
- Blog, articles, and technical writeups.
- Architecture case studies.
- AI workflow demonstrations and walkthroughs.
- Backend integrations (e.g., contact form, analytics).
- Lightweight CMS for content updates.
- Interactive project demos.

## 12. Open Questions

Items the author should resolve before or during technical planning:

- Final custom domain.
- Initial set of featured projects to include at launch.
- Resume PDF source and update cadence.
- Whether a one-line "currently exploring" or "open to work" status belongs in the hero.
- Whether to include a small set of social proof signals (e.g., GitHub activity, course highlights) in v1 or defer.
