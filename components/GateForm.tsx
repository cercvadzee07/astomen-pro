"use client";

import { useState, useTransition } from "react";
import { Eye, EyeOff, Loader2, Lock } from "lucide-react";
import { unlockSite } from "@/app/actions/gate";

export default function GateForm() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [pending, startTransition] = useTransition();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    startTransition(async () => {
      const { ok } = await unlockSite(password);
      if (!ok) {
        setError(true);
        return;
      }
      // only allow going back to a page on this site
      const next = new URLSearchParams(window.location.search).get("next") ?? "/";
      window.location.href = next.startsWith("/") && !next.startsWith("//") ? next : "/";
    });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="relative">
        <Lock className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          autoComplete="current-password"
          placeholder="პაროლი"
          aria-label="პაროლი"
          aria-invalid={error}
          className={`w-full rounded-xl border bg-[#151b2b] py-3.5 pr-12 pl-11 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/10 ${
            error ? "border-rose-500/60" : "border-white/10 focus:border-yellow-500/50"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1.5 text-gray-500 hover:text-white"
          aria-label={show ? "დამალვა" : "ჩვენება"}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {error && (
        <p role="alert" className="text-xs font-semibold text-rose-400">
          პაროლი არასწორია
        </p>
      )}
      <button
        type="submit"
        disabled={pending || !password}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3.5 text-sm font-black text-black transition hover:bg-yellow-400 disabled:opacity-50"
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        შესვლა
      </button>
    </form>
  );
}
