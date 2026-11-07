import type { Metadata } from "next";
import CheckoutView from "@/components/checkout/CheckoutView";

export const metadata: Metadata = { title: "შეკვეთის გაფორმება", robots: { index: false } };

export default function CheckoutPage() {
  return <CheckoutView />;
}
