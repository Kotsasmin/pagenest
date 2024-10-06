"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Notes Made Easy. Ideas Unlocked with <br/><span className="underline">PageNest</span>
            </h1>
            <h3 className="font-medium text-base sm:text-lg md:text-xl">
            PageNest is the connected workspace where<br/> collaboration thrives and productivity soars.
            </h3>
            <Button>
                Get started for free!
                <ArrowRight className="ml-2 w-4 h-4">
                </ArrowRight>
            </Button>
        </div>
    )
}