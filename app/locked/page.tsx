import type { Metadata } from "next";
import UnlockForm from "./UnlockForm";

export const metadata: Metadata = {
  title: "შესვლა",
  robots: { index: false, follow: false },
};

export default function LockedPage() {
  return <UnlockForm />;
}
