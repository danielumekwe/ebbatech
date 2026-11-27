This is the marketing site for Ebbatech Nigeria Limited, built with [Next.js](https://nextjs.org).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Raleway and Poppins from Google Fonts.

## Forms

The Enquiry Form on `/contact` falls back to a `mailto:` link since there is no backend or email service configured. To wire up real submissions (e.g. via an API route + an email provider), add the integration and replace the `mailto:` handler in `components/contact-form.tsx`.

## Content

Site copy is sourced from `ebbatech-website-content.md` (the Ebbatech Company Profile). Update that document first, then apply changes to the corresponding page/data files so the two stay in sync.

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
