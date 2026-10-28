"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ALPHABET, RECORDS, type Record } from "@/lib/records";

function RecordCard({ r }: { r: Record }) {
  return (
    <article className="group flex flex-col gap-2 bg-pachorra-cream border-[2px] border-pachorra-charcoal p-3 hover:bg-pachorra-yellow transition-colors">
      {/* Cover placeholder — square, neutral; real photos go here later */}
      <div className="relative aspect-square overflow-hidden border-[2px] border-pachorra-charcoal bg-pachorra-cream">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center text-pachorra-charcoal/30 font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent 0 10px, rgba(59,59,58,0.05) 10px 11px)",
          }}
        >
          <span>cover · {r.id}</span>
        </div>
        {r.badge && (
          <span
            className="absolute top-1 left-1 bg-pachorra-red text-pachorra-cream font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 border border-pachorra-charcoal"
          >
            {r.badge}
          </span>
        )}
        <span className="absolute top-1 right-1 bg-pachorra-charcoal text-pachorra-cream font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5">
          {r.format}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-0.5 pt-1">
        <h3 className="font-mono text-[11px] uppercase tracking-wider truncate font-bold">
          {r.artist}
        </h3>
        <p className="font-mono text-[11px] italic truncate">{r.title}</p>
        <div className="flex items-center justify-between pt-1 font-mono text-[10px] uppercase tracking-widest">
          <span className="opacity-70 truncate">{r.label} · {r.year}</span>
          <span className="shrink-0 font-bold">R$ {r.price}</span>
        </div>
      </div>
    </article>
  );
}

export function PachorraShell() {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter ? RECORDS.filter((r) => r.letter === filter) : RECORDS),
    [filter]
  );

  const availableLetters = useMemo(
    () => new Set(RECORDS.map((r) => r.letter)),
    []
  );

  return (
    <main className="min-h-screen bg-pachorra-cream text-pachorra-charcoal">
      {/* Top bar — blue block + explosion-style serrated bottom.
          Important: NO bg on <header>; blue is on inner divs so the SVG
          polygon shows cream through its valleys. */}
      <header className="relative text-pachorra-cream">
        {/* Thin top info strip — blue */}
        <div className="bg-pachorra-blue border-b-[2px] border-pachorra-cream/40 px-5 md:px-8 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
          <Link href="/" className="hover:text-pachorra-yellow">← Porta</Link>
          <span className="flex items-center gap-3 opacity-80">
            <span className="hidden md:inline">SP · envios 72h</span>
            <span>·</span>
            <span>CARRINHO [0]</span>
          </span>
        </div>

        {/* Main hero of the header — blue bg, big logo centered */}
        <div className="bg-pachorra-blue relative px-5 md:px-8 py-8 md:py-12 flex items-center justify-center">
          <Image
            src="/media/pachorra.png"
            alt="Pachorra Disco & Deli"
            width={1200}
            height={600}
            className="w-[36vw] max-w-[440px] h-auto"
            priority
          />
        </div>

        {/* Serrated bottom edge — standalone SVG, polygon fills with blue,
            empty areas are transparent so cream (main bg) shows through */}
        <svg
          aria-hidden
          viewBox="0 0 1000 40"
          preserveAspectRatio="none"
          className="block w-full h-[48px] -mt-[1px]"
        >
          <polygon
            fill="#1a1fc8"
            points="0,0 1000,0 1000,8 986,26 973,4 958,32 942,12 925,36 909,6 893,20 876,34 861,2 845,28 828,14 812,38 795,10 779,32 763,16 746,28 731,2 713,38 698,12 681,30 665,8 647,34 631,20 614,28 598,2 582,36 566,16 549,24 533,8 515,38 500,14 483,32 468,4 451,20 434,36 416,10 402,28 385,2 368,38 354,16 337,30 321,6 306,34 289,12 274,28 258,8 241,20 225,36 212,2 194,24 183,16 166,38 148,10 135,32 124,4 103,38 91,18 74,26 65,6 48,36 36,12 21,34 13,4 0,22"
          />
        </svg>
      </header>

      {/* Alphabet section */}
      <section className="px-5 md:px-8 py-4">
        {/* Alphabet filter */}
        <nav
          aria-label="Filtro A–Z"
          className="flex flex-wrap justify-center gap-1 border-y-[3px] border-pachorra-charcoal py-3 bg-pachorra-yellow"
        >
          <button
            onClick={() => setFilter(null)}
            className={`font-mono text-xs md:text-sm uppercase tracking-widest px-2 py-1 border-2 border-pachorra-charcoal transition-colors ${
              filter === null
                ? "bg-pachorra-charcoal text-pachorra-cream"
                : "bg-pachorra-yellow hover:bg-pachorra-cream"
            }`}
          >
            Todos
          </button>
          {ALPHABET.map((letter) => {
            const available = availableLetters.has(letter);
            const active = filter === letter;
            return (
              <button
                key={letter}
                onClick={() => available && setFilter(letter)}
                disabled={!available}
                className={`font-mono text-xs md:text-sm uppercase tracking-widest w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border-2 border-pachorra-charcoal transition-colors ${
                  active
                    ? "bg-pachorra-red text-pachorra-cream"
                    : available
                    ? "bg-pachorra-yellow hover:bg-pachorra-red hover:text-pachorra-cream"
                    : "opacity-30 cursor-not-allowed bg-pachorra-cream"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </nav>

        <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-pachorra-charcoal font-bold">
          <span>{filtered.length} títulos{filter ? ` em ${filter}` : ""}</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-[6px] w-[6px] bg-pachorra-red" />
            SP · envios em 72h
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 md:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map((r) => (
            <RecordCard key={r.id} r={r} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-[4px] border-pachorra-charcoal bg-pachorra-red text-pachorra-cream px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em]">
        <span>© Pachorra Disco&Deli · parceira Porta</span>
        <Link href="/" className="hover:text-pachorra-yellow">← voltar pra Porta</Link>
      </footer>
    </main>
  );
}
