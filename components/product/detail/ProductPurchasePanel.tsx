"use client";

import { useState } from "react";
import { Check, Heart, Share2, ShoppingBag } from "lucide-react";
import type { ProductSummary } from "@/types/product";
import { useShop } from "@/context/ShopContext";
import { formatPrice, formatProductPrice } from "@/lib/products";

export default function ProductPurchasePanel({
  product,
  brandName,
}: {
  product: ProductSummary;
  brandName?: string;
}) {
  const { favorites, toggleFavorite, addToCart, setIsCartOpen, showToast } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);
  const isFav = favorites.includes(product.id);

  const discountPct =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: product.name, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("ბმულის კოპირება ვერ მოხერხდა", "error");
    }
  };

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0d111d]/85 p-6 shadow-2xl backdrop-blur-xl md:p-8">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-yellow-500">
          <span>{product.categoryName}</span>
          {brandName && <span className="text-gray-400">{brandName}</span>}
        </div>

        <h1 className="text-2xl font-black leading-snug tracking-tight text-white sm:text-3xl">
          {product.name}
        </h1>

        <div className="mt-5 flex flex-wrap items-baseline gap-3">
          <span className="text-3xl font-black tracking-tight text-white">
            {formatProductPrice(product)}
          </span>
          {product.oldPrice && (
            <span className="text-base text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
          {discountPct > 0 && (
            <span className="rounded-md border border-red-500/30 bg-red-600/20 px-2 py-0.5 text-xs font-black text-red-400">
              -{discountPct}%
            </span>
          )}
        </div>

        {product.shortDescription && (
          <p className="mt-4 text-xs leading-relaxed text-gray-300 sm:text-sm">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-white/5 bg-white/5 p-3">
            <span className="block text-[10px] font-bold uppercase text-gray-400">კატეგორია</span>
            <span className="font-extrabold text-white">{product.categoryName}</span>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/5 p-3">
            <span className="block text-[10px] font-bold uppercase text-gray-400">სტატუსი</span>
            <span className={`font-extrabold ${product.inStock ? "text-emerald-400" : "text-red-400"}`}>
              {product.inStock ? "მარაგშია" : "არაა მარაგში"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#070a12] px-2 text-white">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 text-lg font-bold text-gray-400 transition hover:text-white"
              aria-label="რაოდენობის შემცირება"
            >
              -
            </button>
            <span className="w-8 text-center text-sm font-black" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 text-lg font-bold text-gray-400 transition hover:text-white"
              aria-label="რაოდენობის გაზრდა"
            >
              +
            </button>
          </div>

          <button
            type="button"
            disabled={!product.inStock}
            onClick={() => addToCart(product, quantity)}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-yellow-500/20 transition hover:scale-[1.02] hover:bg-yellow-400 active:scale-95 disabled:pointer-events-none disabled:opacity-40"
          >
            <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
            კალათაში დამატება
          </button>

          <button
            type="button"
            disabled={!product.inStock}
            onClick={handleBuyNow}
            className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/20 active:scale-95 disabled:opacity-40"
          >
            შეძენა
          </button>
        </div>

        <div className="flex items-center justify-between pt-2 text-xs">
          <button
            type="button"
            onClick={() => toggleFavorite(product.id)}
            className="flex items-center gap-2 font-bold text-gray-300 transition hover:text-yellow-400"
            aria-pressed={isFav}
          >
            <Heart className={`h-4 w-4 ${isFav ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
            {isFav ? "ფავორიტებშია" : "ფავორიტებში დამატება"}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 font-bold text-gray-300 transition hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">ლინკი დაკოპირდა!</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" />
                <span>გაზიარება</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
