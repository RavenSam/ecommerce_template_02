import Image from "next/image"
import { ArrowsExpandIcon, ExternalLinkIcon, HeartIcon } from "@heroicons/react/outline"

export default function ProductCard() {
   return (
      <div className=" relative  p-4 rounded-md">
         <div className="w-full  overflow-hidden h-80">
            {/* <img
               src="/products/shirt.png"
               alt=""
               className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            /> */}
            <div className="relative w-full h-full  object-center object-cover ">
               <Image src="/products/shirt.png" layout="fill" objectFit="contain" />
            </div>
         </div>

         <div className="mt-4 flex justify-between font-semibold">
            <div>
               <h4 className=" capitalize">
                  <a href="">product name</a>
               </h4>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
         </div>

         <button className="btn-3 w-full mt-4">Add to cart</button>

         <div className="flex items-center justify-evenly my-2 text-gray-600">
            <button className="h-8 w-8 p-1 hover:bg-gray-200  hover:text-black rounded-sm">
               <ExternalLinkIcon />
            </button>
            <button className="h-8 w-8 p-1 hover:bg-gray-200 hover:text-black rounded-sm">
               <ArrowsExpandIcon />
            </button>
            <button className="h-8 w-8 p-1 hover:bg-gray-200 hover:text-black rounded-sm">
               <HeartIcon />
            </button>
         </div>
      </div>
   )
}
