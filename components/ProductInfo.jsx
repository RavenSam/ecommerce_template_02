import { useState } from "react"
import { HeartIcon as HeartFull, StarIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"

const sizes = ["xs", "s", "m", "l", "xl"]

export default function ProductInfo({ productColor }) {
   const [selectedSize, setSelectedSize] = useState("m")
   const [qty, setQty] = useState(1)
   const [isOnWhishlist, setIsOnWhishlist] = useState(false)

   return (
      <>
         <div className="mt-4 md:mt-0">
            <h1 className=" h1">your product name</h1>

            <hr className="border-2 rounded-full w-[20%] my-2" style={{ borderColor: productColor }} />

            <div className="flex items-center mt-2 py-2">
               <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                     <StarIcon
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${4 > rating ? "text-gray-900" : "text-gray-300"}`}
                        aria-hidden="true"
                     />
                  ))}
               </div>

               <a href="#reviews" className="capitalize font-semibold ml-4 text-sm text-gray-600">
                  4 reviews
               </a>
            </div>

            <div className="flex items-center space-x-2 mt-2">
               <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">$19.99</h2>
            </div>

            <p className="text-gray-500 mt-2">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nostrum nisi voluptate dolore, voluptas
               perferendis, adipisci nesciunt eaque blanditiis.
            </p>
         </div>

         <div className="mt-8">
            <h3 className="font-semibold">Size</h3>

            <div className="flex items-center space-x-4 mt-4">
               {sizes.map((size, i) => (
                  <button
                     key={i}
                     className={`relative w-10 h-10 border border-gray-300 uppercase font-semibold rounded-lg transform transition duration-200 ease-in-out  ${
                        size === selectedSize ? "border-gray-500" : "hover:scale-125 hover:elevation-4"
                     }`}
                     onClick={() => setSelectedSize(size)}
                  >
                     {size}
                     {size === selectedSize && (
                        <span
                           className="w-3 h-3  absolute -top-1 -right-1 rounded-full elevation-3"
                           style={{ backgroundColor: productColor }}
                        />
                     )}
                  </button>
               ))}
            </div>
         </div>

         <div className="mt-8">
            <h3 className="font-semibold">Quantity</h3>

            <div className="flex items-center  mt-4 space-x-4">
               <button className="btn-rounded" onClick={() => qty > 1 && setQty(qty - 1)}>
                  -
               </button>

               <span className="min-w-[2rem] text-center font-semibold">{qty}</span>

               <button className="btn-rounded" onClick={() => qty < 10 && setQty(qty + 1)}>
                  +
               </button>
            </div>
         </div>

         <div className="flex items-center mt-8 space-x-4 ">
            <button className="btn-1">buy now</button>

            <button className="btn-2">add to cart</button>

            <button
               title={isOnWhishlist ? "Remove From The Whishlist" : "Add To The Wishlist"}
               className="w-8 h-8 md:w-10 md:h-10 p-1 rounded-full  transform transition-all duration-200 ease-in-out hover:scale-125 "
               onClick={() => setIsOnWhishlist(!isOnWhishlist)}
            >
               {isOnWhishlist ? <HeartFull /> : <HeartIcon />}
            </button>
         </div>
      </>
   )
}
