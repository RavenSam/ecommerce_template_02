import { MenuAlt1Icon } from "@heroicons/react/outline"
import { useState } from "react"

export default function NavDrawer() {
   const [open, setOpen] = useState(false)

   return (
      <>
         <button
            className="rounded-full inline-block w-10 h-10 p-2 transition duration-200 hover:bg-gray-200 active:bg-gray-300"
            onClick={() => setOpen(!open)}
            onClose={() => setOpen(false)}
         >
            <MenuAlt1Icon />
         </button>
      </>
   )
}
