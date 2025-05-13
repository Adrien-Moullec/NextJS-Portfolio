import ProjectCard from "@/components/LayoutChunks/ProjectCard";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] pb-100">
      <div className= "flex-1 flex flex-row border-1 border-pink-900">

        <div id="ABOUT ME" className="flex items-center border-1 p-5 pt-10 space-y-5 border-red-700 flex-col min-w-2/5 max-w-2/5">
          <h1 className="text-2xl bold border-1 border-black">About Me</h1>
          <p className="text-xl border-1 border-black"> I am the boi hhhhhhhhhhhhhhh a sas sa das da sds adas d  dsgfdg dfg </p>
        </div>

        <div className="bg-black min-w-2/1000 max-w-2/1000"/>

        <div id="PROJECT GRID" 
        className="pt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-1 gap-4 border-1 border-yellow-400 min-w-13/24 max-w-14/24">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCard key={i} number={i} Title="The Project" Description="This is cat"/>
          ))}
        </div>
      </div>
    </div>
  );
}