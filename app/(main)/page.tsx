"use client"
import devInfo from "@/data/PersonalInfo/devInfo.json"
const basePath = process.env.NODE_ENV === 'production'
  ? '/NextJS-Portfolio'
  : '';
import { TitleFont } from "@/components/Presets/MyFonts";
import Image from "next/image";
import { ProjectPageLayout, ProjectCardLayout } from "@/components/InformationLayout/ProjectPage";
import data from "@/data/PersonalInfo/projectlist.json"


export default function Home() {

  const styling = {
    backgroundImage: `url('')`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  return (
    <>
      <div id="First section" className={"text-white flex-1 flex flex-col place-items-center text-4xl pt-5 mb-15"}>

        < div className="w-fit bg-gradient-to-b from-black to-indigo-900 rounded-xl" >
          <div className="flex p-5 flex-col items-center rounded-2xl border-black border-1 " style={styling}>
            <p className={"pb-10" + TitleFont}> {devInfo.devInfo.devName} </p>
          </div>
        </div>



        <Image className="mx-auto mt-10" alt="profile" src={basePath + "Icons/Me.webp"} width={100} height={40} />

        {devInfo.devInfo.categories.map((card, index) =>
          <div key={index}>
            {ProjectCardLayout(card)}
          </div>
        )}
      </div>
      <ProjectPageLayout page={data} />
    </>
  );
}

/*


        <div id="ABOUT ME" className="flex items-center p-5 pt-10 space-y-5 flex-col min-w-2/5 max-w-4/5">
          <h1 className="text-2xl bold">About Me</h1>
          <p className="text-xl">{devInfo.devInfo.profileSummary}</p>
        </div>

        <div className="bg-black min-w-2/1000 max-w-2/1000" />

        <div id="PROJECT GRID"
          className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-1 gap-4 w-screen">
        </div>

*/