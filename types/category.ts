import type { LucideIcon } from "lucide-react";

export interface Category {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** Tailwind text color class for the icon */
  color: string;
  /** Set when the category lives outside this app (e.g. Star Registry) */
  externalUrl?: string;
}
