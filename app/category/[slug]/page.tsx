"use client";

import { use } from "react";
import CatalogView from "@/components/CatalogView";
import { CATEGORIES } from "@/data/categories";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const found = CATEGORIES.find((c) => c.slug === slug);
  const title = found ? found.name : "კატეგორია";

  return <CatalogView categorySlug={slug} categoryTitle={title} />;
}
