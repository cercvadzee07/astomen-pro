"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { useShop } from "@/context/ShopContext";
import CategoryLink from "@/components/CategoryLink";
import LiveSearch from "@/components/search/LiveSearch";
import LogoMark from "@/components/layout/LogoMark";
import SocialLinks from "@/components/layout/SocialLinks";
import { formatPrice } from "@/lib/products";

const NAV_LINKS: { href: string; label: string; mobileOnly?: boolean }[] = [
  { href: "/magazia", label: "მაღაზია" },
  { href: "/favoritebi", label: "ფავორიტები", mobileOnly: true },
  { href: "/blogi", label: "ბლოგი" },
  { href: "/chven-shesaxeb", label: "ჩვენ შესახებ" },
  { href: "/kontakt", label: "კონტაქტი" },
];

const iconBtn =
  "relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-200 hover:border-yellow-500/40 hover:bg-white/10 hover:text-white active:scale-95";

function Badge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-yellow-500 px-1 text-[10px] font-black text-black shadow-md">
      {count}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { totalCartCount, totalCartPrice, favorites, setIsCartOpen } = useShop();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  // close everything on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileSearchOpen(false);
    setIsCategoryOpen(false);
  }, [pathname]);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // close the categories dropdown on outside click
  useEffect(() => {
    if (!isCategoryOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!categoryRef.current?.contains(e.target as Node)) setIsCategoryOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [isCategoryOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar — desktop only */}
      <div className="hidden border-b border-white/5 bg-black/75 px-6 py-1.5 text-[11px] text-gray-400 md:block md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-yellow-500" /> თბილისი, ალ. ყაზბეგის 17
            </span>
            <a href="tel:+995599396721" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3 w-3 text-yellow-500" /> 599 39 67 21 / 555 44 64 48
            </a>
            <a href="mailto:info@astroman.ge" className="hidden items-center gap-1.5 transition-colors hover:text-white lg:flex">
              <Mail className="h-3 w-3 text-yellow-500" /> info@astroman.ge
            </a>
          </div>

          <div className="flex items-center gap-5">
            <nav className="flex gap-4 font-medium">
              {NAV_LINKS.filter((l) => !l.mobileOnly).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`transition-colors hover:text-yellow-400 ${
                    pathname.startsWith(l.href) ? "text-yellow-400" : ""
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <SocialLinks className="flex items-center gap-3 border-l border-gray-700/80 pl-4" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="glass-panel backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:gap-6 md:px-12 md:py-3.5 lg:px-16">
          {/* Mobile: menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={`${iconBtn} md:hidden`}
            aria-label="მენიუ"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Astroman — მთავარი">
            <LogoMark className="h-8 w-auto text-white transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] md:h-9" />
            <span className="text-lg font-black tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-yellow-400 md:text-2xl">
              ASTROMAN
            </span>
          </Link>

          {/* Desktop: categories + live search */}
          <div className="hidden max-w-2xl grow items-center md:flex">
            <div ref={categoryRef} className="relative">
              <button
                type="button"
                onClick={() => setIsCategoryOpen((o) => !o)}
                aria-expanded={isCategoryOpen}
                className="group flex h-11 items-center gap-2.5 rounded-l-xl border border-r-0 border-white/10 bg-[#141824] px-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#1f2638]"
              >
                <span className="flex flex-col gap-0.5">
                  <span className="h-0.5 w-3.5 bg-yellow-400 transition-all group-hover:w-4" />
                  <span className="h-0.5 w-2.5 bg-white transition-all group-hover:w-4" />
                  <span className="h-0.5 w-3.5 bg-yellow-400 transition-all group-hover:w-4" />
                </span>
                <span className="hidden lg:inline">კატეგორიები</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-300 ${
                    isCategoryOpen ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 z-50 mt-2 w-64 rounded-xl border border-white/10 bg-[#0c101c]/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <ul className="flex flex-col divide-y divide-white/5 text-xs">
                    {CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <li key={cat.slug}>
                          <CategoryLink
                            category={cat}
                            onClick={() => setIsCategoryOpen(false)}
                            className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-semibold text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
                          >
                            <span className="transition-transform duration-200 group-hover:scale-125">
                              <Icon className={`h-4 w-4 ${cat.color}`} />
                            </span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                              {cat.name}
                            </span>
                          </CategoryLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            {/* the category button already has the left rounding */}
            <LiveSearch className="[&_input]:rounded-l-none" />
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen((o) => !o)}
              className={`${iconBtn} md:hidden`}
              aria-label="ძიება"
              aria-expanded={isMobileSearchOpen}
            >
              {isMobileSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </button>

            <Link href="/favoritebi" className={`${iconBtn} hidden sm:flex`} title="ფავორიტები" aria-label="ფავორიტები">
              <Heart className={`h-4 w-4 ${favorites.length > 0 ? "fill-yellow-400 text-yellow-400" : ""}`} />
              <Badge count={favorites.length} />
            </Link>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="group flex items-center gap-3"
              aria-label={`კალათა, ${totalCartCount} ნივთი`}
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-200 group-hover:scale-105 group-hover:bg-white/20 active:scale-95">
                <ShoppingBag className="h-5 w-5 text-gray-200 transition-colors group-hover:text-yellow-400" />
                <Badge count={totalCartCount} />
              </span>
              <span className="hidden text-sm font-bold transition-colors group-hover:text-yellow-400 lg:block">
                {formatPrice(totalCartPrice)}
              </span>
            </button>

            <a href="#" className={`${iconBtn} hidden md:flex`} aria-label="ანგარიში">
              <User className="h-5 w-5 text-gray-200" />
            </a>
          </div>
        </div>

        {/* Mobile: search row */}
        {isMobileSearchOpen && (
          <div className="border-t border-white/5 px-4 pt-1 pb-3 md:hidden">
            <LiveSearch autoFocus onDone={() => setIsMobileSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile: slide-in menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="მენიუ">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <nav className="absolute inset-y-0 left-0 flex w-[85%] max-w-sm flex-col overflow-y-auto border-r border-white/10 bg-[#0b0f1a] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <span className="flex items-center gap-2">
                <LogoMark className="h-7 w-auto text-white" />
                <span className="text-base font-black tracking-[0.2em] text-white">ASTROMAN</span>
              </span>
              <button type="button" onClick={() => setIsMenuOpen(false)} className={iconBtn} aria-label="დახურვა">
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="grid grid-cols-2 gap-2 border-b border-white/10 p-4 text-sm font-bold">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block rounded-xl border px-3 py-2.5 text-center transition ${
                      pathname.startsWith(l.href)
                        ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-400"
                        : "border-white/10 bg-white/5 text-gray-200"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="px-5 pt-4 pb-1 text-[11px] font-bold uppercase tracking-wider text-gray-500">
              კატეგორიები
            </p>
            <ul className="flex flex-col px-2 text-sm">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <li key={cat.slug}>
                    <CategoryLink
                      category={cat}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 font-semibold text-gray-300 transition active:bg-white/10"
                    >
                      <Icon className={`h-4 w-4 ${cat.color}`} />
                      {cat.name}
                    </CategoryLink>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto space-y-2 border-t border-white/10 p-5 text-xs text-gray-400">
              <a href="tel:+995599396721" className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-yellow-500" /> 599 39 67 21
              </a>
              <a href="tel:+995555446448" className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-yellow-500" /> 555 44 64 48
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-yellow-500" /> თბილისი, ალ. ყაზბეგის 17
              </span>
              <SocialLinks className="flex items-center gap-4 pt-2 text-gray-300" iconClassName="h-5 w-5" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
