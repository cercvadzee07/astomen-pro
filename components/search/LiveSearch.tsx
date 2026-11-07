"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Loader2, Search, X } from "lucide-react";
import { buildIndex, search, type SearchItem } from "@/lib/search";
import { SEARCH_EVENT } from "@/lib/events";

const MAX_RESULTS = 6;
const QUICK_LINKS = [
  { label: "ტელესკოპი", href: "/category/teleskopi" },
  { label: "პროექტორები", href: "/category/ganateba" },
  { label: "მაგნიტური სანათები", href: "/category/magniturisanatebi" },
  { label: "ფასდაკლებები", href: "/magazia?sale=1" },
];

// shared by every search box on the page; fetched once
let indexPromise: Promise<SearchItem[]> | null = null;
function loadIndex() {
  indexPromise ??= fetch("/api/search-index")
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => {
      indexPromise = null; // allow a retry on the next focus
      return [];
    });
  return indexPromise;
}

const price = (i: SearchItem) =>
  i.priceMax ? `${i.price.toFixed(2)} – ${i.priceMax.toFixed(2)}₾` : `${i.price.toFixed(2)}₾`;

export default function LiveSearch({
  autoFocus = false,
  onDone,
  className = "",
}: {
  autoFocus?: boolean;
  /** Called after the user picks a result or submits (e.g. to close the mobile menu) */
  onDone?: () => void;
  className?: string;
}) {
  const router = useRouter();
  const wrapRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<SearchItem[] | null>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);

  const index = useMemo(() => (items ? buildIndex(items) : []), [items]);
  const results = useMemo(() => search(index, query), [index, query]);
  const shown = results.slice(0, MAX_RESULTS);
  const loading = open && query.trim() !== "" && items === null;

  const ensureLoaded = () => {
    if (items === null) loadIndex().then(setItems);
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
      ensureLoaded();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFocus]);

  // close when clicking outside
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const finish = () => {
    setOpen(false);
    setHighlight(-1);
    inputRef.current?.blur();
    onDone?.();
  };

  const goToProduct = (id: string) => {
    router.push(`/product/${id}`);
    finish();
  };

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (highlight >= 0 && shown[highlight]) return goToProduct(shown[highlight].id);
    const q = query.trim();
    router.push(q ? `/magazia?q=${encodeURIComponent(q)}` : "/magazia");
    // the shop page may already be open — tell it about the new query
    window.dispatchEvent(new CustomEvent(SEARCH_EVENT, { detail: q }));
    finish();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(shown.length - 1, h + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(-1, h - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const hasQuery = query.trim() !== "";

  return (
    <form
      ref={wrapRef}
      role="search"
      onSubmit={submit}
      className={`relative flex w-full ${className}`}
    >
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlight(-1);
          }}
          onFocus={() => {
            ensureLoaded();
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          placeholder="მოძებნე ტელესკოპი, სანათი, საჩუქარი..."
          aria-label="პროდუქტის ძიება"
          aria-expanded={open}
          aria-controls="live-search-results"
          aria-autocomplete="list"
          role="combobox"
          autoComplete="off"
          className="search-input h-11 w-full rounded-l-xl pr-9 pl-10 text-sm focus:ring-1 focus:ring-yellow-500/50 [&::-webkit-search-cancel-button]:hidden"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:text-white"
            aria-label="გასუფთავება"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="flex h-11 items-center justify-center rounded-r-xl bg-yellow-500 px-5 text-black transition hover:bg-yellow-400 active:scale-95"
        aria-label="ძიება"
      >
        <Search className="h-4 w-4 stroke-[2.5]" />
      </button>

      {open && (
        <div
          id="live-search-results"
          className="absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101c]/97 shadow-2xl backdrop-blur-2xl"
        >
          {!hasQuery && (
            <div className="p-4">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                პოპულარული
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={finish}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300 transition hover:border-yellow-500/40 hover:text-yellow-400"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {loading && (
            <div className="flex items-center gap-2 p-4 text-xs text-gray-400">
              <Loader2 className="h-4 w-4 animate-spin" /> იტვირთება...
            </div>
          )}

          {hasQuery && !loading && shown.length === 0 && (
            <div className="p-4 text-xs text-gray-400">
              „{query}“ — ვერაფერი მოიძებნა. სცადე სხვა სიტყვა.
            </div>
          )}

          {shown.length > 0 && (
            <ul
              role="listbox"
              onMouseLeave={() => setHighlight(-1)}
              className="max-h-[60vh] divide-y divide-white/5 overflow-y-auto">
              {shown.map((item, i) => (
                <li key={item.id} role="option" aria-selected={highlight === i}>
                  <Link
                    href={`/product/${item.id}`}
                    onClick={finish}
                    onMouseEnter={() => setHighlight(i)}
                    className={`flex items-center gap-3 px-4 py-2.5 transition ${
                      highlight === i ? "bg-white/[0.07]" : ""
                    }`}
                  >
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white/5">
                      {item.image && (
                        <Image src={item.image} alt="" fill sizes="44px" className="object-cover" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-semibold text-white">
                        {item.name}
                      </span>
                      <span className="block truncate text-[10px] text-gray-400">
                        {item.categoryName}
                        {item.brand ? ` · ${item.brand}` : ""}
                        {!item.inStock && " · არაა მარაგში"}
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      {item.oldPrice && (
                        <span className="block text-[10px] text-gray-400 line-through">
                          {item.oldPrice.toFixed(2)}₾
                        </span>
                      )}
                      <span className="block text-xs font-bold text-yellow-400">{price(item)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {results.length > 0 && (
            <button
              type="submit"
              className="block w-full border-t border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-bold text-yellow-400 transition hover:bg-white/[0.06]"
            >
              ყველა შედეგის ნახვა ({results.length})
            </button>
          )}
        </div>
      )}
    </form>
  );
}
