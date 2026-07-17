import data from "@/data/GameJams/yello.json"
import { ProjectPageLayout } from "@/components/InformationLayout/ProjectPage";

export default function Home() {
    return <ProjectPageLayout page={data} />
}