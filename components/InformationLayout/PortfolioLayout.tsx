import React from "react";
import { Page, Category } from "../Presets/ProjectCardInterfaces";
import { CategoryDescriptionFont } from "../Presets/MyFonts";
import Link from "next/link";
import { crimsonPro, lobster } from "@/components/Presets/GoogleFonts"
import Image from "next/image"
import DisplayParagraphs from "./DisplayParagraphs";
const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

export function Header(page: Page) {
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
            <div className="flex flex-col items-center rounded-2xl border-black border-4 bg-black" style={styling}>
                <h1 className={lobster.className + " text-6xl font-bold p-5 bg-gradient-to-br from-blue-950 to-black rounded-2xl my-5 border-1 border-black"}>{page.main.projectName}</h1>
                {DisplayParagraphs(page.main.projectDescription, "bg-gradient-to-br from-blue-950 to-black rounded-md w-fit mx-[50px] mb-5 border-1 border-black", crimsonPro.className + " text-xl items-center text-center w-4/5")}
                {DispayGameLinks(page)}
            </div>
        </div >
    )
}

export function DispayGameLinks(page: Page) {
    const button = "mb-2 border-2 bg-black text-center rounded-md flex flex-col gap-1 text-xl"
    if (page.game.gameIndex != "" || page.main.projectLink != "") return (
        <>
            < div className={button}>
                {
                    page.game.gameBuild != "" && <Link href={"/Games/" + page.main.projectName} className="mx-5 hover:underline">
                        Play Game
                    </Link>
                }
            </div >
            < div className={button}>{
                page.main.projectLink != " " && <Link href={page.main.projectLink} className="mx-5 hover:underline">
                    Project Files
                </Link>
            }
            </div >
        </>
    )
    else return <div className="my-5" />
}

export function Divide(render: boolean) {
    if (render) return <div className="items-center mx-10 h-0.5 bg-amber-50 rounded-4xl opacity-35" />
}

export function CategoryTitleLayout(categoryInterface: Category, titleCN: string = "text-left text-2xl") {
    if (categoryInterface.categoryTitle || categoryInterface.categoryDescription) {
        return (
            <div className={`flex flex-col mx-[18px] border-1 bg-gradient-to-b from-black to-indigo-950 rounded-xl my-5 `}>
                <div className="m-[5px]">
                    <h1 className={crimsonPro.className + ` p-1 font-bold underline w-full ${titleCN}`}>
                        {categoryInterface.categoryTitle}
                    </h1>
                    {DisplayParagraphs(categoryInterface.categoryDescription, CategoryDescriptionFont + " w-full", "")}
                </div>
            </div>
        )
    } else return <div className="mt-4" />
}

export function PictureGrid(categoryInterface: Category) {
    return (
        <div
            className={`grid gap-5 bg-gradient-to-tl from-slate-900 to-black rounded-2xl border-1 border-indigo-500`}
            style={{
                gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(categoryInterface.cards.length))}, minmax(0, 1fr))`,
            }} >
            {
                categoryInterface.cards.map((card, index) => (
                    <div className="flex flex-col text-left w-full p-2" key={index}>
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