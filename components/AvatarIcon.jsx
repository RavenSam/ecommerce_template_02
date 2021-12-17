import { Menu, Transition } from "@headlessui/react"
import { UserIcon, LoginIcon, UserAddIcon } from "@heroicons/react/outline"
import { Fragment } from "react"
import Link from "next/link"

const menuItems = [
   { title: "Log in", url: "/login", icon: LoginIcon },
   { title: "Sign up", url: "/signup", icon: UserAddIcon },
]

export default function AvatarIcon() {
   return (
      <div>
         <Menu>
            <Menu.Button className="rounded-full inline-block w-10 h-10 p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300 ">
               <UserIcon />
            </Menu.Button>

            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items className="absolute right-5 w-fit min-w-[10rem] mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 z-10 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-2 py-3 flex flex-col space-y-1">
                     {menuItems.map((item) => (
                        <Menu.Item key={item.title}>
                           <Link href={item.url}>
                              <a className="px-3 py-2 rounded-md hover:bg-gray-100 capitalize text-sm font-semibold text-gray-500 tracking-wide flex items-center">
                                 <item.icon className="h-5 w-5 mr-2" />
                                 {item.title}
                              </a>
                           </Link>
                        </Menu.Item>
                     ))}
                  </div>
               </Menu.Items>
            </Transition>
         </Menu>
      </div>
   )
}
