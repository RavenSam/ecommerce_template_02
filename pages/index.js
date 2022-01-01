import Head from "next/head"
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
   return (
      <>
         <Head>
            <title>Seano - Home</title>
            <meta name="description" content="Seano fro clothes and accesories all ranges and colors" />
         </Head>

         <section className="w-full max-w-7xl mx-auto mt-10 p-1 min-h-[460px]">
            <CarouselImages carouselDetails={carouselDetails} />
         </section>

         <section className="w-full max-w-7xl mx-auto px-2  mt-16 py-5 min-h-[300px]">
            <ShopByCategories />
         </section>

         <section className="w-full max-w-7xl mx-auto px-2  mt-16 py-5 min-h-[460px]">
            <TrendingProduct />
         </section>

         <section className="w-full max-w-7xl mx-auto px-2  mt-16 py-10 md:py-24 min-h-[200px]">
            <Services />
         </section>

         <section className="w-full max-w-7xl mx-auto px-2  mt-10 py-5 min-h-[460px]">
            <ShopByCollections />
         </section>

         <section className="w-full max-w-7xl mx-auto px-2  mt-10 py-10 md:py-24 min-h-[460px]">
            <Discount />
         </section>
      </>
   )
}
