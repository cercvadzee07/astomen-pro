"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductSummary } from "@/types/product";
import ProductCard from "./ProductCard";

const VISIBLE = 5;
const GAP_REM = 1;
// width of one card when VISIBLE cards (and VISIBLE-1 gaps) fill the row
const CARD_WIDTH = `calc((100% - ${VISIBLE - 1} * ${GAP_REM}rem) / ${VISIBLE})`;

const arrowBtn =
  "absolute top-[58%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#070a12]/95 text-white opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none group-hover/section:pointer-events-auto group-hover/section:opacity-100 hover:scale-105 hover:bg-yellow-500 hover:text-black active:scale-95 disabled:pointer-events-none disabled:opacity-0";

export default function ProductCarousel({
  title,
  items,
}: {
  title: string;
  items: ProductSummary[];
}) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const maxIndex = Math.max(0, items.length - VISIBLE);

  return (
    <section className="group/section relative mb-12 w-full">
      <h2 className="mb-4 text-base font-black uppercase tracking-wider text-white">
        {title}
      </h2>

      <button
        type="button"
        disabled={index === 0}
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        className={`${arrowBtn} -left-4`}
        aria-label="წინა"
      >
        <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
      </button>
      <button
        type="button"
        disabled={index >= maxIndex}
        onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
        className={`${arrowBtn} -right-4`}
        aria-label="შემდეგი"
      >
        <ChevronRight className="h-5 w-5 stroke-[2.5]" />
      </button>

      <div className="w-full overflow-hidden">
        <div
          className="flex gap-4 py-1 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${index} * (${CARD_WIDTH} + ${GAP_REM}rem)))`,
          }}
        >
          {items.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              className="shrink-0"
              style={{ width: CARD_WIDTH, minWidth: CARD_WIDTH }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
