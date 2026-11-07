/** Public site address — set NEXT_PUBLIC_SITE_URL on Vercel (e.g. the preview URL), defaults to astroman.ge */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://astroman.ge").replace(/\/$/, "");
