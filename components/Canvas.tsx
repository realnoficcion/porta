import Image from "next/image";

export function Canvas() {
  return (
    <section className="relative bg-blue overflow-hidden min-h-[80vh] lg:h-screen lg:sticky lg:top-0">
      {/* Top-right meta row */}
      <div className="absolute top-0 inset-x-0 z-30 flex items-start justify-end px-5 md:px-7 pt-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 text-bone">
          <a href="#" className="wink italic title-huge" style={{ fontSize: "clamp(1.4rem, 2.6vw, 3rem)" }}>
            BR
          </a>
          <a href="#" className="wink title-huge" style={{ fontSize: "clamp(1.4rem, 2.6vw, 3rem)" }}>
            EN
          </a>
        </div>
      </div>

      {/* Single blue backdrop */}
      <div className="absolute inset-0 overflow-hidden bg-blue" />

      {/* Yin yang — big, behind the video */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <svg
          viewBox="0 0 100 100"
          className="ornament-rot-slow"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
          style={{ width: "180%", height: "180%" }}
        >
          <circle cx="50" cy="50" r="47" fill="#f3eee5" stroke="#ff2d1a" strokeWidth="2" />
          <path
            d="M 50 3
               A 47 47 0 0 1 50 97
               A 23.5 23.5 0 0 1 50 50
               A 23.5 23.5 0 0 0 50 3
               Z"
            fill="#1b2cff"
          />
          <circle cx="50" cy="26" r="10" fill="#f3eee5" />
          <circle cx="50" cy="74" r="10" fill="#1b2cff" />
          <circle cx="50" cy="26" r="3.5" fill="#1b2cff" />
          <circle cx="50" cy="74" r="3.5" fill="#f3eee5" />
        </svg>
      </div>

      {/* Video panel — temporarily hidden to preview the yin yang alone */}
      {false && (
        <div className="absolute inset-y-[4vw] right-[4vw] left-[4vw] md:left-[8vw] overflow-hidden z-20">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/media/hero.webm" type="video/webm" />
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Brutalist typographic stack — 3 outlined PORTA */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center pointer-events-none">
        <div
          className="title-huge whitespace-nowrap leading-[0.78]"
          style={{
            fontSize: "clamp(5rem, 15vw, 16rem)",
            letterSpacing: "-0.055em",
            WebkitTextStroke: "1px #0a0a0a",
            color: "transparent",
          }}
        >
          PORTA
        </div>
        <div
          className="title-huge whitespace-nowrap leading-[0.78] self-end pr-[2vw]"
          style={{
            fontSize: "clamp(5rem, 15vw, 16rem)",
            letterSpacing: "-0.055em",
            WebkitTextStroke: "1px #0a0a0a",
            color: "transparent",
          }}
        >
          PORTA
        </div>
        <div
          className="title-huge whitespace-nowrap leading-[0.78]"
          style={{
            fontSize: "clamp(5rem, 15vw, 16rem)",
            letterSpacing: "-0.055em",
            WebkitTextStroke: "1px #0a0a0a",
            color: "transparent",
          }}
        >
          PORTA
        </div>
      </div>

      {/* Floating logo bottom-right */}
      <div className="absolute bottom-[1vw] right-[1vw] z-30">
        <Image
          src="/media/logo-white.png"
          alt="PORTA"
          width={500}
          height={800}
          priority
          className="w-[14vw] min-w-[110px] h-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Bottom tag */}
      <div className="absolute bottom-4 left-5 md:left-7 z-30 flex items-end gap-3 text-bone">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
          CASA DE SHOWS · CLUBE · RESIDÊNCIA
        </span>
      </div>
    </section>
  );
}
