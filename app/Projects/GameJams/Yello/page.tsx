import ProjectPageLayout from "@/components/InformationLayout/ProjectPage";
import data from "@/data/GameJams/yello.json"

export default function Home() {
    return (
        <ProjectPageLayout page={data} />
    )
}