import Image from "next/image"

export default function ShopByCollections() {
   return (
      <div>
         <h2 className="h2">Shop By Collections</h2>

         <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
            <div className="relative min-h-[15rem] row-span-2 rounded-md overflow-hidden">
               <Image src="/shop.jpg" alt="product" layout="fill" objectFit="cover" />

               <div className="absolute inset-0 bg-gradient-to-t from-[#000000b8]" />

               <div className="text-white absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold tracking-wider mb-4">New Arrivals</h3>
                  <a href="#" className="btn-t ">
                     shop now
                  </a>
               </div>
            </div>

            <div className="relative min-h-[15rem]  rounded-md overflow-hidden">
               <Image src="/shop.jpg" alt="product" layout="fill" objectFit="cover" />

               <div className="absolute inset-0 bg-gradient-to-t from-[#000000b8]" />

               <div className="text-white absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold tracking-wider mb-4">New Arrivals</h3>
                  <a href="#" className="btn-t ">
                     shop now
                  </a>
               </div>
            </div>

            <div className="relative min-h-[15rem]  rounded-md overflow-hidden">
               <Image src="/shop.jpg" alt="product" layout="fill" objectFit="cover" />

               <div className="absolute inset-0 bg-gradient-to-t from-[#000000b8]" />

               <div className="text-white absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold tracking-wider mb-4">New Arrivals</h3>
                  <a href="#" className="btn-t ">
                     shop now
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}
