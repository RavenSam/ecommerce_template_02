import { Fragment, useState, useRef } from "react"
import { SearchIcon, XIcon } from "@heroicons/react/outline"
import { Transition, Dialog } from "@headlessui/react"
import SearchInput from "./SearchInput"

export default function SearchForm() {
   const [open, setOpen] = useState(false)
   const cancelButtonRef = useRef()

   return (
      <>
         <button
            className="rounded-full hidden md:inline-block p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300 "
            onClick={() => setOpen(!open)}
         >
            <SearchIcon className="w-6 h-6" />
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

                  <div className="fixed inset-x-1/2 inset-y-1/3 max-w-full font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-1000 "
                        enterFrom="-translate-y-16 opacity-0"
                        enterTo="translate-y-0 opacity-1"
                        leave="transform transition ease-in-out duration-400 "
                        leaveFrom="translate-y-0 opacity-1"
                        leaveTo="translate-y-5 opacity-0"
                     >
                        <div className=" bg-white shadow-2xl w-screen max-w-md p-4 rounded-md  transform -translate-x-1/2">
                           {/* ************************************************************ */}
                           {/* ************************************************************ */}
                           {/* ************************************************************ */}

                           <div className="flex items-start justify-between border-b pb-4">
                              <h3 className="text-lg font-semibold  text-gray-900">Search a product</h3>
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
                              <SearchInput />
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
