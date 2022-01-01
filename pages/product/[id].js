import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { selectedVarientState, viewProductState } from "../../atoms/productAtom"
import LoadingScreen from "../../components/shared/Loading"
import { getPaths, getProduct } from "../../lib/fetchProduct"

import { Reviews, SimilarProduct, ProductDescriptions, ProductDetails } from "../../sections"

export default function Product({ product }) {
   const [colors, setColors] = useState([])
   const [productColor, setProductColor] = useState()
   const router = useRouter()
   const [viewProduct, setViewProduct] = useRecoilState(viewProductState)
   const [selectedVarient, setSelectedVarient] = useRecoilState(selectedVarientState)

   useEffect(() => {
      setViewProduct(product)
      setSelectedVarient(product.varients[0])
      setColors(
         product.varients.map((x) => {
            return { color: x.color, hex: x.hex }
         })
      )

      setProductColor({ color: product.varients[0].color, hex: product.varients[0].hex })
   }, [product])

   if (router.isFallback || !selectedVarient.images) {
      return <LoadingScreen />
   }

   return (
      <>
         <Head>
            <title>{product.name || "product"}</title>
            <meta name="description" content={product.description} />
         </Head>

         <section className="w-full max-w-7xl mx-auto mt-10 py-5  min-h-[500px]">
            <ProductDetails colors={colors} productColor={productColor} setProductColor={setProductColor} />
         </section>

         <section className=" w-full max-w-7xl mx-auto px-4 mt-10 py-5 min-h-[200px]">
            <ProductDescriptions />
         </section>

         <section className=" w-full max-w-7xl mx-auto px-4 mt-10 py-5 min-h-[130px]">
            <Reviews />
         </section>

         <section className=" w-full max-w-7xl mx-auto px-4 mt-10 py-5 min-h-[400px]">
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
