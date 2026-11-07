import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // keep test deployments (e.g. *.vercel.app previews) out of Google
  const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;
  return {
    rules: isProduction
      ? { userAgent: "*", allow: "/", disallow: ["/api/", "/kalata", "/shekveta", "/favoritebi"] }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
