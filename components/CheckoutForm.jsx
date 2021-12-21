import { useState } from "react"
import { CheckCircleIcon } from "@heroicons/react/solid"

const deliveryMethods = [
   { id: 1, name: "standard", duration: "4-10 business days", price: "$5.00" },
   { id: 2, name: "express", duration: "2-5 business days", price: "$16.00" },
]

export default function CheckoutForm() {
   const [deliveryId, setDeliveryId] = useState(1)

   return (
      <form className="space-y-10 accent-blue-500" action="#">
         <div className="space-y-4">
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

         <div className="space-y-4">
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
                  <label for="contry" className="text-sm font-medium text-gray-700 capitalize block mb-2 ">
                     contry
                  </label>
                  <input type="text" maxLength={3} name="contry" id="contry" className="input-1" required />
               </div>
            </div>

            <div className="w-full flex items-center space-x-2 md:space-x-4">
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

         <div className="space-y-4">
            <h4 className="h4">Delivery Methode</h4>

            <div className=" grid grid-cols-2 w-full space-x-2 md:space-x-4">
               {deliveryMethods.map((method) => (
                  <div
                     key={method.id}
                     onClick={() => setDeliveryId(method.id)}
                     className={`relative w-full border border-gray-300 bg-white font-medium rounded-lg transition duration-200 ease-in-out p-3 cursor-pointer ${
                        method.id === deliveryId ? "border-2 border-emerald-500" : "hover:scale-105 hover:elevation-2"
                     }`}
                  >
                     <div className="flex items-center justify-between">
                        <h3 className="capitalize">{method.name}</h3>
                        {method.id === deliveryId && <CheckCircleIcon className="h-5 w-5 text-emerald-500" />}
                     </div>
                     <p className="text-gray-500 text-sm  mt-1">{method.duration}</p>
                     <p className="mt-4">{method.price}</p>
                  </div>
               ))}
            </div>
         </div>
      </form>
   )
}
