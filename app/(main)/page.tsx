import data from "@/data/devInfo.json"
const basePath = process.env.NODE_ENV === 'production'
  ? '/NextJS-Portfolio'
  : '';
import { TitleFont } from "@/components/Presets/MyFonts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="First section" className={"text-white flex-1 flex flex-col place-items-center text-4xl pt-5"}>

        <p className={"pb-10" + TitleFont}> {data.devInfo.devName} </p>

        <Image className="mx-auto w-3/9" alt="profile" src={basePath + "/Pictures/profile.webp"} width={50} height={50} />

        <div id="ABOUT ME" className="flex items-center p-5 pt-10 space-y-5 flex-col min-w-2/5 max-w-4/5">
          <h1 className="text-2xl bold">About Me</h1>
          <p className="text-xl">{data.devInfo.profileSummary}</p>
        </div>

        <div className="bg-black min-w-2/1000 max-w-2/1000" />

        <div id="PROJECT GRID"
          className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-1 gap-4 w-screen">
        </div>
      </div>
    </>
  );
}