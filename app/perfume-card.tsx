import Image from "next/image";

import { ArrowRight } from "lucide-react";

type perfumeData = {
    image: string,
    title: string,
    brand: string,
}

export default function PerfumeCard({ image , title , brand }: perfumeData){
    return (
        <div className="bg-white hover:bg-sky-200 transition-all duration-300 
                        space-y-12 py-10 w-full flex flex-col justify-center items-center
                        min-h-screen hover:-translate-y-1 hover:scale-120 ">
            <Image 
                src={image} 
                alt=""
                width={350}
                height={350} 
                className=""/>
            <div className="space-y-8">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p>{brand}</p>
                </div>
               
                <div className="flex space-x-2">
                    <p>Click to View More</p>
                    <ArrowRight/>
                </div>
            </div>
        </div>
    )
}