import ProjectPageLayout from "@/components/InformationLayout/ProjectPage";
import data from "@/data/starmap.json"

export default function Home() {

    return (
        <div>
            <ProjectPageLayout page={data} />
        </div>
    )
}