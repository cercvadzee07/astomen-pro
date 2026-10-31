"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Search,
  ShoppingBag,
  User,
  ChevronDown,
  Heart,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { useShop } from "@/context/ShopContext";

export default function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { totalCartCount, totalCartPrice, favorites, setIsCartOpen } =
    useShop();

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="border-b border-white/5 bg-black/75 px-6 py-1.5 text-[11px] text-gray-400 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 transition-colors hover:text-white">
              <MapPin className="h-3 w-3 text-yellow-500" /> თბილისი, ალ.
              ყაზბეგის 17
            </span>
            <span className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3 w-3 text-yellow-500" /> 599 39 67 21 / 555
              44 64 48
            </span>
            <span className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex">
              <Mail className="h-3 w-3 text-yellow-500" /> info@astroman.ge
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex gap-4 font-medium">
              <Link
                href="/magazia"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                მაღაზია
              </Link>
              <Link href="/blogi" className="hover:text-yellow-400 transition">
                ბლოგი
              </Link>
              <Link
                href="/chven-shesaxeb"
                className="transition-colors hover:text-white"
              >
                ჩვენ შესახებ
              </Link>
              <Link
                href="/kontakt"
                className="transition-colors hover:text-white"
              >
                კონტაქტი
              </Link>
            </div>

            {/* Socials + TikTok (რეალური ლინკებით) */}
            <div className="flex items-center gap-3 border-l border-gray-700/80 pl-4 text-gray-400">
              <a
                href="https://www.facebook.com/AstrooMaan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/___astroman___/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@astroman.ge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="glass-panel backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-3.5 md:px-12 lg:px-16">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 100 60"
                  className="h-9 w-auto text-white transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  fill="none"
                >
                  <path
                    d="M 18 12 Q 18 16 14 16 Q 18 16 18 20 Q 18 16 22 16 Q 18 16 18 12 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 78 8 Q 78 13 73 13 Q 78 13 78 18 Q 78 13 83 13 Q 78 13 78 8 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 6 29 Q 6 32 3 32 Q 6 32 6 35 Q 6 32 9 32 Q 6 32 6 29 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 84 38 Q 84 41 81 41 Q 84 41 84 44 Q 84 41 87 41 Q 84 41 84 38 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 28 50 Q 28 53 25 53 Q 28 53 28 56 Q 28 53 31 53 Q 28 53 28 50 Z"
                    fill="currentColor"
                  />

                  <circle cx="48" cy="30" r="18" fill="currentColor" />
                  <ellipse
                    cx="48"
                    cy="31"
                    rx="42"
                    ry="11"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    fill="none"
                    transform="rotate(-15 48 31)"
                  />
                  <ellipse
                    cx="48"
                    cy="31"
                    rx="36"
                    ry="8.5"
                    stroke="#050508"
                    strokeWidth="2"
                    fill="none"
                    transform="rotate(-15 48 31)"
                  />
                </svg>

                <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-yellow-400">
                  ASTROMAN
                </span>
              </div>
            </Link>

            {/* Dropdown & Search */}
            <div className="relative hidden max-w-2xl grow md:flex">
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="group flex items-center gap-2.5 rounded-l-md border border-r-0 border-white/10 bg-[#141824] px-4 py-2.5 text-xs font-bold text-white uppercase tracking-wider transition-all duration-200 hover:bg-[#1f2638] active:scale-95"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="h-0.5 w-3.5 bg-yellow-400 transition-all duration-200 group-hover:w-4"></span>
                  <span className="h-0.5 w-2.5 bg-white transition-all duration-200 group-hover:w-4"></span>
                  <span className="h-0.5 w-3.5 bg-yellow-400 transition-all duration-200 group-hover:w-4"></span>
                </div>
                <span>კატეგორიები</span>
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
                          <Link
                            href={`/category/${cat.slug}`}
                            onClick={() => setIsCategoryOpen(false)}
                            className="group flex w-full items-center gap-3 px-3 py-2.5 font-semibold text-gray-300 rounded-lg transition-all duration-200 hover:bg-white/10 hover:text-white"
                          >
                            <span className="transition-transform duration-200 group-hover:scale-125">
                              <Icon className={`h-4 w-4 ${cat.color}`} />
                            </span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                              {cat.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <input
                type="text"
                placeholder="პროდუქტის ძიება..."
                className="search-input w-full px-4 py-2.5 text-sm transition-all focus:ring-1 focus:ring-yellow-500/50"
              />
              <button
                type="button"
                className="flex items-center justify-center rounded-r-md bg-yellow-500 px-6 text-black transition-all duration-200 hover:bg-yellow-400 active:scale-95"
              >
                <Search className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Wishlist, Cart & User Controls */}
            <div className="flex shrink-0 items-center gap-4">
              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-200 hover:border-yellow-500/40 hover:bg-white/10 hover:text-white active:scale-95"
                title="ფავორიტები"
              >
                <Heart
                  className={`h-4 w-4 ${favorites.length > 0 ? "text-yellow-400 fill-yellow-400" : ""}`}
                />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-yellow-500 px-1 text-[10px] font-black text-black shadow-md">
                    {favorites.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="group flex items-center gap-3 transition-colors hover:text-white"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-200 group-hover:bg-white/20 group-hover:scale-105 active:scale-95">
                  <ShoppingBag className="h-5 w-5 text-gray-200 group-hover:text-yellow-400 transition-colors" />
                  {totalCartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-yellow-500 px-1 text-[10px] font-bold text-black shadow-md animate-pulse">
                      {totalCartCount}
                    </span>
                  )}
                </div>
                <span className="hidden text-sm font-bold sm:block transition-colors group-hover:text-yellow-400">
                  {totalCartPrice.toFixed(2)}₾
                </span>
              </button>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:border-white/50 hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                <User className="h-5 w-5 text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
