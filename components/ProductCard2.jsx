import Image from "next/image"

export default function ProductCard2() {
   return (
      <>
         <a href="#" className="group max-w-[216px]">
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
               <div className="w-full  overflow-hidden h-52">
                  <div className="relative w-full h-full  object-center object-cover ">
                     <Image src="/products/shirt.png" alt="product" layout="fill" objectFit="cover" />
                  </div>
               </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">product name</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$ 19.00</p>
         </a>
      </>
   )
}
