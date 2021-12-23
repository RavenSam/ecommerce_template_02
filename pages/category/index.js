import Head from "next/head"
import Image from "next/image"
import { CatgoriesContent } from "../../sections"

export default function Categories() {
   return (
      <>
         <Head>
            <title>Categories</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <div className="relative w-full rounded-md overflow-hidden h-64 bg-gray-800">
               <Image src="/shop.jpg" layout="fill" objectFit="cover" />
               <div className="absolute inset-0 bg-black bg-opacity-80" />

               <div className="text-white w-full absolute inset-0 flex items-center justify-center p-4">
                  <h1 className="h1 tracking-wider">Explore by category</h1>
               </div>
            </div>
         </section>

         <section className="px-4 lg:container lg:mx-auto py-4">
            <CatgoriesContent />
         </section>
      </>
   )
}
