import React from "react";
import { Category } from "../Presets/ProjectCardInterfaces";
import ProjectCard from "./ProjectCard";
import { CategoryFont } from "../Presets/MyFonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectCardLayoutProps {
    category: Category
}

const ProjectCardLayout:React.FC<ProjectCardLayoutProps> = ({category}) => {
    return (
        <div className="border-1 justify-items-center">
            <div className="h-30"/>
            <h1 className={CategoryFont}>{category.categoryTitle}</h1>
            <div className="h-10"/>

            <div className="relative px-2 sm:px-4 w-1/2 lg:w-full border-1">
                <Carousel>
                    <CarouselContent className="">
                    {category.cards.map((card,index) => (
                        <CarouselItem key={""+index}
                        className="basis-1/1 sm:basis-1/1 lg:basis-1/2 2xl:basis-1/4"
                        >
                            <ProjectCard key={index} card={card}/>
                        </CarouselItem>
                        )
                    )}
                    </CarouselContent>
                    <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10"/>
                    <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10"/>
                </Carousel>
            </div>
        </div>
    )
}

export default ProjectCardLayout;