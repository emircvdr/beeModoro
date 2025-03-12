import { Button } from "@/components/ui/button";
import catGif from "../ui/assets/runningCat.gif"
import timeupSound from "../ui/assets/alert.mp3"
import { useState, useEffect, useRef } from "react";
import { PauseIcon, PlayIcon, RefreshCwIcon } from "lucide-react";

export default function Content({
    selectedTime,
    setSelectedTime,
    setIsTimerFinished
}: {
    selectedTime: number,
    setSelectedTime: (time: null) => void,
    setIsTimerFinished: (finished: boolean) => void
}) {
    const [stopTime, setStopTime] = useState(true)
    const [timeLeft, setTimeLeft] = useState(selectedTime * 60) // Convert minutes to seconds
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element when component mounts
        audioRef.current = new Audio(timeupSound);
    }, []);

    useEffect(() => {
        let intervalId: number;

        if (!stopTime && timeLeft > 0) {
            intervalId = window.setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        setStopTime(true);
                        setIsTimerFinished(true); // Set timer finished when reaching zero
                        // Play the sound when timer reaches zero
                        audioRef.current?.play().catch(error => {
                            console.log("Audio play failed:", error);
                        });
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [stopTime, timeLeft, setIsTimerFinished]);

    // Format time to display minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Add function to handle reset and stop sound
    const handleReset = () => {
        setStopTime(true);
        // Stop the sound if it's playing
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsTimerFinished(false);
        setSelectedTime(null);
    };

    return (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
            <img src={catGif} alt="cat" className="w-1/3 h-1/3" />

            <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <p className="text-6xl font-bold">{formattedTime}</p>
                <p className="text-muted-foreground text-xl">
                    {timeLeft > 0 ? "Cat is running fast..." : "Time's up!"}
                </p>
            </div>

            <div className="flex flex-row gap-4">
                <Button
                    size="icon"
                    className="text-white !bg-red-400 w-16 h-16 cursor-pointer"
                    onClick={handleReset}
                >
                    <RefreshCwIcon className="w-4 h-4" />
                </Button>
                {
                    stopTime ? (
                        <Button
                            size="icon"
                            variant="outline"
                            className="text-black bg-transparent border-black cursor-pointer w-16 h-16"
                            onClick={() => setStopTime(false)}
                            disabled={timeLeft === 0}
                        >
                            <PlayIcon className="w-4 h-4" />
                        </Button>
                    ) : (
                        <Button
                            size="icon"
                            variant="outline"
                            className="text-black bg-transparent border-black cursor-pointer w-16 h-16"
                            onClick={() => setStopTime(true)}
                        >
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