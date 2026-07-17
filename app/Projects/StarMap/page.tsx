import data from "@/data/starmap.json"
import { ProjectPageLayout } from "@/components/InformationLayout/ProjectPage";

export default function Home() {
    return <ProjectPageLayout page={data} />
}