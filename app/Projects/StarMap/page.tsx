"use client"
import ProjectPageLayout from "@/components/InformationLayout/ProjectPageLayout";
import data from "@/data/db.json"

export default function Home() {   
    
    return (
        <div className="flex flex-col items-center">            
            <ProjectPageLayout page={data.Projects[0]}/>
        </div>
        
  )
}