import { useState } from "react"
import Image from "next/image"
import Slider from "react-slick"

export default function ProductGallery({ colors, productColor, setProductColor }) {
   const [selectedImage, setSelectedImage] = useState(1)

   const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
   }

   return (
      <div className="flex ">
         <div className=" flex flex-col space-y-2 mr-2">
            {colors.map((color, i) => (
               <button
                  key={i}
                  className={`w-6 h-6 rounded-full transition-all duration-300 ${color === productColor && "p-[3px]"}`}
                  style={{ border: `2px solid ${color}`, backgroundColor: color !== productColor && color }}
                  onClick={() => setProductColor(color)}
                  aria-label="color"
               >
                  <span className="block w-full h-full rounded-full " style={{ backgroundColor: color }} />
               </button>
            ))}
         </div>

         <div className="flex-grow  rounded-md overflow-x-hidden">
            <div className="relative w-full h-[400px] mx-auto bg-[#f3f3f3]">
               <Image src="/products/shirt.png" alt="product image" layout="fill" objectFit="contain" quality={100} />
            </div>

            <div className=" mt-4 px-8">
               <Slider {...settings}>
                  {[1, 2, 3, 4, 5, 6].map((img, i) => (
                     <div
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`${selectedImage === i && "border border-black rounded-md"}`}
                     >
                        <div className="relative w-full h-24">
                           <Image src="/products/shirt.png" alt="product image" layout="fill" objectFit="contain" />
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}
