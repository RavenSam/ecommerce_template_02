import Slider from "react-slick"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getCategories } from "../lib/fetchProduct"
import Link from "next/link"

export default function ShopByCategories() {
   const [categories, setCategories] = useState([])

   useEffect(async () => {
      const { data } = await getCategories()

      setCategories(data)
   }, [])

   const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1118,
            settings: {
               slidesToShow: 2.1,
            },
         },
         {
            breakpoint: 920,
            settings: {
               slidesToShow: 1.8,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1.2,
            },
         },

         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   }

   return (
      <div>
         <h2 className="h2">Shop By Category</h2>

         <div className="overflow-x-hidden">
            <Slider {...settings}>
               {categories.map((cat, i) => (
                  <div key={i} className="group">
                     <div className="relative w-auto max-w-xl rounded-md overflow-hidden h-64 bg-gray-800 mx-1">
                        <Image src={cat.image} alt={cat.name} layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000b8]" />

                        <div className="text-white text-center w-full absolute bottom-0 left-0 p-4 transform translate-y-[70%] group-hover:translate-y-0 transition duration-300 ease-in">
                           <h3 className="text-xl font-semibold tracking-wider mb-4 capitalize">{cat.name}</h3>

                           <div className="transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in">
                              <p className="max-w-sm mx-auto">{cat.description}</p>

                              <Link href={`/category/${cat.slug}`}>
                                 <button className="btn-t mt-4">Explore now</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}
