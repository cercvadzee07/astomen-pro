"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";

type TabKey = "desc" | "specs" | "shipping";

const TABS: { key: TabKey; label: string }[] = [
  { key: "desc", label: "აღწერა" },
  { key: "specs", label: "მახასიათებლები" },
  { key: "shipping", label: "მიწოდების პირობები" },
];

export default function ProductTabs({
  description,
  specs,
}: {
  description: string;
  /** [label, value] rows */
  specs: [string, string][];
}) {
  const [active, setActive] = useState<TabKey>("desc");

  return (
    <section className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0d111d]/85 p-6 shadow-2xl backdrop-blur-xl md:p-8">
      <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4 text-xs font-black uppercase tracking-wider" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-xl px-4 py-2.5 transition-all ${
              active === tab.key
                ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-6 text-xs leading-relaxed text-gray-300 sm:text-sm" role="tabpanel">
        {active === "desc" && (
          <div className="space-y-6">
            <p className="whitespace-pre-line">{description}</p>
            <div className="flex items-center gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 font-bold text-yellow-400">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>პროდუქტი მოწმდება გაგზავნამდე. უსაფრთხო შეფუთვა გარანტირებულია.</span>
            </div>
          </div>
        )}

        {active === "specs" && (
          <div className="max-w-xl space-y-2 rounded-2xl border border-white/5 bg-white/5 p-4">
            {specs.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-white/5 py-1 last:border-0">
                <span className="text-gray-400">{label}:</span>
                <span className="text-right font-bold text-white">{value}</span>
              </div>
            ))}
          </div>
        )}

        {active === "shipping" && (
          <div className="max-w-2xl space-y-6">
            <div>
              <h3 className="text-base font-black uppercase tracking-wider text-white">
                საკურიერო მომსახურება
              </h3>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                მიწოდება თბილისში ხდება 2 სამუშაო დღეში, რეგიონებში: 3-5 სამუშაო დღე.
              </p>
              <p className="mt-3 text-xs text-gray-400">
                ექსპრეს მომსახურების შემთხვევაში შეკვეთა უნდა გაფორმდეს 13:00 საათამდე,
                ფეისბუქ მესენჯერის ან ტელეფონის დახმარებით.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-base font-black uppercase tracking-wider text-white">
                მომსახურების ფასები
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs font-semibold text-gray-300 sm:text-sm">
                <li><span className="text-yellow-400">•</span> თბილისი - 7 ლარი</li>
                <li><span className="text-yellow-400">•</span> რეგიონები - 10 ლარი</li>
                <li><span className="text-yellow-400">•</span> 250 ლარის ზევით - უფასო</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
