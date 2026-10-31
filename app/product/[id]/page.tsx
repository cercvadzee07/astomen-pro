"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Share2,
  Check,
  AlertTriangle,
  Truck,
  CreditCard,
  Headphones,
  Rocket,
  Star,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import { ALL_PRODUCTS, Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import ShopOverlays from "@/components/ShopOverlays";

function TiltProductCard({ prod }: { prod: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const { favorites, toggleFavorite, addToCart } = useShop();

  const isFav = favorites?.includes(prod.id) ?? false;

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

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "calc((100% - 4 * 1rem) / 5)",
        minWidth: "calc((100% - 4 * 1rem) / 5)",
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition:
          rotate.x === 0
            ? "transform 0.4s ease-out"
            : "transform 0.08s ease-out",
      }}
      className="group relative flex shrink-0 flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320] shadow-md transition-colors hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/5 will-change-transform"
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
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(prod.id);
          }}
          className={`flex h-8 w-8 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-200 active:scale-90 ${
            isFav
              ? "border-yellow-500 bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
              : "border-white/10 bg-black/60 text-gray-300 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black hover:scale-105"
          }`}
          title="ფავორიტები"
        >
          <Heart
            className={`h-4 w-4 transition-transform duration-200 ${isFav ? "fill-black" : ""}`}
          />
        </button>

        <button
          type="button"
          disabled={!prod.inStock}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(prod);
          }}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-gray-300 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-yellow-500/40 hover:bg-yellow-500 hover:text-black active:scale-90 disabled:pointer-events-none disabled:opacity-30"
          title="კალათაში დამატება"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>

      <Link
        href={`/product/${prod.id}`}
        className="relative block aspect-square w-full overflow-hidden bg-[#070a12] border-b border-white/10"
      >
        {prod.image ? (
          <img
            src={prod.image}
            alt={prod.name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
            {prod.name}
          </div>
        )}
      </Link>

      <div className="flex grow flex-col p-4 bg-[#0e1320]">
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

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const { favorites, toggleFavorite, addToCart } = useShop();

  const product = useMemo(() => {
    return ALL_PRODUCTS.find((p) => p.id === productId) || ALL_PRODUCTS[0];
  }, [productId]);

  const relatedProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(
      (p) => p.categorySlug === product.categorySlug && p.id !== product.id,
    );
  }, [product]);

  const galleryImages = useMemo(() => {
    const raw =
      product.images && product.images.length > 0
        ? product.images
        : [product.image];
    const seen = new Set<string>();
    const clean: string[] = [];
    for (const url of raw) {
      if (!url) continue;
      const normalized = decodeURIComponent(url).toLowerCase().trim();
      if (!seen.has(normalized)) {
        seen.add(normalized);
        clean.push(url);
      }
    }
    return clean.length > 0 ? clean : [product.image];
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "desc" | "specs" | "reviews" | "shipping"
  >("desc");
  const [copiedShare, setCopiedShare] = useState(false);
  const [relatedIndex, setRelatedIndex] = useState(0);

  // Lightbox Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);

  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [saveInfo, setSaveInfo] = useState(true);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const isFav = favorites?.includes(product.id) ?? false;
  const maxRelatedIndex = Math.max(0, relatedProducts.length - 5);

  useEffect(() => {
    if (!thumbnailsRef.current) return;
    const container = thumbnailsRef.current;
    const activeEl = container.children[activeImageIndex] as HTMLElement;
    if (activeEl) {
      const scrollTarget =
        activeEl.offsetLeft -
        container.offsetWidth / 2 +
        activeEl.offsetWidth / 2;
      container.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
  }, [activeImageIndex]);

  const goToIndex = (newIndex: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setActiveImageIndex(newIndex);
    setModalZoom(1); // სურათის გადართვისას ზუმი რესეტდება
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 200);
  };

  const handlePrevThumb = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      e?.preventDefault();
      const nextIdx =
        activeImageIndex === 0
          ? galleryImages.length - 1
          : activeImageIndex - 1;
      goToIndex(nextIdx);
    },
    [activeImageIndex, galleryImages.length],
  );

  const handleNextThumb = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      e?.preventDefault();
      const nextIdx = (activeImageIndex + 1) % galleryImages.length;
      goToIndex(nextIdx);
    },
    [activeImageIndex, galleryImages.length],
  );

  // კლავიატურით მართვა მოდალში (Esc, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setModalZoom(1);
      } else if (e.key === "ArrowLeft") {
        handlePrevThumb();
      } else if (e.key === "ArrowRight") {
        handleNextThumb();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handlePrevThumb, handleNextThumb]);

  // ზუმის კონტროლი
  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalZoom((z) => Math.min(3, +(z + 0.3).toFixed(1)));
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalZoom((z) => Math.max(1, +(z - 0.3).toFixed(1)));
  };

  const handleResetZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalZoom(1);
  };

  const toggleZoomClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalZoom((z) => (z > 1 ? 1 : 2));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewEmail || !reviewComment) return;

    const newRev: Review = {
      id: Date.now().toString(),
      name: reviewName,
      rating,
      date: "ახლახანს",
      comment: reviewComment,
    };

    setReviews((prev) => [newRev, ...prev]);
    setReviewComment("");
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 3000);
  };

  return (
    <div className="relative min-h-screen text-slate-200">
      <ShopOverlays />

      <main className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6 md:px-8">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-400">
          <Link href="/" className="hover:text-yellow-400 transition">
            მთავარი
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/magazia" className="hover:text-yellow-400 transition">
            მაღაზია
          </Link>
          <span className="text-gray-600">/</span>
          <Link
            href={`/category/${product.categorySlug}`}
            className="text-yellow-500/80 hover:text-yellow-400 transition"
          >
            {product.categoryName}
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-white line-clamp-1">{product.name}</span>
        </nav>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-16 items-start">
          <div className="md:col-span-6 flex flex-col gap-4">
            {/* მთავარი ფოტო — დაკლიკებით იხსნება Lightbox Overlay */}
            <div
              onClick={() => {
                setModalZoom(1);
                setIsModalOpen(true);
              }}
              className="group relative w-full h-[480px] sm:h-[540px] overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl flex items-center justify-center p-4 cursor-zoom-in"
            >
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
                {product.isSale && (
                  <span className="rounded-xl bg-red-600 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-xl">
                    SALE
                  </span>
                )}
                <span
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-black tracking-wide shadow-xl backdrop-blur-md border ${
                    product.inStock
                      ? "bg-black/90 border-emerald-500/60 text-emerald-400"
                      : "bg-black/90 border-red-500/60 text-red-400"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      product.inStock
                        ? "bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"
                        : "bg-red-500"
                    }`}
                  />
                  {product.inStock ? "მარაგშია" : "არაა მარაგში"}
                </span>
              </div>

              <img
                src={galleryImages[activeImageIndex] || product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalZoom(1);
                  setIsModalOpen(true);
                }}
                className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-md transition hover:bg-yellow-500 hover:text-black hover:scale-105 active:scale-95"
                title="გადიდება"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>

            {/* მინიატურების ზოლი */}
            {galleryImages.length > 1 && (
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={handlePrevThumb}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-yellow-500 hover:text-black hover:scale-110 active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
                </button>

                <div
                  ref={thumbnailsRef}
                  className="flex gap-3 overflow-x-auto py-1 scrollbar-none w-full scroll-smooth px-1"
                >
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToIndex(idx)}
                      className="group/thumb relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-200"
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />

                      <div
                        className={`absolute inset-0 transition-opacity duration-200 ${
                          activeImageIndex === idx
                            ? "bg-black/40 ring-2 ring-inset ring-black/30"
                            : "bg-black/0 hover:bg-black/10"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextThumb}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-yellow-500 hover:text-black hover:scale-110 active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5 stroke-[2.5]" />
                </button>
              </div>
            )}
          </div>

          <div className="md:col-span-6 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0d111d]/85 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-yellow-500 mb-2">
                <span>{product.categoryName}</span>
                <span className="text-gray-400 font-mono">
                  SKU: {product.id}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
                {product.name}
              </h1>

              <div className="mt-3 flex items-center gap-2 text-xs text-yellow-400">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        reviews.length > 0 &&
                        i <
                          Math.round(
                            reviews.reduce((a, b) => a + b.rating, 0) /
                              reviews.length,
                          )
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 font-semibold">
                  (
                  {reviews.length === 0
                    ? "0 შეფასება"
                    : `${reviews.length} შეფასება`}
                  )
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-3xl font-black text-white tracking-tight">
                  {product.price.toFixed(2)}₾
                </span>
                {product.oldPrice && (
                  <span className="text-base text-gray-500 line-through">
                    {product.oldPrice.toFixed(2)}₾
                  </span>
                )}
                {product.oldPrice && (
                  <span className="rounded-md bg-red-600/20 border border-red-500/30 px-2 py-0.5 text-xs font-black text-red-400">
                    -
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100,
                    )}
                    %
                  </span>
                )}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                80 მმ ლინზური ტელესკოპი GoTo სისტემით: ხელის კონტროლერი
                ავტომატურად მიმართავს ტელესკოპს არჩეულ ობიექტზე.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    კატეგორია
                  </span>
                  <span className="font-extrabold text-white">
                    {product.categoryName}
                  </span>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    გარანტია
                  </span>
                  <span className="font-extrabold text-emerald-400">
                    ოფიციალური ხარისხი
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#070a12] px-2 text-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-lg font-bold text-gray-400 hover:text-white transition"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-black">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 text-lg font-bold text-gray-400 hover:text-white transition"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                >
                  <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
                  კალათაში დამატება
                </button>

                <button
                  type="button"
                  disabled={!product.inStock}
                  onClick={handleBuyNow}
                  className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.02] active:scale-95 disabled:opacity-40"
                >
                  შეძენა
                </button>
              </div>

              <button
                type="button"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#ffc439] text-xs font-black text-[#003087] shadow-lg shadow-[#ffc439]/10 transition hover:bg-[#ffb81c] active:scale-[0.99]"
              >
                Pay with{" "}
                <span className="ml-1.5 italic font-black text-[#0079c1] text-sm">
                  PayPal
                </span>
              </button>

              <div className="flex items-center justify-between pt-2 text-xs">
                <button
                  type="button"
                  onClick={() => toggleFavorite(product.id)}
                  className="flex items-center gap-2 font-bold text-gray-300 transition hover:text-yellow-400"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isFav
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                  {isFav ? "ფავორიტებშია" : "ფავორიტებში დამატება"}
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-2 font-bold text-gray-300 transition hover:text-white"
                >
                  {copiedShare ? (
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
        </section>

        <section className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0d111d]/85 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4 text-xs font-black uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setActiveTab("desc")}
              className={`rounded-xl px-4 py-2.5 transition-all ${
                activeTab === "desc"
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              აღწერა
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`rounded-xl px-4 py-2.5 transition-all ${
                activeTab === "specs"
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              მახასიათებლები
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`rounded-xl px-4 py-2.5 transition-all ${
                activeTab === "reviews"
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              მიმოხილვა ({reviews.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("shipping")}
              className={`rounded-xl px-4 py-2.5 transition-all ${
                activeTab === "shipping"
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              მიწოდების პირობები
            </button>
          </div>

          <div className="pt-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
            {activeTab === "desc" && (
              <div className="space-y-6">
                <p>
                  <strong className="text-white">{product.name}</strong> —
                  Astroman-ის ორიგინალი პროდუქცია. იდეალურია როგორც ინტერიერის
                  გასალამაზებლად, ისე დაუვიწყარი კოსმოსური საჩუქრისთვის.
                </p>

                <div className="flex items-center gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-yellow-400 font-bold">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <span>
                    პროდუქტი მოწმდება გაგზავნამდე. უსაფრთხო შეფუთვა
                    გარანტირებულია.
                  </span>
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4 space-y-2">
                  <h4 className="font-black text-white text-xs uppercase mb-3 text-yellow-400">
                    ძირითადი პარამეტრები
                  </h4>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">დასახელება:</span>
                    <span className="font-bold text-white">{product.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">კატეგორია:</span>
                    <span className="font-bold text-white">
                      {product.categoryName}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">სტატუსი:</span>
                    <span className="font-bold text-emerald-400">
                      {product.inStock ? "მარაგშია" : "ამოიწურა"}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-4 space-y-2">
                  <h4 className="font-black text-white text-xs uppercase mb-3 text-yellow-400">
                    მიწოდება და შეფუთვა
                  </h4>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">შეფუთვა:</span>
                    <span className="font-bold text-white">სასაჩუქრე ყუთი</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">გარანტია:</span>
                    <span className="font-bold text-white">ოფიციალური</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">მიწოდება:</span>
                    <span className="font-bold text-white">
                      საქართველოს მასშტაბით
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-5 space-y-4">
                  <h3 className="text-base font-black text-white">მიმოხილვა</h3>

                  {reviews.length === 0 ? (
                    <p className="text-sm text-gray-400 italic">
                      მიმოხილვები ჯერ არ არის.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {reviews.map((rev) => (
                        <div
                          key={rev.id}
                          className="rounded-2xl border border-white/5 bg-white/5 p-4 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white text-xs">
                              {rev.name}
                            </span>
                            <span className="text-[10px] text-gray-400">
                              {rev.date}
                            </span>
                          </div>
                          <div className="flex gap-1 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < rev.rating
                                    ? "fill-yellow-400"
                                    : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-xs text-gray-300">{rev.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="md:col-span-7 rounded-2xl border border-white/5 bg-white/5 p-6 md:p-8">
                  <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                    იყავით პირველი შემფასებელი: „{product.name}“
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    თქვენი ელფოსტის მისამართი გამოქვეყნებული არ იქნება.
                    სავალდებულო ველები მონიშნულია{" "}
                    <span className="text-red-400">*</span>
                  </p>

                  <form
                    onSubmit={handleReviewSubmit}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        თქვენი რეიტინგი <span className="text-red-400">*</span>{" "}
                        :
                      </label>
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 text-yellow-400 transition hover:scale-125 focus:outline-none"
                          >
                            <Star
                              className={`h-5 w-5 ${
                                star <= (hoverRating || rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-600"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        თქვენი შეფასება <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        placeholder="დაწერეთ თქვენი აზრი პროდუქტის შესახებ..."
                        className="w-full rounded-2xl border border-white/10 bg-[#070a12] p-3.5 text-xs text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">
                          სახელი <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-[#070a12] px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">
                          ელფოსტა <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={reviewEmail}
                          onChange={(e) => setReviewEmail(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-[#070a12] px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 pt-1 text-xs text-gray-400 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={saveInfo}
                        onChange={(e) => setSaveInfo(e.target.checked)}
                        className="mt-0.5 rounded border-gray-600 bg-[#070a12] text-yellow-500 focus:ring-0"
                      />
                      <span>
                        ჩემი სახელის, ელფოსტისა და ვებ-გვერდის მისამართის
                        შენახვა ამ ბრაუზერში შემდგომში კომენტარებში
                        გამოსაყენებლად.
                      </span>
                    </label>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-3 text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-yellow-500/20 hover:from-amber-400 hover:to-yellow-400 transition active:scale-95"
                      >
                        გაგზავნა
                      </button>
                      {reviewSubmitted && (
                        <span className="ml-3 text-xs font-bold text-emerald-400">
                          ✓ თქვენი შეფასება წარმატებით გაიგზავნა!
                        </span>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                      alt="საკურიერო მიწოდება 1"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80"
                      alt="საკურიერო მიწოდება 2"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-base font-black text-white uppercase tracking-wider">
                      საკურიერო მომსახურება
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-300">
                      მიწოდება თბილისში ხდება 2 სამუშაო დღეში, რეგიონებში: 3-5
                      სამუშაო დღე.
                    </p>
                    <p className="mt-3 text-xs text-gray-400">
                      ექსპრეს მომსახურების შემთხვევაში შეკვეთა უნდა გაფორმდეს
                      13:00 საათამდე, ფეისბუქ მესენჯერის ან ტელეფონის
                      დახმარებით.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-base font-black text-white uppercase tracking-wider">
                      მომსახურების ფასები
                    </h3>
                    <div className="mt-3 space-y-1.5 text-xs sm:text-sm font-semibold text-gray-300">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">•</span>
                        <span>თბილისი - 7 ლარი</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">•</span>
                        <span>რეგიონები - 10 ლარი</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="group/section relative mb-16">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-black uppercase tracking-wider text-white">
                მსგავსი პროდუქტები
              </h2>
            </div>

            <button
              type="button"
              disabled={relatedIndex === 0}
              onClick={() => setRelatedIndex((prev) => Math.max(0, prev - 1))}
              className="absolute -left-4 top-[58%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#070a12]/95 text-white shadow-2xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/section:opacity-100 group-hover/section:pointer-events-auto hover:bg-yellow-500 hover:text-black hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            </button>

            <button
              type="button"
              disabled={relatedIndex >= maxRelatedIndex}
              onClick={() =>
                setRelatedIndex((prev) => Math.min(maxRelatedIndex, prev + 1))
              }
              className="absolute -right-4 top-[58%] z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#070a12]/95 text-white shadow-2xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/section:opacity-100 group-hover/section:pointer-events-auto hover:bg-yellow-500 hover:text-black hover:scale-105 active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            </button>

            <div className="w-full overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-out py-1"
                style={{
                  transform: `translateX(calc(-${relatedIndex} * ((100% - 4 * 1rem) / 5 + 1rem)))`,
                }}
              >
                {relatedProducts.map((prod) => (
                  <TiltProductCard key={prod.id} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-[#0d111d]/70 p-6 backdrop-blur-md md:grid-cols-4 mb-6">
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
      </main>

      {/* FULLSCREEN LIGHTBOX OVERLAY WITH ZOOM & NAVIGATION */}
      {isModalOpen && (
        <div
          onClick={() => {
            setIsModalOpen(false);
            setModalZoom(1);
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black/95 p-4 backdrop-blur-xl animate-in fade-in duration-200"
        >
          {/* ზედა სამართავი პანელი */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-6xl items-center justify-between pt-2 pb-4 text-white"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <span className="text-yellow-400">{activeImageIndex + 1}</span>
              <span>/</span>
              <span>{galleryImages.length}</span>
              <span className="hidden sm:inline text-gray-500 ml-2">
                | {product.name}
              </span>
            </div>

            {/* ზუმის ღილაკები */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleZoomIn}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 backdrop-blur-md transition hover:bg-yellow-500 hover:text-black"
                title="გადიდება"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 backdrop-blur-md transition hover:bg-yellow-500 hover:text-black"
                title="დაპატარავება"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              {modalZoom > 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 backdrop-blur-md transition hover:bg-yellow-500 hover:text-black"
                  title="ზუმის რესეტი"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  setModalZoom(1);
                }}
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-red-600 hover:text-white"
                title="დახურვა (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* ცენტრალური ფოტოს არეალი */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-1 w-full max-w-6xl items-center justify-center overflow-hidden my-auto"
          >
            {/* წინა ისარი */}
            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={handlePrevThumb}
                className="absolute left-2 sm:left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-yellow-500 hover:text-black hover:scale-110 active:scale-90"
              >
                <ChevronLeft className="h-7 w-7 stroke-[2.5]" />
              </button>
            )}

            {/* გადიდებული სურათი (დაკლიკებით ზუმდება) */}
            <div className="relative flex max-h-[75vh] max-w-full items-center justify-center overflow-auto p-2">
              <img
                src={galleryImages[activeImageIndex] || product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                onClick={toggleZoomClick}
                style={{
                  transform: `scale(${modalZoom})`,
                  cursor: modalZoom > 1 ? "zoom-out" : "zoom-in",
                }}
                className="max-h-[72vh] max-w-full object-contain rounded-2xl select-none transition-transform duration-200 ease-out"
              />
            </div>

            {/* შემდეგი ისარი */}
            {galleryImages.length > 1 && (
              <button
                type="button"
                onClick={handleNextThumb}
                className="absolute right-2 sm:right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-yellow-500 hover:text-black hover:scale-110 active:scale-90"
              >
                <ChevronRight className="h-7 w-7 stroke-[2.5]" />
              </button>
            )}
          </div>

          {/* ქვედა მინიატურების ზოლი მოდალში */}
          {galleryImages.length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex gap-2.5 overflow-x-auto py-3 max-w-2xl scrollbar-none px-2"
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToIndex(idx)}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-yellow-400 scale-105 shadow-lg shadow-yellow-500/20"
                      : "border-transparent opacity-40 hover:opacity-90"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
