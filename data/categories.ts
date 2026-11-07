import {
  Telescope,
  Projector,
  Lamp,
  Magnet,
  Compass,
  Sparkles,
  Cpu,
  Gamepad2,
  Backpack,
  Watch,
  Boxes,
  Star,
} from "lucide-react";
import type { Category } from "@/types/category";

/** Same categories (and slugs) as astroman.ge */
export const CATEGORIES: Category[] = [
  { slug: "teleskopi", name: "ტელესკოპი", icon: Telescope, color: "text-amber-400" },
  { slug: "ganateba", name: "პროექტორები", icon: Projector, color: "text-purple-400" },
  { slug: "sanatebi", name: "სანათები", icon: Lamp, color: "text-yellow-400" },
  { slug: "magniturisanatebi", name: "მაგნიტური სანათები", icon: Magnet, color: "text-rose-400" },
  { slug: "varskvlavuri-ruka", name: "ვარსკვლავური რუკა", icon: Compass, color: "text-cyan-400" },
  {
    slug: "varskvlavis-darqmeva",
    name: "ვარსკვლავის დარქმევა",
    icon: Sparkles,
    color: "text-pink-400",
    externalUrl: "https://astroman.ge/star-registry/",
  },
  { slug: "teqnika", name: "ტექნიკა", icon: Cpu, color: "text-emerald-400" },
  { slug: "sabavshvo-satamashoebi", name: "საბავშვო სათამაშოები", icon: Gamepad2, color: "text-orange-400" },
  { slug: "saskolo-chantebi", name: "სასკოლო ჩანთები", icon: Backpack, color: "text-sky-400" },
  { slug: "aqsesuarebi", name: "აქსესუარები", icon: Watch, color: "text-blue-400" },
  { slug: "sxvadasxva", name: "სხვადასხვა", icon: Boxes, color: "text-gray-400" },
  { slug: "mxolod-astromanshi", name: "მხოლოდ ასტრომანში", icon: Star, color: "text-yellow-300" },
];

/** Old / alternative slugs that should open a real category */
export const CATEGORY_ALIASES: Record<string, string> = {
  telescope: "teleskopi",
  teleskopebi: "teleskopi",
  proeqtorebi: "ganateba",
  proeqtori: "ganateba",
  projector: "ganateba",
  sanati: "sanatebi",
  lamp: "sanatebi",
  "magnituri-sanatebi": "magniturisanatebi",
  ruka: "varskvlavuri-ruka",
  "star-map": "varskvlavuri-ruka",
  binokli: "teqnika",
  mikroskopi: "teqnika",
  sabavshvo: "sabavshvo-satamashoebi",
  satamashoebi: "sabavshvo-satamashoebi",
  chantebi: "saskolo-chantebi",
  aksesuarebi: "aqsesuarebi",
  accessories: "aqsesuarebi",
  other: "sxvadasxva",
  "star-registry": "varskvlavis-darqmeva",
};

export function resolveCategorySlug(slug: string): string {
  return CATEGORY_ALIASES[slug] ?? slug;
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === resolveCategorySlug(slug));
}

/** Categories that are shown as product listings inside this app */
export const SHOP_CATEGORIES = CATEGORIES.filter((c) => !c.externalUrl);
