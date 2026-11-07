/**
 * Optional password gate for the whole site (used while the new site is a private demo).
 * Turn it on by setting SITE_PASSWORD (e.g. in Vercel → Settings → Environment Variables).
 * Leave it empty and the site is public. Changing the password logs everyone out.
 */
export const GATE_COOKIE = "astroman_access";
export const GATE_PATH = "/shesvla";

/** Value stored in the cookie: a hash, so the password itself never sits in the browser */
export async function gateToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`${password}:astroman-site-gate`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, "0")).join("");
}
