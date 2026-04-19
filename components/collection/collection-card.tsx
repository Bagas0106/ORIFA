import { EB_Garamond } from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
});

import Image from "next/image"

type collectionData = {
    image: string,
    title: string,
    price: string,
}

export default function CollectionCard({ image , title , price }: collectionData){
    return (
        <div className="flex flex-col justify-center space-y-4 py-4">
            <Image
                src={image}
                alt=""
                width={300}
                height={300}
                className="bg-stone-100"
            />
            <div>
                <h1 className={`text-xl`}>{title}</h1>
                <p className="text-stone-500">Rp. {price}</p>
            </div>
            
        </div>
    )
}