"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Scale, Eye } from "lucide-react";
import type { ProductSummary } from "@/types/product";
import { useShop } from "@/context/ShopContext";
import { formatPrice, formatProductPrice } from "@/lib/products";

interface ProductCardProps {
  product: ProductSummary;
  /** Show compare + quick-view buttons (catalog pages) */
  showExtras?: boolean;
  /** Extra classes, e.g. fixed width inside a carousel */
  className?: string;
  style?: React.CSSProperties;
  /** Load the image eagerly (first cards above the fold) */
  priority?: boolean;
}

const MAX_TILT = 5;

const actionBtn =
  "flex h-8 w-8 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-200 active:scale-90";
const actionIdle =
  "border-white/10 bg-black/60 text-gray-300 hover:scale-105 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black";
const actionOn = "border-yellow-500 bg-yellow-500 text-black shadow-lg shadow-yellow-500/20";

export default function ProductCard({
  product,
  showExtras = false,
  className = "",
  style,
  priority = false,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const {
    favorites,
    toggleFavorite,
    addToCart,
    addToCompare,
    compareList,
    setQuickViewProduct,
  } = useShop();

  const isFav = favorites.includes(product.id);
  const isCompared = compareList.some((p) => p.id === product.id);
  const href = `/product/${product.id}`;

  // tilt is applied straight to the element's style — no React re-render on every mouse move
  const setTilt = (x: number, y: number, fast: boolean) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = fast ? "transform 0.08s ease-out" : "transform 0.4s ease-out";
    el.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTilt(
      ((y - rect.height / 2) / (rect.height / 2)) * -MAX_TILT,
      ((x - rect.width / 2) / (rect.width / 2)) * MAX_TILT,
      true,
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt(0, 0, false)}
      style={style}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320] shadow-md transition-colors will-change-transform hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/5 ${className}`}
    >
      {/* Badges */}
      <div className="pointer-events-none absolute top-3 left-3 z-20 flex flex-col gap-1.5">
        {product.isSale && (
          <span className="rounded-md bg-red-600 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
            SALE
          </span>
        )}
        {!product.inStock && (
          <span className="rounded-md border border-white/10 bg-black/85 px-2 py-0.5 text-[9px] font-bold text-gray-300 backdrop-blur-sm">
            არაა მარაგში
          </span>
        )}
      </div>

      {/* Hover actions */}
      <div className="absolute top-2 right-2 z-30 flex flex-col gap-2 transition-all duration-300 ease-out md:top-3 md:right-3 md:translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100">
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          className={`${actionBtn} ${isFav ? actionOn : actionIdle}`}
          title="ფავორიტები"
          aria-label="ფავორიტებში დამატება"
          aria-pressed={isFav}
        >
          <Heart className={`h-4 w-4 ${isFav ? "fill-black" : ""}`} />
        </button>

        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => addToCart(product)}
          className={`${actionBtn} ${actionIdle} disabled:pointer-events-none disabled:opacity-30`}
          title="კალათაში დამატება"
          aria-label="კალათაში დამატება"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>

        {showExtras && (
          <div className="hidden flex-col gap-2 md:flex">
            <button
              type="button"
              onClick={() => addToCompare(product)}
              className={`${actionBtn} ${isCompared ? actionOn : actionIdle}`}
              title="შედარება"
              aria-label="შედარებაში დამატება"
              aria-pressed={isCompared}
            >
              <Scale className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setQuickViewProduct(product)}
              className={`${actionBtn} ${actionIdle}`}
              title="სწრაფი გადახედვა"
              aria-label="სწრაფი გადახედვა"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Image */}
      <Link
        href={href}
        className="relative block aspect-square w-full overflow-hidden border-b border-white/10 bg-[#070a12]"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-gray-400">
            {product.name}
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex grow flex-col bg-[#0e1320] p-3 md:p-4">
        <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-yellow-500/80">
          {product.categoryName}
        </div>

        <Link
          href={href}
          className="line-clamp-2 min-h-9 text-xs font-semibold text-white transition hover:text-yellow-400"
        >
          {product.name}
        </Link>

        <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-3">
          <div>
            {product.oldPrice && (
              <div className="text-[11px] text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </div>
            )}
            <div className="text-sm font-bold text-white md:text-base">
              {formatProductPrice(product)}
            </div>
          </div>

          <span
            className={`hidden text-[10px] font-semibold sm:inline ${
              product.inStock ? "text-emerald-400" : "text-gray-400"
            }`}
          >
            {product.inStock ? "მარაგშია" : "ამოიწურა"}
          </span>
        </div>
      </div>
    </div>
  );
}
