import FeedbackCard from "@/components/feedback/feedback-card"

import { EB_Garamond } from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function FeedbackUser(){
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto px-8 flex flex-col space-y-8 pb-16 pt-32">

                <h1 className={`${ebGaramond.className} text-white text-center md:text-left font-bold text-5xl`}>
                    What Do They Say About Us?
                </h1>

                <div className="flex flex-wrap md:flex-nowrap justify-center items-center space-y-6 md:space-y-0 space-x-0 md:space-x-6">
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                </div>

            </div>
        </div>
    )
}