import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogView from "@/components/CatalogView";
import { BRAND_NAMES, getProductsByBrand, toSummary } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(BRAND_NAMES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/brand/[slug]">): Promise<Metadata> {
  const name = BRAND_NAMES[(await params).slug];
  if (!name) return {};
  return {
    title: name,
    description: `${name} — ტელესკოპები და ოპტიკა Astroman-ში. ოფიციალური პროდუქცია საქართველოში.`,
  };
}

export default async function BrandPage({ params }: PageProps<"/brand/[slug]">) {
  const { slug } = await params;
  const name = BRAND_NAMES[slug];
  if (!name) notFound();

  return (
    <CatalogView
      products={getProductsByBrand(slug).map(toSummary)}
      activeCategory="none"
      title={name}
    />
  );
}
