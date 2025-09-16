import React from "react";
import { Category } from "../Presets/ProjectCardInterfaces";
import ProjectCard from "./ProjectCard";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface ProjectCardLayoutProps {
    category: Category
}

const ProjectCardLayout:React.FC<ProjectCardLayoutProps> = ({category}) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="">{category.title}</h1>
            <div id="PROJECT GRID" 
            className="grid 
            gap-4 
            w-screen
            p-4 
            border border-yellow-400 xl:border-black
            grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
            justify-items-center">
                {category.cards.map((card,index) => (<ProjectCard key={index} card={card}/>))}
            </div>
        </div>
    )
}

export default ProjectCardLayout;