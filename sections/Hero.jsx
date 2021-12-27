import { CarouselImages } from "../components"

const carouselDetails = [
   {
      title: "40% off for all our products",
      color: "bg-gray-800",
      image: "/assets/clothing-3.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "Free shipping",
      color: "bg-blue-400",
      image: "/assets/shipping.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "All you need",
      color: "bg-blue-400",
      image: "/assets/clothing-4.jpg",
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
