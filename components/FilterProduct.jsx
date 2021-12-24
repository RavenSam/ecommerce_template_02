import { FilterIcon, ViewGridIcon, ViewListIcon } from "@heroicons/react/outline"
import MenuDrop from "./shared/MenuDrop"

const sizeFilter = ["XS", "S", "M", "L", "XL"]
const colorFilter = ["red", "green", "yellow", "blue", "black"]
const priceFilter = ["< $20", "< $40", "< $80", "< $100", "< $500"]
const sortFilter = ["most relevant", "popular", "new"]

const display = [
   { id: 1, title: "View Grid", icon: ViewGridIcon },
   { id: 2, title: "View List", icon: ViewListIcon },
]

export default function FilterProduct() {
   return (
      <div className="flex items-center justify-between mb-8 space-x-2">
         <button className="md:hidden p-2 hover:bg-gray-300  bg-gray-200 text-black rounded-md focus:ring-2 focus:ring-blue-500">
            <FilterIcon className="h-5 w-5" />
         </button>

         <div className="hidden md:flex items-center space-x-2 ">
            <MenuDrop title="size" items={sizeFilter} />

            <MenuDrop title="color" items={colorFilter} />

            <MenuDrop title="price" items={priceFilter} />
         </div>

         <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-2">
               <p className=" text-sm font-semibold">Display</p>
               {display.map((item) => (
                  <button
                     key={item.id}
                     title={item.title}
                     className={`p-2  text-black rounded-md focus:ring-2 focus:ring-blue-500 ${
                        item.id === 1 ? "bg-gray-300" : "hover:bg-gray-200"
                     }`}
                  >
                     <item.icon className="h-5 w-5" />
                  </button>
               ))}
            </div>

            <MenuDrop title="sort by" items={sortFilter} />
         </div>
      </div>
   )
}
