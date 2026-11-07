import type { Metadata } from "next";
import CatalogView from "@/components/CatalogView";
import { ALL_PRODUCTS, toSummary } from "@/lib/products";

export const metadata: Metadata = {
  title: "მაღაზია",
  description:
    "ტელესკოპები, პროექტორები, კოსმოსური სანათები და საჩუქრები — ყველა პროდუქტი ერთ გვერდზე.",
};

export default function MagaziaPage() {
  return <CatalogView products={ALL_PRODUCTS.map(toSummary)} title="ყველა პროდუქტი" />;
}
