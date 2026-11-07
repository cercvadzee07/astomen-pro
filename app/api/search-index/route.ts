import { ALL_PRODUCTS, BRAND_NAMES } from "@/lib/products";
import type { SearchItem } from "@/lib/search";

/** Small product list for the live search box — loaded once, on first focus */
export async function GET() {
  const items: SearchItem[] = ALL_PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    ...(p.priceMax ? { priceMax: p.priceMax } : {}),
    ...(p.oldPrice ? { oldPrice: p.oldPrice } : {}),
    image: p.image,
    categoryName: p.categoryName,
    ...(p.brand ? { brand: BRAND_NAMES[p.brand] ?? p.brand } : {}),
    inStock: p.inStock,
  }));
  return Response.json(items);
}
