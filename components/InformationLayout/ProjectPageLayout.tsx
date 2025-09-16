import React from "react";
import { Page } from "../Presets/ProjectCardInterfaces";
import ProjectCardLayout from "./ProjectCardLayout";
import { useEffect } from "react";
import { TitleFont } from "../Presets/Fonts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface PageLayoutProps {
    page: Page
}

const ProjectPageLayout:React.FC<PageLayoutProps> = ({page}) => {
   
     useEffect(() => {
        const script = document.createElement("script");
        script.src = basePath+page.game.build;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script)
        }

    },[])
    
    return (
        <div className="flex flex-col items-center">
            
            <h1 className={"text-7xl "+TitleFont.className}>{page.main.name}</h1>

            <div className="w-250 h-170 border-yellow-400 border-4 invisible xl:visible">
                <iframe
                src = {basePath+page.game.index}
                width="100%"
                height="100%"
                style={{border:"border-yellow-400 border:5", position:"relative",   top:0, left:0,right:0,bottom:0}}
                allowFullScreen
                />
            </div>

            {page.categories.map((category,index) => (<ProjectCardLayout key={index} category={category}/>))}
        </div>
    )
}

export default ProjectPageLayout;