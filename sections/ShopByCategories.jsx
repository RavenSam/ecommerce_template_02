import Slider from "react-slick"
import Image from "next/image"

export default function ShopByCategories() {
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

         <div className="overflow-x-hidden px-4">
            <Slider {...settings}>
               {[1, 2, 3, 4, 5, 6].map((img, i) => (
                  <div key={i} className="">
                     <div className="relative w-auto max-w-xl rounded-md overflow-hidden h-64 bg-gray-800 mx-4">
                        <Image src="/shop.jpg" layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000b8]" />

                        <div className="text-white text-center w-full absolute bottom-0 left-0 p-4">
                           <h3 className="text-xl font-semibold tracking-wider mb-4">Category {i + 1}</h3>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}
