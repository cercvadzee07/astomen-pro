"use server";

import { cookies } from "next/headers";
import { LOCK_COOKIE, accessToken } from "@/lib/site-lock";

export type UnlockResult = { ok: true } | { ok: false; error: string };

export async function unlock(password: string): Promise<UnlockResult> {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return { ok: true };

  // small delay makes guessing slower
  await new Promise((r) => setTimeout(r, 400));

  const [given, wanted] = await Promise.all([accessToken(String(password ?? "")), accessToken(expected)]);
  if (given !== wanted) return { ok: false, error: "პაროლი არასწორია" };

  (await cookies()).set(LOCK_COOKIE, wanted, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return { ok: true };
}
