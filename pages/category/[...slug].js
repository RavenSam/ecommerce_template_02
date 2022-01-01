import { useRouter } from "next/router"
import Head from "next/head"
import { CategoryContent } from "../../sections"
import { Banner, Breadcrumbs } from "../../components"
import LoadingScreen from "../../components/shared/Loading"
import { getCategory, getProductsByCategory } from "../../lib/fetchProduct"
import { useEffect, useState } from "react"

export default function Category({}) {
   const [category, setCategory] = useState({})
   const [productsCat, setProductsCat] = useState([])
   const { query = [] } = useRouter()

   useEffect(async () => {
      if (query.slug) {
         const cat = await getCategory(query.slug[0])

         if (cat.error) {
            console.log(cat.error)
         }
         setCategory(cat.data)

         const products = await getProductsByCategory(cat.data.name)

         if (products.error) {
            console.log(products.error)
         }

         setProductsCat(products.data)
      }
   }, [query])

   if (!query.slug) {
      return <LoadingScreen />
   }

   return (
      <>
         <Head>
            <title>Seano - Category : {query?.slug.map((x) => x)}</title>
            <meta name="description" content={category.description | "description"} />
         </Head>

         <section className="w-full max-w-7xl mx-auto px-4  py-5 min-h-[200px]">
            <Banner title={category.name} />
         </section>

         <div className="w-full max-w-7xl mx-auto px-4 my-8 min-h-[30px] ">
            <Breadcrumbs />
         </div>

         <section className="w-full max-w-7xl mx-auto px-4 py-5 min-h-[200px] ">
            <CategoryContent category={category} products={productsCat} />
         </section>
      </>
   )
}
