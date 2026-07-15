"use client"
import React from "react";
import { Page, Category } from "../Presets/ProjectCardInterfaces";
import { TitleFont, TitleDescription as TitleDescription, CategoryDescriptionFont } from "../Presets/MyFonts";
import CarouselCard from "./CarouselCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import { crimsonPro } from "@/components/Presets/GoogleFonts"
import Image from "next/image";
import DisplayParagraphs from "./DisplayParagraphs";

const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

interface PageLayoutProps {
    page: Page
    splitCount: number
}

const ProjectPageLayout: React.FC<PageLayoutProps> = ({ page, splitCount }) => {
    return (
        <div className="flex flex-col items-center text-white mb-5">
            <h1 className={TitleFont + " pb-10"}>{page.main.projectName}</h1>
            {DisplayParagraphs(page.main.projectDescription, "bg-slate-400 rounded-xl w-fit mx-[50px] border-1", TitleDescription + " items-center text-center w-4/5")}
            <div className="my-5">
                {page.game.gameBuild != "" && <Link href={"/Games/" + page.main.projectName}>Play Game</Link>}
                <br />
            </div >
            <div className={`grid grid-cols-${1}`}>
                {page.categories.map((category, index) => (
                    <div key={index} className="h-full">
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
    let layoutList = categoryInterface.categoryStyle.split("-")
    let layoutMode = (layoutList.length > 1 ? layoutList[1] : "")

    switch (layoutList[0]) {
        case "":
        case "squarelayout": content = (
            <>
                {CategoryTitleLayout(categoryInterface)}
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-[50px]">
                    {categoryInterface.cards.map((card, index) => (<CarouselCard key={index} cardInterface={card} />))}
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
                                    <CarouselCard cardInterface={card} />
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
                    {PictureGrid(categoryInterface, Math.ceil(categoryInterface.cards.length / 2))}
                </>
            ); break;

        case "flipflop":
        case "sideongrid":
            content = (
                <div className={"flex flex-row" + (layoutMode == "2" ? "-reverse" : "") + " mt-20 mx-[15px]"}>
                    <div className="w-1/2 bg-slate-400 rounded-xl border-1">
                        <div className={`flex flex-col`}>
                            <h1 className={crimsonPro.className + ` text-4xl font-bold underline text-left w-full ml-[5px] mx-auto`}>
                                {categoryInterface.categoryTitle}
                            </h1>
                            {DisplayParagraphs(categoryInterface.categoryDescription, "", CategoryDescriptionFont,)}
                        </div>
                    </div >
                    <div className="w-1/2 mx-[5px]">
                        {PictureGrid(categoryInterface, Math.ceil(Math.sqrt(categoryInterface.cards.length)))}
                    </div>
                </div >
            ); break;

        default: content = <h1>Unknown Style Input</h1>
    }

    return (<>{content}</>)
}
//squarelayout
//carousel
//picture
//sideongrid


//content = (
//    <>
//        {CategoryTitleLayout(categoryInterface)}
//        <div className="mx-auto gap-3">
//            {categoryInterface.cards.map((card, index) => (
//                <FlipFlopInformation key={index} card={card} index={index} />
//            )
//            )}
//        </div>
//    </>
//); break;
function CategoryTitleLayout(categoryInterface: Category) {
    if (categoryInterface.categoryTitle || categoryInterface.categoryDescription) {
        return (
            <div className={`flex flex-col mx-[50px] bg-slate-700 rounded-2xl my-5`}>
                <div className="m-[5px]">
                    <h1 className={crimsonPro.className + ` text-4xl font-bold underline text-left w-full`}>
                        {categoryInterface.categoryTitle}
                    </h1>
                    {DisplayParagraphs(categoryInterface.categoryDescription, CategoryDescriptionFont + " w-full", "")}
                </div>
            </div>
        )
    } else return <div className="mt-4" />
}

function PictureGrid(categoryInterface: Category, num: number) {
    return (
        <div className={`grid grid-cols-${num} gap-5`} >
            {
                categoryInterface.cards.map((card, index) => (
                    <div className="flex flex-col text-left w-full" key={index}>
                        <Image alt="project image"
                            src={basePath + card.cardImage}
                            width={500} height={500}
                            className={"w-full rounded-3xl"}
                        />
                        <h1 className="font-bold">{card.cardTitle}</h1>
                    </div>
                ))
            }
        </ div >
    )
}

export default ProjectPageLayout;