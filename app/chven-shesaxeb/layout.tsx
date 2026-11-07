import type { Metadata } from "next";

// the page itself is a client component, so its metadata lives here
export const metadata: Metadata = {
  title: "ჩვენ შესახებ",
  description: "Astroman — პირველი ასტრო მაღაზია საქართველოში.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
