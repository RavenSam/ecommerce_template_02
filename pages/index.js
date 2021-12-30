import Head from "next/head"
import { useEffect, useState } from "react"
import LoadingScreen from "../components/shared/Loading"
import { Discount, Services, ShopByCategories, TrendingProduct, ShopByCollections } from "../sections"
import { CarouselImages } from "../components"

const carouselDetails = [
   {
      title: "40% off for all our products",
      color: "bg-gray-800",
      image: "/assets/clothing-3.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "Free shipping",
      color: "bg-blue-400",
      image: "/assets/shipping.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
   {
      title: "All you need",
      color: "bg-blue-400",
      image: "/assets/clothing-4.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus animi fugit facilis dolorum facere fugiat, autem tenetur.",
   },
]

export default function Home() {
   const [loading, setLoading] = useState(true)

   useEffect(() => setLoading(false), [])

   if (loading) {
      return <LoadingScreen />
   }

   return (
      <>
         <Head>
            <title>Seano - Home</title>
            <meta name="description" content="Seano fro clothes and accesories all ranges and colors" />
         </Head>

         <section className="w-full max-w-7xl lg:mx-auto mt-10 p-2">
            <CarouselImages carouselDetails={carouselDetails} />
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
