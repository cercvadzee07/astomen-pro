"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function Sidebar({
  activeCategorySlug,
}: {
  activeCategorySlug?: string;
}) {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="glass-panel sticky top-24 rounded-2xl p-2.5 shadow-xl backdrop-blur-xl border border-white/10">
        <div className="mb-2 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-gray-400">
          კატალოგი
        </div>
        <ul className="flex flex-col divide-y divide-white/5 text-xs font-semibold">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategorySlug === cat.slug;
            return (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className={`group relative flex w-full items-center gap-3.5 px-3.5 py-3 text-left rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-500/15 text-yellow-400 font-bold border border-yellow-500/30"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 rounded-r-full bg-yellow-400 transition-all duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-60"
                    }`}
                  />

                  <span className="transition-transform duration-200 ease-out group-hover:scale-125">
                    <Icon className={`h-4 w-4 ${cat.color}`} />
                  </span>

                  <span className="transition-transform duration-200 ease-out group-hover:translate-x-1.5">
                    {cat.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
