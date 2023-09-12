import { useEffect, useState } from "react"
import { Pagination, Review } from "../components"


const clientsReviews = [
   {
      image: "/user.jpg",
      name: "Carl H.",
      rating: 4.5,
      content: "I love this clothing! It's stylish and comfortable.",
   },
   {
      image: "/user-2.jpg",
      name: "Alice",
      rating: 5,
      content: "Amazing quality! I can't believe how well-made it is.",
   },
   {
      image: "/user-3.jpg",
      name: "Charlie Reymon",
      rating: 3,
      content: "It's decent, but I expected better for the price.",
   },
   {
      image: "/user-4.jpg",
      name: "David",
      rating: 4,
      content: "Fits perfectly, and the color is exactly as shown.",
   },
   {
      image: "/user-5.jpg",
      name: "Eve",
      rating: 4.5,
      content: "Great value for the money. I'm very satisfied.",
   },
]

export default function Reviews() {
   const [currentPage, setCurrentPage] = useState(1)
   const [reviews, setReviews] = useState(clientsReviews.slice(0, 5))

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
               <button className="btn-1 !tracking-wider hover:opacity-80">Add a review</button>
            </div>
         </div>
      </div>
   )
}
