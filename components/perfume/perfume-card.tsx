"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { EB_Garamond } from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
});

type perfumeData = {
    image: string,
    title: string,
    brand: string,
}

export default function PerfumeCard({ image , title , brand }: perfumeData){
    const [click, setOpen] = useState(false);
    return (
        <div onClick={() => setOpen(!click)} className={`bg-white cursor-pointer hover:bg-sky-200 transition-all duration-300 
                        space-y-12 py-10 w-full flex flex-col justify-center items-center
                        min-h-screen group ${click && ("min-w-screen bg-sky-200")}`}>
            <Image 
                src={image} 
                alt=""
                width={350}
                height={350} 
                className=""/>
            <div className="space-y-8">
                <div className="space-y-2">
                    <h1 className={`text-4xl font-bold ${ebGaramond.className}`}>{title}</h1>
                    <p className="text-md tracking-widest antialiased text-gray-400 text-center">{brand.toUpperCase()}</p>
                </div>
               
                <div className="flex space-x-2 justify-center items-center text-sm">
                    <p>Click to View More</p>
                    <ArrowRight
                        size={34}
                        className="group-hover:bg-white p-2 rounded-full transition-all duration-300"/>
                </div>
            </div>
        </div>
    )
}

