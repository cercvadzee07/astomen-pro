"use server";

import { cookies } from "next/headers";
import { GATE_COOKIE, gateToken } from "@/lib/site-gate";

const MONTH = 60 * 60 * 24 * 30;

export async function unlockSite(password: string): Promise<{ ok: boolean }> {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return { ok: true };

  // small delay makes guessing slower
  await new Promise((r) => setTimeout(r, 600));
  if (password !== expected) return { ok: false };

  (await cookies()).set(GATE_COOKIE, await gateToken(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MONTH,
  });
  return { ok: true };
}
