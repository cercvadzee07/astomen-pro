import type { Metadata } from "next";
import FavoritesView from "@/components/favorites/FavoritesView";
import { ALL_PRODUCTS, toSummary } from "@/lib/products";

export const metadata: Metadata = {
  title: "ფავორიტები",
  robots: { index: false },
};

export default function FavoritesPage() {
  // favorites live in the browser, so the page receives every product and filters on the client
  return <FavoritesView products={ALL_PRODUCTS.map(toSummary)} />;
}
