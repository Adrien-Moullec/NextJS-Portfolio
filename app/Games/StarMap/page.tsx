"use client"
import GameLayout from "@/components/InformationLayout/GamePage";
import data from "@/data/db.json"

export default function Home() {   
    
    return (
        <div className="flex flex-col items-center">            
            <GameLayout page={data.Projects[2]}/>
        </div>        
    )
}