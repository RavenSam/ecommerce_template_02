import { FilterProduct, ProductCard2, Pagination, Disclus } from "../components"

export default function CategoryContent({ category }) {
   return (
      <>
         <div className="grid grid-cols-12 gap-4">
            <div className="hidden sm:block  col-span-3 text-gray-500">
               <h3 className="h3">Categories</h3>

               <div className="max-w-[15rem] mt-6">
                  <Disclus title={category.name} content={category.subcategories} option={{ defaultOpen: true }} />
               </div>
            </div>

            <div className="col-span-12 sm:col-span-9">
               <FilterProduct />

               <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                  {[...Array(8)].map((item, i) => (
                     <ProductCard2 key={i} />
                  ))}
               </div>

               <div className="mt-8 flex items-center justify-center w-full">
                  <Pagination />
               </div>
            </div>
         </div>
      </>
   )
}
