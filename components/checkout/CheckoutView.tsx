"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Loader2, Lock } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatPrice } from "@/lib/products";
import {
  DELIVERY_ZONES,
  PAYMENT_METHODS,
  deliveryPrice,
  type DeliveryZone,
  type PaymentMethod,
} from "@/lib/delivery";
import { placeOrder, type OrderInput } from "@/app/actions/order";
import EmptyCart from "./EmptyCart";
import FreeDeliveryBar from "./FreeDeliveryBar";

type Fields = Partial<Record<keyof OrderInput, string>>;

const inputCls =
  "w-full rounded-xl border bg-[#151b2b] px-4 py-3 text-sm text-white placeholder-gray-600 transition focus:bg-[#1a2133] focus:outline-none focus:ring-4 focus:ring-yellow-500/10";
const labelCls = "mb-1.5 block pl-1 text-[11px] font-bold uppercase tracking-wider text-gray-400";

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className={labelCls}>{label}</span>
      {children}
      {error && <span className="mt-1 block pl-1 text-[11px] font-semibold text-rose-400">{error}</span>}
    </label>
  );
}

const border = (err?: string) => (err ? "border-rose-500/60" : "border-white/5 focus:border-yellow-500/50");

export default function CheckoutView() {
  const { cart, totalCartPrice, clearCart, hydrated } = useShop();
  const [zone, setZone] = useState<DeliveryZone>("tbilisi");
  const [payment, setPayment] = useState<PaymentMethod>("transfer");
  const [fields, setFields] = useState<Fields>({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<{ orderNumber: string; total: number; demo: boolean } | null>(null);
  const [pending, startTransition] = useTransition();

  const shipping = deliveryPrice(zone, totalCartPrice);
  const total = totalCartPrice + shipping;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "");
    const input: OrderInput = {
      items: cart.map((i) => ({ id: i.product.id, quantity: i.quantity })),
      firstName: get("firstName"),
      lastName: get("lastName"),
      phone: get("phone"),
      email: get("email"),
      zone,
      city: zone === "tbilisi" ? "თბილისი" : get("city"),
      address: get("address"),
      payment,
      comment: get("comment"),
      acceptTerms: f.get("acceptTerms") === "on",
      website: get("website"),
    };

    setError("");
    startTransition(async () => {
      const res = await placeOrder(input);
      if (res.ok) {
        setSuccess(res);
        clearCart();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(res.error);
        setFields(res.fields ?? {});
      }
    });
  };

  if (success) {
    return (
      <div className="mx-auto w-full max-w-xl px-4 py-16 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>
        <h1 className="text-2xl font-black text-white">მადლობა, შეკვეთა მიღებულია!</h1>
        <p className="mt-3 text-sm text-gray-300">
          შეკვეთის ნომერი: <b className="text-yellow-400">{success.orderNumber}</b>
          <br />
          ჯამი: <b className="text-white">{formatPrice(success.total)}</b>
        </p>
        <p className="mt-3 text-sm text-gray-400">
          ოპერატორი მალე დაგიკავშირდებათ შეკვეთის დასადასტურებლად.
        </p>
        {success.demo && (
          <p className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-xs text-yellow-300">
            დემო რეჟიმი: შეტყობინების არხი (Telegram / ელ-ფოსტა) ჯერ არ არის დაკავშირებული, ამიტომ შეკვეთა არსად გაიგზავნა.
          </p>
        )}
        <Link
          href="/magazia"
          className="mt-8 inline-block rounded-xl bg-yellow-500 px-6 py-3 text-xs font-bold text-black transition hover:bg-yellow-400"
        >
          შოპინგის გაგრძელება
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:px-8">
      <nav className="mb-4 flex items-center gap-2 text-xs text-gray-400">
        <Link href="/kalata" className="hover:text-white">კალათა</Link>
        <span>/</span>
        <span className="font-bold text-white">შეკვეთის გაფორმება</span>
      </nav>
      <h1 className="mb-6 text-2xl font-black text-white">შეკვეთის გაფორმება</h1>

      {!hydrated ? null : cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {/* Contact */}
            <section className="rounded-2xl border border-white/10 bg-[#0d111d]/80 p-5 md:p-6">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-white">1. საკონტაქტო ინფორმაცია</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="სახელი *" error={fields.firstName}>
                  <input name="firstName" autoComplete="given-name" className={`${inputCls} ${border(fields.firstName)}`} />
                </Field>
                <Field label="გვარი *" error={fields.lastName}>
                  <input name="lastName" autoComplete="family-name" className={`${inputCls} ${border(fields.lastName)}`} />
                </Field>
                <Field label="ტელეფონი *" error={fields.phone}>
                  <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="5XX XX XX XX" className={`${inputCls} ${border(fields.phone)}`} />
                </Field>
                <Field label="ელ-ფოსტა" error={fields.email}>
                  <input name="email" type="email" autoComplete="email" placeholder="სურვილისამებრ" className={`${inputCls} ${border(fields.email)}`} />
                </Field>
              </div>
            </section>

            {/* Delivery */}
            <section className="rounded-2xl border border-white/10 bg-[#0d111d]/80 p-5 md:p-6">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-white">2. მიწოდება</h2>
              <div className="mb-4 grid grid-cols-2 gap-3">
                {(Object.keys(DELIVERY_ZONES) as DeliveryZone[]).map((z) => {
                  const info = DELIVERY_ZONES[z];
                  const price = deliveryPrice(z, totalCartPrice);
                  return (
                    <button
                      key={z}
                      type="button"
                      onClick={() => setZone(z)}
                      aria-pressed={zone === z}
                      className={`rounded-xl border p-3 text-left transition ${
                        zone === z ? "border-yellow-500/60 bg-yellow-500/10" : "border-white/10 bg-white/[0.03] hover:border-white/20"
                      }`}
                    >
                      <span className="block text-sm font-bold text-white">{info.label}</span>
                      <span className="block text-[11px] text-gray-400">{info.days}</span>
                      <span className="mt-1 block text-xs font-bold text-yellow-400">
                        {price ? formatPrice(price) : "უფასო"}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {zone === "regions" && (
                  <Field label="ქალაქი / სოფელი *" error={fields.city}>
                    <input name="city" autoComplete="address-level2" className={`${inputCls} ${border(fields.city)}`} />
                  </Field>
                )}
                <Field label="მისამართი *" error={fields.address}>
                  <input name="address" autoComplete="street-address" placeholder="ქუჩა, სახლი, ბინა" className={`${inputCls} ${border(fields.address)}`} />
                </Field>
                <Field label="კომენტარი">
                  <textarea name="comment" rows={3} placeholder="მაგ: სასურველი დრო, სადარბაზოს კოდი..." className={`${inputCls} resize-none ${border()}`} />
                </Field>
              </div>
            </section>

            {/* Payment */}
            <section className="rounded-2xl border border-white/10 bg-[#0d111d]/80 p-5 md:p-6">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-white">3. გადახდა</h2>
              <div className="space-y-2.5" role="radiogroup">
                {(Object.keys(PAYMENT_METHODS) as PaymentMethod[]).map((m) => {
                  const info = PAYMENT_METHODS[m];
                  return (
                    <label
                      key={m}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 transition ${
                        !info.available
                          ? "cursor-not-allowed border-white/5 opacity-50"
                          : payment === m
                            ? "cursor-pointer border-yellow-500/60 bg-yellow-500/10"
                            : "cursor-pointer border-white/10 hover:border-white/20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={m}
                        disabled={!info.available}
                        checked={payment === m}
                        onChange={() => setPayment(m)}
                        className="accent-yellow-500"
                      />
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-white">{info.label}</span>
                        <span className="block text-[11px] text-gray-400">{info.note}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
              {fields.payment && <p className="mt-2 text-[11px] font-semibold text-rose-400">{fields.payment}</p>}
            </section>

            {/* honeypot — hidden from people, bots fill it */}
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          </div>

          {/* Summary */}
          <aside className="lg:col-span-5">
            <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0d111d]/80 p-5 md:p-6 lg:sticky lg:top-28">
              <h2 className="text-sm font-black uppercase tracking-wider text-white">შენი შეკვეთა</h2>
              <ul className="max-h-72 space-y-3 overflow-y-auto pr-1">
                {cart.map(({ product, quantity }) => (
                  <li key={product.id} className="flex items-center gap-3">
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white/5">
                      <Image src={product.image} alt="" fill sizes="48px" className="object-cover" />
                      <span className="absolute right-0 bottom-0 rounded-tl-md bg-black/80 px-1 text-[10px] font-bold text-white">
                        ×{quantity}
                      </span>
                    </span>
                    <span className="min-w-0 flex-1 truncate text-xs text-gray-200">{product.name}</span>
                    <span className="shrink-0 text-xs font-bold text-white">{formatPrice(product.price * quantity)}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2 border-t border-white/10 pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">პროდუქცია</span>
                  <span className="text-white">{formatPrice(totalCartPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">მიწოდება ({DELIVERY_ZONES[zone].label})</span>
                  <span className="text-white">{shipping ? formatPrice(shipping) : "უფასო"}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 text-base">
                  <span className="font-bold text-white">სულ</span>
                  <span className="font-black text-yellow-400">{formatPrice(total)}</span>
                </div>
              </div>

              <FreeDeliveryBar subtotal={totalCartPrice} />

              <label className="flex items-start gap-2.5 text-xs text-gray-300">
                <input type="checkbox" name="acceptTerms" className="mt-0.5 accent-yellow-500" />
                <span>
                  გავეცანი და ვეთანხმები{" "}
                  <Link href="/wesebi-da-pirobebi" target="_blank" className="text-yellow-400 underline underline-offset-2">
                    წესებსა და პირობებს
                  </Link>
                  {fields.acceptTerms && <span className="mt-1 block font-semibold text-rose-400">{fields.acceptTerms}</span>}
                </span>
              </label>

              {error && (
                <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs font-semibold text-rose-300" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3.5 text-sm font-black text-black transition hover:bg-yellow-400 disabled:opacity-60"
              >
                {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
                {pending ? "იგზავნება..." : "შეკვეთის დადასტურება"}
              </button>
            </div>
          </aside>
        </form>
      )}
    </div>
  );
}
