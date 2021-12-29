import { useState } from "react"
import { FilterProduct, Pagination, Disclus, ProductCard, ProductList } from "../components"

export default function CategoryContent({ category }) {
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

            <div className="col-span-12 sm:col-span-9">
               <FilterProduct view={view} setView={setView} />

               {view === "grid" ? (
                  <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr)" }}>
                     {[...Array(8)].map((item, i) => (
                        <div key={i} className="justify-self-center">
                           <ProductCard />
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="w-full max-w-3xl p-2">
                     <div className="space-y-4">
                        {[...Array(8)].map((item, i) => (
                           <ProductList key={i} />
                        ))}
                     </div>
                  </div>
               )}
               <div className="mt-12 flex items-center justify-center w-full">
                  <Pagination />
               </div>
            </div>
         </div>
      </>
   )
}
