import ProjectPageLayout from "@/components/InformationLayout/ProjectPage";
import data from "@/data/oceanboids.json"

export default function Home() {   
    
    return (
        <div className="flex flex-col items-center">            
            <ProjectPageLayout page={data}/>
        </div>        
    )
}