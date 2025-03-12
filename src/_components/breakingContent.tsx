import { Button } from "@/components/ui/button";
import catGif from "../ui/assets/sleepingCat.gif"
import { RefreshCwIcon } from "lucide-react";


export default function BreakingContent() {
    return (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
            <img src={catGif} alt="cat" className="w-1/3 h-1/3" />

            <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <p className="text-muted-foreground text-xl">
                    Well done! You can take a break now. 🎉
                </p>
            </div>

            <div className="flex flex-row gap-4">
                <Button size="icon" className="text-white !bg-red-400 cursor-pointer w-16 h-16" >
                    <RefreshCwIcon className="w-4 h-4" />
                </Button>

            </div>

        </div>
    )
}