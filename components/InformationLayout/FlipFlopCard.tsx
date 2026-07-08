import { Card } from "../Presets/ProjectCardInterfaces";
import { CardDesc, CardTitle } from "../Presets/MyFonts";
//import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

interface CardProps {
    card: Card;
    index: number;
}

const FlipFlopInformation: React.FC<CardProps> = ({ card, index }) => {
    return (
        <div
            key={index}
            className={`justify-items-center text-center rounded-4xl mb-5 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            style={{
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <div id="Text side" className="w-1/2 ps-10 pt-5">
                <p className={CardTitle + " pb-1"}>{card.cardTitle}</p>
                <p className={CardDesc}>{card.cardDescription}</p>
            </div>
            <div id="Picture side" className="w-1/2 ps-10 items-center">
                {card.cardImage !== "" ? (
                    <img alt="project image"
                        src={basePath + card.cardImage}
                        className="rounded-3xl"
                        style={{ objectFit: 'contain' }}
                    />) : null}
            </div>
        </div>

    );
}

export default FlipFlopInformation;
