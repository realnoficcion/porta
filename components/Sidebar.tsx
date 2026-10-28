import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Programa", href: "#programacao" },
  { label: "Residentes", href: "#residentes" },
  { label: "Pachorra", href: "/pachorra", logo: "/media/pachorra.png" },
  { label: "777", href: "/777" },
  { label: "Live sets", href: "#live" },
  { label: "Arquivo", href: "#arquivo" },
];

const secondaryItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Informações", href: "#info" },
  { label: "Catálogo", href: "#catalogo" },
];

export function Sidebar() {
  return (
    <aside className="relative bg-blue text-bone border-b-[3px] border-bone lg:border-b-0 lg:border-r-[3px] lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Primary nav */}
        <nav aria-label="Principal" className="w-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-row group px-4 md:px-6 py-1 md:py-[0.6vw] flex items-baseline text-bone transition-transform relative"
            >
              <span
                className="uppercase title-huge relative inline-block"
                style={{ fontSize: "clamp(1.6rem, 4.2vw, 5rem)" }}
              >
                <span className={item.logo ? "invisible" : ""}>{item.label}</span>
                {item.logo && (
                  <span
                    aria-hidden
                    className="shake-on-hover absolute pointer-events-none"
                    style={{
                      left: "-16%",
                      right: "-24%",
                      top: "-80%",
                      bottom: "-80%",
                    }}
                  >
                    <Image
                      src={item.logo}
                      alt=""
                      fill
                      sizes="40vw"
                      className="object-contain object-left"
                    />
                  </span>
                )}
              </span>
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="h-[1.5vw]" />

        {/* Secondary nav */}
        <nav aria-label="Secundária" className="w-full">
          {secondaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-row px-4 md:px-6 py-1 md:py-[0.5vw] flex items-baseline text-bone transition-transform"
            >
              <span
                className="uppercase title-huge"
                style={{ fontSize: "clamp(1.3rem, 3vw, 3.6rem)" }}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Footer meta */}
        <div className="mt-auto">
          <div className="border-t-2 border-bone px-4 md:px-6 py-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em]">
            <div className="flex flex-col gap-1">
              <a href="#impressum" className="skew">Impressum</a>
              <a href="#politica" className="skew">Política</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/_____porta_____" target="_blank" rel="noreferrer" aria-label="Instagram" className="skew">IG</a>
              <a href="https://shotgun.live/pt-br/venues/porta" target="_blank" rel="noreferrer" aria-label="Shotgun" className="skew">SG</a>
            </div>
          </div>

          <div
            className="border-t-2 border-bone px-4 md:px-6 py-5 uppercase title-huge"
            style={{ fontSize: "clamp(1.4rem, 2.6vw, 3rem)" }}
          >
            Porta<br />
            Temporada<br />
            Nov–Dez 2026<br />
            São Paulo (BR)
          </div>
        </div>
      </div>
    </aside>
  );
}
