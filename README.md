# Sukanti Agricultural Works — Website

React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## 1. Install

```
npm install
```

## 2. Development

```
npm run dev
```

## 3. Production build

```
npm run build
```

Output goes to `dist/`.

## 4. Deploy to Cloudflare Pages

**Option A — Dashboard**
1. Push this project to a GitHub/GitLab repo.
2. In Cloudflare Pages, "Create a project" → connect the repo.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Deploy.

**Option B — Wrangler CLI**
```
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=sukanti-agricultural-works
```

## Editing content

All business info (name, address, phone, WhatsApp, working hours, owner,
Google links) lives in one file: `src/data/business.ts`. Services list lives
in `src/data/services.ts`, machinery categories in `src/data/machinery.ts`.
Edit these — the whole site updates. The logo is isolated in
`src/components/Logo.tsx` — replace it with the final logo mark as a single
component swap.

## Still needed from you

- Phone number and WhatsApp number → `business.phone`, `business.whatsapp` in
  `src/data/business.ts` (Call/WhatsApp buttons stay visually present but are
  inert links until these are filled in)
- Working hours → `business.workingHours`
- Owner name and photo → `business.ownerName`, `business.ownerPhoto`
- Final logo file/component to replace `src/components/Logo.tsx`
- Real photos: hero (tractor in field), About section, Machinery gallery
  (Tractor, Thresher, Harvester, Rotavator) — currently icon placeholders
- Exact Google Maps "Embed a map" iframe `src` URL → `business.googleMapsEmbedUrl`
- A short, verified 2–3 line business description for the About section
- Confirmation of the final service list/wording in `src/data/services.ts`
- Social media profile links for the footer (omitted for now — none provided)

## Note on this build

`npm install` could not be run in this environment (no network access), so
`npm run build` was not executed here. The code has been reviewed by hand for
consistent imports, Tailwind tokens, and data references — run
`npm install && npm run build` locally to do a full compile check before
deploying.
