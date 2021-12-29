import Image from "next/image"
import { ExternalLinkIcon, HeartIcon } from "@heroicons/react/outline"
import Link from "next/link"
import QuickView from "./QuickView"

export default function ProductCard({ product = {} }) {
   return (
      <div className=" relative group p-4 rounded-md min-w-[250px] max-w-[300px]  overflow-hidden cursor-pointer">
         <div className="w-full  overflow-hidden h-64 ">
            <div className="relative w-full h-full ">
               <Image src={product.image || "/products/shirt.png"} alt="product" layout="fill" objectFit="cover" />
            </div>
         </div>

         <div className="mt-4 flex justify-between font-semibold">
            <div>
               <Link href={`/product/${product.id}`}>
                  <a className=" capitalize">{product.name || "Name"}</a>
               </Link>
            </div>
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
         </div>

         <button className="btn-3 w-full mt-4">Add to cart</button>

         <div className="absolute top-2 right-2 flex-col flex  space-y-1 text-gray-600 transform translate-x-full transition duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
            <a
               href={`/product/${product.id}`}
               target="_blank"
               className="p-2 bg-white bg-opacity-50 hover:bg-opacity-80 border hover:shadow-md hover:text-black rounded-md focus:ring-2 focus:ring-blue-500"
               aria-label="Open on another window"
            >
               <ExternalLinkIcon className="h-6 w-6" />
            </a>

            <QuickView />

            <button
               className="p-2 bg-white bg-opacity-50 hover:bg-opacity-80 border hover:shadow-md hover:text-black rounded-md focus:ring-2 focus:ring-blue-500"
               aria-label="Add to wishlist"
            >
               <HeartIcon className="h-6 w-6" />
            </button>
         </div>
      </div>
   )
}
