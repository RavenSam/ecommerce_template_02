import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { Spinner } from "../components/shared/Loading"
import { getProducts } from "../lib/fetchProduct"

export default function TrendingProduct() {
   const [products, setProducts] = useState([])
   const [load, setLoad] = useState(true)

   useEffect(async () => {
      setLoad(true)

      const { data } = await getProducts(4)
      setProducts(data)

      setLoad(false)
   }, [])

   return (
      <div className=" " id="">
         <h2 className="h2">Trending Product</h2>

         {load ? (
            <div className="flex p-4 justify-center">
               <Spinner />
            </div>
         ) : (
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               {products.length > 0 ? (
                  products.map((item, i) => <ProductCard product={item} key={i} />)
               ) : (
                  <div className="text-center col-span-full">
                     <p className=" text-gray-700">No trending product</p>
                  </div>
               )}
            </div>
         )}
      </div>
   )
}
