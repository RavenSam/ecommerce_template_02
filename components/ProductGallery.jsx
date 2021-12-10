import { useState } from "react"
import Image from "next/image"

export default function ProductGallery({ colors, productColor, setProductColor }) {
   return (
      <div className="flex ">
         <div className=" flex flex-col space-y-2 mr-2">
            {colors.map((color, i) => (
               <button
                  key={i}
                  className={`w-6 h-6 rounded-full transition-all duration-300 ${color === productColor && "p-[3px]"}`}
                  style={{ border: `2px solid ${color}`, backgroundColor: color !== productColor && color }}
                  onClick={() => setProductColor(color)}
               >
                  <span className="block w-full h-full rounded-full " style={{ backgroundColor: color }} />
               </button>
            ))}
         </div>

         <div className="flex-grow bg-[#f3f3f3] rounded-md">
            <div className="relative w-full h-[400px] mx-auto">
               <Image src="/products/shirt.png" layout="fill" objectFit="contain" quality={100} />
            </div>
         </div>
      </div>
   )
}
