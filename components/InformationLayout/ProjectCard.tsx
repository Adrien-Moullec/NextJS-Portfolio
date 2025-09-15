import Image from "next/image";
import { Card } from "../Types/ProjectCardInterfaces";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface CardProps {
    card:Card
}

const ProjectCard:React.FC<CardProps> = ({card}) => {
    return (
        <a
        id="Individual Card"
        className="place-items-center border-1 flex flex-col p-5 mx-auto text-center hover:underline hover:underline-offset-4 bg-amber-300 hover:bg-amber-50 rounded-4xl">

            <Image alt="project image" src={basePath+card.image} width={300} height={300}
            className="border-1 border-black aspect-square rounded-2xl"
            />
            <div className="place-content-center-safe border-3 border-black">
                <p className="bold text-shadow-2xs text-2xl">{card.title}</p>
                <p>{card.description}</p>
            </div>
            
        </a>
        
    );
}

export default ProjectCard;