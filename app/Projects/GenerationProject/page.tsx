import data from "@/data/generation.json"
import { ProjectPageLayout } from "@/components/InformationLayout/ProjectPage";

export default function Home() {
    return <ProjectPageLayout page={data} />
}