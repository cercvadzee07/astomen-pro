export interface Product {
  /** URL-safe slug, used in /product/[id] */
  id: string;
  /** WooCommerce product id on astroman.ge */
  wpId: number;
  /** Original astroman.ge slug (may contain Georgian) — kept for redirects */
  wpSlug: string;
  name: string;
  /** Current price (for variable products: the lowest variant price) */
  price: number;
  /** Highest variant price, only for variable products */
  priceMax?: number;
  /** Regular price before discount */
  oldPrice?: number;
  isSale: boolean;
  inStock: boolean;
  /** Main image (first gallery image) */
  image: string;
  images: string[];
  /** Primary category — used for breadcrumbs and "related products" */
  categorySlug: string;
  categoryName: string;
  /** Every category the product belongs to (a product can be in several) */
  categories: string[];
  brand?: string;
  shortDescription: string;
  description: string;
  attributes?: [string, string][];
}

/** Lightweight product shape for cards, cart and client components (no long texts) */
export type ProductSummary = Omit<Product, "description" | "attributes" | "wpSlug" | "wpId">;
