import { useEffect, useState } from "react"
import { Pagination, Review } from "../components"

const clientsReviews = [
   {
      image: "/user.jpg",
      name: "john doe 1",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe 2",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe 3",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe 4",
      rating: 4,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe 5",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe 6",
      rating: 4,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
]

export default function Reviews() {
   const [currentPage, setCurrentPage] = useState(1)
   const [reviews, setReviews] = useState(clientsReviews.slice(0, 4))

   const totalPages =
      clientsReviews.length / 4 > Math.floor(clientsReviews.length / 4)
         ? Math.floor(clientsReviews.length / 4) + 1
         : Math.floor(clientsReviews.length / 4)

   return (
      <div className=" " id="reviews">
         <h2 className="h2">Reviews</h2>

         <div className="flex flex-col-reverse md:flex-row items-center md:items-start   ">
            <div className="">
               {reviews.map((review, i) => (
                  <Review review={review} key={i} />
               ))}

               <div className="mt-8 flex items-center justify-center">
                  <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
               </div>
            </div>

            <div className="min-w-fit p-4 mx-auto">
               <button className="btn-1">Add a review</button>
            </div>
         </div>
      </div>
   )
}
