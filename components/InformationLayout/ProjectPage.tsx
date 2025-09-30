"use client"
import React from "react";
import { Page } from "../Presets/ProjectCardInterfaces";
import ProjectCardLayout from "./ProjectCategory";
import { useEffect } from "react";
import { TitleFont, TitleDescription as TitleDescription, GameTitleFont} from "../Presets/MyFonts";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface PageLayoutProps {
    page: Page
}

const ProjectPageLayout:React.FC<PageLayoutProps> = ({page}) => {
    
    return (
        <div className="flex flex-col items-center pt-10">
            <Link href = {"/Games/"+page.main.projectName}>Play Game</Link>
            <div id="Main Description section" className="border-1 w-3/4 rounded-3xl text-center">
                <h1 className={TitleFont+" pt-10 pb-10"}>{page.main.projectName}</h1>
                <p className={TitleDescription+" pt-10 pb-10 pl-5"}>{page.main.projectDescription}</p>
            </div>                   

            {page.categories.map((category,index) => (<ProjectCardLayout key={index} category={category}/>))}
        </div>
    )
}

export default ProjectPageLayout;