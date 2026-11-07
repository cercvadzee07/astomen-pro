"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  RotateCcw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const MAX_ZOOM = 3;
const ZOOM_STEP = 0.3;

const navBtn =
  "flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:scale-110 hover:bg-yellow-500 hover:text-black active:scale-95";
const toolBtn =
  "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 backdrop-blur-md transition hover:bg-yellow-500 hover:text-black";

export default function ProductGallery({
  images,
  name,
  badges,
}: {
  images: string[];
  name: string;
  /** Rendered over the main photo (SALE / stock badges) */
  badges?: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const count = images.length;

  const goTo = useCallback((i: number) => {
    setActive(i);
    setZoom(1);
  }, []);
  const prev = useCallback(() => goTo(active === 0 ? count - 1 : active - 1), [active, count, goTo]);
  const next = useCallback(() => goTo((active + 1) % count), [active, count, goTo]);

  const close = () => {
    setIsOpen(false);
    setZoom(1);
  };

  // keep the active thumbnail centred
  useEffect(() => {
    const container = thumbsRef.current;
    const el = container?.children[active] as HTMLElement | undefined;
    if (!container || !el) return;
    container.scrollTo({
      left: el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  // keyboard control inside the lightbox
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next]);

  const current = images[active];

  return (
    <div className="flex flex-col gap-4">
      {/* Main photo — click opens the lightbox */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative flex h-[480px] w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-4 shadow-2xl sm:h-[540px]"
        aria-label="ფოტოს გადიდება"
      >
        {badges && (
          <div className="pointer-events-none absolute top-4 left-4 z-20 flex items-center gap-2">
            {badges}
          </div>
        )}
        {current && (
          <Image
            src={current}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="rounded-2xl object-contain p-4 transition-transform duration-300 group-hover:scale-[1.01]"
          />
        )}
        <span className="absolute bottom-4 left-4 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-md transition group-hover:bg-yellow-500 group-hover:text-black">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="relative w-full">
          <button type="button" onClick={prev} className={`${navBtn} absolute left-2 top-1/2 z-30 h-8 w-8 -translate-y-1/2`} aria-label="წინა ფოტო">
            <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
          </button>

          <div ref={thumbsRef} className="scrollbar-none flex w-full gap-3 overflow-x-auto scroll-smooth px-1 py-1">
            {images.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => goTo(idx)}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md sm:h-28 sm:w-28"
                aria-label={`ფოტო ${idx + 1}`}
                aria-current={active === idx}
              >
                <Image src={img} alt="" fill sizes="112px" className="object-cover" />
                <span
                  className={`absolute inset-0 transition-opacity duration-200 ${
                    active === idx ? "bg-black/40 ring-2 ring-inset ring-black/30" : "hover:bg-black/10"
                  }`}
                />
              </button>
            ))}
          </div>

          <button type="button" onClick={next} className={`${navBtn} absolute right-2 top-1/2 z-30 h-8 w-8 -translate-y-1/2`} aria-label="შემდეგი ფოტო">
            <ChevronRight className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* Fullscreen lightbox with zoom */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black/95 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={name}
        >
          <div onClick={(e) => e.stopPropagation()} className="flex w-full max-w-6xl items-center justify-between pt-2 pb-4 text-white">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <span className="text-yellow-400">{active + 1}</span>
              <span>/</span>
              <span>{count}</span>
              <span className="ml-2 hidden text-gray-500 sm:inline">| {name}</span>
            </div>

            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(1)))} className={toolBtn} title="გადიდება">
                <ZoomIn className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => setZoom((z) => Math.max(1, +(z - ZOOM_STEP).toFixed(1)))} className={toolBtn} title="დაპატარავება">
                <ZoomOut className="h-4 w-4" />
              </button>
              {zoom > 1 && (
                <button type="button" onClick={() => setZoom(1)} className={toolBtn} title="ზუმის რესეტი">
                  <RotateCcw className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                onClick={close}
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-red-600"
                title="დახურვა (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div onClick={(e) => e.stopPropagation()} className="relative my-auto flex w-full max-w-6xl flex-1 items-center justify-center overflow-hidden">
            {count > 1 && (
              <button type="button" onClick={prev} className={`${navBtn} absolute left-2 z-40 h-12 w-12 border border-white/10 sm:left-4`} aria-label="წინა ფოტო">
                <ChevronLeft className="h-7 w-7 stroke-[2.5]" />
              </button>
            )}

            <div className="relative flex max-h-[75vh] max-w-full items-center justify-center overflow-auto p-2">
              {/* plain <img>: full-resolution original, scaled with CSS for zoom */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current}
                alt={name}
                onClick={() => setZoom((z) => (z > 1 ? 1 : 2))}
                style={{ transform: `scale(${zoom})`, cursor: zoom > 1 ? "zoom-out" : "zoom-in" }}
                className="max-h-[72vh] max-w-full select-none rounded-2xl object-contain transition-transform duration-200 ease-out"
              />
            </div>

            {count > 1 && (
              <button type="button" onClick={next} className={`${navBtn} absolute right-2 z-40 h-12 w-12 border border-white/10 sm:right-4`} aria-label="შემდეგი ფოტო">
                <ChevronRight className="h-7 w-7 stroke-[2.5]" />
              </button>
            )}
          </div>

          {count > 1 && (
            <div onClick={(e) => e.stopPropagation()} className="scrollbar-none flex max-w-2xl gap-2.5 overflow-x-auto px-2 py-3">
              {images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                    active === idx ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-500/20" : "border-transparent opacity-40 hover:opacity-90"
                  }`}
                  aria-label={`ფოტო ${idx + 1}`}
                >
                  <Image src={img} alt="" fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
