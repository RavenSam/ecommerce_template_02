import Head from "next/head"
import { Banner } from "../components"

export default function Contact() {
   return (
      <>
         <Head>
            <title>About us</title>
         </Head>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <Banner title="About Us" />
         </section>

         <section className="px-4 lg:container lg:mx-auto  py-5">
            <h2 className="h2 border-b">Who we are?</h2>

            <div className="columns-xs">
               <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi explicabo rem quia fugit, ratione
                  eveniet illum voluptate? Minus nisi ratione voluptatibus voluptatem tenetur? Nulla temporibus dolor
                  perspiciatis quidem, vero, deserunt officiis soluta maiores, ex explicabo porro. Perferendis sint
                  velit est reiciendis cumque debitis corporis laboriosam ducimus nemo enim quo, ipsam aut dignissimos
                  architecto esse laborum voluptates neque quidem beatae? temporibus dolor perspiciatis quidem, vero,
                  deserunt officiis soluta.
               </p>
            </div>
         </section>
      </>
   )
}
