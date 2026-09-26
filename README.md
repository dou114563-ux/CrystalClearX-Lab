# CrystalClearX Lab

A personal technology lab site for hardware projects, Raspberry Pi experiments, IoT builds, and web experiments.

## Structure

- `index.html` — homepage
- `projects.html` — project index with category filters
- `projects/` — individual project pages
- `assets/` — icons, thumbnails, and design assets
- `_headers` — Cloudflare security headers and image policy
- `app.js` — navigation, filters, and remote-image fallbacks
- `style.css` — site styling
- `wrangler.jsonc` — Cloudflare Workers static assets config

## Deploy

This repository is intended for a Cloudflare Workers deployment using Static Assets.

## Image notes

Project pages can use remote reference images. If a remote Wikimedia image cannot be loaded by a visitor's network, the site falls back to a bundled SVG thumbnail so the layout remains intact.

The Dell AIO project uses a reference image for the Dell Inspiron 5400/7700 AIO IPTGL-CL motherboard and explicitly labels it as a reference image rather than the user's exact board.
