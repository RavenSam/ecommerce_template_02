import { Fragment, useState, useRef, useEffect } from "react"
import { ArrowsExpandIcon, SearchIcon, XIcon } from "@heroicons/react/outline"
import { Transition, Dialog } from "@headlessui/react"
import SearchInput from "./SearchInput"
import { ProductDetails } from "../sections"
import { ProductGallery, ProductInfo } from "."

export default function QuickView({ id }) {
   const [open, setOpen] = useState(false)
   const cancelButtonRef = useRef()

   useEffect(async () => {
      //const {data} = getProduct(id)
      // setProduct(data)
   }, [])

   return (
      <>
         <button
            className="p-2 bg-white bg-opacity-50 hover:bg-opacity-80 border hover:shadow-md hover:text-black rounded-md focus:ring-2 focus:ring-blue-500"
            aria-label="Quick View"
            onClick={() => setOpen(!open)}
         >
            <ArrowsExpandIcon className="h-6 w-6" />
         </button>

         <Transition.Root show={open} as={Fragment}>
            <Dialog
               initialFocus={cancelButtonRef}
               as="div"
               className="fixed z-50 inset-0 overflow-hidden"
               onClose={() => setOpen(!open)}
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
                     <Dialog.Overlay className="absolute inset-0 bg-gray-400 bg-opacity-80 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-1/2 max-w-full font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-[0.7s] "
                        enterFrom="scale-50 opacity-0"
                        enterTo="scale-100 opacity-1"
                        leave="transform transition ease-in-out duration-300 "
                        leaveFrom="scale-100 opacity-1"
                        leaveTo="scale-50 opacity-0"
                     >
                        <div className=" bg-white shadow-2xl w-screen max-w-2xl p-4 rounded-md  transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll max-h-[90vh]">
                           {/* ************************************************************ */}
                           {/* ************************************************************ */}
                           {/* ************************************************************ */}

                           <div className="flex items-start justify-between border-b pb-4">
                              <h3 className="text-lg font-semibold  text-gray-900 capitalize">Product quick view</h3>
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

                           <div className="my-5">
                              <div className="">
                                 <ProductGallery colors={[]} productColor={""} />
                              </div>

                              <div className="mt-10">
                                 <ProductInfo productColor={""} />
                              </div>
                           </div>

                           {/* ************************************************************ */}
                           {/* ************************************************************ */}
                           {/* ************************************************************ */}
                        </div>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
      </>
   )
}
