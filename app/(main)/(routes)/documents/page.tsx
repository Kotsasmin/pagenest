"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
    const { user } = useUser();
    const router = useRouter();

    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" })
            .then((documentId) => router.push(`/documents/${documentId}`))
        toast.promise(promise, {
            loading: "Creating a new page...",
            success: "New page created!",
            error: "Failed to create a new page."
        });
    };

    return (
        <div className="min-h-screen h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.svg"
                height="300"
                width="300"
                alt="Empty"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s PageNest
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" /> Create a page
            </Button>
        </div>
    );
};

export default DocumentsPage;
