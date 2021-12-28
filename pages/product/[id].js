import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { viewProductState } from "../../atoms/productAtom"
import LoadingScreen from "../../components/shared/Loading"
import { getPaths, getProduct } from "../../lib/fetchProduct"

import { Reviews, SimilarProduct, ProductDescriptions, ProductDetails } from "../../sections"

const colors = ["pink", "cyan", "blue", "red", "black"]

export default function Product({ product }) {
   const [viewProduct, setViewProduct] = useRecoilState(viewProductState)
   const [productColor, setProductColor] = useState(colors[0])
   const router = useRouter()

   useEffect(() => {
      setViewProduct(product)
   }, [product])

   if (router.isFallback) {
      return <LoadingScreen />
   }

   return (
      <>
         <Head>
            <title>{product.name || "product"}</title>
            <meta name="description" content={product.description} />
         </Head>

         <section className="lg:container lg:mx-auto  mt-10 py-5">
            <ProductDetails colors={colors} productColor={productColor} setProductColor={setProductColor} />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-5">
            <ProductDescriptions />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-5">
            <Reviews />
         </section>

         <section className="px-4 lg:container lg:mx-auto mt-10 py-5">
            <SimilarProduct />
         </section>
      </>
   )
}

export async function getStaticPaths() {
   const paths = await getPaths()

   return { paths, fallback: true }
}

export async function getStaticProps(context) {
   const { id } = context.params

   const { data } = await getProduct(id)

   if (!data) {
      return {
         notFound: true,
      }
   }

   return {
      props: { product: data },
   }
}
