import { useRouter } from "next/router"
import Head from "next/head"
import { CategoryContent } from "../../sections"
import { Banner, Breadcrumbs } from "../../components"
import LoadingScreen from "../../components/shared/Loading"
import { getCategory } from "../../lib/fetchProduct"
import { useEffect, useState } from "react"

export default function Category({}) {
   const [category, setCategory] = useState({})
   const { query = [] } = useRouter()

   useEffect(async () => {
      if (query.slug) {
         const data = await getCategory(query.slug[0])

         if (data.error) {
            console.log(data.error)
         }

         setCategory(data.data)
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

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <Banner title={category.name} />
         </section>

         <div className="px-4 lg:container lg:mx-auto my-8">
            <Breadcrumbs />
         </div>

         <section className="px-4 lg:container lg:mx-auto py-5">
            <CategoryContent category={category} />
         </section>
      </>
   )
}
