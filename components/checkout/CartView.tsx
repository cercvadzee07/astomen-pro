"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trash2 } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatPrice } from "@/lib/products";
import QuantityStepper from "./QuantityStepper";
import EmptyCart from "./EmptyCart";
import FreeDeliveryBar from "./FreeDeliveryBar";

export default function CartView() {
  const { cart, updateQuantity, removeFromCart, totalCartPrice, totalCartCount, hydrated } = useShop();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:px-8">
      <h1 className="mb-6 text-2xl font-black text-white">
        კალათა {hydrated && totalCartCount > 0 && <span className="text-gray-500">({totalCartCount})</span>}
      </h1>

      {!hydrated ? null : cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <ul className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-[#0d111d]/80 lg:col-span-8">
            {cart.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-4 p-4">
                <Link
                  href={`/product/${product.id}`}
                  className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#070a12] sm:h-24 sm:w-24"
                >
                  <Image src={product.image} alt={product.name} fill sizes="96px" className="object-cover" />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-500/80">
                        {product.categoryName}
                      </p>
                      <Link
                        href={`/product/${product.id}`}
                        className="line-clamp-2 text-sm font-semibold text-white hover:text-yellow-400"
                      >
                        {product.name}
                      </Link>
                      {product.priceMax && (
                        <p className="mt-1 text-[11px] text-gray-500">ვარიანტს ოპერატორი დაგიზუსტებთ</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="shrink-0 rounded-lg p-1.5 text-gray-500 transition hover:bg-white/5 hover:text-rose-400"
                      aria-label="წაშლა"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <QuantityStepper value={quantity} onChange={(q) => updateQuantity(product.id, q)} />
                    <div className="text-right">
                      {quantity > 1 && (
                        <p className="text-[10px] text-gray-500">{formatPrice(product.price)} / ც</p>
                      )}
                      <p className="text-sm font-bold text-white">{formatPrice(product.price * quantity)}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="lg:col-span-4">
            <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0d111d]/80 p-5 lg:sticky lg:top-28">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">პროდუქცია</span>
                <span className="font-bold text-white">{formatPrice(totalCartPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">მიწოდება</span>
                <span className="text-gray-300">შემდეგ ეტაპზე</span>
              </div>
              <FreeDeliveryBar subtotal={totalCartPrice} />
              <Link
                href="/shekveta"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3.5 text-sm font-black text-black transition hover:bg-yellow-400"
              >
                შეკვეთის გაფორმება <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/magazia" className="block text-center text-xs text-gray-400 hover:text-white">
                ← შოპინგის გაგრძელება
              </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
