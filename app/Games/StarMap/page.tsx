"use client"
import GameLayout from "@/components/InformationLayout/GamePage";
import data from "@/data/starmap.json"

export default function Home() {

    return (
        <div>
            <GameLayout page={data} />
        </div>
    )
}