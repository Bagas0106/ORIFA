import { EB_Garamond } from "next/font/google";

export const ebGaramond = EB_Garamond({
subsets: ["latin"],
weight: ["400", "600"],
});

export default function WhyChooseUs(){
    return (
        <div className="flex flex-wrap justify-normal xl:justify-center items-center space-y-10 xl:space-y-0 space-x-24 items-center xl:flex-nowrap py-30">
            <div className="">
                <h1 className={`${ebGaramond.className} text-5xl font-bold`}>Signature Scents That Define Your Lasting Presence</h1>
            </div>
            <div className="flex flex-col items-start space-y-6 xl:space-y-12">
                <p>
                    Each fragrance is thoughtfully crafted to embody a sense of timeless sophistication, blending carefully selected notes into a composition that feels both refined and distinctive. 
                    Using only premium ingredients, every scent unfolds gracefully on the skin, revealing layers of depth and character that evolve throughout the day.
                </p>
                <button className="bg-black text-white hover:bg-neutral-700 transition-all duration-300 cursor-pointer py-2 px-6 rounded-full shadow-lg">
                    View Shop
                </button>
            </div>
        </div>
        
    )
    {/* <div className="flex border">
            <div className="flex flex-col text-center border-r p-18">
                <Image 
                    src="/placeholder-perfume.jpg" 
                    alt=""
                    width={350}
                    height={350} 
                    className=""
                />
                <h1 className="text-2xl font-bold mt-6">Imagination</h1>
                <p className="mt-4">A bright citrus opening melts into smooth black tea and amber, 
                    creating a clean, modern scent that feels effortlessly luxurious.</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-1 items-center pl-12">
                    <h1 className={`${ebGaramond.className} text-5xl font-bold`}>Signature Scents That Define <br /> Your Lasting Presence</h1>
                </div>
                <div className="flex flex-1 items-center justify-center text-sm border-t">
                    <div className="flex-1 p-12">
                        <TableCellsMergeIcon 
                            size={40}
                        />
                        <p className="mt-6">
                            Each fragrance is thoughtfully crafted to embody a sense of timeless sophistication, blending carefully selected notes into a composition that feels both refined and distinctive. 
                        </p>
                    </div>
                    <div className="flex-1 p-12">
                        <TableCellsMergeIcon 
                            size={40}
                        />
                        <p className="mt-6">
                            Using only premium ingredients, every scent unfolds gracefully on the skin, revealing layers of depth and character that evolve throughout the day.
                        </p>
                    </div>
                    <div className="flex-1 p-12">
                        <TableCellsMergeIcon 
                            size={40}
                        />
                        <p className="mt-6">
                            Designed to leave a lasting impression without overwhelming, our perfumes linger beautifully—subtle yet memorable, elegant yet effortlessly modern.
                        </p>
                    </div>
                </div>
            </div>
        </div> */}
}