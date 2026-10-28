import { upcomingShows, pastShows, SHOTGUN_VENUE_URL, formatDate, type Show } from "@/lib/shows";

function Row({ show, variant }: { show: Show; variant: "upcoming" | "past" }) {
  const { day, month, weekday } = formatDate(show.date);
  const isUpcoming = variant === "upcoming";
  const href = isUpcoming && show.shotgunUrl ? show.shotgunUrl : undefined;
  const content = (
    <div className="group grid grid-cols-12 gap-3 items-baseline py-[1.5vw] border-t-2 border-bone px-5 md:px-7 hover:bg-red hover:text-bone transition-colors">
      <div className="col-span-4 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em]">
        {day}.{month}
        <br />
        {weekday}
      </div>
      <div className="col-span-8 md:col-span-7 title-huge uppercase" style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.6rem)" }}>
        {show.artists.join(" + ")}
      </div>
      <div className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em]">
        {show.tag ?? "—"}
      </div>
      <div className="col-span-6 md:col-span-1 text-right font-mono text-[11px] uppercase tracking-[0.2em]">
        {isUpcoming ? (show.soldOut ? "esgot." : "↗") : "arq."}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

export function ProgramList() {
  return (
    <>
      <section id="programacao" className="relative bg-blue text-bone">
        <div className="px-5 md:px-7 py-[2vw] border-t-[3px] border-bone flex items-end justify-between gap-6 flex-wrap">
          <h2
            className="title-huge uppercase"
            style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}
          >
            Programa<span className="italic">.</span>
          </h2>
          <a
            href={SHOTGUN_VENUE_URL}
            target="_blank"
            rel="noreferrer"
            className="skew font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] border-2 border-bone px-4 py-3"
          >
            ↗ Shotgun
          </a>
        </div>
        <div className="border-b-2 border-bone">
          {upcomingShows.map((show) => (
            <Row key={show.id} show={show} variant="upcoming" />
          ))}
        </div>
      </section>

      <section
        id="sobre"
        className="relative text-bone border-t-[3px] border-bone"
      >
        <img
          src="/media/show.webp"
          alt="Porta — ao vivo"
          className="block w-full h-auto"
        />
      </section>

      <section id="arquivo" className="relative bg-blue text-bone border-t-[3px] border-bone">
        <div className="px-5 md:px-7 py-[2vw] flex items-end justify-between gap-6 flex-wrap">
          <h2
            className="title-huge uppercase"
            style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}
          >
            Arquivo<span className="italic">.</span>
          </h2>
          <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] border-2 border-bone px-4 py-3">
            {pastShows.length} registros
          </span>
        </div>
        <div className="border-t-2 border-bone border-b-2">
          {pastShows.map((show) => (
            <Row key={show.id} show={show} variant="past" />
          ))}
        </div>
      </section>
    </>
  );
}
