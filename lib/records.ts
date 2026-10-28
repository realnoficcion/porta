export interface Record {
  id: string;
  artist: string;
  title: string;
  label: string;
  year: string;
  price: string;
  format: "LP" | "12\"" | "7\"" | "2xLP" | "EP";
  genre: string;
  badge?: "NEW" | "EXCLUSIVE" | "PRE-ORDER" | "RESTOCK";
  letter: string; // starting letter for A-Z filter
}

// Mock catalog — curated vibe, lots of variety
export const RECORDS: Record[] = [
  { id: "r01", artist: "Autechre", title: "Confield", label: "Warp", year: "2001", price: "189", format: "2xLP", genre: "IDM", badge: "RESTOCK", letter: "A" },
  { id: "r02", artist: "Arthur Russell", title: "World of Echo", label: "Audika", year: "1986", price: "165", format: "2xLP", genre: "Experimental", letter: "A" },
  { id: "r03", artist: "Beatriz Ferreyra", title: "Echos+", label: "Room40", year: "2020", price: "120", format: "LP", genre: "Musique concrète", badge: "NEW", letter: "B" },
  { id: "r04", artist: "Caterina Barbieri", title: "Spirit Exit", label: "light-years", year: "2022", price: "145", format: "2xLP", genre: "Modular", letter: "C" },
  { id: "r05", artist: "DJ Marcelle", title: "Festival Tactics", label: "Jahmoni", year: "2024", price: "99", format: "LP", genre: "Experimental", badge: "EXCLUSIVE", letter: "D" },
  { id: "r06", artist: "Eartheater", title: "Powders", label: "Chemical X", year: "2023", price: "138", format: "LP", genre: "Avant-pop", letter: "E" },
  { id: "r07", artist: "Floating Points", title: "Cascade", label: "Ninja Tune", year: "2024", price: "155", format: "2xLP", genre: "Electronic", badge: "NEW", letter: "F" },
  { id: "r08", artist: "Grouper", title: "Shade", label: "Kranky", year: "2021", price: "135", format: "LP", genre: "Ambient", letter: "G" },
  { id: "r09", artist: "Holy Tongue", title: "Deliverance and Spiritual Warfare", label: "AD 93", year: "2024", price: "165", format: "LP", genre: "Dub", badge: "PRE-ORDER", letter: "H" },
  { id: "r10", artist: "Iglooghost", title: "Lei Line Eon", label: "Gloo", year: "2024", price: "128", format: "LP", genre: "Electronic", letter: "I" },
  { id: "r11", artist: "Jim O'Rourke", title: "Hands That Bind", label: "Drag City", year: "2023", price: "148", format: "LP", genre: "Experimental", letter: "J" },
  { id: "r12", artist: "Kali Malone", title: "All Life Long", label: "Ideologic Organ", year: "2024", price: "189", format: "2xLP", genre: "Modern Classical", badge: "NEW", letter: "K" },
  { id: "r13", artist: "Loraine James", title: "Reflection", label: "Hyperdub", year: "2021", price: "135", format: "LP", genre: "IDM", letter: "L" },
  { id: "r14", artist: "Mica Levi", title: "Blue Alibi", label: "self", year: "2023", price: "118", format: "LP", genre: "Experimental", badge: "RESTOCK", letter: "M" },
  { id: "r15", artist: "Nídia", title: "95 MINDJERES", label: "Príncipe", year: "2023", price: "128", format: "LP", genre: "Kuduro", letter: "N" },
  { id: "r16", artist: "Oren Ambarchi", title: "Hubris", label: "Editions Mego", year: "2016", price: "155", format: "LP", genre: "Drone", letter: "O" },
  { id: "r17", artist: "Pan Daijing", title: "Tissues", label: "PAN", year: "2019", price: "145", format: "LP", genre: "Experimental", letter: "P" },
  { id: "r18", artist: "Quelle Chris", title: "Deathfame", label: "Mello Music", year: "2022", price: "138", format: "LP", genre: "Hip Hop", letter: "Q" },
  { id: "r19", artist: "Rian Treanor", title: "File Under UK Metaplasm", label: "Planet Mu", year: "2020", price: "148", format: "LP", genre: "Electronic", letter: "R" },
  { id: "r20", artist: "Sarah Davachi", title: "Long Gradus", label: "late music", year: "2024", price: "285", format: "2xLP", genre: "Drone", badge: "EXCLUSIVE", letter: "S" },
  { id: "r21", artist: "Tim Hecker", title: "No Highs", label: "Kranky", year: "2023", price: "138", format: "LP", genre: "Ambient", letter: "T" },
  { id: "r22", artist: "Upsammy", title: "Germ in a Population of Buildings", label: "Dekmantel", year: "2020", price: "132", format: "LP", genre: "Electronic", letter: "U" },
  { id: "r23", artist: "Valentina Magaletti", title: "A Queer Anthology of Drums", label: "Takuroku", year: "2021", price: "115", format: "LP", genre: "Percussion", letter: "V" },
  { id: "r24", artist: "William Basinski", title: "Lamentations", label: "Temporary Residence", year: "2020", price: "158", format: "2xLP", genre: "Ambient", letter: "W" },
  { id: "r25", artist: "Xylouris White", title: "Mother", label: "Drag City", year: "2018", price: "135", format: "LP", genre: "Folk", letter: "X" },
  { id: "r26", artist: "Yves Tumor", title: "Praise a Lord Who Chews", label: "Warp", year: "2023", price: "148", format: "LP", genre: "Avant-pop", badge: "NEW", letter: "Y" },
  { id: "r27", artist: "Zonal", title: "Wrecked", label: "Relapse", year: "2019", price: "135", format: "LP", genre: "Dub Metal", letter: "Z" },
];

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
