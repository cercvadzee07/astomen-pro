/**
 * Server-side only (imported from server actions).
 * Sends shop notifications (new orders, contact messages) to the owner.
 * Configure one or both channels in .env.local / Vercel env vars:
 *
 *   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID       → message in Telegram
 *   RESEND_API_KEY, NOTIFY_EMAIL_TO, NOTIFY_EMAIL_FROM → e-mail via resend.com
 *
 * With nothing configured the message is only logged (demo mode).
 */

export interface NotifyResult {
  /** channels that accepted the message */
  delivered: string[];
  /** true when no channel is configured at all */
  demo: boolean;
}

async function sendTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });
  if (!res.ok) console.error("Telegram notify failed:", res.status, await res.text());
  return res.ok;
}

async function sendEmail(subject: string, text: string, replyTo?: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  if (!key || !to) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.NOTIFY_EMAIL_FROM ?? "Astroman <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      subject,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) console.error("E-mail notify failed:", res.status, await res.text());
  return res.ok;
}

export async function notifyShop(
  subject: string,
  text: string,
  opts: { replyTo?: string } = {},
): Promise<NotifyResult> {
  const hasTelegram = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
  const hasEmail = Boolean(process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL_TO);

  if (!hasTelegram && !hasEmail) {
    console.info(`[notify — demo mode]\n${subject}\n${text}`);
    return { delivered: [], demo: true };
  }

  const [tg, mail] = await Promise.all([
    hasTelegram ? sendTelegram(`${subject}\n\n${text}`).catch(() => false) : false,
    hasEmail ? sendEmail(subject, text, opts.replyTo).catch(() => false) : false,
  ]);
  return {
    delivered: [tg && "telegram", mail && "email"].filter(Boolean) as string[],
    demo: false,
  };
}
