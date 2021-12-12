import ProductCard from "./ProductCard"

export default function SimilarProduct() {
   return (
      <div className="mt-10 py-5 " id="similarProducts">
         <h2 className="text-2xl font-bold py-4 mb-4">Customers also bought</h2>

         <div className="flex items-center justify-evenly">
            {[1, 2, 3, 4].map((item, i) => (
               <ProductCard key={i} />
            ))}
         </div>
      </div>
   )
}
