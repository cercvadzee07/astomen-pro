"use client";

import { Minus, Plus } from "lucide-react";

export default function QuantityStepper({
  value,
  onChange,
  max = 20,
}: {
  value: number;
  onChange: (next: number) => void;
  max?: number;
}) {
  return (
    <div className="flex items-center rounded-xl border border-white/10 bg-[#141824] p-1">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        className="rounded-lg p-1.5 text-gray-400 transition hover:bg-white/5 hover:text-white"
        aria-label="შემცირება"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="w-8 text-center text-xs font-bold text-white" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className="rounded-lg p-1.5 text-gray-400 transition hover:bg-white/5 hover:text-white disabled:opacity-30"
        aria-label="გაზრდა"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}
