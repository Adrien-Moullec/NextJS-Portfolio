import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
{/*import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel" */}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const Header = () => {
    return (
        <header className="bg-linear-to-r from-black to-cyan-950 h-[200px] border-b-3 border-teal-300 flex flex-row text-white">

            <div id="Profile section"
                className="place-items-center border-1 gap-x-3 w-1/4 flex flex-row pl-10 mx-auto text-xl">
                <div id="" className="flex flex-col place-items-center pr-8">
                    <Avatar className="w-23 h-23">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-">Adrien</p>
                    <p className="text-">Moullec</p>
                </div>

                <div id="Contact info" className="flex flex-col text-sm pt-3s">
                    <div className="flex flex-row place-items-center pb-2">
                        <Image
                            alt="mail icon" src={basePath + "/Icons/email-icon.png"} width={50} height={50}
                            className="pr-3 invert"
                        />
                        amoullec1@gmail.com
                    </div>
                    <div className="flex flex-row place-items-center pb-2">
                        <Image
                            className="pr-3 invert"
                            alt="LinkedIn Icon" src={basePath + "/Icons/linkedin-icon.png"} width={50} height={50}
                        />
                        Linkedin
                    </div>
                    <div className="flex flex-row place-items-center pb-2">
                        <Image
                            alt="Github Icon" src={basePath + "/Icons/github-logo.png"} width={50} height={50}
                            className="pr-3 invert"
                        />
                        GitHub
                    </div>
                </div>
            </div>

            <div id="Other Info" className="flex flex-row w-3/4 border-2 border-red-900 place-items-start mx-auto">
                <p className="pl-5 pr-5 border-2 border-red-900"> HAHAHA </p>
                <p className="pl-5 pr-5 border-2 border-red-900"> HAHAHA </p>
                <p className="pl-5 pr-5 border-2 border-red-900"> HAHAHA </p>
            </div>
        </header>
    )
}