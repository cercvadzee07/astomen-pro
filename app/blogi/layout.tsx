import type { Metadata } from "next";

// the page itself is a client component, so its metadata lives here
export const metadata: Metadata = {
  title: "ბლოგი",
  description: "სტატიები კოსმოსზე, ასტრონომიასა და ტელესკოპებზე.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
