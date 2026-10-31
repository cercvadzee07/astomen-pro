"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Share2, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogPostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    notFound();
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("სტატიის ბმული დაკოპირებულია!");
    }
  };

  return (
    <div className="relative min-h-screen w-full text-slate-200 overflow-hidden py-12 selection:bg-yellow-500 selection:text-black">
      {/* მთავარი გლობალური ფონი ავტომატურად გამოჩნდება ამ გამჭვირვალე კონტეინერის უკან */}

      <main className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Navigation & Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blogi"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1320]/60 backdrop-blur-md px-4 py-2 text-xs font-bold text-gray-300 transition-all hover:border-yellow-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            ყველა სტატია
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1320]/60 backdrop-blur-md px-3.5 py-2 text-xs font-bold text-gray-300 transition hover:border-yellow-400 hover:text-white"
          >
            <Share2 className="h-3.5 w-3.5" />
            გაზიარება
          </button>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3.5 py-1 text-xs font-bold text-yellow-400">
            <Sparkles className="h-3.5 w-3.5" />
            Astroman Blog
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight mb-4 drop-shadow-lg">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-xs text-gray-400 border-b border-white/10 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-yellow-500/80" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-yellow-500/80" />
              {post.author}
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1320]/60 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        {/* Article Full Body */}
        <div
          className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed text-gray-300 space-y-4
          [&>p]:mb-5 [&>p]:leading-relaxed
          [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-3
          [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-yellow-400 [&>h3]:mt-6 [&>h3]:mb-2
          [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2
          [&>img]:rounded-xl [&>img]:border [&>img]:border-white/10 [&>img]:my-6
          [&>blockquote]:border-l-4 [&>blockquote]:border-yellow-400 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </div>
  );
}
