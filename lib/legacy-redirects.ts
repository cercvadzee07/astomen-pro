/**
 * Old astroman.ge (WordPress) URLs → new routes, so Google rankings and
 * links people already shared keep working after the switch.
 * Used by next.config.ts — keep this file free of "@/..." imports.
 */
import fs from "node:fs";
import path from "node:path";

interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

const read = <T>(file: string): T =>
  JSON.parse(fs.readFileSync(path.join(process.cwd(), file), "utf-8")) as T;

// WordPress category slugs that now live under /category/...
const CATEGORY_SLUGS = [
  "teleskopi",
  "ganateba",
  "sanatebi",
  "magniturisanatebi",
  "varskvlavuri-ruka",
  "teqnika",
  "sabavshvo-satamashoebi",
  "saskolo-chantebi",
  "aqsesuarebi",
  "sxvadasxva",
  "mxolod-astromanshi",
];

const PAGES: Record<string, string> = {
  "/kontaqti": "/kontakt",
  "/checkout": "/shekveta",
};

export function legacyRedirects(): Redirect[] {
  const products = read<{ id: string; wpSlug: string }[]>("data/products.json");
  const blogSlugs = [
    ...fs
      .readFileSync(path.join(process.cwd(), "data/blogs.ts"), "utf-8")
      .matchAll(/slug: "([^"]+)"/g),
  ].map((m) => m[1]);

  // Georgian slugs: register both the percent-encoded and the plain form,
  // since browsers and crawlers send either
  const to = (from: string, dest: string): Redirect[] => {
    const sources = new Set([`/${encodeURIComponent(from)}`, `/${from}`]);
    return [...sources].map((source) => ({ source, destination: dest, permanent: true }));
  };

  return [
    ...Object.entries(PAGES).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    })),
    ...CATEGORY_SLUGS.flatMap((slug) => to(slug, `/category/${slug}`)),
    ...products.flatMap((p) => to(p.wpSlug, `/product/${p.id}`)),
    ...blogSlugs.flatMap((slug) => to(slug, `/blogi/${slug}`)),
  ];
}
