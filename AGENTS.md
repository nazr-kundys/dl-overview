## Visual Effects System

### Tailwind v4

No tailwind.config.ts — all theme tokens in app/globals.css
using @theme {} block.

### CSS Mask System

SVG sprite: /public/masks/masks.svg
All masks defined as <symbol> elements, referenced via URL fragment.

Section torn borders — CSS utility classes in globals.css:
.torn-bottom → masks bottom edge of section with torn SVG shape
.torn-top → masks top edge of section with torn SVG shape
Never use clip-path for section borders.

Button grunge effect — CSS utility class:
.btn-grunge → masks button with grundge.png texture
Primary variant: bg-orange text-black
Ghost variant: transparent bg, orange border visible through mask

### Component Architecture

CSS utilities (globals.css) → pure visual mask/texture effects
React components → structure, props, variants, logic
Never put mask CSS inline — always use utility classes

### Glassmorphism Cards

backdrop-filter: blur(12px)
background: rgba(10, 10, 10, 0.65)
border: 1px solid rgba(255, 107, 0, 0.25)
border-radius: 4px
hover: border-color orange + translateY(-6px) + orange box-shadow

### Section Structure Pattern

Every section:

1. Relative positioned wrapper
2. Background image with overlay div
3. Content div above background
4. .torn-bottom class on section for edge effect

### Data Approach

Phase 1: JSON files in /data folder — no DB
/data/characters.json
/data/infected.json  
/data/locations.json
/data/factions.json

Read via fs in Server Components or import directly.
Migrate to Neon + Drizzle in Phase 2 when UI is complete.

### Public Assets

/public/masks/masks.svg — SVG sprite with all shape masks
/public/masks/grundge.png — grunge texture for button masks
/public/images/ — background textures (WebP)
/public/videos/hero.mp4 — hero section looping clip
/public/logo.webp — Dying Light logo

### Key Rules

- Server Components by default, "use client" only when needed
- All route strings via /lib/routes.ts — never hardcode
- searchParams validated with Zod
- Images via next/image always
- No rounded buttons — grunge mask only
- No clip-path — CSS mask + SVG only
- Orange is the ONLY color accent
