import { SHOTGUN_VENUE_URL } from "@/lib/shows";

export function Footer() {
  return (
    <footer className="relative bg-blue text-bone border-t-[3px] border-bone">
      <div className="px-5 md:px-7 py-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Fale</div>
          <a href="mailto:contato@porta.club" className="skew title-huge uppercase" style={{ fontSize: "clamp(1.8rem, 3.6vw, 4rem)" }}>
            contato@porta.club
          </a>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Siga</div>
          <a href="https://www.instagram.com/_____porta_____" target="_blank" rel="noreferrer" className="skew title-huge uppercase" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.6rem)" }}>
            @_____porta_____
          </a>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Ingressos</div>
          <a href={SHOTGUN_VENUE_URL} target="_blank" rel="noreferrer" className="skew title-huge uppercase" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.6rem)" }}>
            Shotgun ↗
          </a>
        </div>
      </div>

      <div className="border-t-2 border-bone px-5 md:px-7 py-5 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em]">
        <span>© {new Date().getFullYear()} PORTA · São Paulo</span>
        <span>versão 006</span>
      </div>
    </footer>
  );
}
