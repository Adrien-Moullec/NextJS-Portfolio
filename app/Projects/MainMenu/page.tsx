import data from "@/data/mainmenu.json"
import { ProjectPageLayout } from "@/components/InformationLayout/ProjectPage";

export default function Home() {
    return <ProjectPageLayout page={data} />
}