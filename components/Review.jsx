import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"

export default function Review({ review }) {
   return (
      <>
         <div className="p-4 my-2 bg-gray-50 rounded-md flex items-start space-x-4 max-w-3xl border">
            <div className="border-2 p-[2px] rounded-full border-blue-500">
               <div className="relative h-14 w-14 rounded-full  overflow-hidden">
                  <Image src={review.image} alt="Picture of the author" layout="fill" objectFit="cover" className="" />
               </div>
            </div>

            <div className="">
               <div className="flex items-center justify-between">
                  <h3 className="font-semibold capitalize">{review.name}</h3>
                  <div className="flex items-center">
                     {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                           key={rating}
                           className={`h-5 w-5 flex-shrink-0 ${
                              review.rating > rating ? "text-blue-500" : "text-gray-300"
                           }`}
                           aria-hidden="true"
                        />
                     ))}
                  </div>
               </div>
               <p className="text-gray-500 text-xs font-semibold">29 Aug 2021</p>
               <p className="text-gray-700 py-2 text-sm ">{review.content}</p>
            </div>
         </div>
      </>
   )
}
