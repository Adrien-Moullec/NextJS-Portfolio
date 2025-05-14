import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
{/*import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel" */}
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
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const Header = () => {
    return (
        <header className="bg-linear-to-r from-black to-cyan-950 h-[200px] border-b-3 border-teal-300 flex flex-row text-white">

            <div id="Profile section"
                className="place-items-center border-1 border-pink-900 gap-x-3 w-screen flex flex-row pl-10 text-xl overflow-x-clip 
                sm:border-pink-700 md:min-w-[400px] md:max-w-[400px]">
                <div id="Main ID" className="flex flex-col place-items-center pr-8">
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

            <div id="Other Info"
                className="hidden w-screen border-2 border-red-900 place-items-start mx-auto 
            md:flex md:flex-col">
                <NavigationMenu>
                    <NavigationMenuList>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>

                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}