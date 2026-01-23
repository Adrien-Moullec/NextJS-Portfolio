import ProjectPageLayout from "@/components/InformationLayout/ProjectPage";
import data from "@/data/portfolio.json"

export default function Home() {   
    
    return (
        <div className="flex flex-col items-center">            
            <ProjectPageLayout page={data}/>
        </div>        
    )
}