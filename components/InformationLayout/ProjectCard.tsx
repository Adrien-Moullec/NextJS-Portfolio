import Image from "next/image";
import { Card } from "../Presets/ProjectCardInterfaces";
import { CardDesc, CardTitle } from "../Presets/MyFonts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface CardProps {
    card:Card
}

const ProjectCard:React.FC<CardProps> = ({card}) => {
    return (
        <div
        id="Individual Card"
        className="place-items-center flex flex-col p-5 mx-auto text-center hover:underline hover:underline-offset-4 hover:bg-amber-50 rounded-4xl"
        style={{
            overflow: 'hidden', // clips anything outside
            position: 'relative'
            }}
        >
            <div className="place-content-center-safe">
                <p className={CardTitle}>{card.title}</p>

                <img alt="project image"
                src={basePath+card.image}
                className={CardDesc}
                style={{objectFit:'contain'}}
                />
                
                <p>{card.description}</p>
            </div>
            
        </div>
        
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