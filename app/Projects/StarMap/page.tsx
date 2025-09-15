"use client"
import ProjectPageLayout from "@/components/InformationLayout/ProjectPageLayout";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
import { useEffect } from "react";
import data from "@/data/db.json"

export default function Home() {
    
    useEffect(() => {
        const script = document.createElement("script")
        script.src = basePath+"/Build/Starmap-WebGL.loader.js"
        script.async = true;
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }

    },[])
    
    return (
        <div className="flex flex-col items-center">         
            <div className="w-250 h-170 border-yellow-400 border-4 invisible    xl:visible">
                <iframe
                src = {basePath+"/StarMap/index.html"}
                width="100%"
                height="100%"
                style={{border:"border-yellow-400 border:5", position:"relative",   top:0, left:0,right:0,bottom:0}}
                allowFullScreen
                />
            </div>
            <ProjectPageLayout page={data.Projects[0]}/>
        </div>
        
  )
}