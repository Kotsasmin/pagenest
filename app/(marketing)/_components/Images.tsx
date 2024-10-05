import Image from "next/image";

export const Images = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[400px] h-[400px] hidden sm:block">
                    <Image 
                        src="/notebook.svg"
                        fill
                        className="object-contain dark:hidden"
                        alt="Hello"
                    />
                                        <Image 
                        src="/notebook.svg"
                        fill
                        className="object-contain dark:block"
                        alt="Hello"
                    />
                </div>
                
            </div>
        </div>
    );
};
