import { Card } from "../Presets/ProjectCardInterfaces";
import { CardDesc, CardTitle } from "../Presets/MyFonts";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface CardProps {
    card:Card
}

const ProjectCard:React.FC<CardProps> = ({card}) => {
    return (
        <Link
        id="Individual Card"
        href={card.cardHref}
        scroll={false}
        target={card.cardHrefPage}
        className="p-5 mx-auto text-center hover:underline hover:bg-amber-50 rounded-4xl"
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
                className="rounded-2xl border-3"
                style={{objectFit:'contain'}}
                />) : null}
                
                <p className={CardDesc}>{card.cardDescription}</p>
            </div>
            
        </Link>
        
    );
}

export default ProjectCard;

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