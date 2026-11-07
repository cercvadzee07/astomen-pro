import type { Metadata } from "next";

// the page itself is a client component, so its metadata lives here
export const metadata: Metadata = {
  title: "კონტაქტი",
  description: "დაგვიკავშირდით — თბილისი, ალ. ყაზბეგის 17. ტელ: 599 39 67 21 / 555 44 64 48.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
