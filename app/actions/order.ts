"use server";

import { ALL_PRODUCTS, formatPrice } from "@/lib/products";
import {
  DELIVERY_ZONES,
  PAYMENT_METHODS,
  deliveryPrice,
  normalizePhone,
  type DeliveryZone,
  type PaymentMethod,
} from "@/lib/delivery";
import { notifyShop } from "@/lib/notify";

export interface OrderInput {
  items: { id: string; quantity: number }[];
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  zone: DeliveryZone;
  city: string;
  address: string;
  payment: PaymentMethod;
  comment?: string;
  acceptTerms: boolean;
  /** honeypot — real people leave it empty */
  website?: string;
}

export type OrderResult =
  | { ok: true; orderNumber: string; total: number; demo: boolean }
  | { ok: false; error: string; fields?: Partial<Record<keyof OrderInput, string>> };

const MAX_QTY = 20;
const clean = (s: unknown, max = 200) => String(s ?? "").trim().slice(0, max);

function orderNumber() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `AST-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function placeOrder(input: OrderInput): Promise<OrderResult> {
  if (input.website) return { ok: false, error: "შეკვეთა ვერ გაიგზავნა." };

  // --- validate customer fields ---
  const fields: Partial<Record<keyof OrderInput, string>> = {};
  const firstName = clean(input.firstName, 60);
  const lastName = clean(input.lastName, 60);
  const phone = normalizePhone(clean(input.phone, 30));
  const email = clean(input.email, 120);
  const city = clean(input.city, 80);
  const address = clean(input.address, 300);
  const comment = clean(input.comment, 1000);

  if (!firstName) fields.firstName = "შეიყვანეთ სახელი";
  if (!lastName) fields.lastName = "შეიყვანეთ გვარი";
  if (!phone) fields.phone = "შეიყვანეთ სწორი ნომერი (მაგ: 599 12 34 56)";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = "ელ-ფოსტა არასწორია";
  if (!(input.zone in DELIVERY_ZONES)) fields.zone = "აირჩიეთ მიწოდების ზონა";
  if (input.zone === "regions" && !city) fields.city = "შეიყვანეთ ქალაქი / სოფელი";
  if (!address) fields.address = "შეიყვანეთ მისამართი";
  if (!(input.payment in PAYMENT_METHODS) || !PAYMENT_METHODS[input.payment].available)
    fields.payment = "აირჩიეთ გადახდის მეთოდი";
  if (!input.acceptTerms) fields.acceptTerms = "დაეთანხმეთ წესებსა და პირობებს";

  if (Object.keys(fields).length) {
    return { ok: false, error: "გთხოვთ, შეავსოთ მონიშნული ველები.", fields };
  }

  // --- price the cart on the server (never trust prices from the browser) ---
  const lines = [];
  for (const item of input.items ?? []) {
    const product = ALL_PRODUCTS.find((p) => p.id === item.id);
    const qty = Math.floor(Number(item.quantity));
    if (!product || !(qty > 0)) continue;
    if (!product.inStock) {
      return { ok: false, error: `„${product.name}“ ამჟამად არ არის მარაგში. ამოიღეთ კალათიდან.` };
    }
    lines.push({ product, qty: Math.min(qty, MAX_QTY) });
  }
  if (lines.length === 0) return { ok: false, error: "კალათა ცარიელია." };

  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const shipping = deliveryPrice(input.zone, subtotal);
  const total = subtotal + shipping;
  const number = orderNumber();

  const text = [
    `👤 ${firstName} ${lastName}`,
    `📞 ${phone}${email ? `  ✉️ ${email}` : ""}`,
    `📍 ${DELIVERY_ZONES[input.zone].label}${city ? `, ${city}` : ""} — ${address}`,
    `💳 ${PAYMENT_METHODS[input.payment].label}`,
    comment ? `📝 ${comment}` : "",
    "",
    ...lines.map(
      (l) =>
        `• ${l.product.name}${l.product.priceMax ? " (ვარიანტი დასაზუსტებელია)" : ""} × ${l.qty} = ${formatPrice(l.product.price * l.qty)}`,
    ),
    "",
    `პროდუქცია: ${formatPrice(subtotal)}`,
    `მიწოდება: ${shipping ? formatPrice(shipping) : "უფასო"}`,
    `სულ: ${formatPrice(total)}`,
  ]
    .filter((l, i, arr) => l !== "" || arr[i - 1] !== "")
    .join("\n");

  const sent = await notifyShop(`🛒 ახალი შეკვეთა ${number}`, text, { replyTo: email || undefined });
  if (!sent.demo && sent.delivered.length === 0) {
    return {
      ok: false,
      error: "შეკვეთა ვერ გაიგზავნა. სცადეთ თავიდან ან დაგვირეკეთ: 599 39 67 21.",
    };
  }

  return { ok: true, orderNumber: number, total, demo: sent.demo };
}
