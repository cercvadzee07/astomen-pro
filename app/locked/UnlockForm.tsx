"use client";

import { useState, useTransition } from "react";
import { Loader2, Lock } from "lucide-react";
import LogoMark from "@/components/layout/LogoMark";
import { unlock } from "@/app/actions/unlock";

export default function UnlockForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    startTransition(async () => {
      const res = await unlock(password);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      const next = new URLSearchParams(window.location.search).get("next");
      // only allow internal paths
      window.location.href = next && next.startsWith("/") && !next.startsWith("//") ? next : "/";
    });
  };

  return (
    // covers the shop header/footer from the root layout
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070a12] px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#0d111d]/90 p-8 text-center shadow-2xl backdrop-blur-xl"
      >
        <LogoMark className="mx-auto mb-4 h-14 w-auto text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.35)]" />
        <p className="text-xl font-black tracking-[0.2em] text-white">ASTROMAN</p>
        <p className="mt-2 text-xs text-gray-400">საიტი მზადდება. შესასვლელად შეიყვანე პაროლი.</p>

        <div className="relative mt-6">
          <Lock className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            autoComplete="current-password"
            placeholder="პაროლი"
            aria-label="პაროლი"
            aria-invalid={Boolean(error)}
            className={`w-full rounded-xl border bg-[#151b2b] py-3 pr-4 pl-10 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/10 ${
              error ? "border-rose-500/60" : "border-white/10 focus:border-yellow-500/50"
            }`}
          />
        </div>
        {error && (
          <p role="alert" className="mt-2 text-xs font-semibold text-rose-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending || !password}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 text-sm font-black text-black transition hover:bg-yellow-400 disabled:opacity-50"
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          შესვლა
        </button>
      </form>
    </div>
  );
}
