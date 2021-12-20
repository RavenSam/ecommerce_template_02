export default function CheckoutForm() {
   return (
      <form className="space-y-10 accent-blue-500" action="#">
         <div className="space-y-6">
            <h4 className="h4">Payement Details</h4>

            <div>
               <label for="cardNumber" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                  Card Number
               </label>
               <input type="text" name="cardNumber" id="cardNumber" className="input-1" required />
            </div>

            <div className="w-full flex items-center space-x-2 md:space-x-4">
               <div className="w-9/12">
                  <label for="expirationDate" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                     expiration Date
                  </label>
                  <input type="text" name="expirationDate" id="expirationDate" className="input-1" required />
               </div>

               <div className="w-3/12">
                  <label for="cvc" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                     CVC
                  </label>
                  <input type="text" maxLength={3} name="cvc" id="cvc" className="input-1" required />
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <h4 className="h4">Shipping Address</h4>

            <div>
               <label for="address" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                  Address
               </label>
               <input type="text" name="address" id="address" className="input-1" required />
            </div>

            <div className="w-full flex items-center space-x-2 md:space-x-4">
               <div className="">
                  <label for="city" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                     city
                  </label>
                  <input type="text" name="city" id="city" className="input-1" required />
               </div>

               <div className="">
                  <label for="province" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                     province
                  </label>
                  <input type="text" maxLength={3} name="province" id="province" className="input-1" required />
               </div>

               <div className="">
                  <label for="postalCode" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                     postal Code
                  </label>
                  <input type="text" maxLength={3} name="postalCode" id="postalCode" className="input-1" required />
               </div>
            </div>
         </div>
      </form>
   )
}
