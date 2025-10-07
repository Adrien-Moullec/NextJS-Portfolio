import ProjectPageLayout from "@/components/InformationLayout/ProjectPage";
import data from "@/data/db.json"

export default function Home() {   
    
    return (
        <div className="flex flex-col items-center">            
            <ProjectPageLayout page={data.Projects[4]}/>
        </div>        
    )
}