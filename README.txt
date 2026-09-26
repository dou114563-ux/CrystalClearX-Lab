CrystalClearX Lab — image display patch

Why images were missing:
The v3 _headers file used a Content-Security-Policy with img-src 'self', which blocked the remote Wikimedia images used by the project pages.

Install:
1. Replace the repository's _headers with this _headers.
2. Replace the repository's app.js with this app.js.
3. Commit/push to main.
4. Cloudflare should automatically redeploy.

This patch also adds a local SVG fallback if Wikimedia cannot be reached from a visitor's network.
