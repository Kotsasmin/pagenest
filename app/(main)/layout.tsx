"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({
    children
    }:  {
        children:React.ReactNode;
    }) => {
        const { isAuthenticated, isLoading } = useConvexAuth();
        if (isLoading) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <Spinner size="lg"/>
                </div>
            );
        }
        if (!isAuthenticated) {
            return redirect("/");
        }

return (  
    <div className="h-full flex">
        <Navigation/>
        <main className="flex-1 h-full overflow-y-auto">
            <SearchCommand />
        {children}
        </main>
    </div>
);
}
 
export default MainLayout;