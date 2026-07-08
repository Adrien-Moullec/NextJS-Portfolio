import { Card as CardInterface } from "../Presets/ProjectCardInterfaces";
import Link from "next/link";
//import Image from "next/image";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
        <Card className={`${cardInterface.cardDescription.length > 1 ? "h-110" : "h-80"} rounded-sm text-white bg-black`}>
            <CardHeader>
                <CardTitle className={`text-2xl h-10`}>{cardInterface.cardTitle}</CardTitle>
                <CardDescription className={` ${cardInterface.cardDescription.length > 1 ? "h-30" : ""} rounded-t-xl`}>{cardInterface.cardDescription}</CardDescription>
                <CardAction />
            </CardHeader>
            <CardContent>
                {cardInterface.cardImage !== "" ? (
                    <div className="h-70">
                        <img alt="project image"
                            src={basePath + cardInterface.cardImage}
                            className={"rounded-xl border-black border-3 max-h-53"}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>) : null}
            </CardContent>
            <CardFooter> </CardFooter>
        </Card>
    )
}

const Linkbox = ({ cardInterface }: CardProps) => {
    let content;

    switch (cardInterface.cardHref) {
        case "":
        case "#": content = (
            <>

            </>
        ); break;

        default:

            break;
    }
    return (<>{content}</>)
}

export default CarouselCard;