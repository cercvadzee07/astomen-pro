"use client";

import { Share2 } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ShareButton({ title }: { title: string }) {
  const { showToast } = useShop();

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        showToast("სტატიის ბმული დაკოპირებულია!", "success");
      }
    } catch {
      /* user closed the share sheet */
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1320]/60 px-3.5 py-2 text-xs font-bold text-gray-300 backdrop-blur-md transition hover:border-yellow-400 hover:text-white"
    >
      <Share2 className="h-3.5 w-3.5" />
      გაზიარება
    </button>
  );
}
