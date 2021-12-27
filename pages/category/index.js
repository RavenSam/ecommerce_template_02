import Head from "next/head"
import { Banner } from "../../components"
import { CatgoriesContent } from "../../sections"
import { getCategories } from "../../lib/fetchProduct"

export default function Categories({ categories }) {
   return (
      <>
         <Head>
            <title>Categories</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <Banner title="Explore by category" />
         </section>

         <section className="px-4 lg:container lg:mx-auto py-4">
            <CatgoriesContent categories={categories} />
         </section>
      </>
   )
}

export async function getStaticProps(context) {
   const { data } = await getCategories()

   if (!data) {
      return {
         notFound: true,
      }
   }

   return {
      props: { categories: data },
   }
}
