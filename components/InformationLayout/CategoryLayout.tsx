import React from "react";
import { Category } from "../Presets/ProjectCardInterfaces";
import CarouselCard from "./CarouselCard";
import { CategoryDescriptionFont, CategoryFont } from "../Presets/MyFonts";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import FlipFlopInformation from "./FlipFlopCard";

interface ProjectCardLayoutProps {
    category: Category
}

const ProjectCardLayout: React.FC<ProjectCardLayoutProps> = ({ category }) => {
    let content;

    switch (category.categoryStyle) {
        case "carousel":
            content = (
                <>
                    <h1 className={CategoryFont}>{category.categoryTitle}</h1>
                    <h1 className={CategoryDescriptionFont}>{category.categoryDescription}</h1>
                    <div className="h-10" />
                    <div className="relative px-2 sm:px-4 w-1/2 lg:w-full">
                        <Carousel>
                            <CarouselContent className="">
                                {category.cards.map((card, index) => (
                                    <CarouselItem key={"" + index}
                                        className="basis-1/1 sm:basis-1/1 lg:basis-1/2 2xl:basis-1/4"
                                    >
                                        <CarouselCard key={index} card={card} />
                                    </CarouselItem>
                                )
                                )}
                            </CarouselContent>
                            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10" />
                            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10" />
                        </Carousel>
                    </div>
                </>
            ); break;

        case "flipflop":
            content = (
                <>
                    <h1 className={CategoryFont}>{category.categoryTitle}</h1>
                    <h1 className={CategoryDescriptionFont}>{category.categoryDescription}</h1>
                    <div className="h-10" />
                    <div className="relative px-2 sm:px-4 w-1/2">
                        {category.cards.map((card, index) => (
                            <FlipFlopInformation key={index} card={card} index={index} />
                        )
                        )}
                    </div>
                </>
            ); break;

        default:
            content = <h1>Unknown Style Input</h1>
    }

    return (
        <div className="pt-30">
            {content}
        </div>
    )
}

export default ProjectCardLayout;