import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import { CategoryContent } from "../../sections"
import { Breadcrumbs } from "../../components"

export default function Category() {
   const { query } = useRouter()

   if (!query.slug) {
      return <p>Loading...</p>
   }

   return (
      <>
         <Head>
            <title>Category - {query?.slug.map((x) => x)}</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <div className="relative w-full rounded-md overflow-hidden h-64 bg-gray-800">
               <Image src="/shop.jpg" layout="fill" objectFit="cover" />
               <div className="absolute inset-0 bg-black bg-opacity-80" />

               <div className="text-white w-full absolute inset-0 flex items-center justify-center p-4">
                  <h1 className="h1 tracking-wider">{query?.slug[0]}</h1>
               </div>
            </div>
         </section>

         <div className="px-4 lg:container lg:mx-auto my-8">
            <Breadcrumbs />
         </div>

         <section className="px-4 lg:container lg:mx-auto py-5">
            <CategoryContent />
         </section>
      </>
   )
}
