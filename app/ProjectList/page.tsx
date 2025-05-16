import ProjectCard from "@/components/LayoutChunks/ProjectCard";
import data from '../../data/db.json';


export default function Home() {
  return (
        <div id="PROJECT GRID" 
        className="pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 p-1 gap-y-7 border-1 border-yellow-400 w-screen">
          {data.ProjectPage.map(projectX => (
            <ProjectCard key={projectX.id} Title={projectX.project} Description={projectX.description} ProjImage={projectX.image}/>
          ))}
        </div>

  )
}