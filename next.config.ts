import type { NextConfig } from "next";

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
