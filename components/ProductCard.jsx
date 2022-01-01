import Image from "next/image"
import { ExternalLinkIcon, HeartIcon } from "@heroicons/react/outline"
import Link from "next/link"
import QuickView from "./QuickView"
import { addToCart } from "../lib/helpers"
import { useRecoilState } from "recoil"
import { cartState } from "../atoms/cartAtom"

export default function ProductCard({ product = {} }) {
   const [cart, setCart] = useRecoilState(cartState)

   return (
      <div className=" relative group p-4 rounded-md min-w-[230px] max-w-[300px]  overflow-hidden cursor-pointer">
         <div className="w-full  overflow-hidden h-64 ">
            <div className="relative w-full h-full ">
               <Image src={product.featuredImage} alt="product" layout="fill" objectFit="contain" />
            </div>
         </div>

         <div className="mt-4 ">
            <div className="text-sm py-2 font-semibold truncate">
               <Link href={`/product/${product.id}`}>
                  <a title={product.name} className="capitalize">
                     {product.name || "Name"}
                  </a>
               </Link>
            </div>
            <p className=" font-medium text-gray-900">${product.price}</p>
         </div>

         <button className="btn-3 w-full mt-4" onClick={() => addToCart(setCart, product, cart, product.varients[0])}>
            Add to cart
         </button>

         <div className="absolute top-2 right-2 flex-col flex  space-y-1 text-gray-600 md:transform md:translate-x-full transition duration-300 md:opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
            <a
               href={`/product/${product.id}`}
               target="_blank"
               className="p-2 bg-white bg-opacity-50 hover:bg-opacity-80 border hover:shadow-md hover:text-black rounded-md focus:ring-2 focus:ring-blue-500"
               aria-label="Open on another window"
            >
               <ExternalLinkIcon className="h-6 w-6" />
            </a>

            {/* <QuickView /> */}

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
