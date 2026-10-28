import Link from "next/link";

export const metadata = {
  title: "777",
  description: "777",
};

export default function SevenSevenSevenPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background video — short loop */}
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Strobe overlay — only this layer flashes, video stays underneath */}
      <div
        aria-hidden
        className="strobe-bg absolute inset-0 z-10 mix-blend-multiply"
      />

      {/* Brutalist 7 — on top, strobes color */}
      <svg
        aria-label="7"
        viewBox="0 0 100 160"
        preserveAspectRatio="xMidYMid meet"
        className="strobe-fg relative z-20 h-[85vh] w-auto select-none"
        style={{ maxWidth: "90vw" }}
      >
        <polygon
          points="0,0 100,0 100,32 55,160 15,160 60,32 0,32"
          fill="currentColor"
        />
      </svg>

      <Link
        href="/"
        className="absolute top-4 left-4 z-30 font-mono text-[11px] uppercase tracking-[0.3em] text-white mix-blend-difference hover:underline"
      >
        ← porta
      </Link>
    </main>
  );
}
