"use client"
import React from "react";
import { Page, Category } from "../Presets/ProjectCardInterfaces";
import { TitleFont, CategoryDescriptionFont } from "../Presets/MyFonts";
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
import Image from "next/image"
import DisplayParagraphs from "./DisplayParagraphs";
const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

interface PageLayoutProps {
    page: Page
}
const ProjectPageLayout: React.FC<PageLayoutProps> = ({ page }) => {

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

function Header(page: Page) {
    const styling = {
        backgroundImage: `url('${page.main.projectImage}')`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    return (
        < div className="w-5/6" >
            <div className="flex flex-col items-center rounded-2xl border-4 bg-black border-indigo-300" style={styling}>
                <h1 className={TitleFont + " p-5 bg-black rounded-2xl my-5"}>{page.main.projectName}</h1>
                {DisplayParagraphs(page.main.projectDescription, "bg-slate-700 rounded-md w-fit mx-[50px] border-black border-1", crimsonPro.className + " text-2xl items-center text-center w-4/5")}
                {DispayGameLinks(page)}
            </div>
        </div >
    )
}

function DispayGameLinks(page: Page) {
    if (page.game.gameIndex != "" || page.main.projectLink != "") return (
        < div className="my-5 border-2 bg-black text-center rounded-md flex flex-col gap-1 text-xl" >
            {
                page.game.gameBuild != "" && <Link href={"/Games/" + page.main.projectName} className="mx-5 hover:underline">
                    Play Game
                </Link>
            }{
                page.main.projectLink != " " && <Link href={page.main.projectLink} className="mx-5 hover:underline">
                    Project Files
                </Link>
            }
        </div >
    )
    else return <div className="my-5" />
}
//squarelayout
//carousel
//picture
//sideongrid
function Divide(render: boolean) {
    if (render) return <div className="items-center mx-10 bg-amber-50 rounded-4xl opacity-35 h-1" />
    else return <></>
}

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
                    {PictureGrid(categoryInterface, Math.ceil(categoryInterface.cards.length / 2))}
                </>
            ); break;

        case "flipflop":
        case "sideongrid":
            content = (
                <div className={"flex flex-row" + (layoutMode == "2" ? "-reverse" : "") + " mt-20 mx-[15px]"}>
                    <div className="w-1/2 bg-slate-700 rounded-xl border-1">
                        <div className={`flex flex-col`}>
                            <h1 className={crimsonPro.className + ` text-4xl font-bold underline text-left w-full ml-[5px] mx-auto`}>
                                {categoryInterface.categoryTitle}
                            </h1>
                            {DisplayParagraphs(categoryInterface.categoryDescription, "", CategoryDescriptionFont,)}
                        </div>
                    </div >
                    <div className="w-1/2 mx-[5px]">
                        {PictureGrid(categoryInterface, categoryInterface.cards.length)}
                    </div>
                </div >
            ); break;

        default: content = <h1>Unknown Style Input</h1>
    }

    return (<>{content}</>)
}

function CategoryTitleLayout(categoryInterface: Category) {
    if (categoryInterface.categoryTitle || categoryInterface.categoryDescription) {
        return (
            <div className={`flex flex-col mx-[50px] border-1 border-black bg-slate-700 rounded-2xl my-5`}>
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
        <div
            className={`grid gap-5`}
            style={{
                gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(num))}, minmax(0, 1fr))`,
            }} >
            {
                categoryInterface.cards.map((card, index) => (
                    <div className="flex flex-col text-left w-full" key={index}>
                        <Image alt="project image"
                            src={basePath + card.cardImage}
                            width={500} height={500}
                            className={"w-full rounded-md"}
                        />
                        <h1 className="font-bold">{card.cardTitle}</h1>
                    </div>
                ))
            }
        </ div >
    )
}

export default ProjectPageLayout;