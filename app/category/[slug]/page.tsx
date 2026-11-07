import type { Metadata } from "next";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import CatalogView from "@/components/CatalogView";
import {
  CATEGORY_ALIASES,
  SHOP_CATEGORIES,
  getCategory,
} from "@/data/categories";
import { getProductsByCategory, toSummary } from "@/lib/products";

export function generateStaticParams() {
  return [
    ...SHOP_CATEGORIES.map((c) => ({ slug: c.slug })),
    // old slugs are prerendered too, as permanent redirects
    ...Object.entries(CATEGORY_ALIASES)
      .filter(([, target]) => SHOP_CATEGORIES.some((c) => c.slug === target))
      .map(([slug]) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/category/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `${category.name} — Astroman, პირველი ასტრო მაღაზია საქართველოში.`,
    alternates: { canonical: `/category/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();
  if (category.externalUrl) redirect(category.externalUrl);
  // old slugs (e.g. /category/proeqtorebi) → the real one
  if (category.slug !== slug) permanentRedirect(`/category/${category.slug}`);

  return (
    <CatalogView
      products={getProductsByCategory(category.slug).map(toSummary)}
      activeCategory={category.slug}
      title={category.name}
    />
  );
}
