const basePath = process.env.NODE_ENV === 'production'
  ? '/NextJS-Portfolio'
  : '';
import data from "@/data/projectlist.json"
import CarouselCard from "@/components/InformationLayout/CarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Footer = () => {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center bg-indigo-950">
      <div className="m-4">
        <Carousel opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            {data.categories[0].cards.map((card, index) => (
              <CarouselItem key={index} className="basis-1/4 ">
                <CarouselCard cardInterface={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10" />
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10" />
        </Carousel>
      </div>
    </footer>
  )
}