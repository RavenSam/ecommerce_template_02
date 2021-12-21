import { Fragment, useState, useRef } from "react"
import Link from "next/link"
import { ShoppingCartIcon, XIcon } from "@heroicons/react/outline"
import { Transition, Dialog } from "@headlessui/react"
import ProductInCart from "./ProductInCart"

export default function MiniCart() {
   const [open, setOpen] = useState(false)
   const [cartLength, setCartLength] = useState(1)
   const cancelButtonRef = useRef()

   return (
      <>
         <button
            className="relative rounded-full inline-block p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300 "
            onClick={() => setOpen(!open)}
         >
            <ShoppingCartIcon className="w-6 h-6" />

            {cartLength > 0 && (
               <span className=" absolute -top-0 -right-0 h-5 w-5 text-[10px] leading-[20px] font-semibold text-white text-center  bg-pink-500 rounded-full">
                  {cartLength > 99 ? "+99" : cartLength}
               </span>
            )}
         </button>

         <Transition.Root show={open} as={Fragment}>
            <Dialog
               initialFocus={cancelButtonRef}
               as="div"
               className="fixed z-50 inset-0 overflow-hidden"
               onClose={() => setOpen(false)}
            >
               <div className="absolute inset-0 overflow-hidden">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-in-out duration-700"
                     enterFrom="opacity-0"
                     enterTo="opacity-400"
                     leave="ease-in-out duration-700"
                     leaveFrom="opacity-400"
                     leaveTo="opacity-0"
                  >
                     <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" />
                  </Transition.Child>

                  <div className="fixed inset-y-0 right-0  max-w-full flex font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 "
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 "
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                     >
                        <div className="relative w-screen max-w-md">
                           <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll ">
                              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 mb-40">
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}

                                 <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold  text-gray-900">Shopping cart</h3>
                                    <div className="ml-3 h-7 flex items-center">
                                       <button
                                          ref={cancelButtonRef}
                                          type="button"
                                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                          onClick={() => setOpen(false)}
                                       >
                                          <span className="sr-only">Close panel</span>
                                          <XIcon className="h-6 w-6" aria-hidden="true" />
                                       </button>
                                    </div>
                                 </div>

                                 <div className="mt-8 ">
                                    <ProductInCart setOpen={setOpen} />
                                 </div>

                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                              </div>
                           </div>

                           {cartLength > 0 ? (
                              <div className="border-t border-gray-200 bg-white py-4  px-6 absolute bottom-0 w-full">
                                 <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$99</p>
                                 </div>
                                 <p className="mt-0.5 text-sm text-gray-500">
                                    Shipping and taxes calculated at checkout.
                                 </p>
                                 <div className="mt-6">
                                    <Link href="/checkout">
                                       <a onClick={() => setOpen(false)} className="btn-1 block text-center py-3">
                                          Checkout
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                           ) : null}
                        </div>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
      </>
   )
}
