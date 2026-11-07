import Link from "next/link";
import { Home, Search } from "lucide-react";
import LogoMark from "@/components/layout/LogoMark";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <LogoMark className="mb-6 h-16 w-auto text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.35)]" />
      <p className="text-6xl font-black tracking-tight text-white">404</p>
      <h1 className="mt-3 text-xl font-bold text-white">ეს გვერდი კოსმოსში დაიკარგა</h1>
      <p className="mt-2 text-sm text-gray-400">
        ბმული შეიძლება შეიცვალა ან აღარ არსებობს. სცადე მაღაზიაში მოძებნა.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 text-xs font-bold text-black transition hover:bg-yellow-400"
        >
          <Home className="h-4 w-4" /> მთავარი
        </Link>
        <Link
          href="/magazia"
          className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/10"
        >
          <Search className="h-4 w-4" /> მაღაზია
        </Link>
      </div>
    </div>
  );
}
