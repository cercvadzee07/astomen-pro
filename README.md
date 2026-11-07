# Astroman — astroman.ge rebuild

Next.js 16 (App Router, Cache Components) + React 19 + Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
```

## Project structure

```
app/                    routes (server components unless marked "use client")
  page.tsx              home
  magazia/              shop (all products)
  category/[slug]/      category listing — slugs match astroman.ge
  product/[id]/         product page (gallery, purchase panel, tabs)
  blogi/                blog list + posts
components/
  product/              ProductCard, ProductCarousel, detail/*
  home/                 HomeHero
  ui/                   Toaster
context/ShopContext.tsx cart, favorites, compare, toasts (saved in localStorage)
data/
  products.json         generated product catalogue — do not edit by hand
  raw/                  raw scrape of astroman.ge
  categories.ts         categories + old-slug aliases
  blogs.ts              blog posts
lib/products.ts         product helpers (lookup, price formatting, summaries)
scripts/
  import-astroman.mjs   raw scrape → data/products.json
types/                  shared TypeScript types
```

## Updating products

1. Replace `data/raw/astroman-scrape.json` with a fresh scrape of astroman.ge.
2. Run `npm run import-products`.
