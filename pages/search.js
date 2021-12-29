import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import { ProductList, SearchInput } from "../components"

export default function Search() {
   const [results, setResults] = useState([{}, {}])
   const router = useRouter()

   //    console.log(router.query.q)
   return (
      <>
         <Head>
            <title>Search</title>
            <meta name="description" content="Seano Search you product" />
         </Head>

         <section className="w-full max-w-2xl mx-auto mt-10 p-2">
            <SearchInput />

            <div className="my-8">
               <h1 className="h3 text-gray-700 font-medium normal-case">Result for: {router.query.q}</h1>
            </div>

            <hr className="mt-8 mb-4 border-2 rounded-full w-1/2 border-black" />
         </section>

         <section className="w-full max-w-2xl mx-auto p-2">
            {results.length > 0 ? (
               <div className="space-y-4">
                  {results.map((item, i) => (
                     <ProductList key={i} />
                  ))}
               </div>
            ) : (
               <div className="text-gray-500">
                  <h2 className="text-2xl capitalize">No results Found...</h2>
               </div>
            )}
         </section>
      </>
   )
}
