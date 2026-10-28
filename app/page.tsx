import { Sidebar } from "@/components/Sidebar";
import { Canvas } from "@/components/Canvas";
import { ProgramList } from "@/components/ProgramList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Shell: sidebar + canvas (desktop) / stacked (mobile) */}
      <div className="flex flex-col lg:grid lg:grid-cols-[36%_64%] bg-blue border-b-[3px] border-bone">
        <Sidebar />
        <Canvas />
      </div>

      {/* Program / Manifesto / Archive flow below the hero */}
      <div className="bg-blue">
        <ProgramList />
        <Footer />
      </div>
    </>
  );
}
