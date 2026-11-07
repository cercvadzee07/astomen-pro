import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-[#0d111d]/70 px-6 py-16 text-center">
      <ShoppingBag className="mb-4 h-12 w-12 text-gray-600" />
      <p className="text-sm font-semibold text-gray-300">კალათა ცარიელია</p>
      <p className="mt-1 text-xs text-gray-500">დაამატე პროდუქტები მაღაზიიდან.</p>
      <Link
        href="/magazia"
        className="mt-6 rounded-xl bg-yellow-500 px-6 py-3 text-xs font-bold text-black transition hover:bg-yellow-400"
      >
        მაღაზიაში გადასვლა
      </Link>
    </div>
  );
}
