"use client";

import { useRef, useState, useEffect } from "react";
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
import { useShop } from "@/context/ShopContext";
import ShopOverlays from "@/components/ShopOverlays";
import Brands from "@/components/Brands";

function AstromanCarousel({
  title,
  items,
  cardBg = "white",
}: {
  title: string;
  items: {
    id: string;
    name: string;
    price: string;
    oldPrice?: string;
    isSale?: boolean;
    inStock: boolean;
    image: string;
  }[];
  cardBg?: "white" | "dark";
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { favorites, toggleFavorite, addToCart } = useShop();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = direction === "left" ? -280 : 280;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative mb-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-black uppercase tracking-wider text-white sm:text-base">
          {title}
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0d111d] text-gray-300 transition hover:bg-yellow-500 hover:text-black active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0d111d] text-gray-300 transition hover:bg-yellow-500 hover:text-black active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((prod) => {
          const isFav = favorites?.includes(prod.id) ?? false;

          return (
            <div
              key={prod.id}
              className="group relative flex w-[210px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320] shadow-md transition-all duration-300 hover:border-yellow-500/40 hover:shadow-xl"
            >
              {/* ბეიჯები */}
              <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 pointer-events-none">
                {prod.isSale && (
                  <span className="rounded bg-red-600 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow">
                    SALE
                  </span>
                )}
                {!prod.inStock && (
                  <span className="rounded bg-black/85 px-2 py-0.5 text-[9px] font-bold text-gray-300 backdrop-blur-sm">
                    არაა მარაგში
                  </span>
                )}
              </div>

              {/* Hover ღილაკები */}
              <div className="absolute top-2.5 right-2.5 z-30 flex flex-col gap-1.5 opacity-0 transition-all duration-200 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => toggleFavorite(prod.id)}
                  className={`flex h-7 w-7 items-center justify-center rounded-lg border backdrop-blur-md transition ${
                    isFav
                      ? "border-yellow-500 bg-yellow-500 text-black"
                      : "border-white/10 bg-black/60 text-gray-300 hover:bg-yellow-500 hover:text-black"
                  }`}
                  title="ფავორიტებში დამატება"
                >
                  <Heart
                    className={`h-3.5 w-3.5 ${isFav ? "fill-black" : ""}`}
                  />
                </button>
                <button
                  type="button"
                  disabled={!prod.inStock}
                  onClick={() =>
                    addToCart({
                      id: prod.id,
                      name: prod.name,
                      price: parseFloat(prod.price.replace(/[^\d.]/g, "")) || 0,
                      oldPrice: prod.oldPrice
                        ? parseFloat(prod.oldPrice.replace(/[^\d.]/g, ""))
                        : undefined,
                      inStock: prod.inStock,
                      isSale: prod.isSale,
                      image: prod.image,
                      categorySlug: "teleskopi",
                      categoryName: "ტექნიკა",
                    })
                  }
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-black/60 text-gray-300 backdrop-blur-md transition hover:bg-yellow-500 hover:text-black disabled:opacity-30"
                  title="კალათაში დამატება"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* სურათის ბლოკი */}
              <Link
                href={`/product/${prod.id}`}
                className={`relative block aspect-square w-full overflow-hidden p-3 ${
                  cardBg === "white" ? "bg-white" : "bg-[#070a12]"
                }`}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              {/* ინფორმაციის ბლოკი */}
              <div className="flex grow flex-col p-3.5">
                <Link
                  href={`/product/${prod.id}`}
                  className="line-clamp-2 min-h-8 text-xs font-semibold text-white transition hover:text-yellow-400"
                >
                  {prod.name}
                </Link>

                <div className="mt-auto flex items-end justify-between pt-2.5 border-t border-white/5">
                  <div>
                    {prod.oldPrice && (
                      <span className="text-[10px] text-gray-500 line-through block">
                        {prod.oldPrice}
                      </span>
                    )}
                    <span className="text-sm font-bold text-white">
                      {prod.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function HomePage() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 2);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const HERO_SLIDES = [
    {
      titleLeft: "Foreseen 70mm",
      titleRight: "Foreseen 90mm",
      brand: "FORESEEN",
    },
    {
      titleLeft: "National Geographic",
      titleRight: "70/900 AZ",
      brand: "NATIONAL GEOGRAPHIC",
    },
  ];

  // 1. ტელესკოპები[cite: 5]
  const telescopes = [
    {
      id: "celestron-starsense",
      name: "Celestron StarSense",
      price: "1,250.00₾",
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/1-1.jpg",
    },
    {
      id: "bresser-automatik-80-400",
      name: "Bresser Automatik 80/400",
      price: "2,399.00₾",
      oldPrice: "2,590.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/2-1.jpg",
    },
    {
      id: "bresser-sirius-70-900-az",
      name: "Bresser Sirius 70/900 AZ",
      price: "998.00₾",
      oldPrice: "1,129.00₾",
      isSale: true,
      inStock: false,
      image: "https://astroman.ge/wp-content/uploads/2022/04/3-1.jpg",
    },
    {
      id: "celestron-nexstar-6slt",
      name: "Celestron NexStar 6SLT",
      price: "5,200.00₾",
      oldPrice: "5,869.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/4-1.jpg",
    },
    {
      id: "celestron-astromaster-114eq",
      name: "Celestron AstroMaster 114EQ",
      price: "1,599.00₾",
      inStock: false,
      image: "https://astroman.ge/wp-content/uploads/2022/04/5-1.jpg",
    },
  ];

  // 2. ვირუსული ნივთები[cite: 5]
  const viralItems = [
    {
      id: "levitating-moon-lamp",
      name: "Levitating Moon Lamp",
      price: "259.00₾",
      oldPrice: "279.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/moon-lamp.jpg",
    },
    {
      id: "projector-universe",
      name: "პროექტორი Universe",
      price: "139.40₾",
      oldPrice: "164.00₾",
      isSale: true,
      inStock: true,
      image:
        "https://astroman.ge/wp-content/uploads/2022/04/projector-white.jpg",
    },
    {
      id: "astronaut-projector",
      name: "ასტრონავტის პროექტორი",
      price: "99.00₾",
      oldPrice: "111.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/astronaut.jpg",
    },
    {
      id: "tesla-plasma-ball",
      name: "ტესლას პლაზმური ბურთი",
      price: "68.00₾ – 136.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/plasma.jpg",
    },
    {
      id: "harry-potter-wand",
      name: "ჰარი პოტერის ჯოხი",
      price: "88.00₾",
      oldPrice: "109.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/laser.jpg",
    },
  ];

  // 3. ფასდაკლებები[cite: 6]
  const discountedItems = [
    {
      id: "roblox-backpack",
      name: "ზურგჩანთა რობლოქსი",
      price: "49.00₾",
      oldPrice: "89.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/bag-roblox.jpg",
    },
    {
      id: "levitating-bulb-lamp",
      name: "Levitating Bulb Lamp",
      price: "220.00₾",
      oldPrice: "267.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/lev-bulb.jpg",
    },
    {
      id: "levitating-saturn-lamp",
      name: "Levitating Saturn Lamp",
      price: "249.00₾",
      oldPrice: "269.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/lev-saturn.jpg",
    },
    {
      id: "levitating-globe",
      name: "Levitating Globe",
      price: "249.00₾",
      oldPrice: "269.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/lev-globe.jpg",
    },
    {
      id: "spiderman-backpack",
      name: "სპაიდერმენის სასკოლო ზურგჩანთა",
      price: "78.00₾",
      oldPrice: "99.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/bag-spiderman.jpg",
    },
  ];

  // 4. სანათები[cite: 7]
  const lamps = [
    {
      id: "levitating-bulb-lamp-2",
      name: "Levitating Bulb Lamp",
      price: "220.00₾",
      oldPrice: "267.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/lev-bulb.jpg",
    },
    {
      id: "levitating-saturn-lamp-2",
      name: "Levitating Saturn Lamp",
      price: "249.00₾",
      oldPrice: "269.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/lev-saturn.jpg",
    },
    {
      id: "levitating-globe-2",
      name: "Levitating Globe",
      price: "249.00₾",
      oldPrice: "269.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/lev-globe.jpg",
    },
    {
      id: "medusa-crystal-ball",
      name: "Medusa Crystal Ball",
      price: "74.00₾",
      oldPrice: "97.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/medusa.jpg",
    },
    {
      id: "andromeda-crystal-ball",
      name: "Andromeda Crystal Ball",
      price: "74.00₾",
      oldPrice: "97.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/andromeda.jpg",
    },
  ];

  // 5. მხოლოდ ასტრომანში[cite: 7, 8]
  const onlyInAstroman = [
    {
      id: "neptune-lamp",
      name: "პლანეტა ნეპტუნი 17 სმ",
      price: "78.00₾",
      oldPrice: "113.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/neptune.jpg",
    },
    {
      id: "table-lamp",
      name: "მაგიდის სანათი",
      price: "90.00₾",
      oldPrice: "103.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/table-lamp.jpg",
    },
    {
      id: "photo-frame",
      name: "სურათის ჩარჩო",
      price: "29.00₾",
      oldPrice: "53.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/frame.jpg",
    },
    {
      id: "heart-lamp",
      name: "მაგიდის სანათი გული",
      price: "164.00₾",
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/heart-lamp.jpg",
    },
    {
      id: "wall-lamp",
      name: "კედლის სანათი",
      price: "175.00₾",
      oldPrice: "226.00₾",
      isSale: true,
      inStock: true,
      image: "https://astroman.ge/wp-content/uploads/2022/04/wall-lamp.jpg",
    },
  ];

  // 6. ბლოგის სიახლეები[cite: 8, 9]
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
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 md:px-12 lg:px-16">
      <ShopOverlays />

      {/* 1. HERO სექცია[cite: 4] */}
      <section className="mb-14 flex flex-col gap-6 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-64">
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#0d111d]/85 shadow-xl backdrop-blur-md">
            <ul className="flex flex-col divide-y divide-white/5 text-xs font-semibold">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <li key={cat.slug}>
                    <Link
                      href={`/category/${cat.slug}`}
                      className="group flex items-center gap-3 px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
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

        {/* ორფეროვანი Foreseen ჰერო ბანერი[cite: 4] */}
        <div className="relative flex flex-1 overflow-hidden rounded-3xl border border-white/10 shadow-2xl min-h-[380px]">
          <div className="relative flex h-full w-full flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="bg-gradient-to-br from-orange-600 via-amber-600 to-red-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              <div className="bg-gradient-to-bl from-blue-500 via-cyan-600 to-sky-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
            </div>

            <div className="relative z-10 flex justify-between p-6 md:p-8">
              <span className="rounded-lg bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                {HERO_SLIDES[heroSlide]?.titleLeft}
              </span>
              <span className="rounded-lg bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                {HERO_SLIDES[heroSlide]?.titleRight}
              </span>
            </div>

            <div className="relative z-10 flex items-end justify-between p-6 md:p-8">
              <span className="text-xl md:text-2xl font-black tracking-widest text-white/90 drop-shadow-md">
                {HERO_SLIDES[heroSlide]?.brand}
              </span>

              <div className="flex gap-1.5">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      heroSlide === idx ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ტელესკოპები[cite: 4, 5] */}
      <AstromanCarousel title="ტელესკოპები" items={telescopes} cardBg="white" />

      {/* 3. ვირუსული ნივთები[cite: 5] */}
      <AstromanCarousel
        title="ვირუსული ნივთები"
        items={viralItems}
        cardBg="dark"
      />

      {/* 4. ბრენდების კომპონენტი[cite: 5] */}
      <div className="mb-14">
        <Brands />
      </div>

      {/* 5. ფასდაკლებები[cite: 6] */}
      <AstromanCarousel
        title="ფასდაკლებები"
        items={discountedItems}
        cardBg="white"
      />

      {/* 6. შუა პრომო ბანერი[cite: 6, 7] */}
      <section className="relative mb-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-950 via-[#0d111d] to-indigo-950 p-8 shadow-2xl backdrop-blur-md">
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

      {/* 7. სანათები[cite: 7] */}
      <AstromanCarousel title="სანათები" items={lamps} cardBg="white" />

      {/* 8. მხოლოდ ასტრომანში[cite: 7, 8] */}
      <AstromanCarousel
        title="მხოლოდ ასტრომანში"
        items={onlyInAstroman}
        cardBg="dark"
      />

      {/* 9. ბლოგის სექცია[cite: 8, 9] */}
      <section className="mb-14">
        <div className="mb-2">
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

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 mt-4">
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

      {/* 10. ქვედა უპირატესობების 4-იანი ზოლი[cite: 9] */}
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
