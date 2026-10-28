interface MarqueeProps {
  items: string[];
  speed?: "normal" | "fast";
  className?: string;
  separator?: string;
}

export function Marquee({
  items,
  speed = "normal",
  className = "",
  separator = "✦",
}: MarqueeProps) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${speed === "fast" ? "marquee-track-fast" : "marquee-track"}`}
      >
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 pr-6 shrink-0">
            {item}
            <span aria-hidden className="opacity-50">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
