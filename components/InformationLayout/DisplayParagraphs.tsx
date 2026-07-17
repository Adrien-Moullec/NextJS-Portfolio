"use client";
import { useRef } from "react";
import { Button } from "../ui/button";

export function DisplayParagraphs(description: string = "", textAreaClassName: string = "", textClassName: string = "") {
    if (description != "") return (
        <div className={textAreaClassName}>
            {
                description.split("\n").map((text, index) => {
                    {
                        if (text === "") return (<br key={index} />);
                        else if (text.endsWith(".mp3")) return DisplayAudio(text, index)
                        else return DisplayText(text, textClassName, index)
                    }
                })
            }
        </div>
    );
    else return <></>
}

export function DisplayText(text: string = "", textClassName: string = "", index: number = 0) {
    return (
        <div key={index} className={textClassName + " w-fit m-[5px]"}>
            {text}
        </div>
    )
}

export function DisplayAudio(text: string = "", index: number = 0) {
    const audioRef = useRef<HTMLAudioElement>(null);
    return (
        <div key={index}>
            <audio ref={audioRef} src={text} />

            <div className="w-full font-extrabold flex flex-row text-center">
                <Button className="w-1/2" onClick={() => audioRef.current?.play()}>
                    <h1>▶︎</h1>
                </Button>
                <Button className="w-1/2" onClick={() => audioRef.current?.pause()}>
                    <h1>II</h1>
                </Button>
            </div>
        </div>
    );
}

export default DisplayParagraphs