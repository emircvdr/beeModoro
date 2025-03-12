"use client"

import * as React from "react"
import { ArrowUp, } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    // DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Slider } from "@/components/ui/slider"


export default function Footer() {

    const [time, setTime] = React.useState(0)

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="fixed bottom-0 p-0.5 w-full !bg-transparent !border-none hover:!bg-slate-300 !transition-all !duration-300">
                    <ArrowUp />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="text-xl">Timer</DrawerTitle>
                        <DrawerDescription className="text-md">
                            You can set your timer here.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex flex-col items-start justify-start space-x-2 gap-5">
                            <p className="text-muted-foreground text-md">Time : <span className="text-black font-bold">{time}</span>  min.</p>
                            <Slider defaultValue={[5]} max={60} min={5} step={5} onValueChange={(value) => setTime(value[0])} className="cursor-pointer" />
                        </div>

                    </div>
                    <DrawerFooter className="mt-3">
                        <Button variant="outline" className="bg-transparent text-black border-black cursor-pointer">Done</Button>

                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
