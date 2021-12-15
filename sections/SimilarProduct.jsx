import ProductCard from "../components/ProductCard"

export default function SimilarProduct() {
   return (
      <div className=" " id="similarProducts">
         <h2 className="h2">Customers also bought</h2>

         <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[1, 2, 3, 4].map((item, i) => (
               <ProductCard key={i} />
            ))}
         </div>
      </div>
   )
}
