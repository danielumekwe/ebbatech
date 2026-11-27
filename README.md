This is the marketing site for Ebbatech Nigeria Limited, built with [Next.js](https://nextjs.org).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Raleway and Poppins from Google Fonts.

## Forms

The Enquiry Form on `/contact` opens the visitor's email app through a `mailto:` link, since there is no backend or email service. The visitor must press Send. To deliver submissions directly, add a form service and replace the handler in `components/contact-form.tsx`.

## Content

Website text, image selections and SEO settings live in `content/*.json` and are edited with [Pages CMS](https://pagescms.org/), configured in `.pages.yml`. `ebbatech-website-content.md` is the original company profile, kept for reference.

Editing notes:

- Saving publishes: each save is a commit, and the website rebuilds. There are no drafts.
- `npm run validate` runs before every build. If content is invalid the build fails and the last good version stays online. Read the build log for the reason.
- Hero slides are separate from products. Update both when a product changes.
- The address is stored three times: top bar, footer and contact page.
- Footer links have their own text.
- Do not change the ID or web address name of an existing product, service or project.
- Upload JPG, PNG or WEBP images under 5 MB. Photos are served as uploaded, so under 500 KB is best.
- Deleting an image that is still in use fails the build. To replace one, upload the new file and select it.

Developer notes:

- Declare every JSON field in `.pages.yml`; Pages CMS removes undeclared fields from lists when saving.
- Keep `.pages.yml` in JSON syntax, because the validation script reads it.
- Enquiry types are listed in both `.pages.yml` and `components/contact-form.tsx`. Page routes are also listed in the validation script.

## Deployment

The same code builds for two hosts.

### Vercel

Uses `npm run build`. Security headers come from `next.config.ts`.

### Cloudflare Workers (static assets)

Uses a static export of the site, with no server code.

```bash
npm run preview:cloudflare   # build and run locally in Cloudflare's runtime
```

Workers Builds settings (the Worker name must match `wrangler.jsonc`):

| Setting | Value |
|---|---|
| Worker name | `ebbatech` |
| Build command | `npm run build:cloudflare` |
| Deploy command | `npx wrangler deploy` |
| Build variable | `NODE_VERSION` = `24` (Wrangler needs 22.12 or later) |

- `public/_headers` sets Cloudflare's security and caching headers, and `noindex` on `workers.dev` addresses. Keep its security headers in sync with `next.config.ts`.
- The static export does not support server features (API routes, server actions, redirects, rewrites, image optimisation). Images are served as uploaded.
