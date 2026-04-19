import BrandCard from "@/components/brand/brand-card";
import { EB_Garamond } from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Showcase() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 pt-24">
      
        {/* main title */}
        <h1 className={`${ebGaramond.className} text-3xl sm:text-4xl font-bold text-center`}>
            Our Top-selling Brands
        </h1>

        {/* buat cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
            <BrandCard />
            <BrandCard />
            <BrandCard />
        </div>

    </div>
  );
}