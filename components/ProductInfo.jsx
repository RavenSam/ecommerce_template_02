import { useState } from "react"
import { HeartIcon as HeartFull } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"

const sizes = ["xs", "s", "m", "l", "xl"]

export default function ProductInfo({ productColor }) {
   const [selectedSize, setSelectedSize] = useState("m")
   const [qty, setQty] = useState(1)
   const [isOnWhishlist, setIsOnWhishlist] = useState(false)

   return (
      <>
         <div>
            <h1 className=" text-xl md:text-3xl lg:text-4xl  capitalize font-bold font-roboto">your product name</h1>

            <hr className="border-2 rounded-full w-[20%] my-2" style={{ borderColor: productColor }} />

            <p className="text-gray-500 p-2">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nostrum nisi voluptate dolore, voluptas
               perferendis, adipisci nesciunt eaque blanditiis.
            </p>

            <div className="flex items-center space-x-2 mt-2">
               <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">$19.99</h2>
            </div>
         </div>

         <div className="mt-8">
            <h3 className="font-semibold">Size</h3>

            <div className="flex items-center space-x-4 mt-4">
               {sizes.map((size, i) => (
                  <button
                     key={i}
                     className="relative w-10 h-10 border border-gray-300 uppercase font-semibold rounded-md transform transition duration-200 ease-in-out hover:scale-125 hover:shadow-lg"
                     onClick={() => setSelectedSize(size)}
                  >
                     {size}
                     {size === selectedSize && (
                        <span
                           className="w-3 h-3  absolute -top-1 -right-1 rounded-full shadow-lg"
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
               <button
                  className="w-10 h-10 text-xl font-semibold border border-gray-600 text-gray-600 rounded-full transform  transition duration-100 ease-in-out hover:bg-black hover:text-white hover:border-black active:scale-90"
                  onClick={() => qty > 1 && setQty(qty - 1)}
               >
                  -
               </button>

               <span className="min-w-[2rem] text-center font-semibold">{qty}</span>

               <button
                  className="w-10 h-10 text-xl font-semibold border border-gray-600 text-gray-600 rounded-full transform  transition duration-100 ease-in-out hover:bg-black hover:text-white hover:border-black active:scale-90"
                  onClick={() => qty < 10 && setQty(qty + 1)}
               >
                  +
               </button>
            </div>
         </div>

         <div className="flex items-center mt-8 space-x-4 py-4">
            <button className="text-sm lg:text-base uppercase font-semibold px-8 py-2  rounded-sm bg-black text-white    transform  transition-all duration-50 ease-in-out  md:hover:tracking-[.2rem] active:scale-90">
               buy now
            </button>

            <button className="text-sm lg:text-base uppercase font-semibold px-8 py-2  rounded-sm border border-black   transition-all duration-50 ease-in-out md:hover:tracking-[.2rem] active:scale-90">
               add to cart
            </button>

            <button
               title={isOnWhishlist ? "Remove From The Whishlist" : "Add To The Wishlist"}
               className="w-8 h-8 md:w-10 md:h-10 p-1 rounded-full  transform transition-all duration-200 ease-in-out hover:scale-125 md:hover:shadow-lg"
               onClick={() => setIsOnWhishlist(!isOnWhishlist)}
            >
               {isOnWhishlist ? <HeartFull /> : <HeartIcon />}
            </button>
         </div>
      </>
   )
}
