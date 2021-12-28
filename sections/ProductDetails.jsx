import { ProductGallery, ProductInfo } from "../components"

export default function ProductDetails({ colors = [], productColor = "", setProductColor }) {
   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
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
