"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full text-slate-200 overflow-hidden py-16 selection:bg-yellow-500 selection:text-black">
      {/* მთავარი გლობალური ფონი ავტომატურად გამოჩნდება ამ გამჭვირვალე კონტეინერის უკან */}

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider uppercase">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            მთავარი
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-yellow-500">კონტაქტი</span>
        </nav>

        {/* Header Title */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            <Sparkles className="h-3.5 w-3.5" />
            დაგვიკავშირდით
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-4 drop-shadow-lg">
            საკონტაქტო ინფო
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            გაქვთ კითხვები ტელესკოპებთან დაკავშირებით ან გჭირდებათ დახმარება
            პროდუქტის შერჩევაში? ჩვენი გუნდი მზადაა დაგეხმაროთ.
          </p>
        </div>

        {/* 2-Column Layout: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/10 bg-[#0e1320]/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-yellow-500/20">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                მოგვწერეთ წერილი
              </h2>

              {isSent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    წერილი წარმატებით გაიგზავნა!
                  </h3>
                  <p className="text-sm text-gray-400">
                    ჩვენი გუნდი უმოკლეს დროში დაგიკავშირდებათ.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                        სახელი და გვარი
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-white/5 bg-[#151b2b] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all focus:border-yellow-500/50 focus:bg-[#1a2133] focus:outline-none focus:ring-4 focus:ring-yellow-500/10"
                        placeholder="მაგ: ნიკა გიორგაძე"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                        ელ-ფოსტა
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/5 bg-[#151b2b] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all focus:border-yellow-500/50 focus:bg-[#1a2133] focus:outline-none focus:ring-4 focus:ring-yellow-500/10"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                        ტელ ნომერი
                      </label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-white/5 bg-[#151b2b] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all focus:border-yellow-500/50 focus:bg-[#1a2133] focus:outline-none focus:ring-4 focus:ring-yellow-500/10"
                        placeholder="555 XX XX XX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                        კომპანია (სურვილისამებრ)
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-white/5 bg-[#151b2b] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all focus:border-yellow-500/50 focus:bg-[#1a2133] focus:outline-none focus:ring-4 focus:ring-yellow-500/10"
                        placeholder="კომპანიის სახელი"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                      წერილი
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/5 bg-[#151b2b] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all focus:border-yellow-500/50 focus:bg-[#1a2133] focus:outline-none focus:ring-4 focus:ring-yellow-500/10"
                      placeholder="დაწერეთ თქვენი შეტყობინება აქ..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-yellow-500 px-8 py-4 text-sm font-black text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 mt-2"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "იგზავნება..." : "გაგზავნა"}
                    </span>
                    <Send
                      className={`relative z-10 h-4 w-4 transition-transform ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`}
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href="tel:+995599396721"
              className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-[#0e1320]/40 p-6 backdrop-blur-md transition-all hover:border-yellow-500/30 hover:bg-[#151b2b]/80 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 transition-transform duration-300 group-hover:scale-110">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                  ტელეფონი
                </h3>
                <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                  599 39 67 21
                </p>
                <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                  555 44 64 48
                </p>
              </div>
            </a>

            <a
              href="mailto:info@astroman.ge"
              className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-[#0e1320]/40 p-6 backdrop-blur-md transition-all hover:border-yellow-500/30 hover:bg-[#151b2b]/80 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                  ელ-ფოსტა
                </h3>
                <p className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                  info@astroman.ge
                </p>
              </div>
            </a>

            <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-[#0e1320]/40 p-6 backdrop-blur-md transition-all hover:border-yellow-500/30 hover:bg-[#151b2b]/80 hover:shadow-lg cursor-default">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                  მისამართი
                </h3>
                <p className="text-sm font-bold text-white leading-relaxed">
                  თბილისი, ალექსანდრე ყაზბეგის 17
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-[#0e1320]/40 p-6 backdrop-blur-md transition-all hover:border-yellow-500/30 hover:bg-[#151b2b]/80 hover:shadow-lg cursor-default">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 transition-transform duration-300 group-hover:scale-110">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                  სამუშაო საათები
                </h3>
                <p className="text-sm font-bold text-white">
                  ორშ - შაბ: 11:00 - 20:00
                </p>
                <p className="text-sm font-bold text-gray-400 mt-0.5">
                  კვირა: დასვენება
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 
          უფასო iframe რუკა CSS Dark Mode-ით (ფერების ინვერსია)
        */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0e1320]/60 shadow-2xl">
          <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.5298132938153!2d44.75549027654035!3d41.72545807923447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044732152865963%3A0xc3ab55bba98e4f16!2s17%20Alexander%20Kazbegi%20Ave%2C%20Tbilisi!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90 invert hue-rotate-180 brightness-90 contrast-125 transition-all duration-500 hover:opacity-100 hover:brightness-100"
          />
        </div>
      </main>
    </div>
  );
}
