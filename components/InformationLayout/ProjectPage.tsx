"use client"
import React from "react";
import { Page, Category } from "../Presets/ProjectCardInterfaces";
import { TitleFont, TitleDescription as TitleDescription, CategoryDescriptionFont, CategoryFont } from "../Presets/MyFonts";
import CarouselCard from "./CarouselCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import FlipFlopInformation from "./FlipFlopCard";
import Link from "next/link";

interface ProjectCardLayoutProps {
    categoryInterface: Category
}

interface PageLayoutProps {
    page: Page
}

const ProjectPageLayout: React.FC<PageLayoutProps> = ({ page }) => {
    return (
        <div className="flex flex-col items-center text-white ">
            {page.game.gameBuild != "" && <Link href={"/Games/" + page.main.projectName}>Play Game</Link>}
            <h1 className={TitleFont + " pt-10 pb-10"}>{page.main.projectName}</h1>
            <p className={TitleDescription + " pt-10 pb-20 pl-5 text-left w-4/5"}>{page.main.projectDescription}</p>

            {page.categories.map((category, index) => (
                <ProjectCardLayout key={index} categoryInterface={category} />
            ))}
        </div>
    )
}

export const ProjectCardLayout: React.FC<ProjectCardLayoutProps> = ({ categoryInterface }) => {
    let content;

    switch (categoryInterface.categoryStyle) {
        case "carousel":
            content = (
                <>
                    <CategoryTitleLayout categoryInterface={categoryInterface} />
                    <Carousel className="px-2 sm:px-4 w-full">
                        <CarouselContent className="gap-4" >
                            {categoryInterface.cards.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                                    <CarouselCard cardInterface={card} />
                                </CarouselItem>)
                            )}
                        </CarouselContent>
                        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10" />
                        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10" />
                    </Carousel>
                </>
            ); break;

        case "flipflop":
            content = (
                <>
                    <CategoryTitleLayout categoryInterface={categoryInterface} />
                    <div className="mx-auto gap-3">
                        {categoryInterface.cards.map((card, index) => (
                            <FlipFlopInformation key={index} card={card} index={index} />
                        )
                        )}
                    </div>
                </>
            ); break;

        case "squarelayout": content = (
            <>
                <CategoryTitleLayout categoryInterface={categoryInterface} />
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-[50px]">
                    {categoryInterface.cards.map((card, index) => (<CarouselCard key={index} cardInterface={card} />))}
                </div>
            </>
        ); break;

        default:
            content = <h1>Unknown Style Input</h1>
    }

    return (<>{content}</>)
}

const CategoryTitleLayout: React.FC<ProjectCardLayoutProps> = ({ categoryInterface }) => {
    return (
        <>
            <h1 className={CategoryFont + `w-full mx-auto ${categoryInterface.categoryTitle === "" ? "" : "mt-30"}`}>
                {categoryInterface.categoryTitle}
            </h1>
            <h1 className={CategoryDescriptionFont + " w-full mx-auto"}>
                {categoryInterface.categoryDescription}
            </h1>
        </>
    )
}

export default ProjectPageLayout;