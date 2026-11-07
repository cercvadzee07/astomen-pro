import type { Metadata } from "next";
import LogoMark from "@/components/layout/LogoMark";
import GateForm from "@/components/GateForm";

export const metadata: Metadata = {
  title: "შესვლა",
  robots: { index: false, follow: false },
};

export default function GatePage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#0d111d]/90 p-8 text-center shadow-2xl backdrop-blur-xl">
        <LogoMark className="mx-auto mb-5 h-12 w-auto text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.35)]" />
        <h1 className="text-xl font-black text-white">ASTROMAN</h1>
        <p className="mt-2 mb-6 text-xs text-gray-400">
          საიტი ჯერ მზადდება. სანახავად შეიყვანე პაროლი.
        </p>
        <GateForm />
      </div>
    </div>
  );
}
