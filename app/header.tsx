"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link";
import data from "@/data/db.json"
import CopyText from "@/components/ui/copy";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const Header = () => {
    return (

        <header className="bg-linear-to-r from-black to-black h-[200px] border-1 flex flex-row text-white">
            
            <div id="Profile section"
                className="flex flex-row items-center mx-auto gap-x-3 w-screen text-xl overflow-x-clip 
                md:min-w-[500px] md:max-w-[1000px] pl-10">
                <div id="Main ID" className="flex flex-col place-items-center pr-8">
                    <Avatar className="w-23 h-23">
                        <AvatarImage src={basePath + "/Icons/images/definitely_me.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>{data.devInfo.devName}</p>
                </div>

                <div id="Contact info" className="flex flex-col text-sm pt-3s">
                    <button onClick={() => CopyText(data.devInfo.devEmail)} className="flex flex-row place-items-center pb-2">
                        <Image
                            alt="mail icon" src={basePath + "/Icons/email-icon.png"} width={50} height={50}
                            className="pr-3 invert"
                        />
                        {data.devInfo.devEmail}
                    </button>

                    <Link href={data.devInfo.devLinkedIn} className="flex flex-row place-items-center pb-2" target="_blank">                        
                        <Image
                            className="pr-3 invert"
                            alt="LinkedIn Icon" src={basePath + "/Icons/linkedin-icon.png"} width={50} height={50}
                        />
                        LinkedIn
                    </Link>
                    <Link href={data.devInfo.devGithub} className="flex flex-row place-items-center pb-2" target="_blank">
                        <Image
                            alt="Github Icon" src={basePath + "/Icons/github-logo.png"} width={50} height={50}
                            className="pr-3 invert"
                        />
                        GitHub
                    </Link>
                </div>
            </div>

            <div id="Website Links" className="hidden md:flex flex-row items-center justify-center border-l-1 border-white mx-auto md:min-w-[500px] md:max-w-[1000px] ">
                <div className="mx-auto flex text-center flex-col text-2xl">
                    <Link className="hover:underline hover:underline-offset-4" href="/">
                        About Me
                    </Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/Projects">
                        Projects
                    </Link>
                    <Link className="hover:underline hover:underline-offset-4" href="/Projects/Portfolio">
                        About This Website
                    </Link>
                </div>
            </div>

        </header>
    )
}