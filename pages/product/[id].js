import Head from "next/head"
import { useState } from "react"
import { ProductGallery, ProductInfo } from "../../components"

const colors = ["#ec4899", "#FF87CA", "#B000B9", "#396EB0", "#009DAE"]

export default function Product() {
   const [productColor, setProductColor] = useState(colors[0])

   return (
      <>
         <Head>
            <title>Product</title>
         </Head>

         <div className="lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mt-8">
            <div className="px-4 ">
               <ProductGallery colors={colors} productColor={productColor} setProductColor={setProductColor} />
            </div>

            <div className="px-4">
               <ProductInfo productColor={productColor} />
            </div>
         </div>
      </>
   )
}
