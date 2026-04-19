import { UserIcon } from "lucide-react"
import { StarIcon } from "lucide-react"

export default function FeedbackCard(){
    return (
        <div className="bg-neutral-900 inline-block p-8 space-y-10 rounded-xl">
            <div className="space-y-2">
                <div className="flex">
                    <StarIcon size={32} className="fill-white" />
                    <StarIcon size={32} className="fill-white" />
                    <StarIcon size={32} className="fill-white" />
                    <StarIcon size={32} className="fill-white" />
                    <StarIcon size={32} className="fill-white" />
                </div>
                <p className="text-white font-semibold max-w-sm">
                    "One of the best fragrances I’ve tried. Smooth, elegant, and long-lasting — it feels premium from the first spray to the dry down. 
                    Definitely something I’ll keep coming back to."
                </p>
            </div>
            
            <div className="flex items-center space-x-3">
                <UserIcon 
                    color="white"
                    className="border rounded-full p-1"   
                    size={40} 
                />
                <div className="text-white">
                    <p>Restu Bagas</p>
                    <p className="text-sm text-neutral-500">Big Spender</p>
                </div>
            </div>
        </div>
    )
}