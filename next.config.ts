import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // product & blog photos are served from the WordPress site
    remotePatterns: [
      {
        protocol: "https",
        hostname: "astroman.ge",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return legacyRedirects();
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
