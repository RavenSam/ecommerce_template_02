import Image from "next/image"
import Link from "next/link"
import { Disclus } from "../components"
import { categoryItems } from "../utils/data"

export default function CatgoriesContent() {
   return (
      <>
         <div className="grid grid-cols-12 gap-4">
            <div className="hidden sm:block col-span-3 text-gray-500">
               <h3 className="h3">Categories</h3>

               <div className="max-w-[15rem] mt-6">
                  {Object.entries(categoryItems).map((item, i) => (
                     <Disclus key={i} title={item[0]} content={item[1]} option={{ defaultOpen: i === 0 && true }} />
                  ))}
               </div>
            </div>

            <div className="col-span-12 sm:col-span-9 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 my-4">

               {Object.entries(categoryItems).map((cat, i) => (
                  <Link href={`/category/${cat[0]}`} key={i}>
                     <a className="h-48 sm:h-64 group">
                        <div className="relative h-full rounded-md overflow-hidden bg-gray-800">
                           <Image src="/shop.jpg" layout="fill" objectFit="cover" />
                           <div className="absolute inset-0 bg-black bg-opacity-75" />

                           <div className="text-white text-center w-full absolute bottom-0 left-0 p-4 transform translate-y-[70%] group-hover:translate-y-0 transition duration-300 ease-in">
                              <h3 className="text-xl font-semibold tracking-wider mb-4 capitalize">{cat[0]}</h3>
                              <div className="transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in">
                                 <p className="max-w-sm mx-auto">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus temporibus
                                    mollitia sit consequatur eum?
                                 </p>

                                 <button className="btn-t mt-4">Explore now</button>
                              </div>
                           </div>
                        </div>
                     </a>
                  </Link>
               ))}
               </div>
            </div>
         </div>
      </>
   )
}
