import Head from "next/head"
import { Banner } from "../../components"
import { CatgoriesContent } from "../../sections"
import { getCategories } from "../../lib/fetchProduct"

export default function Categories({ categories }) {
   return (
      <>
         <Head>
            <title>Seano - Categories</title>
            <meta name="description" content="All of our product categories" />
         </Head>

         <section className="w-full max-w-7xl mx-auto mt-5 px-2  py-5">
            <Banner title="Explore by category" />
         </section>

         <section className="w-full max-w-7xl mx-auto mt-5 px-2  py-4">
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
