import { CarouselImages } from "../components"

const carouselDetails = [
   { title: "carousel image zero", color: "bg-gray-800" },
   { title: "carousel image one", color: "bg-blue-400" },
   { title: "carousel image two", color: "bg-sky-400" },
   { title: "carousel image three", color: "bg-violet-400" },
   { title: "carousel image foor", color: "bg-pink-400" },
]

export default function Hero() {
   return (
      <div>
         <CarouselImages carouselDetails={carouselDetails} />
      </div>
   )
}
