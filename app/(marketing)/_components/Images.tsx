import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const Images = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-full h-auto sm:w-[400px] sm:h-[400px]">
                    <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is PageNest?</AccordionTrigger>
                            <AccordionContent>
                                It is a simple yet powerful app for managing and organizing your notes effortlessly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is the app mobile-friendly?</AccordionTrigger>
                            <AccordionContent>
                                Yes! The app is fully responsive and optimized for both desktop and mobile devices.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can I sync my notes across devices?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely. You can sync your notes across multiple devices in real-time with our cloud integration.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Is it free?</AccordionTrigger>
                            <AccordionContent>
                                Yes, PageNest is completely free to use. However, due to limited resources, each user is allocated a certain amount of storage and features.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
