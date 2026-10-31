"use client";

import { useState, useRef, useCallback, MouseEvent } from "react";
import Link from "next/link";
import {
  Calendar,
  User,
  ArrowUpRight,
  Plus,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";

// ==========================================
// 1. Procedural Web Audio FX (Synthesized)
// ==========================================
class BlogAudioEngine {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playHover() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);

      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // AudioContext throttled
    }
  }

  playClick() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.1);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // AudioContext throttled
    }
  }
}

const audio = new BlogAudioEngine();

// ==========================================
// 2. Interactive 3D Tilt + Glow Card Component
// ==========================================
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
    );
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    audio.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
        animationDelay: `${(index % 6) * 70}ms`,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0e1320]/80 backdrop-blur-md shadow-lg transition-colors duration-300 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-30 rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(234, 179, 8, 0.12), transparent 70%)`,
          }}
        />
      )}

      {/* Featured Image with Zoom & Dark Gradient */}
      <a
        href={`/blogi/${post.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => audio.playClick()}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#070a12] border-b border-white/5 block"
      >
        <img
          src={post.image}
          alt={post.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1320] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Floating Category Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-400 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
          <Sparkles className="h-3 w-3 text-yellow-400" />
          Astroman
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-4 text-[11px] text-gray-500 font-medium">
          <span className="flex items-center gap-1.5 text-gray-400">
            <Calendar className="h-3.5 w-3.5 text-yellow-500/70" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-gray-400">
            <User className="h-3.5 w-3.5 text-yellow-500/70" />
            {post.author}
          </span>
        </div>

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audio.playClick()}
          className="group/link mb-2.5 block"
        >
          <h2 className="line-clamp-2 text-base font-bold text-white transition-colors duration-200 group-hover/link:text-yellow-400 leading-snug">
            {post.title}
          </h2>
        </a>

        <p className="mb-6 line-clamp-3 text-xs text-gray-400/90 leading-relaxed font-normal">
          {post.excerpt}
        </p>

        {/* Action Button */}
        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            სტატია
          </span>

          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audio.playClick()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5 text-xs font-bold text-yellow-400 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black group-hover:shadow-md group-hover:shadow-yellow-500/20"
          >
            სრულად ნახვა
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

// ==========================================
// 3. Main Blog Page
// ==========================================
export default function BlogiPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const visiblePosts = BLOG_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < BLOG_POSTS.length;

  const handleLoadMore = () => {
    audio.playClick();
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoadingMore(false);
    }, 250);
  };

  return (
    <div className="relative min-h-screen w-full text-slate-200 py-12 selection:bg-yellow-500 selection:text-black">
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-gray-400">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            მთავარი
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-yellow-400">ბლოგი</span>
        </nav>

        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3.5 py-1 text-xs font-bold text-yellow-400 shadow-inner">
              <BookOpen className="h-3.5 w-3.5" />
              ასტრონომიული სტატიები და სიახლეები
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Astroman ბლოგი
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
              სულ გამოქვეყნებულია {BLOG_POSTS.length} სამეცნიერო და შემეცნებითი
              სტატია
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-yellow-500/30 bg-[#0e1320]/80 backdrop-blur-md px-8 py-3.5 text-xs font-bold text-white shadow-xl transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black hover:shadow-yellow-500/20 active:scale-95 disabled:opacity-50"
            >
              <Plus
                className={`h-4 w-4 transition-transform duration-300 ${isLoadingMore ? "animate-spin" : "group-hover:rotate-90"}`}
              />
              <span>
                {isLoadingMore
                  ? "იტვირთება..."
                  : `მეტის ნახვა (${BLOG_POSTS.length - visibleCount} დარჩენილი)`}
              </span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
