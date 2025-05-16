import ProjectCard from "@/components/LayoutChunks/ProjectCard";
import data from '../../data/db.json';
import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
      <div id="First section" className= {" flex-1 flex flex-col border-1 border-pink-900 place-items-center text-4xl pt-5"}>
        <p className="pb-10"> Adrien Moullec </p>
        <div>
          <Image className="mx-auto border-1 w-3/9" alt="profile" src={basePath+"/Pictures/profile.png"} width={50} height={50}/>
        </div>
        <div id="ABOUT ME" className="flex items-center border-1 p-5 pt-10 space-y-5 border-red-700 flex-col min-w-2/5 max-w-2/5">
          <h1 className="text-2xl bold border-1 border-black">About Me</h1>
          <p className="text-xl border-1 border-black"> I am the boi hhhhhhhhhhhhhhh a sas sa das da sds adas d  dsgfdg dfg </p>
        </div>

        <div className="bg-black min-w-2/1000 max-w-2/1000"/>

        <div id="PROJECT GRID" 
        className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-1 gap-4 border-1 border-yellow-400 w-screen">
          {data.ProjectPage.map(projectX => (
            <ProjectCard key={projectX.id} Title={projectX.project} Description={projectX.description} ProjImage={projectX.image}/>
          ))}
        </div>
      </div>
  );
}