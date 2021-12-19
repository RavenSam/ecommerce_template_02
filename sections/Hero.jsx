import { CarouselImages } from "../components"

const carouselDetails = [
   {
      title: "carousel image zero",
      color: "bg-gray-800",
      image: "/shop.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "carousel image one",
      color: "bg-blue-400",
      image: "/discount.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
]

export default function Hero() {
   return (
      <div>
         <CarouselImages carouselDetails={carouselDetails} />
      </div>
   )
}
