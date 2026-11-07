/**
 * Simple password gate for showing the site before launch.
 * Active only when SITE_PASSWORD is set (e.g. in Vercel env vars).
 */
export const LOCK_COOKIE = "astroman_access";
export const LOCK_PATH = "/locked";

/** Cookie value = SHA-256 of the password, so the password itself is never stored in the browser */
export async function accessToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`astroman:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, "0")).join("");
}
