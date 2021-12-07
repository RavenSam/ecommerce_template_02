import { useState } from "react"

export default function ProductGallery({ colors, productColor, setProductColor }) {
   return (
      <div className="flex ">
         <div className=" flex flex-col px-2 space-y-2">
            {colors.map((color, i) => (
               <button
                  key={i}
                  className={`w-8 h-8 rounded-full transition-all duration-300 ${color === productColor && "p-1"}`}
                  style={{ border: `2px solid ${color}`, backgroundColor: color !== productColor && color }}
                  onClick={() => setProductColor(color)}
               >
                  <span className="inline-block w-full h-full rounded-full " style={{ backgroundColor: color }} />
               </button>
            ))}
         </div>

         <div className="flex-grow bg-green-500">2</div>
      </div>
   )
}
