import React from "react";
import { Page } from "../Presets/ProjectCardInterfaces";
import ProjectCardLayout from "./ProjectCardLayout";
import { useEffect } from "react";
import { TitleFont, MainTextFont, GameTitleFont} from "../Presets/MyFonts";

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
        <div className="flex flex-col items-center pt-10">
            
            <div id="Main Description section" className="border-1 w-3/4 rounded-3xl">
                <h1 className={TitleFont+" pt-10 pb-10    text-center"}>{page.main.name}</h1>
                <p className={MainTextFont+" pt-10 pb-10 pl-5  text-left"}>{page.main.description}</p>
            </div>

            <div className="h-20 w-1/2"/>

            <div className={GameTitleFont+" border-1"}>  {page.main.name} Gameplay</div>

            <div id="Game section" className="flex flex-row justify-center items-center w-screen">
                <div className="w-1/16"></div>
                <div 
                id="Game Window"
                className="w-12/16 h-164 invisible xl:visible">
                    <iframe
                    src = {basePath+page.game.index}
                    width="100%"
                    height="100%"
                    style={{border:"border-yellow-400 border:5",    position:"relative",   top:0, left:0,right:0,  bottom:0}}
                    allowFullScreen
                    />
                </div>
                <div className={MainTextFont+" w-1/16 text-xl"}>
                    {page.game.controls.map((nextControl, index) => (
                        <li key={index}>{nextControl}</li>
                    ))}
                </div>
            </div>


            {page.categories.map((category,index) => (<ProjectCardLayout key={index} category={category}/>))}
        </div>
    )
}

export default ProjectPageLayout;