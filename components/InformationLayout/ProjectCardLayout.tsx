import React from "react";
import { Category } from "../Presets/ProjectCardInterfaces";
import ProjectCard from "./ProjectCard";
import { CategoryFont } from "../Presets/MyFonts";

interface ProjectCardLayoutProps {
    category: Category
}

const ProjectCardLayout:React.FC<ProjectCardLayoutProps> = ({category}) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className={CategoryFont}>{category.title}</h1>
            <div id="PROJECT GRID" 
            className="grid 
            gap-4 
            w-screen
            p-4
            grid-cols-[repeat(auto-fit,minmax(500px,1fr))]
            justify-items-center">
                {category.cards.map((card,index) => (<ProjectCard key={index} card={card}/>))}
            </div>
        </div>
    )
}

export default ProjectCardLayout;