import { Fragment, useState, useRef } from "react"
import Link from "next/link"
import { ChevronDownIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/outline"
import { Transition, Dialog } from "@headlessui/react"
import { navLinks } from "../utils/headerItems"
import SearchInput from "./SearchInput"

export default function NavDrawer() {
   const [open, setOpen] = useState(false)
   const [showChild, setShowChild] = useState(false)
   const cancelButtonRef = useRef()

   const handleClick = () => setShowChild(!showChild)

   return (
      <>
         <button
            className="rounded-full inline-block md:hidden w-10 h-10 p-2 transition duration-200 hover:bg-gray-200 active:bg-gray-300"
            onClick={() => setOpen(!open)}
         >
            <MenuAlt3Icon />
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
                     <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" />
                  </Transition.Child>

                  <div className="fixed inset-y-0 left-0  max-w-full flex font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 "
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 "
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                     >
                        <div className="w-screen max-w-md">
                           <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 <div className="flex items-center justify-between  -mt-6">
                                    <h2 className="text-3xl font-black tracking-widest text-white bg-black p-4 rounded-b-md">
                                       LOGO
                                    </h2>
                                    <button className="w-10 h-10 p-2 " onClick={() => setOpen(false)}>
                                       <XIcon />
                                    </button>
                                 </div>

                                 <hr className="mt-8 mb-4 border-2 rounded-full w-1/2 border-black" />
                                 <div className=" py-4 ">
                                    <SearchInput />
                                 </div>

                                 <ul className="py-4">
                                    {navLinks.map((link) => (
                                       <Fragment key={link.name}>
                                          <li className="flex items-center justify-between border-l-4 border-transparent hover:border-black text-gray-500 rounded-r-md px-2 lg:px-4 hover:text-black hover:bg-gray-200 hover:bg-opacity-60">
                                             <Link href={link.url}>
                                                <a
                                                   className="capitalize block w-full  py-2 tracking-wider text-base font-semibold  "
                                                   onClick={() => setOpen(false)}
                                                >
                                                   {link.name}
                                                </a>
                                             </Link>
                                             {link.children?.length > 0 && (
                                                <button
                                                   className={` w-10 h-10 p-2 ${showChild && "transform rotate-180"}`}
                                                   onClick={handleClick}
                                                >
                                                   <ChevronDownIcon />
                                                </button>
                                             )}
                                          </li>
                                          {link.children?.length > 0 && (
                                             <Transition show={showChild} as="ul" className="">
                                                {link.children?.map((item) => (
                                                   <li
                                                      key={item.name}
                                                      className="text-gray-500 text-sm pl-4 px-2 hover:text-black rounded-r-md hover:bg-gray-200 hover:bg-opacity-60 border-l-2 hover:border-black"
                                                   >
                                                      <Link href={item.url}>
                                                         <a
                                                            className="capitalize block w-full py-1 tracking-wider  font-semibold  "
                                                            onClick={() => setOpen(false)}
                                                         >
                                                            {item.name}
                                                         </a>
                                                      </Link>
                                                   </li>
                                                ))}
                                             </Transition>
                                          )}
                                       </Fragment>
                                    ))}
                                 </ul>

                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                                 {/* ************************************************************ */}
                              </div>
                           </div>
                        </div>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
      </>
   )
}
