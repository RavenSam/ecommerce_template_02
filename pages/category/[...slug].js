import { useRouter } from "next/router"
import Head from "next/head"
import { CategoryContent } from "../../sections"
import { Banner, Breadcrumbs } from "../../components"

export default function Category() {
   const { query } = useRouter()

   if (!query.slug) {
      return <p>Loading...</p>
   }

   return (
      <>
         <Head>
            <title>Category - {query?.slug.map((x) => x)}</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <Banner title={query?.slug[0]} />
         </section>

         <div className="px-4 lg:container lg:mx-auto my-8">
            <Breadcrumbs />
         </div>

         <section className="px-4 lg:container lg:mx-auto py-5">
            <CategoryContent />
         </section>
      </>
   )
}
