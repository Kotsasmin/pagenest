import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row items-center w-full p-6 bg-background z-50">

            <Logo />


            <div className="w-full flex justify-center md:justify-start items-center gap-x-2 text-muted-foreground mt-4 md:mt-0 md:ml-10">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end">
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Kotsasmin. All rights reserved.
                </p>
            </div>
        </div>
    )
}
