import Head from "next/head"
import { useEffect, useState } from "react"
import LoadingScreen from "../components/shared/Loading"
import { Discount, Services, Hero, ShopByCategories, TrendingProduct, ShopByCollections } from "../sections"

export default function Home() {
   const [loading, setLoading] = useState(true)

   useEffect(() => setLoading(false), [])

   if (loading) {
      return <LoadingScreen />
   }

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <section className="w-full max-w-7xl lg:mx-auto mt-10 p-2">
            <Hero />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-16 py-5">
            <ShopByCategories />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-16 py-5">
            <TrendingProduct />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-16 py-10 md:py-24">
            <Services />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-5">
            <ShopByCollections />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-10 md:py-24">
            <Discount />
         </section>
      </>
   )
}
