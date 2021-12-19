import { Fragment, useState, useRef } from "react"
import { SearchIcon } from "@heroicons/react/outline"
import { Transition, Dialog } from "@headlessui/react"
import SearchInput from "./SearchInput"

export default function SearchForm() {
   const [open, setOpen] = useState(false)
   const cancelButtonRef = useRef()

   return (
      <>
         <button
            className="rounded-full hidden md:inline-block w-10 h-10 p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300 "
            onClick={() => setOpen(!open)}
         >
            <SearchIcon />
         </button>

         <Transition.Root show={open} as={Fragment}>
            <Dialog
               initialFocus={cancelButtonRef}
               as="div"
               className="fixed z-50 inset-0 overflow-hidden"
               onClose={() => {
                  setOpen(!open)
               }}
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
                     <Dialog.Overlay className="absolute inset-0 bg-gray-400 bg-opacity-75 transition-opacity backdrop-blur-sm" />
                  </Transition.Child>

                  <div className="fixed inset-1/2 max-w-full font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 "
                        enterFrom="translate-y-5 opacity-0"
                        enterTo="translate-y-0 opacity-1"
                        leave="transform transition ease-in-out duration-400 "
                        leaveFrom="translate-y-0 opacity-1"
                        leaveTo="translate-y-5 opacity-0"
                     >
                        <div className=" bg-white shadow-lg w-screen max-w-md p-4 rounded-md  transform -translate-x-1/2">
                           <SearchInput />
                        </div>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
      </>
   )
}
