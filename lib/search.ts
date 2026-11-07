/**
 * Product search shared by the live search box and the shop page.
 * Georgian text is transliterated to Latin, so "teleskopi" finds "ტელესკოპი"
 * and "ტელესკოპი" finds "Telescope …" products named in English.
 */

const KA_TO_LATIN: Record<string, string> = {
  ა: "a", ბ: "b", გ: "g", დ: "d", ე: "e", ვ: "v", ზ: "z", თ: "t", ი: "i",
  კ: "k", ლ: "l", მ: "m", ნ: "n", ო: "o", პ: "p", ჟ: "zh", რ: "r", ს: "s",
  ტ: "t", უ: "u", ფ: "f", ქ: "q", ღ: "gh", ყ: "y", შ: "sh", ჩ: "ch", ც: "c",
  ძ: "dz", წ: "w", ჭ: "ch", ხ: "x", ჯ: "j", ჰ: "h",
};

// Latin spellings people commonly type for the same sounds
const LATIN_VARIANTS: [RegExp, string][] = [
  [/kh/g, "x"],
  [/ts/g, "c"],
  [/tch/g, "ch"],
  [/w/g, "v"],
  [/y/g, "i"],
];

export function normalize(text: string): string {
  let out = "";
  for (const ch of text.toLowerCase()) out += KA_TO_LATIN[ch] ?? ch;
  for (const [re, to] of LATIN_VARIANTS) out = out.replace(re, to);
  return out.replace(/[^a-z0-9]+/g, " ").trim();
}

export interface SearchItem {
  id: string;
  name: string;
  price: number;
  priceMax?: number;
  oldPrice?: number;
  image: string;
  categoryName: string;
  brand?: string;
  inStock: boolean;
}

interface Indexed {
  item: SearchItem;
  name: string;
  extra: string;
}

export function buildIndex(items: SearchItem[]): Indexed[] {
  return items.map((item) => ({
    item,
    name: normalize(item.name),
    extra: normalize(`${item.categoryName} ${item.brand ?? ""}`),
  }));
}

/** Higher = better match, 0 = no match */
function score(entry: Indexed, terms: string[], full: string): number {
  let total = 0;
  for (const term of terms) {
    if (entry.name.startsWith(term)) total += 6;
    else if (entry.name.includes(` ${term}`)) total += 4;
    else if (entry.name.includes(term)) total += 2;
    else if (entry.extra.includes(term)) total += 1;
    else return 0; // every word must match somewhere
  }
  if (entry.name.includes(full)) total += 3;
  if (entry.item.inStock) total += 0.5;
  return total;
}

export function search(index: Indexed[], query: string, limit = Infinity): SearchItem[] {
  const full = normalize(query);
  if (!full) return [];
  const terms = full.split(" ");
  return index
    .map((entry) => ({ entry, s: score(entry, terms, full) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.entry.item);
}

/** Simple yes/no check, used by the shop page filter */
export function matchesQuery(
  item: { name: string; categoryName: string; brand?: string },
  query: string,
): boolean {
  const full = normalize(query);
  if (!full) return true;
  const hay = normalize(`${item.name} ${item.categoryName} ${item.brand ?? ""}`);
  return full.split(" ").every((t) => hay.includes(t));
}
