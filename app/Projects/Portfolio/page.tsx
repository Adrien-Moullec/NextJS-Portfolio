import ProjectPageLayout from "@/components/InformationLayout/ProjectPage";
import data from "@/data/portfolio.json"

export default function Home() {

    return (
        <div>
            <ProjectPageLayout page={data} />
        </div>
    )
}