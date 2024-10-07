"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {

    const { isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Notes Made Easy. Ideas Unlocked with <br/><span className="underline">PageNest</span>
            </h1>
            <h3 className="font-medium text-base sm:text-lg md:text-xl">
            PageNest is the connected workspace where<br/> collaboration thrives and productivity soars.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href="/documents">
                Enter PageNest
                <ArrowRight className="ml-2 w-4 h-4">
                </ArrowRight>
                </Link>
            </Button>)}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get PageNest free
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}