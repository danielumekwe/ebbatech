This is the marketing site for Ebbatech Nigeria Limited, built with [Next.js](https://nextjs.org).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Raleway and Poppins from Google Fonts.

## Forms

The contact, quote, and downloads pages fall back to `mailto:` links since there is no backend or email service configured. To wire up real submissions (e.g. via an API route + an email provider), add the integration and replace the `mailto:` handlers in `components/contact-form.tsx`, `components/quote-form.tsx`, and `components/downloads-grid.tsx`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
