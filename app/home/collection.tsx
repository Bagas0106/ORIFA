"use client";

import { useState } from "react";
import { EB_Garamond } from "next/font/google";
import { ArrowRight } from "lucide-react";

import CollectionCard from "@/components/collection/collection-card";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
});

// data
const perfumes = [
  {
    id: 1,
    title: "Imagination",
    price: "3.000.000",
    category: "unisex",
    image: "/placeholder-perfume.jpg",
  },
  {
    id: 2,
    title: "Imagination",
    price: "3.000.000",
    category: "men",
    image: "/placeholder-perfume.jpg",
  },
  {
    id: 3,
    title: "Imagination",
    price: "3.000.000",
    category: "women",
    image: "/placeholder-perfume.jpg",
  },
  {
    id: 4,
    title: "Imagination",
    price: "3.000.000",
    category: "unisex",
    image: "/placeholder-perfume.jpg",
  },
];

export default function Collection() {
    const [filter, setFilter] = useState<"all" | "men" | "women">("all");

    const filteredPerfumes =
        filter === "all"
        ? perfumes
        : perfumes.filter((item) => item.category === filter);

    {/* 
        ini sebagian besar sama aku tapi logika filteringnya itu sama AI
        jadi harus belajar dulu dikit-dikit aowkaowkaowawkao    
    */}

    return (
        <div className="pb-24 space-y-2">
            {/* HEADER */}
            <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
                <div className="flex space-x-4 group cursor-pointer">
                    <h1 className={`${ebGaramond.className} text-5xl font-bold`}>
                        Our Collection
                    </h1>
                    <ArrowRight
                        size={46}
                        className="opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                </div>

                {/* FILTER */}
                <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
                    {[
                        { label: "UNISEX", value: "all" },
                        { label: "MEN", value: "men" },
                        { label: "WOMEN", value: "women" },
                    ].map((item) => (
                        <button
                        key={item.value}
                        onClick={() => setFilter(item.value as any)}
                        className={`transition-all duration-300 ${
                            filter === item.value
                            ? "text-black font-semibold"
                            : "text-stone-400 hover:text-black"
                        }`}   
                        >
                        {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-y-16 lg:gap-x-8">
                {filteredPerfumes.map((item) => (
                <CollectionCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                />
                ))}
            </div>
        </div>
    );
}