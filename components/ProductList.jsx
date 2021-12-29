import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Link from "next/link"

export default function ProductList({ product = {} }) {
   return (
      <div className="flex w-full border rounded-md shadow">
         <div className="relative flex-shrink-0 my-auto w-36 h-36 border border-gray-200 rounded-md overflow-hidden">
            <Image src="/products/shirt.png" alt={product.title} layout="fill" objectFit="cover" />
         </div>

         <div className="ml-4 p-4 flex-1 flex flex-col">
            <div className="flex items-center">
               {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                     key={rating}
                     className={`h-3 w-3 flex-shrink-0 ${4 > rating ? "text-gray-900" : "text-gray-300"}`}
                     aria-hidden="true"
                  />
               ))}
            </div>

            <div>
               <div className="flex justify-between text-base font-medium text-gray-900">
                  <Link href={`/products/${product.id}`} passHref>
                     <a className="font-semibold text-lg md:text-xl leading-3">{product.name || "Name"}</a>
                  </Link>
                  <p className="ml-4">${product.price || 18.89}</p>
               </div>
            </div>

            <div className=" flex items justify-between text-sm mt-2">
               <p className="text-gray-500">
                  {product.description ||
                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officiis! Nulla magnam doloremque."}
               </p>
            </div>
         </div>
      </div>
   )
}
