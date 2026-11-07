"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Grid2x2,
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  Search,
  RotateCcw,
  Filter,
} from "lucide-react";
import type { ProductSummary } from "@/types/product";
import { CATEGORIES } from "@/data/categories";
import CategoryLink from "@/components/CategoryLink";
import ProductCard from "@/components/product/ProductCard";
import { formatPrice } from "@/lib/products";
import { SEARCH_EVENT } from "@/lib/events";

type SortKey = "default" | "price-asc" | "price-desc";

const PAGE_SIZES = [12, 24, 48, 100];
const TOP_DISCOUNTS = 5;

export default function CatalogView({
  products,
  activeCategory = "all",
  title = "მაღაზია",
}: {
  /** Products to list (already limited to the category on category pages) */
  products: ProductSummary[];
  /** Current category slug, or "all" on the shop page */
  activeCategory?: string;
  title?: string;
}) {
  const absoluteMaxPrice = useMemo(
    () => Math.ceil(Math.max(0, ...products.map((p) => p.priceMax ?? p.price))),
    [products],
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(absoluteMaxPrice);
  const [sortBy, setSortBy] = useState<SortKey>("default");
  const [gridCols, setGridCols] = useState<3 | 4>(3);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlySale, setOnlySale] = useState(false);

  // header search sends people here as /magazia?q=...
  // (read from window instead of useSearchParams so the page stays static)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setSearchQuery(q);

    const onSearch = (e: Event) => {
      setSearchQuery((e as CustomEvent<string>).detail);
      setCurrentPage(1);
    };
    window.addEventListener(SEARCH_EVENT, onSearch);
    return () => window.removeEventListener(SEARCH_EVENT, onSearch);
  }, []);

  const hasActiveFilters =
    searchQuery !== "" ||
    maxPrice < absoluteMaxPrice ||
    onlyInStock ||
    onlySale ||
    sortBy !== "default";

  const handleResetFilters = () => {
    setSearchQuery("");
    setMaxPrice(absoluteMaxPrice);
    setSortBy("default");
    setOnlyInStock(false);
    setOnlySale(false);
    setCurrentPage(1);
  };

  const topDiscountProducts = useMemo(
    () =>
      products
        .filter((p) => p.oldPrice && p.oldPrice > p.price)
        .sort((a, b) => b.oldPrice! - b.price - (a.oldPrice! - a.price))
        .slice(0, TOP_DISCOUNTS),
    [products],
  );

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const list = products.filter(
      (item) =>
        item.price <= maxPrice &&
        (!query || item.name.toLowerCase().includes(query)) &&
        (!onlyInStock || item.inStock) &&
        (!onlySale || item.isSale),
    );
    if (sortBy === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, maxPrice, sortBy, searchQuery, onlyInStock, onlySale]);

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
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* საიდბარი */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="flex flex-col gap-6">
            {/* კატეგორიების მენიუ - Cosmic / NEONDEV Style */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070a12]/80 p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              {/* ფონური რბილი ნათება სექციის შიგნით */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

              <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-4 px-2 relative z-10">
                <span className="flex items-center gap-2.5 text-[13px] font-bold tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] uppercase">
                  <Filter className="h-4 w-4 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                  კატეგორიები
                </span>
                <Link
                  href="/magazia"
                  className={`text-[11px] font-bold uppercase tracking-wider transition-all px-2.5 py-1 rounded-lg ${
                    activeCategory === "all"
                      ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 shadow-[0_0_10px_rgba(250,204,21,0.1)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  ყველა
                </Link>
              </div>

              <div className="flex flex-col relative z-10 pt-1">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.slug;

                  const content = (
                    <>
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/40 border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 ${isActive ? "shadow-[0_0_10px_rgba(255,255,255,0.05)]" : ""}`}
                      >
                        <Icon
                          className={`h-4 w-4 ${cat.color} drop-shadow-[0_0_6px_currentColor]`}
                        />
                      </div>
                      <span
                        className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-white font-bold" : "text-gray-300 group-hover:text-white"}`}
                      >
                        {cat.name}
                      </span>
                    </>
                  );

                  const baseClass =
                    "group flex items-center gap-3.5 px-3 py-2.5 transition-all duration-300 text-left rounded-xl my-0.5 relative overflow-hidden";
                  const activeClass =
                    "bg-gradient-to-r from-yellow-500/15 to-transparent border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.1)]";
                  const inactiveClass =
                    "border border-transparent hover:bg-white/[0.04] hover:border-white/10";

                  return (
                    <CategoryLink
                      key={cat.slug}
                      category={cat}
                      className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 h-full w-[3px] bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
                      )}
                      {content}
                    </CategoryLink>
                  );
                })}
              </div>
            </div>

            {/* პარამეტრები და ფილტრები */}
            <div className="rounded-2xl border border-white/5 bg-[#0a0d14] p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  პარამეტრები
                </h3>
                {hasActiveFilters && (
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
              <div className="rounded-2xl border border-white/5 bg-[#0a0d14] p-5 shadow-xl">
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
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white/5">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-xs font-semibold text-gray-200 group-hover:text-yellow-400">
                          {item.name}
                        </h4>
                        <div className="mt-1 flex items-center gap-2 text-[11px]">
                          <span className="text-gray-500 line-through">
                            {formatPrice(item.oldPrice!)}
                          </span>
                          <span className="font-bold text-white">
                            {formatPrice(item.price)}
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
                  {title}
                </span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                ნაჩვენებია{" "}
                <span className="font-bold text-white">
                  {filteredProducts.length}
                </span>{" "}
                პროდუქტი (სულ: {products.length})
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-gray-400 border-r border-white/10 pr-3">
                <span>ნახვა:</span>
                {PAGE_SIZES.map((num) => (
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
                  setSortBy(e.target.value as SortKey);
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
            {currentProducts.map((prod, i) => (
              <ProductCard key={prod.id} product={prod} showExtras priority={i < 3} />
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
