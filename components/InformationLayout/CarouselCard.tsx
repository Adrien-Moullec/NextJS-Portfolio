"use client"
import { Card as CardInterface } from "../Presets/ProjectCardInterfaces";
import Link from "next/link";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import DisplayParagraphs from "./DisplayParagraphs";

const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

function CarouselCard(cardInterface: CardInterface) {

    switch (cardInterface.cardHref) {
        case "":
        case "#": return (
            <div style={{
                overflow: 'hidden',
                position: 'relative'
            }}>
                {CardLayout(cardInterface)}
            </div>
        );

        default: return (
            <Link
                id="Individual Card"
                href={cardInterface.cardHref}
                className={"text-center hover:underline "}
                style={{
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                {CardLayout(cardInterface)}
            </Link>
        )
    }
}

function CardLayout(cardInterface: CardInterface) {
    return (
        <Card className={`text-white bg-gradient-to-br from-black to-slate-900  overflow-hidden text-ellipsis border-indigo-700 border-3`}>
            <CardHeader>
                <CardTitle className={`text-3xl`}>
                    {cardInterface.cardTitle}
                </CardTitle>
                <CardDescription className={`text-white overflow-clip`}>
                    {DisplayParagraphs(cardInterface.cardDescription, "")}
                </CardDescription>
                <CardAction />
            </CardHeader>
            <CardContent>
                {cardInterface.cardImage !== "" ? (
                    <Image alt="project image"
                        src={basePath + cardInterface.cardImage}
                        width={50} height={50}
                        className={" rounded-md max-h-53 w-full overflow-clip"}
                        style={{ objectFit: 'contain' }}
                    />) : null}
            </CardContent>
            <CardFooter> </CardFooter>
        </Card>
    )
}

export default CarouselCard;