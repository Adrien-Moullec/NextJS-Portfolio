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
import { crimsonPro } from "@/components/Presets/GoogleFonts"
import DisplayParagraphs from "./DisplayParagraphs";

const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

interface CardProps {
    cardInterface: CardInterface
}

const CarouselCard: React.FC<CardProps> = ({ cardInterface }) => {
    let content;

    switch (cardInterface.cardHref) {
        case "":
        case "#": content = (
            <div style={{
                overflow: 'hidden',
                position: 'relative'
            }}>
                <CardLayout cardInterface={cardInterface} />
            </div>
        ); break;

        default: content = (
            <Link
                id="Individual Card"
                href={cardInterface.cardHref}
                className={"text-center hover:underline "}
                style={{
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <CardLayout cardInterface={cardInterface} />
            </Link>
        )
    }
    return (<>{content}</>)
}

const CardLayout: React.FC<CardProps> = ({ cardInterface }) => {
    return (
        <Card className={`${cardInterface.cardDescription.length > 1 ? "h-110" : "h-80"} rounded-sm text-white bg-black overflow-hidden text-ellipsis `}>
            <CardHeader>
                <CardTitle className={`text-3xl rounded-xl ${cardInterface.cardTitle.length > 1 ? "h-20" : ""}`}>
                    {cardInterface.cardTitle}
                </CardTitle>
                <CardDescription className={` ${cardInterface.cardDescription.length > 1 ? "h-30" : ""} text-white overflow-clip`}>
                    <DisplayParagraphs className="" text={cardInterface.cardDescription} />
                </CardDescription>
                <CardAction />
            </CardHeader>
            <CardContent className="h-70">
                {cardInterface.cardImage !== "" ? (
                    <Image alt="project image"
                        src={basePath + cardInterface.cardImage}
                        width={1000} height={1000}
                        className={" border-black border-3 rounded-md max-h-53 w-full overflow-clip"}
                        style={{ objectFit: 'contain' }}
                    />) : null}
            </CardContent>
            <CardFooter> </CardFooter>
        </Card>
    )
}

export default CarouselCard;