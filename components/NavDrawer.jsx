import { Fragment, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { ChevronDownIcon, MenuAlt3Icon, SearchIcon, XIcon } from "@heroicons/react/outline"
import { Transition } from "@headlessui/react"
import { navLinks } from "../utils/headerItems"

export default function NavDrawer() {
   const [open, setOpen] = useState(false)
   const [showChild, setShowChild] = useState(false)

   const handleClick = () => setShowChild(!showChild)

   return (
      <>
         <Head>
            <style>{`body{overflow-y:${open && "hidden"}}`}</style>
         </Head>

         <button
            className="rounded-full inline-block md:hidden w-10 h-10 p-2 transition duration-200 hover:bg-gray-200 active:bg-gray-300"
            onClick={() => setOpen(!open)}
         >
            <MenuAlt3Icon />
         </button>

         <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
         >
            <nav className="absolute top-0 left-0 md:hidden z-20  h-screen bg-white backdrop-blur-md w-full sm:w-[50%] bg-opacity-95 ">
               {/* Overlay */}
               <div
                  className="absolute top-0 right-0 hidden sm:block h-screen w-[100%] bg-gray-700 bg-opacity-70  transform translate-x-full "
                  onClick={() => setOpen(false)}
               />

               <div className="flex items-center justify-between text-white bg-black p-4">
                  <h2 className="text-3xl font-black tracking-widest">LOGO</h2>

                  <button className="w-10 h-10 p-2 " onClick={() => setOpen(false)}>
                     <XIcon />
                  </button>
               </div>

               <div className="px-2 lg:px-4 py-4">
                  <form className="flex items-center  h-14 rounded-sm overflow-hidden">
                     <input
                        type="text"
                        className="p-4 w-[85%] h-full bg-gray-300 border-none bg-opacity-70"
                        placeholder="Search..."
                     />

                     <button className="bg-black w-[15%] h-full text-white">
                        <SearchIcon className="w-5 h-5 mx-auto" />
                     </button>
                  </form>
               </div>

               <ul className="p-4">
                  {navLinks.map((link) => (
                     <Fragment key={link.name}>
                        <li className="flex items-center justify-between text-gray-500 rounded-sm px-2 lg:px-4 hover:text-black hover:bg-gray-200 hover:bg-opacity-60">
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
                           <Transition show={showChild} as="ul">
                              {link.children?.map((item) => (
                                 <li
                                    key={item.name}
                                    className="text-gray-500 text-sm ml-4 px-2 hover:text-black rounded-sm hover:bg-gray-200 hover:bg-opacity-60"
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
            </nav>
         </Transition>
      </>
   )
}
