"use client"
import React from "react";
import { useEffect } from "react";
import { Page } from "../Presets/ProjectCardInterfaces";
import { TitleDescription } from "../Presets/MyFonts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface PageLayoutProps {
    page: Page
}

const GameLayout: React.FC<PageLayoutProps> = ({ page }) => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = basePath + page.game.gameBuild;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script)
        }

    }, [])

    return (
        <div className="flex flex-col items-center pt-10">
            export default ProjectPageLayout;<div>
                <div id="Game section" className="flex flex-row justify-center items-center w-screen">
                    <div className="w-1/16"></div>
                    <div
                        id="Game Window"
                        className="w-12/16 h-164 invisible xl:visible">

                        <iframe
                            src={basePath + page.game.gameIndex}
                            width="100%"
                            height="100%"
                            style={{ border: "border-yellow-400 border:5", position: "relative", top: 0, left: 0, right: 0, bottom: 0 }}
                            allowFullScreen />

                    </div>
                    <div className={TitleDescription + " w-1/16 text-xl"}>
                        {page.game.gameControls.map((nextControl, index) => (
                            <li key={index}>{nextControl}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameLayout;