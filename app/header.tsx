import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const Header = () => {
    return (
        <header className="bg-linear-to-br from-teal-400 to-teal-600 h-[200px] border-b-3 border-teal-300 flex flex-row">

            <div id="PROFILE" 
            className="place-items-center border-1 gap-x-3 w-3/4 flex flex-row pl-10 mx-auto text-xl">
                <div id="" className="flex flex-col place-items-center pr-8">
                    <Avatar className="w-23 h-23">
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-">Adrien</p>
                    <p className="text-">Moullec</p>
                </div>

                <div id="Contact info" className="flex flex-col text-sm pt-3s">
                    <div className="flex flex-row place-items-center pb-2">
                        <Image 
                        alt="mail icon" src={basePath+"/Icons/email-icon.png"} width={50} height={50}
                        className="pr-3"
                        />
                        amoullec1@gmail.com
                    </div>
                    <div className="flex flex-row place-items-center pb-2">
                        <Image 
                        className="pr-3"
                        alt="LinkedIn Icon" src = {basePath+"/Icons/linkedin-icon.png"} width={50} height={50}
                        />
                        Linkedin
                    </div>
                    <div className="flex flex-row place-items-center pb-2">
                        <Image 
                        alt="Github Icon" src = {basePath+"/Icons/github-logo.png"} width={50} height={50}
                        className="pr-3"
                        />
                        GitHub
                    </div>
                </div>
            </div>

            <div id="Other Info" className="flex flex-col w-1/4 items-center">
                More Info
            </div>
        </header>
    )
}