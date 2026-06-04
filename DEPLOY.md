# Deploying ConsulTAF to Netlify

The app is a **Next.js 14** project at the **repo root** (unlike the old
`medical-appointment-cocoi`, where the Next app lived in `static/` and Netlify's
base directory was set to `static`). Here the base directory is empty.

GitHub repo: `https://github.com/ioanvranau/consultaf` · branch: `develop`

---

## Option A — Netlify UI (Git-connected) — recommended, same as before

1. Netlify → **Add new site → Import an existing project → GitHub**.
2. Pick **`ioanvranau/consultaf`**.
3. Build settings (Netlify auto-detects Next.js — these should pre-fill):
   - **Base directory:** *(leave empty)*
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (handled by Netlify's Next.js runtime)
   - Node version is pinned to **20** via `netlify.toml`.
4. **Production branch:** set to **`develop`** (that's where the code is),
   or change the repo's default branch to `main` and use that.
5. **Deploy site.** Every push to the production branch redeploys automatically.

> No `@netlify/plugin-nextjs` needed — Netlify's built-in Next.js runtime handles
> SSR, `next/image`, and fonts. (Same as the cocoi project.)

---

## Option B — Netlify CLI (fastest, no UI clicking)

```bash
npm i -g netlify-cli
netlify login                 # opens browser to authenticate
netlify init                  # link to a new or existing Netlify site
netlify deploy --build --prod # build + deploy to production
```

---

## Custom domain (consultaf.org) + Google Workspace email

After the first deploy:
1. Netlify → **Domain management → Add a domain** → `consultaf.org`.
2. Copy the assigned `*.netlify.app` address.
3. Send `docs/deploy/dns-instructions.html` to whoever manages the domain's DNS
   (fill the `.netlify.app` placeholder first). It adds the website records and
   **leaves Google Workspace email (MX/SPF/DKIM) untouched**.
4. Netlify auto-issues HTTPS once DNS resolves.

---

## Local checks before deploying
```bash
npm install
npm run build   # must succeed (currently: ✓ 9 static routes)
```
