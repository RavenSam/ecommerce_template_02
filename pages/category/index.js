import Head from "next/head"
import { Banner } from "../../components"
import { CatgoriesContent } from "../../sections"

export default function Categories() {
   return (
      <>
         <Head>
            <title>Categories</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <Banner title="Explore by category" />
         </section>

         <section className="px-4 lg:container lg:mx-auto py-4">
            <CatgoriesContent />
         </section>
      </>
   )
}
