import { ChevronDownIcon } from "@heroicons/react/outline"
import { Disclosure } from "@headlessui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Disclus({ title = "title", content = [], option }) {
   const { asPath } = useRouter()

   const catName = asPath.split("/")[3]

   return (
      <>
         <Disclosure {...option}>
            <Disclosure.Button className="py-2 flex items-center justify-between mt-3 w-full capitalize text-sm md:text-base font-semibold">
               {title}
               <ChevronDownIcon className="h-4 w-4" />
            </Disclosure.Button>

            <Disclosure.Panel className="text-gray-500 pl-2">
               {content.map((item, i) => (
                  <Link href={`/category/${title}/${item}`} key={i}>
                     <a
                        className={`block capitalize px-2 py-1 rounded-md  text-sm md:text-base  ${
                           catName === item ? "bg-gray-300 text-black" : "hover:bg-gray-200 hover:text-black "
                        }`}
                     >
                        {item}
                     </a>
                  </Link>
               ))}
            </Disclosure.Panel>
         </Disclosure>
      </>
   )
}
