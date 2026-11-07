import Link from "next/link";
import {
  ALL_PRODUCTS,
  BRAND_NAMES,
  getDiscount,
  getProductsByCategory,
  toSummary,
} from "@/lib/products";
import type { Product } from "@/types/product";
import HomeHero, { type HeroSlide } from "@/components/home/HomeHero";
import ProductCarousel from "@/components/product/ProductCarousel";
import Brands from "@/components/Brands";
import LatestBlogs from "@/components/LatestBlogs";
import ServiceHighlights from "@/components/ServiceHighlights";

const CAROUSEL_SIZE = 10;

const summaries = (list: Product[], limit?: number) =>
  (limit ? list.slice(0, limit) : list).map(toSummary);

function buildHeroSlides(telescopes: Product[]): HeroSlide[] {
  const branded = telescopes.filter((t) => t.inStock && t.brand && t.image);
  const slides: HeroSlide[] = [];
  for (let i = 0; i + 1 < branded.length && slides.length < 3; i += 2) {
    const [left, right] = [branded[i], branded[i + 1]];
    slides.push({
      leftBadge: left.name,
      rightBadge: right.name,
      leftImg: left.image,
      rightImg: right.image,
      brand: (BRAND_NAMES[left.brand!] ?? left.brand!).toUpperCase(),
    });
  }
  return slides;
}

export default function HomePage() {
  const telescopes = getProductsByCategory("teleskopi");

  const topSelling = [
    ...getProductsByCategory("ganateba"),
    ...getProductsByCategory("magniturisanatebi"),
  ].filter((p) => p.inStock);

  // Higher WooCommerce id = added later
  const newlyAdded = [...ALL_PRODUCTS].sort((a, b) => b.wpId - a.wpId);

  const discounted = ALL_PRODUCTS.filter((p) => getDiscount(p) > 0).sort(
    (a, b) => getDiscount(b) - getDiscount(a),
  );

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 py-6 sm:px-6 md:px-8">
      <HomeHero slides={buildHeroSlides(telescopes)} />

      <ProductCarousel title="ტელესკოპები" items={summaries(telescopes)} />
      <ProductCarousel title="Top გაყიდვადი" items={summaries(topSelling, CAROUSEL_SIZE)} />
      <ProductCarousel title="ახალი დამატებული" items={summaries(newlyAdded, CAROUSEL_SIZE)} />

      <div className="mb-12">
        <Brands />
      </div>

      <ProductCarousel title="ფასდაკლებები" items={summaries(discounted, CAROUSEL_SIZE)} />

      {/* Promo banner */}
      <section className="relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-purple-950 via-[#0d111d] to-indigo-950 p-6 shadow-xl backdrop-blur-md md:p-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              განსაკუთრებული კოლექცია
            </span>
            <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
              კოსმოსური სანათები & პროექტორები
            </h3>
            <p className="mt-2 max-w-md text-xs text-gray-300">
              გადააქციე შენი ოთახი ვარსკვლავურ ცად და გალაქტიკად 3D ლაზერული
              პროექტორებით.
            </p>
          </div>
          <Link
            href="/category/ganateba"
            className="shrink-0 rounded-xl bg-yellow-500 px-6 py-3.5 text-xs font-bold text-black transition hover:bg-yellow-400 active:scale-95"
          >
            კოლექციის ნახვა
          </Link>
        </div>
      </section>

      <ProductCarousel title="სანათები" items={summaries(getProductsByCategory("sanatebi"))} />
      <ProductCarousel
        title="მხოლოდ ასტრომანში"
        items={summaries(getProductsByCategory("mxolod-astromanshi"))}
      />

      <LatestBlogs />

      <ServiceHighlights />
    </div>
  );
}
