"use client"
import React from "react";
import { Page, Category, PageLayoutProps } from "../Presets/ProjectCardInterfaces";
import { CategoryDescriptionFont } from "../Presets/MyFonts";
import CarouselCard from "./CarouselCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { crimsonPro } from "@/components/Presets/GoogleFonts"
import DisplayParagraphs from "./DisplayParagraphs";
import { Header, CategoryTitleLayout, PictureGrid, Divide } from "./PortfolioLayout"

export const ProjectPageLayout: React.FC<PageLayoutProps> = ({ page }) => {

    // style={styling}
    return (
        <div className="flex flex-col items-center text-white mb-5">
            {Header(page)}
            <div className={`grid grid-cols-${1}`}>
                {page.categories.map((category, index) => (
                    <div key={index} className="my-5">
                        <div className="my-5" />
                        {Divide(category.categoryTitle != "")}
                        {ProjectCardLayout(category)}
                    </div>
                ))}
            </div>
        </div>
    )
}

//squarelayout
//carousel
//picture
//sideongrid
function ProjectCardLayout(categoryInterface: Category) {
    let content;
    const layoutList = categoryInterface.categoryStyle.split("-")
    const layoutMode = (layoutList.length > 1 ? layoutList[1] : "")

    switch (layoutList[0]) {
        case "":
        case "squarelayout": content = (
            <>
                {CategoryTitleLayout(categoryInterface)}
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-[50px]">
                    {categoryInterface.cards.map((card, index) =>
                        <div key={index}>
                            {CarouselCard(card)}
                        </div>
                    )}
                </div>
            </>
        ); break;

        case "carousel":
            content = (
                <>
                    {CategoryTitleLayout(categoryInterface)}
                    <Carousel className="px-2 sm:px-4 w-full">
                        <CarouselContent className="gap-4" >
                            {categoryInterface.cards.map((card, index) => (
                                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                                    {CarouselCard(card)}
                                </CarouselItem>)
                            )}
                        </CarouselContent>
                        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10 " />
                        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10" />
                    </Carousel>
                </>
            ); break;

        case "picture":
            content = (
                <>
                    {CategoryTitleLayout(categoryInterface)}
                    {PictureGrid(categoryInterface)}
                </>
            ); break;

        case "flipflop":
        case "sideongrid":
            content = (
                <div className={"flex flex-row" + (layoutMode == "2" ? "-reverse" : "") + " mt-20 mx-[15px]"}>
                    <div className="w-1/2 bg-gradient-to-tl from-slate-900 to-black rounded-xl border-1">
                        <div className={`flex flex-col`}>
                            <h1 className={crimsonPro.className + ` text-4xl font-bold underline text-left w-full ml-[5px] mx-auto`}>
                                {categoryInterface.categoryTitle}
                            </h1>
                            {DisplayParagraphs(categoryInterface.categoryDescription, "", CategoryDescriptionFont,)}
                        </div>
                    </div >
                    <div className="w-1/2 mx-[5px]">
                        {PictureGrid(categoryInterface)}
                    </div>
                </div >
            ); break;

        default: content = <h1>Unknown Style Input</h1>
    }

    return (<>{content}</>)
}

export default ProjectPageLayout;