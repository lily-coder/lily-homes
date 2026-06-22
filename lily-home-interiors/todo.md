# Pre-Deployment TODO — Lily Home Interiors

These items need a resource (an account, API key, real asset, real URL, or a
business decision) before they can be completed. Everything else from the
pre-deployment review has already been implemented.

---

## 🔴 Blockers

### 1. Wire the contact form to a real backend
**Status:** Interim solution in place — the form validates and opens the user's
email client via `mailto:` ([components/services/ContactSection.tsx](components/services/ContactSection.tsx)).
**Needed from you:** pick a form service and provide credentials.
- **Option A — Formspree:** create a form, drop the endpoint into an env var.
- **Option B — Resend + Next.js Route Handler:** create a Resend account, add
  `RESEND_API_KEY`, and verify a sending domain.
**Why:** `mailto:` depends on the visitor having a configured email client and
isn't reliable for capturing leads.

### 2. Localize / replace the imagery
**Status:** All images currently hot-link from Stitch's Google CDN
(`lh3.googleusercontent.com/aida-public/...`) — see [lib/constants.ts](lib/constants.ts).
**Needed from you:** final, licensed, optimized photographs.
- Download/replace and place under `public/images/`, then update the URLs in
  `lib/constants.ts`.
- Remove `lh3.googleusercontent.com` from `remotePatterns` in
  [next.config.ts](next.config.ts) once no longer used.
**Why:** those CDN URLs are temporary and will expire, taking the site imagery
down. Self-hosting also improves load time and reliability.

---

## 🟠 High value

### 3. Real social profile URLs
`SOCIAL_LINKS` in [lib/constants.ts](lib/constants.ts) point to platform home
pages (e.g. `https://instagram.com`). Replace with Lily's actual profile URLs
(Instagram, Facebook, TikTok, LinkedIn, YouTube).

### 4. Real footer links
In [components/layout/Footer.tsx](components/layout/Footer.tsx) the
Privacy Policy / Terms / Careers links are `href="#"`. Either create those pages
or remove the links until they exist.

### 5. Analytics
No analytics installed. Decide on a provider:
- **Vercel Analytics** (`@vercel/analytics`) if hosting on Vercel — zero config.
- **Google Analytics 4** — needs a Measurement ID (`G-XXXXXXX`).

### 6. Set the production domain
Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://lilyhomeinteriors.com`) in your hosting
env. It feeds `metadataBase`, canonical URLs, `robots.txt`, and `sitemap.xml`.
A placeholder fallback is used until then.

---

## 🟡 Polish / decisions

### 7. Unused shadcn components & deps
shadcn `button/card/input/textarea/select/navigation-menu` (and `@base-ui/react`,
`lucide-react`) are installed but not imported anywhere — the UI uses semantic
elements. **Decide:** adopt them (e.g. swap the contact form to shadcn inputs)
or run `pnpm remove` on the unused packages to shrink the bundle.

### 8. Verify contact details
Confirm the WhatsApp number (`254723885170`) and email
(`lily.homes.interiors@gmail.com`) in `lib/constants.ts` are correct. Consider
adding clickable `tel:`/`mailto:` links in the contact section.

### 9. Error monitoring
[app/error.tsx](app/error.tsx) currently `console.error`s. Forward to a service
like Sentry for production visibility (needs a Sentry DSN).

### 10. Final accessibility & contrast pass
Run Lighthouse / axe. Double-check `text-secondary` (#655d52) on cream for small
body copy meets WCAG AA.

---

## ✅ Already done in this pass
- `prefers-reduced-motion` support (SectionReveal, WhatsApp button)
- Contact form: accessible labels (`htmlFor`/`id`), validation, success state,
  `mailto:` submission (interim)
- Full SEO metadata: Open Graph, Twitter cards, robots directives, `metadataBase`,
  keywords, canonical
- Dynamic Open Graph share image via `next/og` ([app/opengraph-image.tsx](app/opengraph-image.tsx))
- `robots.ts` + `sitemap.ts`
- Branded `loading.tsx`, `error.tsx`, `not-found.tsx`
- Favicon set + web manifest wired into metadata; theme color set
- Removed Next.js boilerplate assets
