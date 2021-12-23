import { ChevronDownIcon } from "@heroicons/react/outline"
import { Menu } from "@headlessui/react"
import { useState } from "react"

export default function MenuDrop({ title = "menu", items = [] }) {
   const [menuTitle, setMenuTitle] = useState(title)

   return (
      <>
         <Menu as="div" className="relative inline-block text-left">
            <div>
               <Menu.Button className="flex justify-center md:w-[110px] w-[90px] truncate py-2 text-sm font-medium text-black bg-black rounded-md bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize">
                  {menuTitle}
                  <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 " aria-hidden="true" />
               </Menu.Button>
            </div>

            <Menu.Items
               as="ul"
               className="absolute right-0 mt-1 p-2 text-sm origin-top-right bg-white  rounded-md shadow-lg focus:outline-none z-10 border"
            >
               <Menu.Item
                  as="li"
                  className=" max-w-36 min-w-[3rem] p-2 truncate font-semibold rounded-md capitalize text-gray-500"
                  disabled
               >
                  {title}
               </Menu.Item>

               {items.map((item, i) => (
                  <Menu.Item
                     key={i}
                     as="li"
                     className=" max-w-36 min-w-[3rem] p-2 truncate hover:bg-gray-200 font-semibold cursor-pointer rounded-md capitalize"
                     onClick={() => setMenuTitle(item)}
                  >
                     {item}
                  </Menu.Item>
               ))}
            </Menu.Items>
         </Menu>
      </>
   )
}
