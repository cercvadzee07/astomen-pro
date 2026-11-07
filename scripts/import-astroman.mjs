/**
 * Converts the astroman.ge scrape (data/raw/astroman-scrape.json)
 * into data/products.json, which the app reads.
 *
 *   node scripts/import-astroman.mjs
 *
 * Re-run it whenever you refresh the scrape. Never edit products.json by hand
 * for bulk changes — change the scrape or this script instead.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const RAW = path.join(root, "data/raw/astroman-scrape.json");
const OUT = path.join(root, "data/products.json");

const UPLOADS = "https://astroman.ge/wp-content/uploads/";

// Category names exactly as on astroman.ge
const CATEGORY_NAMES = {
  teleskopi: "ტელესკოპი",
  ganateba: "პროექტორები",
  sanatebi: "სანათები",
  magniturisanatebi: "მაგნიტური სანათები",
  "varskvlavuri-ruka": "ვარსკვლავური რუკა",
  teqnika: "ტექნიკა",
  "sabavshvo-satamashoebi": "საბავშვო სათამაშოები",
  "saskolo-chantebi": "სასკოლო ჩანთები",
  aqsesuarebi: "აქსესუარები",
  sxvadasxva: "სხვადასხვა",
  "mxolod-astromanshi": "მხოლოდ ასტრომანში",
};

// When a product is in several categories, the first match here is its "primary" one
const PRIMARY_ORDER = [
  "teleskopi",
  "ganateba",
  "varskvlavuri-ruka",
  "magniturisanatebi",
  "sanatebi",
  "teqnika",
  "saskolo-chantebi",
  "sabavshvo-satamashoebi",
  "aqsesuarebi",
  "sxvadasxva",
  "mxolod-astromanshi",
];

// Georgian → Latin, same scheme astroman.ge uses in its own slugs
const KA = {
  ა: "a", ბ: "b", გ: "g", დ: "d", ე: "e", ვ: "v", ზ: "z", თ: "t", ი: "i",
  კ: "k", ლ: "l", მ: "m", ნ: "n", ო: "o", პ: "p", ჟ: "zh", რ: "r", ს: "s",
  ტ: "t", უ: "u", ფ: "f", ქ: "q", ღ: "gh", ყ: "y", შ: "sh", ჩ: "ch", ც: "c",
  ძ: "dz", წ: "w", ჭ: "ch", ხ: "x", ჯ: "j", ჰ: "h",
};

function toSlug(text) {
  return [...text.toLowerCase()]
    .map((ch) => KA[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const absUrl = (u) => (u.startsWith("http") ? u : UPLOADS + u);

const raw = JSON.parse(fs.readFileSync(RAW, "utf-8"));
const usedIds = new Set();

const products = raw.products.map((p) => {
  const wpSlug = decodeURIComponent(p.url).replace(/\/$/, "").split("/").pop();
  let id = /^[a-z0-9-]+$/.test(wpSlug) ? wpSlug : toSlug(wpSlug);
  if (!id || usedIds.has(id)) id = `${id || "product"}-${p.wpId}`;
  usedIds.add(id);

  const categories = PRIMARY_ORDER.filter((c) => p.cats.includes(c));
  const unknown = p.cats.filter((c) => !CATEGORY_NAMES[c]);
  if (unknown.length) console.warn(`⚠ unknown category ${unknown} on "${p.name}"`);
  const primary = categories[0] ?? "sxvadasxva";

  const images = [...new Set((p.images ?? []).map(absUrl))];
  if (!images.length && p.img) images.push(absUrl(p.img));

  const isRange = Array.isArray(p.priceRange) && p.priceRange.length > 1;
  const price = isRange ? Math.min(...p.priceRange) : p.price;

  return {
    id,
    wpId: p.wpId,
    wpSlug,
    name: p.name.trim(),
    price,
    ...(isRange ? { priceMax: Math.max(...p.priceRange) } : {}),
    ...(p.oldPrice && p.oldPrice > price ? { oldPrice: p.oldPrice } : {}),
    isSale: Boolean(p.sale && (isRange || (p.oldPrice && p.oldPrice > price))),
    inStock: p.inStock,
    image: images[0] ?? "",
    images,
    categorySlug: primary,
    categoryName: CATEGORY_NAMES[primary],
    categories,
    ...(p.brand ? { brand: p.brand } : {}),
    shortDescription: p.short ?? "",
    description: p.desc ?? "",
    ...(p.attrs?.length ? { attributes: p.attrs } : {}),
  };
});

fs.writeFileSync(OUT, JSON.stringify(products, null, 2) + "\n", "utf-8");
console.log(`✓ ${products.length} products → data/products.json (scraped ${raw.scrapedAt})`);
