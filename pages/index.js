import Head from "next/head"
import { Discount, Services, Hero, ShopByCategory, TrendingProduct } from "../sections"

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <section className="w-full max-w-7xl lg:mx-auto mt-4 p-2">
            <Hero />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-5">
            <TrendingProduct />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-5">
            <ShopByCategory />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-16 py-10 md:py-32">
            <Services />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-10 md:py-24">
            <Discount />
         </section>
      </>
   )
}
