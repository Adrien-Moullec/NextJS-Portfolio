"use client"
import ProjectPageLayout from "@/components/InformationLayout/ProjectPageLayout";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
import data from "@/data/db.json"

export default function Home() {   
    
    return (
        <div className="flex flex-col items-center">            
            <ProjectPageLayout page={data.Projects[0]}/>
        </div>
        
  )
}