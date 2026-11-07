import { Truck } from "lucide-react";
import { FREE_DELIVERY_FROM } from "@/lib/delivery";
import { formatPrice } from "@/lib/products";

/** "X₾ left until free delivery" progress bar */
export default function FreeDeliveryBar({ subtotal }: { subtotal: number }) {
  const left = FREE_DELIVERY_FROM - subtotal;
  const pct = Math.min(100, (subtotal / FREE_DELIVERY_FROM) * 100);
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
      <p className="mb-2 flex items-center gap-2 text-xs text-gray-300">
        <Truck className="h-4 w-4 shrink-0 text-yellow-400" />
        {left > 0 ? (
          <span>
            უფასო მიტანამდე დაგაკლდა <b className="text-white">{formatPrice(left)}</b>
          </span>
        ) : (
          <span className="font-semibold text-emerald-400">მიტანა უფასოა!</span>
        )}
      </p>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-yellow-400 transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
