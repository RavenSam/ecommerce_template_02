import { ProductGallery, ProductInfo } from "../components"

export default function ProductDetails({ colors, productColor, setProductColor }) {
   return (
      <>
         <div className="px-4 ">
            <ProductGallery colors={colors} productColor={productColor} setProductColor={setProductColor} />
         </div>

         <div className="px-4">
            <ProductInfo productColor={productColor} />
         </div>
      </>
   )
}
