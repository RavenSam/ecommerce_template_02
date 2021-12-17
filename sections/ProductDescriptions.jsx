import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"

export default function ProductDescriptions() {
   return (
      <div className="">
         <div className="w-full max-w-xl mx-auto  space-y-2">
            <Disclosure>
               {({ open }) => (
                  <div className={`${open && "elevation-4"}  rounded-md overflow-hidden`}>
                     <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-sm font-bold text-left  bg-gray-100 rounded-sm capitalize  focus:outline-none">
                        <span>description</span>
                        <ChevronDownIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 `} />
                     </Disclosure.Button>

                     <Disclosure.Panel className="p-4 text-sm text-gray-500 space-y-2 ">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo distinctio
                           necessitatibus similique, quas tempora debitis? Alias vero voluptatem deserunt quos
                           necessitatibus.
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo distinctio
                           necessitatibus similique, quas tempora debitis? Alias vero voluptatem deserunt quos
                           necessitatibus.
                        </p>
                     </Disclosure.Panel>
                  </div>
               )}
            </Disclosure>

            <Disclosure>
               {({ open }) => (
                  <div className={`${open && "elevation-4"}  rounded-md overflow-hidden`}>
                     <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-sm font-bold text-left  bg-gray-100 rounded-sm capitalize  focus:outline-none">
                        <span>features</span>
                        <ChevronDownIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 `} />
                     </Disclosure.Button>

                     <Disclosure.Panel className="p-4 text-sm text-gray-500">
                        <ul className="space-y-2 list-disc pl-4">
                           <li>Lorem ipsum dolor sit amet consectetur.</li>
                           <li>Lorem ipsum dolor sit.</li>
                           <li>Lorem ipsum dolor sit amet.</li>
                           <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                           <li>Lorem ipsum dolor sit amet.</li>
                           <li>Lorem ipsum dolor sit, amet consectetur adipisicing Maxime.</li>
                        </ul>
                     </Disclosure.Panel>
                  </div>
               )}
            </Disclosure>

            <Disclosure>
               {({ open }) => (
                  <div className={`${open && "elevation-4"}  rounded-md overflow-hidden`}>
                     <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-sm font-bold text-left  bg-gray-100 rounded-sm capitalize  focus:outline-none">
                        <span>care</span>
                        <ChevronDownIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 `} />
                     </Disclosure.Button>

                     <Disclosure.Panel className="p-4 text-sm text-gray-500 space-y-2">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo distinctio
                           necessitatibus similique, quas tempora debitis? Alias vero voluptatem deserunt quos
                           necessitatibus.
                        </p>
                     </Disclosure.Panel>
                  </div>
               )}
            </Disclosure>

            <Disclosure>
               {({ open }) => (
                  <div className={`${open && "elevation-4"}  rounded-md overflow-hidden`}>
                     <Disclosure.Button className="flex justify-between w-full px-5 py-4 text-sm font-bold text-left  bg-gray-100 rounded-sm capitalize  focus:outline-none">
                        <span>shipping</span>
                        <ChevronDownIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 `} />
                     </Disclosure.Button>

                     <Disclosure.Panel className="p-4 text-sm text-gray-500 space-y-2">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo distinctio
                           necessitatibus similique, quas tempora debitis? Alias vero voluptatem deserunt quos
                           necessitatibus.
                        </p>
                     </Disclosure.Panel>
                  </div>
               )}
            </Disclosure>
         </div>
      </div>
   )
}
