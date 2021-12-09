import { useState } from "react"

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

         <div className="flex-grow bg-green-500">2</div>
      </div>
   )
}
