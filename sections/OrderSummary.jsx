import { ProductInCart } from "../components"

export default function OrderSummary() {
   return (
      <div className="">
         <h4 className="h4 mb-8">Order Summary</h4>

         <ProductInCart />

         <div className="border-t border-gray-200 bg-white py-4 mt-4 w-full">
            <div className="space-y-3 text-base text-gray-600">
               <div className="flex justify-between ">
                  <p>Subtotal</p>
                  <p className="text-black">$320.00</p>
               </div>

               <div className="flex justify-between ">
                  <p>Shipping</p>
                  <p className="text-black">$15.00</p>
               </div>

               <div className="flex justify-between ">
                  <p>Taxes</p>
                  <p className="text-black">$26.80</p>
               </div>
            </div>

            <div className="mt-4 py-2 border-t">
               <div className="flex justify-between text-lg font-semibold">
                  <p>Total</p>
                  <p>$362.80</p>
               </div>
            </div>
         </div>
      </div>
   )
}
