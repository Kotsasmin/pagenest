import { Footer } from "./_components/footer"
import { Heading } from "./_components/heading"
import { Images } from "./_components/Images"

const Marketing = () => {
    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-center text-center gap-y-8 flex-1 px-6 pb-10">
                <Heading/>
                <Images/>
                <Footer/>
            </div>
        </div>
    )
}

export default Marketing