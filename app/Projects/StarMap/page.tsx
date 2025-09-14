"use client"
import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
import { useEffect } from "react";

export default function Home() {
    
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "Build/Starmap-WebGL.loader.js"
        script.async = true;
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }

    },[])
    return (

        <div className="flex flex-col items-center"> 
        <div id="PROJECT GRID" 
        className="flex flex-row items-center justify-center pt-10 border-1 border-yellow-400 w-screen xl:border-black">
            <Image className="ps-1" alt="project image" src={basePath+"/Pictures/cat.png"} width={150} height={150}/>
            <Image className="ps-1" alt="project image" src={basePath+"/Pictures/cat.png"} width={150} height={150}/>
            <Image className="ps-1" alt="project image" src={basePath+"/Pictures/cat.png"} width={150} height={150}/>
        </div>
        <div className="w-250 h-170 border-yellow-400 border-4 invisible xl:visible">
            <iframe
            src="/index.html"
            width="100%"
            height="100%"
            style={{border:"border-yellow-400 border:5", position:"relative", top:0, left:0,right:0,bottom:0}}
            allowFullScreen
            />
        </div><div id="PROJECT GRID" 
        className="flex flex-row items-center justify-center border-1 border-yellow-400 w-screen">
            <Image className="ps-1" alt="project image" src={basePath+"/Pictures/cat.png"} width={150} height={150}/>
            <Image className="ps-1" alt="project image" src={basePath+"/Pictures/cat.png"} width={150} height={150}/>
            <Image className="ps-1" alt="project image" src={basePath+"/Pictures/cat.png"} width={150} height={150}/>
        </div>
        </div>
        
  )
}