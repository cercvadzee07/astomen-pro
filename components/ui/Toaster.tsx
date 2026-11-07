"use client";

import { X, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const ICONS = { success: CheckCircle2, error: AlertTriangle, info: Info };
const TONES = {
  success: "border-emerald-500/40 text-emerald-300",
  error: "border-rose-500/40 text-rose-300",
  info: "border-yellow-500/40 text-yellow-300",
};

export default function Toaster() {
  const { toasts, dismissToast } = useShop();
  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 flex-col gap-2"
      role="status"
      aria-live="polite"
    >
      {toasts.map((t) => {
        const Icon = ICONS[t.tone];
        return (
          <div
            key={t.id}
            className={`flex items-start gap-3 rounded-xl border bg-[#0d111d]/95 px-4 py-3 text-xs font-semibold shadow-2xl backdrop-blur-md ${TONES[t.tone]}`}
          >
            <Icon className="mt-0.5 h-4 w-4 shrink-0" />
            <span className="flex-1 text-gray-200">{t.message}</span>
            <button
              type="button"
              onClick={() => dismissToast(t.id)}
              className="text-gray-500 hover:text-white"
              aria-label="დახურვა"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
