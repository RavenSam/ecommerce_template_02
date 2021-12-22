import { ChevronDownIcon } from "@heroicons/react/outline"
import { Menu } from "@headlessui/react"

export default function MenuDrop({ title = "menu", items = [] }) {
   return (
      <>
         <Menu as="div" className="relative inline-block text-left">
            <div>
               <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-40 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 capitalize">
                  {title}
                  <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 " aria-hidden="true" />
               </Menu.Button>
            </div>

            <Menu.Items
               as="ul"
               className="absolute right-0 mt-1 p-2 text-sm origin-top-right bg-white  rounded-md shadow-lg focus:outline-none z-10 border"
            >
               {items.map((item, i) => (
                  <Menu.Item
                     key={i}
                     as="li"
                     className=" max-w-36 min-w-[3rem] p-2 truncate hover:bg-gray-200 font-semibold cursor-pointer rounded-md capitalize"
                  >
                     {item}
                  </Menu.Item>
               ))}
            </Menu.Items>
         </Menu>
      </>
   )
}
