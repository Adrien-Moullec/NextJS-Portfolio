import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link";
{/*import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel" 
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link";*/}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const Header = () => {
    return (
        <header className="bg-linear-to-r from-black to-black h-[200px] border-b-3 border-teal-300 flex flex-row text-white">

            <div className="hidden md:flex flex-row items-center justify-center border-1 w-screen">
                <div className="mx-auto flext flex-col text-2xl">                    
                    <div><Link className="hover:underline hover:underline-offset-4" href="/">Portfolio</Link></div>
                    <div className="hover:underline hover:underline-offset-4 pt-2"><Link href="/ProjectList">Projects</Link></div>
                </div>
            </div>


            <div id="Profile section"
                className="flex flex-row items-center justify-center mx-auto border-1 border-pink-900 gap-x-3 w-screen text-xl overflow-x-clip 
                sm:border-pink-700 md:min-w-[500px] md:max-w-[1000px]">
                <div id="Main ID" className="flex flex-col place-items-center pr-8">
                    <Avatar className="w-23 h-23">
                        <AvatarImage src={basePath + "/Icons/images/definitely_me.png"} />
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

            <div className="hidden md:flex flex-col items-center justify-center border-1 w-screen">
                <p>hahahahaha</p>
            </div>

        </header>
    )
}