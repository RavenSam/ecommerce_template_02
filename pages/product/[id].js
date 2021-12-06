import Head from "next/head"
import { ProductGallery, ProductInfo } from "../../components"

export default function Product() {
   return (
      <>
         <Head>
            <title>Product</title>
         </Head>

         <div className="lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className=" ">
               <ProductGallery />
            </div>

            <div className=" ">
               <ProductInfo />
            </div>
         </div>
      </>
   )
}
