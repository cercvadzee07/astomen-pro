import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ALL_PRODUCTS,
  BRAND_NAMES,
  getProductById,
  getRelatedProducts,
  toSummary,
} from "@/lib/products";
import ProductGallery from "@/components/product/detail/ProductGallery";
import ProductPurchasePanel from "@/components/product/detail/ProductPurchasePanel";
import ProductTabs from "@/components/product/detail/ProductTabs";
import ProductCarousel from "@/components/product/ProductCarousel";
import ServiceHighlights from "@/components/ServiceHighlights";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[id]">): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription || product.description.slice(0, 160),
    alternates: { canonical: `/product/${product.id}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const brandName = product.brand ? BRAND_NAMES[product.brand] ?? product.brand : undefined;
  const images = product.images.length ? product.images : [product.image];

  const specs: [string, string][] = [
    ["დასახელება", product.name],
    ["კატეგორია", product.categoryName],
    ...(brandName ? ([["ბრენდი", brandName]] as [string, string][]) : []),
    ...(product.attributes ?? []),
    ["სტატუსი", product.inStock ? "მარაგშია" : "არაა მარაგში"],
  ];

  // Structured data so Google can show price & stock in search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: images,
    description: product.shortDescription || product.description,
    ...(brandName ? { brand: { "@type": "Brand", name: brandName } } : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: "GEL",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <div className="relative min-h-screen text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <main className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6 md:px-8">
        <nav aria-label="breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-400">
          <Link href="/" className="transition hover:text-yellow-400">მთავარი</Link>
          <span className="text-gray-600">/</span>
          <Link href="/magazia" className="transition hover:text-yellow-400">მაღაზია</Link>
          <span className="text-gray-600">/</span>
          <Link href={`/category/${product.categorySlug}`} className="text-yellow-500/80 transition hover:text-yellow-400">
            {product.categoryName}
          </Link>
          <span className="text-gray-600">/</span>
          <span className="line-clamp-1 text-white">{product.name}</span>
        </nav>

        <section className="mb-16 grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <ProductGallery
              images={images}
              name={product.name}
              badges={
                <>
                  {product.isSale && (
                    <span className="rounded-xl bg-red-600 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-xl">
                      SALE
                    </span>
                  )}
                  <span
                    className={`flex items-center gap-1.5 rounded-xl border bg-black/90 px-3 py-1.5 text-xs font-black tracking-wide shadow-xl backdrop-blur-md ${
                      product.inStock ? "border-emerald-500/60 text-emerald-400" : "border-red-500/60 text-red-400"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        product.inStock ? "animate-pulse bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-red-500"
                      }`}
                    />
                    {product.inStock ? "მარაგშია" : "არაა მარაგში"}
                  </span>
                </>
              }
            />
          </div>
          <div className="md:col-span-6">
            <ProductPurchasePanel product={toSummary(product)} brandName={brandName} />
          </div>
        </section>

        <ProductTabs description={product.description || product.shortDescription} specs={specs} />

        <ProductCarousel
          title="მსგავსი პროდუქტები"
          items={getRelatedProducts(product).map(toSummary)}
        />

        <ServiceHighlights className="mb-6" />
      </main>
    </div>
  );
}
