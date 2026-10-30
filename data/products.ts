import rawData from "./astroman_raw.json";

export interface Product {
  id: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  price: number;
  oldPrice?: number;
  isSale?: boolean;
  inStock: boolean;
  imageLabel: string;
  image: string;
  link?: string;
}

// დასახელების მიხედვით კატეგორიის ავტომატური განსაზღვრა
function detectCategory(name: string): { slug: string; name: string } {
  const lower = name.toLowerCase();

  if (
    lower.includes("ტელესკოპ") ||
    lower.includes("telescope") ||
    lower.includes("celestron") ||
    lower.includes("bresser")
  ) {
    return { slug: "teleskopi", name: "ტელესკოპი" };
  }
  if (lower.includes("პროექტორ") || lower.includes("projector")) {
    return { slug: "proeqtorebi", name: "პროექტორები" };
  }
  if (
    lower.includes("სანათ") ||
    lower.includes("lamp") ||
    lower.includes("ჭაღი") ||
    lower.includes("light") ||
    lower.includes("bulb")
  ) {
    return { slug: "sanatebi", name: "სანათები" };
  }
  if (lower.includes("რუკა") || lower.includes("star map")) {
    return { slug: "varskvlavuri-ruka", name: "ვარსკვლავური რუკა" };
  }
  if (lower.includes("დარქმევა") || lower.includes("name a star")) {
    return { slug: "varskvlavis-darqmeva", name: "ვარსკვლავის დარქმევა" };
  }
  if (
    lower.includes("ბინოკლ") ||
    lower.includes("მიკროსკოპ") ||
    lower.includes("binocular") ||
    lower.includes("microscope") ||
    lower.includes("speaker") ||
    lower.includes("დინამიკი") ||
    lower.includes("vr") ||
    lower.includes("მონოკლ")
  ) {
    return { slug: "teqnika", name: "ტექნიკა" };
  }
  if (
    lower.includes("ჩანთა") ||
    lower.includes("სათამაშო") ||
    lower.includes("რობოტ") ||
    lower.includes("პაზლ") ||
    lower.includes("თვითმფრინავ") ||
    lower.includes("მანქანა") ||
    lower.includes("ვერტმფრენ") ||
    lower.includes("rover")
  ) {
    return { slug: "sabavshvo", name: "საბავშვო სათამაშოები" };
  }
  if (
    lower.includes("სამაჯურ") ||
    lower.includes("ყელსაბამ") ||
    lower.includes("ბრელოკ") ||
    lower.includes("case") ||
    lower.includes("საათი") ||
    lower.includes("watch")
  ) {
    return { slug: "aqsesuarebi", name: "აქსესუარები" };
  }

  return { slug: "sxvadasxva", name: "სხვადასხვა" };
}

// ფასის ტექსტიდან ციფრების სუფთად ამოღება
function parsePrices(priceText: string): {
  price: number;
  oldPrice?: number;
  isSale: boolean;
} {
  if (!priceText) return { price: 0, isSale: false };

  // ვეძებთ ყველა რიცხვს (მაგ: 1,230.00 ან 99.00)
  const numbers =
    priceText
      .replace(/,/g, "")
      .match(/\d+(\.\d+)?/g)
      ?.map(Number) || [];

  if (numbers.length >= 2) {
    const oldPrice = Math.max(...numbers);
    const price = Math.min(...numbers);
    return { price, oldPrice, isSale: true };
  }

  if (numbers.length === 1) {
    return { price: numbers[0], isSale: false };
  }

  return { price: 0, isSale: false };
}

// უნიკალური სლაგის გენერატორი
function createSlug(name: string, index: number): string {
  const clean = name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\u10D0-\u10FA]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return clean || `product-${index}`;
}

export const ALL_PRODUCTS: Product[] = (rawData as any[]).map((item, index) => {
  const { price, oldPrice, isSale } = parsePrices(item.priceText || "");
  const category = detectCategory(item.name || "");
  const inStock = !(item.priceText || "").includes("არაა მარაგში");

  return {
    id: createSlug(item.name || "", index),
    name: item.name || "პროდუქტი",
    categorySlug: category.slug,
    categoryName: category.name,
    price,
    oldPrice,
    isSale,
    inStock,
    imageLabel: category.name,
    image: item.img || "",
    link: item.link || "",
  };
});

export const SIDEBAR_DISCOUNTS = [
  {
    id: "bresser-venus",
    name: "Bresser Venus 76/700 AZ Telescope",
    price: "998.00₾",
    oldPrice: "1,230.00₾",
  },
  {
    id: "foreseen-80mm-disc",
    name: "ტელესკოპი Foreseen 80mm",
    price: "856.00₾",
    oldPrice: "967.00₾",
  },
  { id: "naruto-disc", name: "ნარუტო სანათი", price: "78.00₾" },
  {
    id: "3d-pen-disc",
    name: "3d კალამი (შავი)",
    price: "79.00₾",
    oldPrice: "99.00₾",
  },
  {
    id: "sensor-moon-disc",
    name: "სენსორული მთვარის სანათი",
    price: "133.00₾",
  },
];
