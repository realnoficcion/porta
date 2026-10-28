export interface Show {
  id: string;
  date: string;
  artists: string[];
  tag?: string;
  shotgunUrl?: string;
  flyerUrl?: string;
  soldOut?: boolean;
}

export const SHOTGUN_VENUE_URL = "https://shotgun.live/pt-br/venues/porta";

export const upcomingShows: Show[] = [
  {
    id: "upc-01",
    date: "2026-11-07",
    artists: ["DJ MARINA", "LUÍSA LÍRIO", "VHS BOY"],
    tag: "CLUB NIGHT",
    shotgunUrl: SHOTGUN_VENUE_URL,
  },
  {
    id: "upc-02",
    date: "2026-11-14",
    artists: ["RASGO", "GEOMETRIA FÚNEBRE"],
    tag: "LIVE SET",
    shotgunUrl: SHOTGUN_VENUE_URL,
  },
  {
    id: "upc-03",
    date: "2026-11-21",
    artists: ["AMULETO B2B K7", "CORRENTE"],
    tag: "ALL NIGHT LONG",
    shotgunUrl: SHOTGUN_VENUE_URL,
  },
  {
    id: "upc-04",
    date: "2026-11-28",
    artists: ["PORTA RESIDENTS"],
    tag: "RESIDENTS NIGHT",
    shotgunUrl: SHOTGUN_VENUE_URL,
  },
  {
    id: "upc-05",
    date: "2026-12-05",
    artists: ["CONVIDADO INTERNACIONAL — TBA"],
    tag: "SPECIAL",
    shotgunUrl: SHOTGUN_VENUE_URL,
    soldOut: false,
  },
];

export const pastShows: Show[] = [
  { id: "pst-24", date: "2026-10-24", artists: ["BADSISTA", "CARLA BOREGAS"], tag: "CLUB" },
  { id: "pst-23", date: "2026-10-17", artists: ["LINN DA QUEBRADA (DJ SET)"], tag: "LIVE" },
  { id: "pst-22", date: "2026-10-10", artists: ["NICKS", "MU540"], tag: "CLUB" },
  { id: "pst-21", date: "2026-10-03", artists: ["BEBETO", "CASHU"], tag: "CLUB" },
  { id: "pst-20", date: "2026-09-26", artists: ["LAIS BRAND B2B GOP TUN RESIDENTS"], tag: "ALL NIGHT" },
  { id: "pst-19", date: "2026-09-19", artists: ["ÀIYÒ", "DJ ÚNICA"], tag: "LIVE" },
  { id: "pst-18", date: "2026-09-12", artists: ["BRENO MOREIRA", "ANNA SUAVE"], tag: "CLUB" },
  { id: "pst-17", date: "2026-09-05", artists: ["TOMMY VERCETTI", "DIVERGÊNCIA"], tag: "SPECIAL" },
  { id: "pst-16", date: "2026-08-29", artists: ["AMANDA MUSSI", "DJ EPIK"], tag: "CLUB" },
  { id: "pst-15", date: "2026-08-22", artists: ["TETO PRETO (DJ SET)"], tag: "LIVE" },
  { id: "pst-14", date: "2026-08-15", artists: ["GAU & FRIENDS"], tag: "RESIDENTS" },
  { id: "pst-13", date: "2026-08-08", artists: ["PORTA × GOP TUN"], tag: "COLLAB" },
];

export function formatDate(iso: string): { day: string; month: string; weekday: string; full: string } {
  const d = new Date(`${iso}T00:00:00`);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = d
    .toLocaleDateString("pt-BR", { month: "short", timeZone: "UTC" })
    .replace(".", "")
    .toUpperCase();
  const weekday = d
    .toLocaleDateString("pt-BR", { weekday: "short", timeZone: "UTC" })
    .replace(".", "")
    .toUpperCase();
  const full = d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return { day, month, weekday, full };
}
