"use client";

import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import type { ProductSummary } from "@/types/product";
import { useShop } from "@/context/ShopContext";
import ProductCard from "@/components/product/ProductCard";

export default function FavoritesView({ products }: { products: ProductSummary[] }) {
  const { favorites, toggleFavorite, hydrated } = useShop();
  const saved = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:px-12 lg:px-16">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-3 text-2xl font-black text-white">
            <Heart className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ფავორიტები
          </h1>
          {hydrated && saved.length > 0 && (
            <p className="mt-1 text-xs text-gray-400">{saved.length} შენახული პროდუქტი</p>
          )}
        </div>
        {saved.length > 0 && (
          <button
            type="button"
            onClick={() => saved.forEach((p) => toggleFavorite(p.id))}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300"
          >
            <Trash2 className="h-3.5 w-3.5" />
            სიის გასუფთავება
          </button>
        )}
      </div>

      {!hydrated ? null : saved.length === 0 ? (
        <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-[#0d111d]/70 px-6 py-16 text-center">
          <Heart className="mb-4 h-12 w-12 text-gray-600" />
          <p className="text-sm font-semibold text-gray-300">ფავორიტების სია ცარიელია</p>
          <p className="mt-1 text-xs text-gray-400">
            დააჭირე ♥ ღილაკს ნებისმიერ პროდუქტზე, რომ აქ შეინახო.
          </p>
          <Link
            href="/magazia"
            className="mt-6 rounded-xl bg-yellow-500 px-6 py-3 text-xs font-bold text-black transition hover:bg-yellow-400"
          >
            მაღაზიაში გადასვლა
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {saved.map((p) => (
            <ProductCard key={p.id} product={p} showExtras />
          ))}
        </div>
      )}
    </div>
  );
}
