# Portfolio Site

Single-page portfolio for Lyman Chan, built from the product specification in
`_specs/product-spec.md` and the phased implementation plan in
`_plans/technical-plan.md`.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- next-themes
- lucide-react
- framer-motion

## Development

```powershell
npm.cmd install
npm.cmd run dev
```

The local app runs at `http://localhost:3000` by default.

## Checks

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

## Content

Editable portfolio content lives in:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/tech-stack.ts`

Replace `public/resume.pdf` with the final resume before launch.

## Deployment

The planned deployment target is Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final
production URL so canonical, sitemap, and social metadata resolve to the custom
domain.
