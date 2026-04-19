import Image from "next/image";

export default function BrandCard(){
    return (
        <div className="border border-gray-300 p-4 ">
            <Image
                src="/Louis_Vuitton_logo.png"
                alt=""
                width={250}
                height={250}
            />
        </div>
    )
}