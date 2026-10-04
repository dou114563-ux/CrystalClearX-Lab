# CrystalClearX Lab — Frutiger Aero / Y2K Edition

A lightweight static personal lab site built with plain HTML, CSS, and JavaScript for Cloudflare Workers Static Assets.

## What's new
- Frutiger Aero / Y2K-inspired visual language: aqua skies, glossy glass cards, bubbles, optimistic gradients.
- Local artwork and a local hero reference image so the UI does not depend on remote image CDNs.
- Projects page with category filters and clickable project detail pages.
- Security headers via `_headers`.

## Structure
- `index.html` — home page
- `projects.html` — project archive
- `projects/` — detail pages
- `assets/` — favicon, icon, local project illustrations and local hero artwork
- `style.css` — site styling
- `app.js` — navigation + project filters
- `_headers` — security headers / CSP
- `wrangler.jsonc` — Cloudflare Worker Static Assets config
