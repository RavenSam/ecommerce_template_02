import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { navLinks } from "../utils/headerItems"

export default function HeaderNav() {
   const [menuOpen, setMenuOpen] = useState(false)

   const toggleClass = menuOpen
      ? "transition ease-in duration-100 transform opacity-100 scale-100 z-10"
      : "transition ease-out duration-200 transform opacity-0 scale-95 pointer-events-none"

   return (
      <>
         <ul className="flex items-center ">
            {navLinks.map((link) => (
               <li
                  key={link.name}
                  className="relative py-2"
                  onMouseOver={() => link.children?.length > 0 && setMenuOpen(true)}
                  onMouseLeave={() => link.children?.length > 0 && setMenuOpen(false)}
               >
                  <Link href={link.url}>
                     <a className="capitalize px-2 lg:px-4 py-2 tracking-wider text-sm font-bold text-gray-500 hover:text-black">
                        {link.name}
                        {link.children?.length > 0 && <ChevronDownIcon className="h-4 w-4 inline ml-1" />}
                     </a>
                  </Link>

                  {link.children?.length > 0 && (
                     <div
                        className={`origin-top-right absolute left-0 mt-2 p-2 w-56 rounded-md shadow-lg bg-white  focus:outline-none ${toggleClass}`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                     >
                        {link.children.map((item) => (
                           <div key={item.name} className="">
                              <Link href={item.url}>
                                 <a className="block capitalize px-4 py-2 tracking-wider text-sm font-semibold rounded-sm  text-gray-500 hover:text-black hover:bg-gray-100">
                                    {item.name}
                                 </a>
                              </Link>
                           </div>
                        ))}
                     </div>
                  )}
               </li>
            ))}
         </ul>
      </>
   )
}
