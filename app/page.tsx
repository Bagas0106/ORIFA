import Image from "next/image";

import Navbar from "./navbar";
import PerfumeCard from "./perfume-card";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
        <PerfumeCard
          image="/placeholder-perfume.jpg"
          title="Imagination"
          brand="Louis Vuitton"
        />
        <PerfumeCard
          image="/placeholder-perfume.jpg"
          title="Imagination"
          brand="Louis Vuitton"
        />
        <PerfumeCard
          image="/placeholder-perfume.jpg"
          title="Imagination"
          brand="Louis Vuitton"
        />
      </div>
    </main>
  );
}
