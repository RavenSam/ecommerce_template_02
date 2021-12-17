import { CarouselImages } from "../components"

const carouselDetails = [
   {
      title: "carousel image zero",
      color: "bg-gray-800",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "carousel image one",
      color: "bg-blue-400",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "carousel image two",
      color: "bg-sky-400",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "carousel image three",
      color: "bg-violet-400",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "carousel image four",
      color: "bg-pink-400",
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
