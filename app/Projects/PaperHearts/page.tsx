import data from "@/data/paperhearts.json"
import { ProjectPageLayout } from "@/components/InformationLayout/ProjectPage";

export default function Home() {
    return <ProjectPageLayout page={data} />
}