"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Users, CheckCircle, Compass, Building2 } from "lucide-react";

// ==========================================
// ცოცხალი რიცხვების ანიმატორი ფერის შეცვლით
// ==========================================
function GrandAnimatedNumber({ target, duration = 2500, delay = 0 }: { target: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Expo Ease-Out გლუვი დამუხრუჭებისთვის
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
        setIsFinished(true);
      }
    };

    const timer = setTimeout(() => {
      animId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (animId) window.cancelAnimationFrame(animId);
    };
  }, [target, duration, delay]);

  return (
    <span className={`transition-all duration-700 ${isFinished ? "text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]" : "text-white"}`}>
      {count.toLocaleString()}
      {isFinished && target > 100 && "+"}
    </span>
  );
}

// ==========================================
// მთავარი გვერდი
// ==========================================
export default function AboutUsPage() {
  const stats = [
    { target: 3180, label: "კმაყოფილი მომხმარებელი", icon: Users, delay: 0 },
    { target: 25, label: "დასრულებული პროექტი", icon: CheckCircle, delay: 200 },
    { target: 6, label: "გუნდის წევრი", icon: Compass, delay: 400 },
    { target: 2, label: "ფილიალი", icon: Building2, delay: 600 },
  ];

  return (
    <div className="relative min-h-[calc(100vh-140px)] w-full flex items-center bg-[#070a13] text-slate-200 overflow-hidden py-20 selection:bg-yellow-500 selection:text-black">
      
      {/* 1. კოსმოსური პარალაქსის ფონი */}
      <div 
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-110 animate-pulse duration-[10000ms]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')`,
        }}
      />

      {/* ნეონის სხივები და ბინდი */}
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/3 -translate-x-1/3 rounded-full bg-blue-600/10 blur-[130px]" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Navigation */}
        <nav className="mb-14 flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider uppercase">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            მთავარი
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-yellow-500">ჩვენ შესახებ</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* მარცხენა მხარე: ინფორმაცია (გრანდიოზული ტიპოგრაფია) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-8 relative">
            
            <div className="absolute -left-10 top-0 h-32 w-1 bg-gradient-to-b from-yellow-400 to-transparent rounded-full opacity-50" />

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                პირველი ასტრო-მაღაზია
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 uppercase">
                ასტრომანი
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-black text-yellow-500 tracking-wide drop-shadow-md">
                ჩვენ ვმუშაობთ თქვენთვის
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-medium max-w-xl">
              <p>
                ასტრომანი არის პირველი სივრცე საქართველოში, სადაც კოსმოსით შთაგონებული ტექნოლოგია და ხელოვნება ერთიანდება.
              </p>
              <p>
                ჩვენი მიზანია, თითოეულ ადამიანს მივცეთ საშუალება, აღმოაჩინოს სამყაროს საიდუმლოებები, გავაღვივოთ ინტერესი მეცნიერების მიმართ და შევთავაზოთ ინოვაციური, პრემიუმ ხარისხის ასტრონომიული აღჭურვილობა.
              </p>
            </div>

            {/* სოლიდური და გამჭვირვალე ღილაკები მოძრავი გლოვით */}
            <div className="pt-6 flex flex-wrap gap-5 items-center">
              <Link
                href="/category/teqnika"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-yellow-500 px-8 py-4 text-sm font-black text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] active:scale-95"
              >
                <span className="relative z-10">მაღაზიის ნახვა</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:shadow-xl active:scale-95"
              >
                <Mail className="h-5 w-5 text-yellow-500" />
                კონტაქტი
              </Link>
            </div>

          </div>

          {/* მარჯვენა მხარე: ასიმეტრიული მცურავი 3D ბარათები */}
          <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] w-full flex items-center justify-center">
            
            {/* ცენტრალური შემაერთებელი ნეონის რგოლი */}
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/20 bg-yellow-500/5 animate-spin duration-[15000ms]" />
            <div className="absolute top-1/2 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent rotate-45" />
            <div className="absolute top-1/2 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent -rotate-45" />

            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              // ასიმეტრიული პოზიციები (ოთხივე კუთხეში)
              const positions = [
                "top-0 left-0 sm:left-4",
                "top-12 right-0 sm:right-4",
                "bottom-12 left-0 sm:left-10",
                "bottom-0 right-0 sm:right-10",
              ];

              return (
                <div
                  key={idx}
                  className={`absolute ${positions[idx]} group w-44 sm:w-52 rounded-2xl border border-white/10 bg-[#0e1320]/60 p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-110 hover:border-yellow-500/50 hover:bg-[#0e1320]/90 hover:z-20`}
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-yellow-500/20 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative flex flex-col items-start">
                    <Icon className="h-6 w-6 text-gray-500 mb-4 transition-colors duration-500 group-hover:text-yellow-400" />
                    
                    <div className="text-3xl sm:text-4xl font-black tracking-tight drop-shadow-md">
                      <GrandAnimatedNumber target={stat.target} duration={2500} delay={stat.delay} />
                    </div>
                    
                    <span className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 transition-colors duration-500 group-hover:text-gray-300">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </main>
    </div>
  );
}   