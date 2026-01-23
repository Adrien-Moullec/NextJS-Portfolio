import { Card } from "../Presets/ProjectCardInterfaces";
import { CardDesc, CardTitle } from "../Presets/MyFonts";
import Link from "next/link";
//import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface CardProps {
    card:Card
}

const CarouselCard:React.FC<CardProps> = ({card}) => {
    return (
        <Link
        id="Individual Card"
        href={card.cardHref}
        className="text-center hover:underline rounded-4xl"
        style={{
            overflow: 'hidden',
            position: 'relative'
            }}
        >
            <div className="flex flex-col justify-items-center">
                <p className={CardTitle+" pb-1"}>{card.cardTitle}</p>
                
                {card.cardImage!=="" ? (
                <img alt="project image"
                src={basePath+card.cardImage}
                className="border-black hover:border-white border-3"
                style={{objectFit:'contain'}}
                />) : null}
                
                <p className={CardDesc}>{card.cardDescription}</p>
            </div>            
        </Link>
        
    );
}

export default CarouselCard;

/*
style={{
            width: '200px',   // max width
            height: '200px',  // max height
            overflow: 'hidden', // clips anything outside
            position: 'relative'
            }}


            <div
            id="Image Container"            
            className="relative inline-block">
*/