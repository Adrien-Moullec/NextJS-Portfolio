import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const ProjectCard = ({number, Title, Description} : {number:number, Title:string, Description:string}) => {
    return (
        <div key={number}
        className="place-items-center border-1 flex flex-col p-5 mx-auto
        border-pink-400 hover:bg-amber-300 text-center">
            <Image alt="project image" src="${basePath}/Pictures/cat.png" width={150} height={150}
            className="border-1 border-black aspect-square rounded-2xl"
            />
            <div className="place-content-center-safe border-3 border-black">
                <p className="bold text-shadow-2xs text-2xl">{Title}</p>
                <p>{Description}</p>
            </div>
            
        </div>
        
    );
}

export default ProjectCard;