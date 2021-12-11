import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"

const clientsReviews = [
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 4,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 4,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
]

export default function Reviews() {
   return (
      <div className="mt-10 py-5 ">
         <h2 className="text-2xl font-bold text-center py-4 mb-4">Reviews</h2>

         <div className="max-w-3xl mx-auto">
            {clientsReviews.map((review, i) => (
               <div className="py-4" key={i}>
                  <div className="flex items-center space-x-4">
                     <div>
                        <div className="relative h-16 w-16 rounded-full  overflow-hidden">
                           <Image
                              src={review.image}
                              alt="Picture of the author"
                              height={100}
                              width={100}
                              layout="fill"
                              objectFit="cover"
                              className=""
                           />
                        </div>
                     </div>

                     <div className="">
                        <h3 className="font-semibold capitalize">{review.name}</h3>
                        <div className="flex items-center">
                           {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                 key={rating}
                                 className={`h-5 w-5 flex-shrink-0 ${
                                    review.rating > rating ? "text-gray-900" : "text-gray-300"
                                 }`}
                                 aria-hidden="true"
                              />
                           ))}
                        </div>
                     </div>
                  </div>
                  <p className="text-gray-500 py-4">{review.content}</p>
               </div>
            ))}
         </div>
      </div>
   )
}
