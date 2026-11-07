import type { Metadata } from "next";
import { FileText } from "lucide-react";
import terms from "@/data/terms.json";

export const metadata: Metadata = {
  title: "წესები და პირობები",
  description: "შპს „ასტრომანი“-ს მომსახურების, მიწოდების, დაბრუნებისა და გარანტიის პირობები.",
};

type ListItem = { text: string; items?: string[] };
type Block = { type: "p"; text: string } | { type: "list"; items: ListItem[] };
interface Terms {
  intro: Block[];
  sections: { title: string; blocks: Block[] }[];
}

const data = terms as Terms;
const anchor = (i: number) => `section-${i + 1}`;

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i} className="whitespace-pre-line">
            {b.text}
          </p>
        ) : (
          <ul key={i} className="list-disc space-y-2 pl-5 marker:text-yellow-500">
            {b.items.map((item, j) => (
              <li key={j}>
                {item.text}
                {item.items && (
                  <ul className="mt-2 list-[circle] space-y-1 pl-5 text-gray-400">
                    {item.items.map((sub, k) => (
                      <li key={k}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:px-8">
      <header className="mb-8">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3.5 py-1 text-xs font-bold text-yellow-400">
          <FileText className="h-3.5 w-3.5" /> დოკუმენტი
        </span>
        <h1 className="text-2xl font-black text-white sm:text-3xl">წესები და პირობები</h1>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Table of contents */}
        <aside className="shrink-0 lg:w-72">
          <nav className="rounded-2xl border border-white/10 bg-[#0d111d]/80 p-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">სარჩევი</p>
            <ol className="space-y-0.5 text-xs">
              {data.sections.map((s, i) => (
                <li key={s.title}>
                  <a
                    href={`#${anchor(i)}`}
                    className="block rounded-lg px-2 py-1.5 text-gray-300 transition hover:bg-white/5 hover:text-yellow-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 flex-1 space-y-8 rounded-2xl border border-white/10 bg-[#0d111d]/80 p-6 text-sm leading-relaxed text-gray-300 md:p-8">
          <div className="space-y-4 border-b border-white/10 pb-6">
            <Blocks blocks={data.intro} />
          </div>
          {data.sections.map((s, i) => (
            <section key={s.title} id={anchor(i)} className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-black text-white">{s.title}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
