"use server";

import { normalizePhone } from "@/lib/delivery";
import { notifyShop } from "@/lib/notify";

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  /** honeypot */
  website?: string;
}

export type ContactResult = { ok: true; demo: boolean } | { ok: false; error: string };

const clean = (s: unknown, max = 200) => String(s ?? "").trim().slice(0, max);

export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  if (input.website) return { ok: false, error: "შეტყობინება ვერ გაიგზავნა." };

  const name = clean(input.name, 80);
  const email = clean(input.email, 120);
  const phoneRaw = clean(input.phone, 30);
  const phone = phoneRaw ? normalizePhone(phoneRaw) : "";
  const company = clean(input.company, 100);
  const message = clean(input.message, 3000);

  if (!name || !message) return { ok: false, error: "შეავსეთ სახელი და წერილი." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "ელ-ფოსტა არასწორია." };
  if (phoneRaw && !phone) return { ok: false, error: "ტელეფონის ნომერი არასწორია." };

  const text = [
    `👤 ${name}${company ? ` (${company})` : ""}`,
    `✉️ ${email}${phone ? `  📞 ${phone}` : ""}`,
    "",
    message,
  ].join("\n");

  const sent = await notifyShop("✉️ ახალი წერილი საიტიდან", text, { replyTo: email });
  if (!sent.demo && sent.delivered.length === 0) {
    return { ok: false, error: "წერილი ვერ გაიგზავნა. დაგვიკავშირდით ტელეფონით: 599 39 67 21." };
  }
  return { ok: true, demo: sent.demo };
}
