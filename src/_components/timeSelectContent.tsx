import { Button } from "@/components/ui/button";
import catGif from "../ui/assets/waitingCat.gif"
import { useState } from "react";


export default function TimeSelectContent() {
    const buttons = [5, 20, 40, 60]
    const [selectedTime, setSelectedTime] = useState(null)
    return (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
            <img src={catGif} alt="cat" className="w-1/3 h-1/3" />

            <div className="flex flex-row gap-2">
                {buttons.map((button) => (
                    <Button variant="outline"
                        className="text-black bg-transparent border-black text-xl cursor-pointer"
                        onClick={() => setSelectedTime(button)}
                    >{button}</Button>
                ))}

            </div>

            <div className="flex flex-col mt-5 w-full justify-center items-center gap-5">
                <Button size="default" variant="outline" className="text-black border-black bg-transparent text-2xl cursor-pointer w-1/2 font-custom">
                    Start
                </Button>
                {selectedTime && <p className="text-black text-xl font-custom">Time : {selectedTime} min.</p>}
            </div>



        </div>
    )
}