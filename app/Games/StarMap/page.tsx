import GameLayout from "@/components/InformationLayout/GamePage";
import data from "@/data/Projects/starmap.json"

export default function Home() {
    return <GameLayout page={data} />
}