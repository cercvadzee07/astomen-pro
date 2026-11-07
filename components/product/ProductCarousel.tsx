"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductSummary } from "@/types/product";
import ProductCard from "./ProductCard";

// cards per row: 2 on phones, 3 on tablets, 4 on small laptops, 5 on desktop (gap = 1rem)
const CARD_WIDTH =
  "w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)] xl:w-[calc((100%-4rem)/5)]";

const arrowBtn =
  "absolute top-[58%] z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#070a12]/95 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black active:scale-95 disabled:pointer-events-none disabled:opacity-0 md:flex md:opacity-0 md:group-hover/section:opacity-100";

export default function ProductCarousel({
  title,
  items,
  href,
}: {
  title: string;
  items: ProductSummary[];
  /** Optional "see all" link */
  href?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows, items.length]);

  // scroll by one "page" of visible cards
  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <section className="group/section relative mb-12 w-full">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-base font-black uppercase tracking-wider text-white">{title}</h2>
        {href && (
          <Link href={href} className="shrink-0 text-xs font-bold text-yellow-400 transition hover:text-yellow-300">
            ყველა →
          </Link>
        )}
      </div>

      <button type="button" disabled={!canPrev} onClick={() => scrollByPage(-1)} className={`${arrowBtn} -left-4`} aria-label="წინა">
        <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
      </button>
      <button type="button" disabled={!canNext} onClick={() => scrollByPage(1)} className={`${arrowBtn} -right-4`} aria-label="შემდეგი">
        <ChevronRight className="h-5 w-5 stroke-[2.5]" />
      </button>

      {/* native horizontal scroll: swipe on phones, arrows on desktop */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-1"
      >
        {items.map((prod) => (
          <ProductCard key={prod.id} product={prod} className={`shrink-0 snap-start ${CARD_WIDTH}`} />
        ))}
      </div>
    </section>
  );
}
