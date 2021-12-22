import Head from "next/head"
import Image from "next/image"
import { CategoryContent } from "../../sections"

export default function Category() {
   return (
      <>
         <Head>
            <title>Category</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto mt-16 py-5">
            <div className="relative w-full rounded-md overflow-hidden h-64 bg-gray-800">
               <Image src="/shop.jpg" layout="fill" objectFit="cover" />
               <div className="absolute inset-0 bg-black bg-opacity-80" />

               <div className="text-white w-full absolute inset-0 flex items-center p-4">
                  <h1 className="h1 tracking-wider">Category</h1>
               </div>
            </div>
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-16 py-5">
            <CategoryContent />
         </section>
      </>
   )
}
