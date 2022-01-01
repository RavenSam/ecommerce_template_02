import { useState } from "react"
import { FilterProduct, Pagination, Disclus, ProductCard, ProductList } from "../components"

export default function CategoryContent({ category, products = [] }) {
   const [view, setView] = useState("grid")

   return (
      <>
         <div className="grid grid-cols-12 gap-4">
            <div className="hidden sm:block  col-span-3 text-gray-500">
               <h2 className="h3">Categories</h2>

               <div className="max-w-[15rem] mt-6">
                  <Disclus title={category.name} content={category.subcategories} option={{ defaultOpen: true }} />
               </div>
            </div>

            {products.length > 0 ? (
               <div className="col-span-12 sm:col-span-9">
                  <FilterProduct view={view} setView={setView} />

                  {view === "grid" ? (
                     <div
                        className="grid gap-4 overflow-x-hidden"
                        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr)" }}
                     >
                        {products.map((item, i) => (
                           <div key={i} className="justify-self-center">
                              <ProductCard product={item} />
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className="w-full max-w-3xl p-2">
                        <div className="space-y-4">
                           {products.map((item, i) => (
                              <ProductList key={i} product={item} />
                           ))}
                        </div>
                     </div>
                  )}
                  <div className="mt-12 flex items-center justify-center w-full">
                     <Pagination />
                  </div>
               </div>
            ) : (
               <div className="text-center text-gray-600 col-span-12 sm:col-span-9 ">
                  <p>
                     <span className="capitalize font-semibold">{category.name}</span> category is empty
                  </p>
               </div>
            )}
         </div>
      </>
   )
}
