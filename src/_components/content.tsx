import { Button } from "@/components/ui/button";
import catGif from "../ui/assets/runningCat.gif"
import { useState } from "react";
import { PauseIcon, PlayIcon, RefreshCwIcon } from "lucide-react";


export default function Content() {
    const [stopTime, setStopTime] = useState(false)
    return (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
            <img src={catGif} alt="cat" className="w-1/3 h-1/3" />

            <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <p className="text-6xl font-bold">25:30</p>
                <p className="text-muted-foreground text-xl">
                    Cat is running fast...
                </p>
            </div>

            <div className="flex flex-row gap-4">
                <Button size="icon" className="text-white !bg-red-400 w-16 h-16" onClick={() => setStopTime(false)}>
                    <RefreshCwIcon className="w-4 h-4" />
                </Button>
                {
                    stopTime ? (
                        <Button size="icon" variant="outline" className="text-black bg-transparent border-black  cursor-pointer w-16 h-16" onClick={() => setStopTime(false)}>
                            <PlayIcon className="w-4 h-4" />
                        </Button>
                    ) : (
                        <Button size="icon" variant="outline" className="text-black bg-transparent border-black  cursor-pointer w-16 h-16" onClick={() => setStopTime(true)}>
                            <PauseIcon className="w-6 h-6" />
                        </Button>
                    )
                }
            </div>


            {/* <div className="flex flex-row gap-2">
                <Button variant="outline" className="text-white">5</Button>
                <Button variant="outline" className="text-white">10</Button>
                <Button variant="outline" className="text-white">20</Button>
                <Button variant="outline" className="text-white">40</Button>
                <Button variant="outline" className="text-white">60</Button>
            </div> */}

        </div>
    )
}