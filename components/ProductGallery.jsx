import { useEffect, useState } from "react"
import Image from "next/image"
import Slider from "react-slick"
import { useRecoilState } from "recoil"
import { selectedVarientState } from "../atoms/productAtom"

export default function ProductGallery({ colors, productColor, setProductColor }) {
   const [selectedVarient, setSelectedVarient] = useRecoilState(selectedVarientState)

   const [selectedImage, setSelectedImage] = useState(selectedVarient.images[0])

   const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
   }

   return (
      <>
         <div className="flex ">
            <div className=" flex flex-col space-y-2 mr-2">
               {colors.map((color, i) => (
                  <button
                     key={i}
                     className={`w-6 h-6 rounded-full transition-all duration-300 ${
                        color.color === productColor.color && "p-[3px]"
                     }`}
                     style={{
                        border: `2px solid ${color.hex}`,
                        backgroundColor: color.color !== productColor.color && color.hex,
                     }}
                     onClick={() => setProductColor(color)}
                     aria-label="color"
                  >
                     <span className="block w-full h-full rounded-full " style={{ backgroundColor: color.hex }} />
                  </button>
               ))}
            </div>

            <div className="flex-grow  rounded-md overflow-x-hidden">
               <div className="relative w-full h-[400px] mx-auto">
                  <Image src={selectedImage} alt="product image" layout="fill" objectFit="contain" quality={100} />
               </div>

               <div className=" mt-4">
                  <Slider {...settings}>
                     {selectedVarient.images.map((img, i) => (
                        <div
                           key={i}
                           onClick={() => setSelectedImage(img)}
                           className={`${selectedImage === i && "border border-black rounded-md"} cursor-pointer`}
                        >
                           <div className="relative w-full h-24">
                              <Image src={img} alt="product image" layout="fill" objectFit="contain" />
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </>
   )
}
