import { SearchIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useState } from "react"
import NavDrawer from "../NavDrawer"

export default function HeaderIcons() {
   const [cartLength, setCartLength] = useState(1)

   return (
      <div className="flex items-center lg:space-x-1">
         <Link href="#">
            <a className="rounded-full hidden md:inline-block w-10 h-10 p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300">
               <SearchIcon />
            </a>
         </Link>

         <Link href="#">
            <a className="rounded-full inline-block w-10 h-10 p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300">
               <UserIcon />
            </a>
         </Link>

         <Link href="#">
            <a className="relative rounded-full inline-block w-10 h-10 p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300">
               <ShoppingCartIcon />

               {cartLength > 0 && (
                  <span className=" absolute -top-0 -right-0 h-5 w-5 text-[10px] leading-[20px] font-semibold text-white text-center  bg-[#f02869] rounded-full">
                     {cartLength > 99 ? "+99" : cartLength}
                  </span>
               )}
            </a>
         </Link>

         <NavDrawer />
      </div>
   )
}
