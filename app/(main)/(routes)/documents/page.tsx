"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
    const { user } = useUser();

    return (
        <div className="min-h-screen h-full flex flex-col items-center justify-center space-y-4">
            <Image
            src="/empty.svg"
            height="300"
            width="300"
            alt="Empty"/>
            <h2 className="text-lg font-medium">
                Wellcome to {user?.firstName}&apos;s PageNest
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2"/>Create a page
            </Button>
        </div>
    );
}

export default DocumentsPage;