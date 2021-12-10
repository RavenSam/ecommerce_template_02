import { Fragment, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { ChevronDownIcon, MenuAlt1Icon, XIcon } from "@heroicons/react/outline"
import { Transition } from "@headlessui/react"
import { navLinks } from "../utils/headerItems"

export default function NavDrawer() {
   const [open, setOpen] = useState(false)

   const handleClick = () => console.log("Clicked...")

   return (
      <>
         <Head>
            <style>{`body{overflow-y:${open && "hidden"}}`}</style>
         </Head>

         <button
            className="rounded-full inline-block md:hidden w-10 h-10 p-2 transition duration-200 hover:bg-gray-200 active:bg-gray-300"
            onClick={() => setOpen(!open)}
         >
            <MenuAlt1Icon />
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
            <nav className="absolute top-0 left-0 md:hidden bottom-0 z-20  h-screen bg-white backdrop-blur-md w-full sm:w-[50%] bg-opacity-90">
               {/* Overlay */}
               <div
                  className="absolute top-0 right-0 hidden sm:block h-screen w-[100%] bg-gray-700 bg-opacity-70  transform translate-x-full "
                  onClick={() => setOpen(false)}
               />

               <div className="flex items-center justify-between text-white bg-black p-5">
                  <h2 className="text-3xl font-black tracking-widest">LOGO</h2>

                  <button className="w-10 h-10 p-2 " onClick={() => setOpen(false)}>
                     <XIcon />
                  </button>
               </div>

               <ul className="p-4">
                  {navLinks.map((link) => (
                     <li
                        key={link.name}
                        className="flex items-center justify-between text-gray-500  px-2 lg:px-4 hover:text-black hover:bg-gray-200 hover:bg-opacity-60"
                     >
                        <Link href={link.url}>
                           <a className="capitalize block w-full  py-2 tracking-wider text-base font-semibold  ">
                              {link.name}
                           </a>
                        </Link>
                        {link.children?.length > 0 && (
                           <button className="w-10 h-10 p-2 " onClick={handleClick}>
                              <ChevronDownIcon />
                           </button>
                        )}
                     </li>
                  ))}
               </ul>
            </nav>
         </Transition>
      </>
   )
}
