import { Card } from "../Presets/ProjectCardInterfaces";
import { CardDesc, CardTitle } from "../Presets/MyFonts";
import Image from "next/image";
import DisplayParagraphs from "./DisplayParagraphs";
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
            className={`text-center my-10 w-full border-1 md:flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            style={{
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <div id="Text side" className="md:w-1/2 mx-5">
                <p className={CardTitle + " my-10"}>{card.cardTitle}</p>
                <DisplayParagraphs className={CardDesc} text={card.cardDescription} />
            </div>
            <div id="Picture side" className=" md:w-1/2 mx-5 items-center">
                {card.cardImage !== "" ? (
                    <Image alt="project image"
                        src={basePath + card.cardImage}
                        width={1000} height={1000}
                        className="rounded-3xl w-full max-h-240"
                        style={{ objectFit: 'contain' }}
                    />) : null}
            </div>
        </div>

    );
}

export default FlipFlopInformation;
