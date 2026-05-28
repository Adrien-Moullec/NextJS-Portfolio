import data from "@/data/db.json"
const basePath = process.env.NODE_ENV === 'production'
  ? '/NextJS-Portfolio'
  : '';

export default function Home() {
  return (
    <div id="First section" className={"text-white flex-1 flex flex-col border-1 border-pink-900 place-items-center text-4xl pt-5"}>
      <p className="pb-10"> {data.devInfo.devName} </p>
      <div>
        <img className="mx-auto border-1 w-3/9" alt="profile" src={basePath + "/Pictures/profile.webp"} width={50} height={50} />
      </div>
      <div id="ABOUT ME" className="flex items-center border-1 p-5 pt-10 space-y-5 border-red-700 flex-col min-w-2/5 max-w-2/5">
        <h1 className="text-2xl bold border-1 border-black">About Me</h1>
        <p className="text-xl border-1 border-black"> This is me, I am him </p>
      </div>

      <div className="bg-black min-w-2/1000 max-w-2/1000" />

      <div id="PROJECT GRID"
        className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-1 gap-4 border-1 border-yellow-400 w-screen">
      </div>
    </div>
  );
}