import type { Product, ProductSummary } from "@/types/product";
import productsJson from "@/data/products.json";

export const ALL_PRODUCTS = productsJson as unknown as Product[];

export const BRAND_NAMES: Record<string, string> = {
  bresser: "Bresser",
  "bresser-junior": "Bresser Junior",
  celestron: "Celestron",
  foreseen: "Foreseen",
  "national-geographic": "National Geographic",
  vixen: "Vixen",
};

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(slug: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.categories.includes(slug));
}

export function getRelatedProducts(product: Product, limit = 15): Product[] {
  return ALL_PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug,
  ).slice(0, limit);
}

export function getDiscount(p: Product): number {
  return p.oldPrice && p.oldPrice > p.price ? p.oldPrice - p.price : 0;
}

export function formatPrice(value: number): string {
  return `${value.toFixed(2)}₾`;
}

/** "79.00₾", or "32.00 – 72.00₾" for products with variants */
export function formatProductPrice(p: Pick<Product, "price" | "priceMax">): string {
  return p.priceMax
    ? `${p.price.toFixed(2)} – ${formatPrice(p.priceMax)}`
    : formatPrice(p.price);
}

export function toSummary(p: Product): ProductSummary {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { description, attributes, wpSlug, wpId, ...summary } = p;
  return summary;
}

export function getProductsByBrand(brand: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.brand === brand);
}
