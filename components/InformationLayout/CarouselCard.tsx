import { Card as CardInterface } from "../Presets/ProjectCardInterfaces";
import { CardDesc, CardTitle as MFCardTitle } from "../Presets/MyFonts";
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
    return (

        <Link
            id="Individual Card"
            href={cardInterface.cardHref}
            className="text-center hover:underline"
            style={{
                overflow: 'hidden',
                position: 'relative'
            }}
        >

            <Card className={`${cardInterface.cardDescription.length > 1 ? "h-110" : "h-80"} rounded-sm text-white bg-black`}>
                <CardHeader>
                    <CardTitle className={`text-2xl h-10`}>{cardInterface.cardTitle}</CardTitle>
                    <CardDescription className={` ${cardInterface.cardDescription.length > 1 ? "h-30" : ""} rounded-t-xl`}>{cardInterface.cardDescription}</CardDescription>
                    <CardAction></CardAction>
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
        </Link>

    );
}

export default CarouselCard;

/*
style={{
            width: '200px',   // max width
            height: '200px',  // max height
            overflow: 'hidden', // clips anything outside
            position: 'relative'
            }}


            <div
            id="Image Container"            
            className="relative inline-block">
*/