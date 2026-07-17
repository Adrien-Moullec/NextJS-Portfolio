import GameLayout from "@/components/InformationLayout/GamePage";
import data from "@/data/starmap.json"

export default function Home() {
    return <GameLayout page={data} />
}