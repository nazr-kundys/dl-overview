# Harran Files — Claude Code Context

## Project

Dying Light franchise fan encyclopedia.
Portfolio project — not affiliated with or endorsed by Techland.
All Dying Light assets belong to Techland.

## Stack

- Next.js 15 (App Router only, typed routes enabled)
- TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui (Lyra style, Stone base, Orange theme, Lucide icons)
- Lucide React (primary icons)
- Drizzle ORM + Neon (Postgres)
- Vercel Blob (character/infected/location images)
- Zod (searchParams validation + seed script)
- Deployment: Vercel

## shadcn Setup

- Style: Lyra (boxy, sharp, zero rounding)
- Base color: Stone
- Theme: Orange
- Icons: Lucide
- Fonts: managed manually, not via shadcn

## Design System

Defined in globals.css. Always use CSS custom properties —
never hardcoded values or inline styles.

### Typography

- Headings: Bebas Neue (all caps, wide tracking)
- Body: Inter

### Card System (glassmorphism)

- Semi-transparent dark background with backdrop blur
- 1px orange border at 25% opacity
- border-radius: 4px — never larger
- Hover: full orange border, lifts up, orange glow
- Smooth transition on all properties

### Buttons

Grunge texture mask via public assets — never clean rounded rectangles.

### Section Dividers

Jagged torn edges via SVG mask system only — never clip-path,
never straight lines.

## Project Structure

`/app` — App Router routes only, no business logic

`/components`

- ui — shadcn primitives
- layout — site-wide layout components (header, footer)
- sections — full homepage sections
- cards — entity card components
- shared — reused across multiple sections

`/db` — Drizzle schema, client, migrations

`/lib` — utilities, helpers, route definitions, shared logic

`/scripts` — data seeding

`/types` — shared TypeScript types

`/public`

- masks — SVG sprite and grunge texture for UI effects
- images — background textures
- videos — hero background
- logo

## Component Rules

- Server Components by default
- "use client" only when strictly necessary
- Never fetch data in client components — pass as props
- next/image for all content images
- next/link for all internal navigation

## Routing

- Typed routes enabled
- Single routes definition file in /lib for all internal paths
- searchParams always validated with Zod in page level

## Database

- Provider: Neon (Postgres)
- ORM: Drizzle
- Content images stored in Vercel Blob, URL saved in DB

## Data Scope

- Phase 1 (current): Dying Light 1 + The Following
- Phase 2: Dying Light 2 Stay Human
- Phase 3: Dying Light The Beast
- Excluded: Dying Light Bad Blood

## Entities

- Characters
- Infected
- Locations
- Factions

## Commits

Conventional Commits + gitmoji
Format: <emoji> <type>(<scope>): <description>

## TypeScript

- Strict mode, no `any`
- Zod `.infer` for external/seed data shapes
- Drizzle `.infer` for DB row types

## SEO

- Metadata exported from every page via Next.js Metadata API
- Semantic HTML throughout

## Disclaimer

Fan project for educational/portfolio purposes.
All Dying Light IP belongs to Techland.
Not affiliated with or endorsed by Techland.
No copyright infringement intended.
