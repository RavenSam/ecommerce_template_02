import { ChevronDownIcon } from "@heroicons/react/outline"
import { Disclosure } from "@headlessui/react"
import Link from "next/link"

export default function Disclus({ title = "title", content = [], option }) {
   return (
      <>
         <Disclosure {...option}>
            <Disclosure.Button className="py-2 flex items-center justify-between mt-3 w-full capitalize font-semibold">
               {title}
               <ChevronDownIcon className="h-4 w-4" />
            </Disclosure.Button>

            <Disclosure.Panel className="text-gray-500 pl-2">
               {content.map((item, i) => (
                  <Link href="#">
                     <a className="block capitalize hover:bg-gray-300 hover:text-black px-2 py-1 rounded-md">{item}</a>
                  </Link>
               ))}
            </Disclosure.Panel>
         </Disclosure>
      </>
   )
}
