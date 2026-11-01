const fs = require("fs");
const path = require("path");

const productsTsPath = path.join(__dirname, "data", "products.ts");
const rawJsonPath = path.join(__dirname, "astroman_products.json");

if (!fs.existsSync(rawJsonPath)) {
  console.error("❌ astroman_products.json ვერ მოიძებნა root დირექტორიაში!");
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(rawJsonPath, "utf-8"));
let currentTsContent = fs.readFileSync(productsTsPath, "utf-8");

// დამხმარე ფუნქცია კატეგორიის მისანიჭებლად
function getCategoryMeta(name) {
  const lower = name.toLowerCase();

  if (
    lower.includes("telescop") ||
    lower.includes("ტელესკოპ") ||
    lower.includes("celestron") ||
    lower.includes("bresser")
  ) {
    return {
      categoryName: "ტელესკოპები",
      categorySlug: "teleskopi",
      price: 950,
    };
  }
  if (lower.includes("proeqtor") || lower.includes("projector")) {
    return {
      categoryName: "პროექტორები",
      categorySlug: "proeqtorebi",
      price: 120,
    };
  }
  if (
    lower.includes("lamp") ||
    lower.includes("sanati") ||
    lower.includes("სანათი") ||
    lower.includes("crystal ball")
  ) {
    return { categoryName: "სანათები", categorySlug: "sanatebi", price: 65 };
  }
  if (lower.includes("binokli") || lower.includes("binocular")) {
    return { categoryName: "ბინოკლები", categorySlug: "binokli", price: 180 };
  }
  if (lower.includes("mikroskop") || lower.includes("microscope")) {
    return {
      categoryName: "მიკროსკოპები",
      categorySlug: "mikroskopi",
      price: 210,
    };
  }
  if (
    lower.includes("ruka") ||
    lower.includes("star map") ||
    lower.includes("რუკა")
  ) {
    return {
      categoryName: "ვარსკვლავური რუკა",
      categorySlug: "varskvlavuri-ruka",
      price: 65,
    };
  }
  if (
    lower.includes("chanta") ||
    lower.includes("bag") ||
    lower.includes("satamasho") ||
    lower.includes("კალამი") ||
    lower.includes("3d kalami")
  ) {
    return {
      categoryName: "საბავშვო",
      categorySlug: "sabavshvo-satamashoebi",
      price: 55,
    };
  }

  return {
    categoryName: "აქსესუარები",
    categorySlug: "aqsesuarebi",
    price: 45,
  };
}

// ვპოულობთ არსებულ ALL_PRODUCTS-ის ID-ებსა და სახელებს, რომ დუბლიკატი არ შეიქმნას
const missingItems = [];

rawData.forEach((item, index) => {
  // თუ სახელი უკვე წერია products.ts-ში, ვტოვებთ
  const safeName = item.name.replace(/"/g, '\\"');
  if (
    currentTsContent.includes(`"${safeName}"`) ||
    currentTsContent.includes(`'${safeName}'`)
  ) {
    return;
  }

  const meta = getCategoryMeta(item.name);

  missingItems.push({
    id: `p_extra_${index + 1}`,
    name: item.name,
    categoryName: meta.categoryName,
    categorySlug: meta.categorySlug,
    price: meta.price,
    image: item.image || "",
    link: item.link || "",
    inStock: true,
  });
});

console.log(`📦 ნაპოვნია ${missingItems.length} ახალი ნივთი დასამატებლად.`);

if (missingItems.length > 0) {
  const tsCodeToAppend = `\n\n// --- დამატებითი ამოღებული პროდუქტები (275-მდე) ---\nexport const EXTRA_PRODUCTS: Product[] = ${JSON.stringify(missingItems, null, 2)};\n`;

  // ვანაცვლებთ ALL_PRODUCTS-ის მასივს ისე, რომ EXTRA_PRODUCTS-იც შეიცვას
  if (currentTsContent.includes("export const ALL_PRODUCTS: Product[] = [")) {
    currentTsContent = currentTsContent.replace(
      "export const ALL_PRODUCTS: Product[] = [",
      `${tsCodeToAppend}\nexport const ALL_PRODUCTS: Product[] = [\n  ...EXTRA_PRODUCTS,`,
    );
  } else {
    currentTsContent += `${tsCodeToAppend}\nALL_PRODUCTS.push(...EXTRA_PRODUCTS);\n`;
  }

  fs.writeFileSync(productsTsPath, currentTsContent, "utf-8");
  console.log(
    "🎉 data/products.ts წარმატებით განახლდა! სულ გახდა 275-მდე ნივთი.",
  );
} else {
  console.log("⚡ ყველა ნივთი უკვე არსებობს ბაზაში.");
}
