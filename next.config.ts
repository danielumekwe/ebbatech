import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// Set by `npm run build:cloudflare`. All other builds, including Vercel, are unaffected.
const isCloudflare = process.env.DEPLOY_TARGET === "cloudflare";

// A static export has no server, so Next.js headers and image optimisation are unavailable.
const cloudflareConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

const serverConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(isCloudflare ? cloudflareConfig : serverConfig),
};

export default nextConfig;
