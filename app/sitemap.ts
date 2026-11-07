import type { MetadataRoute } from "next";
import { ALL_PRODUCTS, BRAND_NAMES } from "@/lib/products";
import { SHOP_CATEGORIES } from "@/data/categories";
import { BLOG_POSTS } from "@/data/blogs";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;
  return [
    { url: url("/"), priority: 1 },
    { url: url("/magazia"), priority: 0.9 },
    ...SHOP_CATEGORIES.map((c) => ({ url: url(`/category/${c.slug}`), priority: 0.8 })),
    ...ALL_PRODUCTS.map((p) => ({ url: url(`/product/${p.id}`), priority: 0.7 })),
    ...Object.keys(BRAND_NAMES).map((b) => ({ url: url(`/brand/${b}`), priority: 0.6 })),
    { url: url("/blogi"), priority: 0.6 },
    ...BLOG_POSTS.map((p) => ({ url: url(`/blogi/${p.slug}`), priority: 0.5 })),
    { url: url("/chven-shesaxeb"), priority: 0.4 },
    { url: url("/kontakt"), priority: 0.4 },
    { url: url("/wesebi-da-pirobebi"), priority: 0.3 },
  ];
}
