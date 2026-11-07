"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import CategoryLink from "@/components/CategoryLink";

export interface HeroSlide {
  leftBadge: string;
  rightBadge: string;
  leftImg: string;
  rightImg: string;
  brand: string;
}

const SLIDE_INTERVAL_MS = 7000;

function HeroImage({ src, alt }: { src: string; alt: string }) {
  if (!src) return null;
  return (
    <div className="relative h-48 w-full md:h-56">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 45vw, 400px"
        className="scale-125 object-contain mix-blend-multiply drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-135 md:scale-135"
      />
    </div>
  );
}

export default function HomeHero({ slides }: { slides: HeroSlide[] }) {
  const [current, setCurrent] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (count < 2) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % count), SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [count]);

  const slide = slides[current];

  return (
    <section className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-stretch">
      {/* Category menu */}
      <aside className="w-full shrink-0 lg:w-60">
        <nav className="h-full overflow-hidden rounded-2xl border border-white/5 bg-[#0d111d]/90 shadow-xl backdrop-blur-md">
          <ul className="flex flex-col divide-y divide-white/5 text-xs font-semibold">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <li key={cat.slug}>
                  <CategoryLink
                    category={cat}
                    className="group flex items-center gap-3 px-4 py-2.5 text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    <span className="transition group-hover:scale-110">
                      <Icon className={`h-4 w-4 ${cat.color}`} />
                    </span>
                    <span className="truncate transition group-hover:translate-x-1">
                      {cat.name}
                    </span>
                  </CategoryLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Slider */}
      {slide && (
        <div className="group/hero relative flex min-h-[350px] flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div className="absolute inset-0 flex">
            <div className="relative h-full w-[52%] overflow-hidden bg-gradient-to-br from-orange-500 via-amber-600 to-red-600 [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,#fff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            </div>
            <div className="relative -ml-[8%] h-full flex-1 overflow-hidden bg-gradient-to-bl from-cyan-400 via-sky-600 to-blue-700">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,#fff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            </div>
          </div>

          <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 md:p-6">
            <div className="grid grid-cols-2 gap-4">
              {[slide.leftBadge, slide.rightBadge].map((badge, i) => (
                <div key={i} className="flex justify-center">
                  <span className="rounded-lg bg-black/60 px-4 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-auto grid w-full grid-cols-2 items-center justify-items-center gap-6 px-4">
              <HeroImage src={slide.leftImg} alt={slide.leftBadge} />
              <HeroImage src={slide.rightImg} alt={slide.rightBadge} />
            </div>

            <div className="flex items-end justify-between pt-1">
              <span className="text-lg font-black tracking-widest text-white drop-shadow-md md:text-xl">
                {slide.brand}
              </span>
              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === idx ? "w-7 bg-white" : "w-2.5 bg-white/40"
                    }`}
                    aria-label={`სლაიდი ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrent((i) => (i === 0 ? count - 1 : i - 1))}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black opacity-0 shadow-lg backdrop-blur-md transition hover:bg-white active:scale-95 group-hover/hero:opacity-100"
              aria-label="წინა სლაიდი"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setCurrent((i) => (i + 1) % count)}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black opacity-0 shadow-lg backdrop-blur-md transition hover:bg-white active:scale-95 group-hover/hero:opacity-100"
              aria-label="შემდეგი სლაიდი"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
