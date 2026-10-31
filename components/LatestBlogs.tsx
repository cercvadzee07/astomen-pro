"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export default function LatestBlogs() {
  const latestPosts = BLOG_POSTS.slice(0, 4);

  return (
    <section className="relative w-full bg-transparent py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        {/* პრემიუმ ჰედერი */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="relative">
            <div className="absolute -left-6 top-1 h-12 w-1.5 rounded-full bg-gradient-to-b from-yellow-400 to-transparent opacity-80" />

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
              <Sparkles className="h-3 w-3" />
              შემეცნებითი სამყარო
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 uppercase">
              ახალი{" "}
              <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                სტატიები
              </span>
            </h2>
          </div>

          <Link
            href="/blogi"
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-white transition-all hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] active:scale-95"
          >
            ყველა ბლოგი
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-yellow-400" />
          </Link>
        </div>

        {/* ახალი: 16:9 პროპორციაზე მორგებული "Split" დიზაინის გრიდი */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogi/${post.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#0a0e17] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/30 hover:shadow-[0_15px_40px_rgba(234,179,8,0.1)]"
            >
              {/* ზედა ნაწილი: ზუსტი 16:9 იმიჯი - აღარასოდეს მოიჭრება ცუდად */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#05070d]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                {/* რბილი გრადიენტი იმიჯის ქვედა კიდეზე, რომ ტექსტს შეერწყას */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-90" />

                {/* Floating თარიღის ტეგი ფოტოზე */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                  <Calendar className="h-3 w-3 text-yellow-500" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-200 uppercase">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* ქვედა ნაწილი: ტექსტური პანელი */}
              <div className="relative flex flex-1 flex-col p-6 pt-4 z-10">
                <h3 className="mb-3 line-clamp-3 text-sm sm:text-base font-bold leading-relaxed text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {post.title}
                </h3>

                <p className="mb-6 line-clamp-2 text-xs font-medium leading-relaxed text-gray-400">
                  {post.excerpt.replace(/<[^>]*>?/gm, "")}
                </p>

                {/* Footer ბარათის შიგნით (ინტერაქციული ღილაკი) */}
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 transition-colors duration-300 group-hover:text-white">
                    სრულად ნახვა
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* ქვედა ნეონის loading-ბარი */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-500 transition-all duration-700 ease-out group-hover:w-full shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
