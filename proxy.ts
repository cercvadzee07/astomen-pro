import { NextResponse, type NextRequest } from "next/server";
import { GATE_COOKIE, GATE_PATH, gateToken } from "@/lib/site-gate";

export async function proxy(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return NextResponse.next(); // gate is off

  const cookie = request.cookies.get(GATE_COOKIE)?.value;
  if (cookie && cookie === (await gateToken(password))) return NextResponse.next();

  // not unlocked → send to the password page, remembering where they wanted to go
  const url = request.nextUrl.clone();
  const next = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  url.pathname = GATE_PATH;
  url.search = next === "/" ? "" : `?next=${encodeURIComponent(next)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // everything except Next.js assets, icons, robots.txt and the password page itself
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|robots.txt|shesvla).*)",
  ],
};
