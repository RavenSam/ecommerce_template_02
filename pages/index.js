import Head from "next/head"
import { Hero } from "../sections"

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <section className="w-full max-w-7xl lg:mx-auto mt-4 p-2">
            <Hero />
         </section>
      </>
   )
}
