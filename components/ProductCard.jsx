import Image from "next/image"
import { ArrowsExpandIcon, ExternalLinkIcon, HeartIcon } from "@heroicons/react/outline"

export default function ProductCard() {
   return (
      <div className=" relative p-4 rounded-md">
         <div className="w-full  overflow-hidden h-80">
            <div className="relative w-full h-full  object-center object-cover ">
               <Image src="/products/shirt.png" alt="product" layout="fill" objectFit="contain" />
            </div>
         </div>

         <div className="mt-4 flex justify-between font-semibold">
            <div>
               <a className=" capitalize" href="#">
                  product name
               </a>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
         </div>

         <button className="btn-3 w-full mt-4">Add to cart</button>

         <div className="flex items-center justify-evenly my-2 text-gray-600">
            <button
               className="p-2 hover:bg-gray-200  hover:text-black rounded-md focus:ring-2 focus:ring-blue-500"
               aria-label="Open on another window"
            >
               <ExternalLinkIcon className="h-6 w-6" />
            </button>

            <button
               className="p-2 hover:bg-gray-200 hover:text-black rounded-md focus:ring-2 focus:ring-blue-500"
               aria-label="Quick View"
            >
               <ArrowsExpandIcon className="h-6 w-6" />
            </button>

            <button
               className="p-2 hover:bg-gray-200 hover:text-black rounded-md focus:ring-2 focus:ring-blue-500"
               aria-label="Add to wishlist"
            >
               <HeartIcon className="h-6 w-6" />
            </button>
         </div>
      </div>
   )
}
