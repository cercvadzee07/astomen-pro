"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Scale,
  Check,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ShopOverlays() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalCartPrice,
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    compareList,
    removeFromCompare,
    clearCompare,
  } = useShop();

  const [modalQty, setModalQty] = useState(1);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <>
      {/* 1. SLIDE-OVER კალათის პანელი */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />
          <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#0d111d] border-l border-white/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-yellow-400" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  კალათა ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-xl p-1.5 text-gray-400 hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 divide-y divide-white/5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-12 w-12 text-gray-600 mb-3" />
                  <p className="text-sm text-gray-400 font-semibold">
                    თქვენი კალათა ცარიელია
                  </p>
                </div>
              ) : (
                cart.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-4 py-4 first:pt-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 rounded-xl border border-white/10 bg-[#070a12] object-cover shrink-0"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between gap-2">
                        <h4 className="text-xs font-semibold text-white line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-gray-500 hover:text-rose-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#141824] p-1">
                          <button
                            onClick={() =>
                              updateQuantity(product.id, quantity - 1)
                            }
                            className="p-1 hover:text-yellow-400"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold">
                            {quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(product.id, quantity + 1)
                            }
                            className="p-1 hover:text-yellow-400"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="text-xs font-bold text-yellow-400">
                          {(product.price * quantity).toFixed(2)}₾
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-white/10 p-5 bg-[#070a12]/50">
                <div className="mb-4 flex justify-between text-sm">
                  <span className="text-gray-400">სულ ჯამი:</span>
                  <span className="text-base font-bold text-white">
                    {totalCartPrice.toFixed(2)}₾
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 text-xs font-bold text-black transition hover:bg-yellow-400"
                >
                  <span>შეკვეთის გაფორმება</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setQuickViewProduct(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d111d] p-6 shadow-2xl">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 rounded-xl p-1.5 text-gray-400 hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-[#070a12]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-500/80">
                    {quickViewProduct.categoryName}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-white">
                    {quickViewProduct.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xl font-bold text-white">
                      {quickViewProduct.price.toFixed(2)}₾
                    </span>
                    {quickViewProduct.oldPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        {quickViewProduct.oldPrice.toFixed(2)}₾
                      </span>
                    )}
                    <span
                      className={`text-[11px] font-semibold ${
                        quickViewProduct.inStock
                          ? "text-emerald-400"
                          : "text-gray-500"
                      }`}
                    >
                      {quickViewProduct.inStock ? "მარაგშია" : "ამოწურულია"}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                    მაღალი ხარისხის ოპტიკური და ასტრონომიული ინსტრუმენტი
                    ოფიციალური გარანტიით.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-xl border border-white/10 bg-[#141824] p-1">
                      <button
                        onClick={() => setModalQty((q) => Math.max(1, q - 1))}
                        className="px-2 py-1 text-gray-400 hover:text-white"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold">
                        {modalQty}
                      </span>
                      <button
                        onClick={() => setModalQty((q) => q + 1)}
                        className="px-2 py-1 text-gray-400 hover:text-white"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <button
                      disabled={!quickViewProduct.inStock}
                      onClick={() => {
                        addToCart(quickViewProduct, modalQty);
                        setQuickViewProduct(null);
                      }}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-500 py-2.5 text-xs font-bold text-black hover:bg-yellow-400 disabled:opacity-40"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>კალათაში დამატება</span>
                    </button>
                  </div>

                  <Link
                    href={`/product/${quickViewProduct.id}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="text-center text-xs text-gray-400 hover:text-white underline underline-offset-4"
                  >
                    სრული გვერდის ნახვა
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. მცურავი შედარების პანელი (COMPARE BAR & MODAL) */}
      {compareList.length > 0 && (
        <>
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 rounded-2xl border border-yellow-500/30 bg-[#0d111d]/95 px-6 py-3 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Scale className="h-5 w-5 text-yellow-400" />
              <span className="text-xs font-semibold text-white">
                შედარება ({compareList.length}/4) —{" "}
                {compareList[0].categoryName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCompareOpen(true)}
                className="rounded-xl bg-yellow-500 px-3 py-1.5 text-xs font-bold text-black hover:bg-yellow-400"
              >
                შედარება
              </button>
              <button
                onClick={clearCompare}
                className="text-xs text-gray-400 hover:text-rose-400"
              >
                გასუფთავება
              </button>
            </div>
          </div>

          {/* შედარების ცხრილის მოდალი */}
          {isCompareOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                onClick={() => setIsCompareOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />
              <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d111d] p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    პროდუქტების შედარება: {compareList[0].categoryName}
                  </h3>
                  <button
                    onClick={() => setIsCompareOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                  {compareList.map((p) => (
                    <div
                      key={p.id}
                      className="flex flex-col rounded-xl border border-white/5 bg-[#141824] p-4 relative"
                    >
                      <button
                        onClick={() => removeFromCompare(p.id)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-rose-400"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-32 w-full object-cover rounded-lg mb-3"
                      />
                      <h4 className="text-xs font-bold text-white line-clamp-2 min-h-8">
                        {p.name}
                      </h4>
                      <div className="mt-2 text-sm font-bold text-yellow-400">
                        {p.price.toFixed(2)}₾
                      </div>
                      <div className="mt-1 text-[11px] text-gray-400">
                        {p.inStock ? "მარაგშია" : "ამოწურულია"}
                      </div>
                      <button
                        disabled={!p.inStock}
                        onClick={() => addToCart(p)}
                        className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-yellow-500 py-2 text-xs font-bold text-black hover:bg-yellow-400 disabled:opacity-40"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>კალათაში</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
