import { ProductCard } from "../components"

export default function TrendingProduct() {
   return (
      <div className=" " id="">
         <h2 className="h2">Trending Product</h2>

         <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {[...Array(4)].map((item, i) => (
               <div key={i} className="mx-auto">
                  <ProductCard />
               </div>
            ))}
         </div>
      </div>
   )
}
