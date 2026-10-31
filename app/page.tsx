"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Truck,
  Headphones,
  CreditCard,
  Rocket,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { ALL_PRODUCTS, Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import ShopOverlays from "@/components/ShopOverlays";
import Brands from "@/components/Brands";

function TiltProductCard({ prod }: { prod: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const { favorites, toggleFavorite, addToCart } = useShop();

  const isFav = favorites?.includes(prod.id) ?? false;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotate({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -5,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 5,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "calc((100% - 4 * 1rem) / 5)",
        minWidth: "calc((100% - 4 * 1rem) / 5)",
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition:
          rotate.x === 0
            ? "transform 0.4s ease-out"
            : "transform 0.08s ease-out",
      }}
      className="group relative flex shrink-0 flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320] shadow-md transition-colors hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/5 will-change-transform"
    >
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
        {prod.isSale && (
          <span className="rounded-md bg-red-600 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
            SALE
          </span>
        )}
        {!prod.inStock && (
          <span className="rounded-md border border-white/10 bg-black/85 px-2 py-0.5 text-[9px] font-bold text-gray-300 backdrop-blur-sm">
            არაა მარაგში
          </span>
        )}
      </div>

      <div className="absolute top-3 right-3 z-30 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(prod.id);
          }}
          className={`flex h-8 w-8 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-200 active:scale-90 ${
            isFav
              ? "border-yellow-500 bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
              : "border-white/10 bg-black/60 text-gray-300 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black hover:scale-105"
          }`}
          title="ფავორიტები"
        >
          <Heart
            className={`h-4 w-4 transition-transform duration-200 ${isFav ? "fill-black" : ""}`}
          />
        </button>

        <button
          type="button"
          disabled={!prod.inStock}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(prod);
          }}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-gray-300 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black active:scale-90 disabled:pointer-events-none disabled:opacity-30"
          title="კალათაში დამატება"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>

      <Link
        href={`/product/${prod.id}`}
        className="relative block aspect-square w-full overflow-hidden bg-[#070a12] border-b border-white/10"
      >
        {prod.image ? (
          <img
            src={prod.image}
            alt={prod.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
            {prod.name}
          </div>
        )}
      </Link>

      <div className="flex grow flex-col p-4 bg-[#0e1320]">
        <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-yellow-500/80">
          {prod.categoryName}
        </div>

        <Link
          href={`/product/${prod.id}`}
          className="line-clamp-2 min-h-9 text-xs font-semibold text-white transition hover:text-yellow-400"
        >
          {prod.name}
        </Link>

        <div className="mt-auto flex items-end justify-between pt-3 border-t border-white/5">
          <div>
            {prod.oldPrice && (
              <div className="text-[11px] text-gray-500 line-through">
                {prod.oldPrice.toFixed(2)}₾
              </div>
            )}
            <div className="text-base font-bold text-white">
              {prod.price.toFixed(2)}₾
            </div>
          </div>

          <span
            className={`text-[10px] font-semibold ${
              prod.inStock ? "text-emerald-400" : "text-gray-500"
            }`}
          >
            {prod.inStock ? "მარაგშია" : "ამოიწურა"}
          </span>
        </div>
      </div>
    </div>
  );
}

function AstromanCarousel({
  title,
  items,
}: {
  title: string;
  items: Product[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const maxIndex = Math.max(0, items.length - 5);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="group/section relative mb-12 w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-black uppercase tracking-wider text-white">
          {title}
        </h2>
      </div>

      <button
        type="button"
        disabled={currentIndex === 0}
        onClick={prevSlide}
        className="absolute -left-4 top-[58%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#070a12]/95 text-white shadow-2xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/section:opacity-100 group-hover/section:pointer-events-auto hover:bg-yellow-500 hover:text-black hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
      </button>

      <button
        type="button"
        disabled={currentIndex >= maxIndex}
        onClick={nextSlide}
        className="absolute -right-4 top-[58%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#070a12]/95 text-white shadow-2xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/section:opacity-100 group-hover/section:pointer-events-auto hover:bg-yellow-500 hover:text-black hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5 stroke-[2.5]" />
      </button>

      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out py-1"
          style={{
            transform: `translateX(calc(-${currentIndex} * ((100% - 4 * 1rem) / 5 + 1rem)))`,
          }}
        >
          {items.map((prod) => (
            <TiltProductCard key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [heroSlide, setHeroSlide] = useState(0);

  const telescopes = useMemo(
    () => ALL_PRODUCTS.filter((p) => p.categorySlug === "teleskopi"),
    [],
  );
  const viralItems = useMemo(
    () =>
      ALL_PRODUCTS.filter(
        (p) =>
          p.categorySlug === "sanatebi" || p.categorySlug === "proeqtorebi",
      ),
    [],
  );
  const discountedItems = useMemo(
    () => ALL_PRODUCTS.filter((p) => p.isSale),
    [],
  );
  const lamps = useMemo(
    () => ALL_PRODUCTS.filter((p) => p.categorySlug === "sanatebi"),
    [],
  );
  const onlyInAstroman = useMemo(
    () =>
      ALL_PRODUCTS.filter(
        (p) =>
          p.categorySlug === "aksesuarebi" ||
          p.categorySlug === "sxvadasxva" ||
          p.categorySlug === "sabavshvo",
      ),
    [],
  );

  const HERO_SLIDES = useMemo(
    () => [
      {
        leftBadge: "Foreseen 70mm",
        rightBadge: "Foreseen 90mm",
        leftImg: telescopes[0]?.image || "",
        rightImg: telescopes[3]?.image || telescopes[1]?.image || "",
        brand: "FORESEEN",
      },
      {
        leftBadge: "National Geographic",
        rightBadge: "70/900 AZ",
        leftImg: telescopes[1]?.image || "",
        rightImg: telescopes[2]?.image || "",
        brand: "NATIONAL GEOGRAPHIC",
      },
    ],
    [telescopes],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [HERO_SLIDES.length]);

  const blogPosts = [
    {
      id: "blog-1",
      title:
        "საახალწლო საჩუქარი: 25+ კოსმოსური იდეა ბავშვს, გოგოს, ბიჭს და შეყვარებულს",
      image: "https://astroman.ge/wp-content/uploads/2022/04/blog-newyear.jpg",
      link: "/blog/saaxalwlo-sachuqari",
    },
    {
      id: "blog-2",
      title:
        "SpaceX-ის Starship-მა პირველად მიაღწია ორბიტას: რაკეტა, რომელიც მთვარესა და მარსს გვიახლოვებს",
      image: "https://astroman.ge/wp-content/uploads/2022/04/blog-starship.jpg",
      link: "/blog/spacex-starship",
    },
    {
      id: "blog-3",
      title:
        "მზის დაბნელება 2026: რატომ ხდება, რას ცვლის დედამიწაზე და როდის დაინახავს საქართველო",
      image: "https://astroman.ge/wp-content/uploads/2022/04/blog-eclipse.jpg",
      link: "/blog/mzis-dabneleba",
    },
    {
      id: "blog-4",
      title: "როგორ ავირჩიოთ ტელესკოპი დამწყებთათვის",
      image:
        "https://astroman.ge/wp-content/uploads/2022/04/blog-telescope.jpg",
      link: "/blog/rogor-avirchiot-teleskopi",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 py-6 sm:px-6 md:px-8">
      <ShopOverlays />

      {/* 1. HERO სექცია */}
      <section className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-stretch">
        <aside className="w-full shrink-0 lg:w-60">
          <div className="h-full overflow-hidden rounded-2xl border border-white/5 bg-[#0d111d]/90 shadow-xl backdrop-blur-md">
            <ul className="flex flex-col divide-y divide-white/5 text-xs font-semibold">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <li key={cat.slug}>
                    <Link
                      href={`/category/${cat.slug}`}
                      className="group flex items-center gap-3 px-4 py-2.5 text-gray-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <span className="transition group-hover:scale-110">
                        <Icon className={`h-4 w-4 ${cat.color}`} />
                      </span>
                      <span className="truncate transition group-hover:translate-x-1">
                        {cat.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="group/hero relative flex flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-2xl min-h-[350px]">
          <div className="absolute inset-0 flex">
            <div className="relative w-[52%] h-full bg-gradient-to-br from-orange-500 via-amber-600 to-red-600 overflow-hidden [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,#fff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            </div>
            <div className="relative flex-1 -ml-[8%] h-full bg-gradient-to-bl from-cyan-400 via-sky-600 to-blue-700 overflow-hidden">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,#fff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            </div>
          </div>

          <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 md:p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-center">
                <span className="rounded-lg bg-black/60 px-4 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                  {HERO_SLIDES[heroSlide]?.leftBadge}
                </span>
              </div>
              <div className="flex justify-center">
                <span className="rounded-lg bg-black/60 px-4 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                  {HERO_SLIDES[heroSlide]?.rightBadge}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 my-auto items-center justify-items-center w-full px-4 overflow-visible">
              <div className="relative flex items-center justify-center h-48 md:h-56 w-full">
                {HERO_SLIDES[heroSlide]?.leftImg && (
                  <img
                    src={HERO_SLIDES[heroSlide].leftImg}
                    alt={HERO_SLIDES[heroSlide].leftBadge}
                    className="h-full w-auto object-contain mix-blend-multiply scale-135 md:scale-150 transition-transform duration-500 hover:scale-160 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
                  />
                )}
              </div>
              <div className="relative flex items-center justify-center h-48 md:h-56 w-full">
                {HERO_SLIDES[heroSlide]?.rightImg && (
                  <img
                    src={HERO_SLIDES[heroSlide].rightImg}
                    alt={HERO_SLIDES[heroSlide].rightBadge}
                    className="h-full w-auto object-contain mix-blend-multiply scale-135 md:scale-150 transition-transform duration-500 hover:scale-160 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
                  />
                )}
              </div>
            </div>

            <div className="flex items-end justify-between pt-1">
              <span className="text-lg md:text-xl font-black tracking-widest text-white drop-shadow-md">
                {HERO_SLIDES[heroSlide]?.brand}
              </span>

              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      heroSlide === idx ? "w-7 bg-white" : "w-2.5 bg-white/40"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setHeroSlide((prev) =>
                  prev === 0 ? HERO_SLIDES.length - 1 : prev - 1,
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black shadow-lg backdrop-blur-md opacity-0 group-hover/hero:opacity-100 hover:bg-white transition active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black shadow-lg backdrop-blur-md opacity-0 group-hover/hero:opacity-100 hover:bg-white transition active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. ტელესკოპები */}
      <AstromanCarousel title="ტელესკოპები" items={telescopes} />

      {/* 3. ვირუსული ნივთები */}
      <AstromanCarousel title="ვირუსული ნივთები" items={viralItems} />

      {/* 4. ბრენდები */}
      <div className="mb-12">
        <Brands />
      </div>

      {/* 5. ფასდაკლებები */}
      <AstromanCarousel title="ფასდაკლებები" items={discountedItems} />

      {/* 6. პრომო ბანერი */}
      <section className="relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-purple-950 via-[#0d111d] to-indigo-950 p-6 md:p-8 shadow-xl backdrop-blur-md">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              განსაკუთრებული კოლექცია
            </span>
            <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
              კოსმოსური სანათები & პროექტორები
            </h3>
            <p className="mt-2 text-xs text-gray-300 max-w-md">
              გადააქციე შენი ოთახი ვარსკვლავურ ცად და გალაქტიკად 3D ლაზერული
              პროექტორებით.
            </p>
          </div>
          <Link
            href="/category/proeqtorebi"
            className="rounded-xl bg-yellow-500 px-6 py-3.5 text-xs font-bold text-black transition hover:bg-yellow-400 active:scale-95 shrink-0"
          >
            კოლექციის ნახვა
          </Link>
        </div>
      </section>

      {/* 7. სანათები */}
      <AstromanCarousel title="სანათები" items={lamps} />

      {/* 8. მხოლოდ ასტრომანში */}
      <AstromanCarousel title="მხოლოდ ასტრომანში" items={onlyInAstroman} />

      {/* 9. ბლოგის სექცია */}
      <section className="mb-12">
        <div className="mb-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-500/80">
            პირველი ასტრო მაღაზია საქართველოში
          </span>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black uppercase tracking-wider text-white sm:text-base">
              გაეცანი ბლოგს
            </h2>
            <Link
              href="/blog"
              className="text-xs font-semibold text-yellow-400 hover:underline"
            >
              ყველა სტატია →
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320] transition hover:border-yellow-500/40 hover:shadow-xl flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 flex grow flex-col justify-between">
                <h4 className="line-clamp-3 text-xs font-bold text-white group-hover:text-yellow-400 transition leading-snug">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. ქვედა უპირატესობების 4-იანი ზოლი */}
      <section className="grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-[#0d111d]/70 p-6 backdrop-blur-md md:grid-cols-4">
        <div className="flex items-center gap-3">
          <Truck className="h-6 w-6 text-yellow-400 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-white">უფასო მიტანა</h4>
            <p className="text-[10px] text-gray-400">
              უფასო მიტანა 250 ლარის ზევით
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Headphones className="h-6 w-6 text-yellow-400 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-white">24/7 დახმარება</h4>
            <p className="text-[10px] text-gray-400">
              მოგვწერე FB მესენჯერში, ნებისმიერ დროს
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CreditCard className="h-6 w-6 text-yellow-400 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-white">ონლაინ გადახდა</h4>
            <p className="text-[10px] text-gray-400">
              გადაიხადე ონლაინ, სწრაფად და საიმედოდ
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Rocket className="h-6 w-6 text-yellow-400 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-white">სწრაფი მიტანა</h4>
            <p className="text-[10px] text-gray-400">
              სტანდარტული მიწოდება, შეკვეთიდან 2 დღეში
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
