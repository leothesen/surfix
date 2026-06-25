# SURFIX

Marketing site for **SURFIX** — Mathew's surfboard ding-repair workshop in Noordhoek, Cape Town.
"You ding it. We fix it." Surfboards, kneeboards, surfskis & SUPs.

Built with **Next.js (App Router)** and deployed on **Vercel**. The page was implemented from the
Claude Design source `Surfix Repairs.dc.html`.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start        # serve the production build
```

## What's here

- `app/page.tsx` + `app/_components/*` — the single landing page, split into sections
  (`Header`, `Hero`, `Services`, `HowItWorks`, `TaglineBand`, `FindUs`, `Faq`, `Footer`,
  `FloatingWhatsApp`). `HeroAnimation.tsx` is the only client component — the "Replay" button
  that restarts the snapped-board reassembly animation.
- `app/layout.tsx` — SEO metadata, Archivo font (`next/font`), and the LocalBusiness + FAQ JSON-LD.
- `app/opengraph-image.tsx` / `app/twitter-image.tsx` — branded 1200×630 social share image,
  generated at build with `next/og` (no static asset needed).
- `app/robots.ts` / `app/sitemap.ts` — file-based SEO routes.
- `app/globals.css` — base styles, the animation keyframes, and responsive breakpoints.
- `public/assets/` — the SURFIX logo and wordmark; `app/icon.png` is the favicon.

## Deploy (Vercel)

1. Import this repo (`leothesen/surfix`) as a new Vercel project — the framework preset
   auto-detects **Next.js**; no extra config needed.
2. Buy the domain `surfix.co.za`, add it (and `www`) under **Vercel → Project → Domains**, and
   point DNS at the registrar (A `76.76.21.21`, or CNAME `cname.vercel-dns.com`).

The canonical URL, Open Graph tags, and sitemap already point at `https://surfix.co.za/`.
