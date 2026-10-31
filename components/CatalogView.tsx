"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Grid2x2,
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  ShoppingBag,
  Search,
  RotateCcw,
  Heart,
  Scale,
  Eye,
  Filter,
} from "lucide-react";
import { ALL_PRODUCTS, Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import ShopOverlays from "@/components/ShopOverlays";

function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320] p-4 animate-pulse">
      <div className="aspect-square w-full rounded-xl bg-white/5 mb-4" />
      <div className="h-3 w-16 bg-white/5 rounded mb-2" />
      <div className="h-4 w-full bg-white/5 rounded mb-4" />
      <div className="mt-auto flex justify-between items-center pt-3 border-t border-white/5">
        <div className="h-5 w-16 bg-white/5 rounded" />
        <div className="h-3 w-12 bg-white/5 rounded" />
      </div>
    </div>
  );
}

function TiltProductCard({ prod }: { prod: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const {
    favorites,
    toggleFavorite,
    addToCart,
    addToCompare,
    compareList,
    setQuickViewProduct,
  } = useShop();

  const isFavorite = favorites?.includes(prod.id) ?? false;
  const isCompared = compareList?.some((p) => p.id === prod.id) ?? false;

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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition:
          rotate.x === 0
            ? "transform 0.4s ease-out"
            : "transform 0.08s ease-out",
      }}
      className="product-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320] shadow-md transition-colors hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/5"
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
          onClick={() => toggleFavorite(prod.id)}
          className={`flex h-8 w-8 items-center justify-center rounded-xl border backdrop-blur-md transition active:scale-90 ${
            isFavorite
              ? "border-yellow-500 bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
              : "border-white/10 bg-black/60 text-gray-300 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black"
          }`}
          title="ფავორიტები"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-black" : ""}`} />
        </button>

        <button
          type="button"
          disabled={!prod.inStock}
          onClick={() => addToCart(prod)}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-gray-300 backdrop-blur-md transition hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black active:scale-90 disabled:pointer-events-none disabled:opacity-30"
          title="კალათაში დამატება"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => addToCompare(prod)}
          className={`flex h-8 w-8 items-center justify-center rounded-xl border backdrop-blur-md transition active:scale-90 ${
            isCompared
              ? "border-yellow-500 bg-yellow-500 text-black"
              : "border-white/10 bg-black/60 text-gray-300 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black"
          }`}
          title="შედარება"
        >
          <Scale className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setQuickViewProduct(prod)}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-gray-300 backdrop-blur-md transition hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black active:scale-90"
          title="სწრაფი გადახედვა"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <Link
        href={`/product/${prod.id}`}
        className="relative block aspect-square w-full overflow-hidden bg-[#070a12] border-b border-white/5 p-3 flex items-center justify-center"
      >
        <img
          src={prod.image}
          alt={prod.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="flex grow flex-col p-4">
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

export default function CatalogView({
  categorySlug,
  categoryTitle = "მაღაზია",
}: {
  categorySlug?: string;
  categoryTitle?: string;
}) {
  // მაქსიმალური ფასის დინამიური პოვნა ბაზიდან
  const absoluteMaxPrice = useMemo(() => {
    return Math.max(...ALL_PRODUCTS.map((p) => p.price), 5869);
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>(
    categorySlug || "all",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(absoluteMaxPrice);
  const [sortBy, setSortBy] = useState("default");
  const [gridCols, setGridCols] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlySale, setOnlySale] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // სინქრონიზაცია როცა პროპსიდან კატეგორია იცვლება
  useEffect(() => {
    if (categorySlug) {
      setActiveCategory(categorySlug);
    }
  }, [categorySlug]);

  // კატეგორიების დინამიური სია თავისი მრიცხველებით
  const categoriesList = useMemo(() => {
    const counts: Record<string, { name: string; count: number }> = {};
    ALL_PRODUCTS.forEach((p) => {
      if (!counts[p.categorySlug]) {
        counts[p.categorySlug] = { name: p.categoryName, count: 0 };
      }
      counts[p.categorySlug].count += 1;
    });

    return [
      { slug: "all", name: "ყველა პროდუქტი", count: ALL_PRODUCTS.length },
      ...Object.entries(counts).map(([slug, data]) => ({
        slug,
        name: data.name,
        count: data.count,
      })),
    ];
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [
    activeCategory,
    itemsPerPage,
    maxPrice,
    sortBy,
    searchQuery,
    onlyInStock,
    onlySale,
    currentPage,
  ]);

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setMaxPrice(absoluteMaxPrice);
    setSortBy("default");
    setOnlyInStock(false);
    setOnlySale(false);
    setCurrentPage(1);
  };

  const topDiscountProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(
      (item) => item.isSale && item.oldPrice && item.oldPrice > item.price,
    )
      .sort(
        (a, b) => (b.oldPrice || 0) - b.price - ((a.oldPrice || 0) - a.price),
      )
      .slice(0, 5);
  }, []);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.categorySlug === activeCategory;
      const matchPrice = item.price <= maxPrice;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        item.categoryName
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim());
      const matchStock = !onlyInStock || item.inStock;
      const matchSale = !onlySale || item.isSale;
      return (
        matchCategory && matchPrice && matchSearch && matchStock && matchSale
      );
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });
  }, [activeCategory, maxPrice, sortBy, searchQuery, onlyInStock, onlySale]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:px-12 lg:px-16">
      <ShopOverlays />

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* საიდბარი */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="flex flex-col gap-6">
            {/* კატეგორიების მენიუ საიდბარში */}
            <div className="rounded-2xl border border-white/5 bg-[#0d111d]/80 p-5 shadow-xl backdrop-blur-md">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Filter className="h-3.5 w-3.5 text-yellow-500" />
                კატეგორიები
              </h3>
              <div className="flex flex-col gap-1">
                {categoriesList.map((cat) => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.slug);
                      setCurrentPage(1);
                    }}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition ${
                      activeCategory === cat.slug
                        ? "bg-yellow-500 text-black shadow-md shadow-yellow-500/20 font-bold"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                        activeCategory === cat.slug
                          ? "bg-black/20 text-black"
                          : "bg-white/5 text-gray-500"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ფილტრები */}
            <div className="rounded-2xl border border-white/5 bg-[#0d111d]/80 p-5 shadow-xl backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  პარამეტრები
                </h3>
                {(searchQuery ||
                  maxPrice < absoluteMaxPrice ||
                  onlyInStock ||
                  onlySale ||
                  sortBy !== "default" ||
                  activeCategory !== "all") && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 text-[11px] font-semibold text-rose-400 hover:text-rose-300"
                  >
                    <RotateCcw className="h-3 w-3" />
                    განულება
                  </button>
                )}
              </div>

              <div className="relative mb-5">
                <input
                  type="text"
                  placeholder="ძიება კატალოგში..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-[#141824] py-2.5 pr-4 pl-10 text-xs text-white placeholder-gray-400 focus:border-yellow-500/50 focus:outline-none"
                />
                <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
              </div>

              <div className="mb-5 flex flex-col gap-2.5 border-t border-white/5 pt-4">
                <label className="flex cursor-pointer items-center justify-between text-xs text-gray-300 hover:text-white">
                  <span>მხოლოდ მარაგში</span>
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => {
                      setOnlyInStock(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 rounded border-white/10 bg-[#141824] accent-yellow-500"
                  />
                </label>
                <label className="flex cursor-pointer items-center justify-between text-xs text-gray-300 hover:text-white">
                  <span>მხოლოდ ფასდაკლებები</span>
                  <input
                    type="checkbox"
                    checked={onlySale}
                    onChange={(e) => {
                      setOnlySale(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 rounded border-white/10 bg-[#141824] accent-yellow-500"
                  />
                </label>
              </div>

              <div className="border-t border-white/5 pt-4">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="text-gray-400">მაქს. ფასი:</span>
                  <span className="font-bold text-yellow-400">{maxPrice}₾</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max={absoluteMaxPrice}
                  step="10"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full cursor-pointer accent-yellow-500"
                />
              </div>
            </div>

            {/* ტოპ ფასდაკლებები */}
            {topDiscountProducts.length > 0 && (
              <div className="rounded-2xl border border-white/5 bg-[#0d111d]/80 p-5 shadow-xl backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    ტოპ ფასდაკლებები
                  </h3>
                  <span className="rounded-md bg-red-600/20 px-2 py-0.5 text-[10px] font-bold text-red-400">
                    SALE
                  </span>
                </div>
                <div className="flex flex-col divide-y divide-white/5">
                  {topDiscountProducts.map((item) => (
                    <Link
                      key={item.id}
                      href={`/product/${item.id}`}
                      className="group flex items-center gap-3 py-3 hover:bg-white/[0.02]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-xl object-contain bg-white/5 p-1"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-xs font-semibold text-gray-200 group-hover:text-yellow-400">
                          {item.name}
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[11px]">
                          <span className="text-gray-500 line-through">
                            {item.oldPrice?.toFixed(2)}₾
                          </span>
                          <span className="font-bold text-white">
                            {item.price.toFixed(2)}₾
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* მთავარი კატალოგი */}
        <main className="min-w-0 flex-1">
          <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0d111d]/70 p-4 shadow-xl backdrop-blur-md md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Link href="/" className="hover:text-white">
                  მთავარი
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="font-bold text-white">
                  {categoriesList.find((c) => c.slug === activeCategory)
                    ?.name || categoryTitle}
                </span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                ნაჩვენებია{" "}
                <span className="font-bold text-white">
                  {filteredProducts.length}
                </span>{" "}
                პროდუქტი (სულ: {ALL_PRODUCTS.length})
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-gray-400 border-r border-white/10 pr-3">
                <span>ნახვა:</span>
                {[12, 24, 48, 100].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setItemsPerPage(num);
                      setCurrentPage(1);
                    }}
                    className={`rounded-lg px-2 py-1 font-bold transition ${
                      itemsPerPage === num
                        ? "bg-yellow-500 text-black"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#141824] p-1">
                <button
                  onClick={() => setGridCols(3)}
                  className={`rounded-lg p-1.5 ${
                    gridCols === 3
                      ? "bg-white/10 text-yellow-400"
                      : "text-gray-400"
                  }`}
                  title="3 სვეტი"
                >
                  <Grid2x2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`rounded-lg p-1.5 ${
                    gridCols === 4
                      ? "bg-white/10 text-yellow-400"
                      : "text-gray-400"
                  }`}
                  title="4 სვეტი"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="cursor-pointer rounded-xl border border-white/10 bg-[#141824] px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="default">ნაგულისხმევი</option>
                <option value="price-asc">ფასით: დაბლიდან მაღლა</option>
                <option value="price-desc">ფასით: მაღლიდან დაბლა</option>
              </select>
            </div>
          </div>

          {/* პროდუქტების სია */}
          <div
            className={`grid gap-5 sm:grid-cols-2 ${
              gridCols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {isLoading
              ? Array.from({ length: itemsPerPage }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : currentProducts.map((prod) => (
                  <TiltProductCard key={prod.id} prod={prod} />
                ))}
          </div>

          {/* პაგინაცია */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141824] disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold ${
                    currentPage === p
                      ? "bg-yellow-500 text-black"
                      : "border border-white/10 bg-[#141824]"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141824] disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
