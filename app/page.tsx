import Image from "next/image";

import Navbar from "@/components/layout/navbar";
import PerfumeCard from "@/components/perfume/perfume-card";
import Showcase from "./home/brand-showcase";
import WhyChooseUs from "./home/why-choose-us";
import FeedbackUser from "./home/feedback";
import Collection from "./home/collection";
import Footer from "@/components/layout/footer";

{/*
  halo, bagas
  ini landing pagenya udah jadi, tinggal tunggu mereka aja (kalau jadi)
  rata-rata ini udah semuanya oke dan maintainable kecuali yang pake AI (dikit sih tapi partnya yang pake AI agak krusial)
  tinggal review aja gas :)
*/}

export default function Home() {
  return (
    <main className="overflow-hidden relative">

      <Navbar />

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
        <PerfumeCard
          image="/placeholder-perfume.jpg"
          title="Imagination"
          brand="LOUIS VUITTON"
        />
        <PerfumeCard
          image="/placeholder-perfume.jpg"
          title="Imagination"
          brand="LOUIS VUITTON"
        />
        <PerfumeCard
          image="/placeholder-perfume.jpg"
          title="Imagination"
          brand="LOUIS VUITTON"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <Showcase />

        <WhyChooseUs />

        <Collection />
      </div>
        <FeedbackUser />
        <Footer/>
    </main>
  );
}
