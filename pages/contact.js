import Head from "next/head"
import { Banner } from "../components"
import { AskedQuestions, ContactUs } from "../sections"

export default function Contact() {
   return (
      <>
         <Head>
            <title>Seano - Contact us</title>
            <meta name="description" content="Contact Seano Team" />
         </Head>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <Banner title="Contact Us" />
         </section>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <AskedQuestions />
         </section>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <ContactUs />
         </section>
      </>
   )
}
