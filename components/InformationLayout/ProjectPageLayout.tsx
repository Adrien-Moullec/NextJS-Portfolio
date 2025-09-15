import Image from "next/image";
import React from "react";
import { Page } from "../Types/ProjectCardInterfaces";
import ProjectCardLayout from "./ProjectCardLayout";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface PageLayoutProps {
    page: Page
}

const ProjectPageLayout:React.FC<PageLayoutProps> = ({page}) => {
    return (
        <div className="flex flex-col items-center">
            {page.categories.map((cat,index) => (<ProjectCardLayout key={index} category={cat}/>))}
        </div>
    )
}

export default ProjectPageLayout;