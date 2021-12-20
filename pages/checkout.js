import Head from "next/head"
import { OrderSummary, PayementDetails } from "../sections"

export default function Checkout() {
   return (
      <>
         <Head>
            <title>Checkout</title>
         </Head>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl lg:mx-auto mt-10 p-2">
            <section className="">
               <div className="max-w-xl mx-auto">
                  <PayementDetails />
               </div>
            </section>

            <section className="">
               <div className="max-w-xl mx-auto">
                  <OrderSummary />

                  <div className="py-4">
                     <button type="submit" className="btn-1 w-full py-3">
                        Confirm Order
                     </button>
                  </div>
               </div>
            </section>
         </div>
      </>
   )
}
