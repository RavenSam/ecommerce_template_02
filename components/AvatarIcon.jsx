import { Dialog, Transition } from "@headlessui/react"
import { UserIcon, LoginIcon, UserAddIcon, XIcon, MailIcon } from "@heroicons/react/outline"
import { Fragment, useRef, useState } from "react"
import Link from "next/link"

const menuItems = [
   { title: "Log in", url: "/login", icon: LoginIcon },
   { title: "Sign up", url: "/signup", icon: UserAddIcon },
]

export default function AvatarIcon() {
   const [open, setOpen] = useState(false)
   const cancelButtonRef = useRef()

   return (
      <>
         <button
            className="rounded-full hidden md:inline-block  p-2 transition duration-200 hover:bg-gray-100 active:bg-gray-300 "
            onClick={() => setOpen(!open)}
         >
            <UserIcon className="w-6 h-6" />
         </button>

         <Transition.Root show={open} as={Fragment}>
            <Dialog
               initialFocus={cancelButtonRef}
               as="div"
               className="fixed z-50 inset-0 overflow-hidden"
               onClose={() => setOpen(!open)}
            >
               <div className="absolute inset-0 overflow-hidden">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-in-out duration-700"
                     enterFrom="opacity-0"
                     enterTo="opacity-400"
                     leave="ease-in-out duration-700"
                     leaveFrom="opacity-400"
                     leaveTo="opacity-0"
                  >
                     <Dialog.Overlay className="absolute inset-0 bg-gray-400 bg-opacity-80 transition-opacity " />
                  </Transition.Child>

                  <div className="fixed inset-1/2 max-w-full font-poppins">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-[0.7s] "
                        enterFrom="scale-50 opacity-0"
                        enterTo="scale-100 opacity-1"
                        leave="transform transition ease-in-out duration-300 "
                        leaveFrom="scale-100 opacity-1"
                        leaveTo="scale-50 opacity-0"
                     >
                        <div className=" bg-white shadow-2xl w-screen  max-w-md p-4 rounded-md  transform -translate-x-1/2 -translate-y-1/2 ">
                           <div className="">
                              <div className="flex items-start justify-between pb-3 mb-4 border-b">
                                 <h3 className="text-lg md:text-xl font-semibold  text-gray-900">Login</h3>
                                 <div className="ml-3 h-7 flex items-center">
                                    <button
                                       ref={cancelButtonRef}
                                       type="button"
                                       className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                       onClick={() => setOpen(false)}
                                    >
                                       <span className="sr-only">Close panel</span>
                                       <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                 </div>
                              </div>

                              <div className="py-4">
                                 <div className="space-y-3">
                                    <Link href="/login">
                                       <a className="flex items-center px-4 py-3 elevation-1 rounded-md text-gray-300 bg-black bg-opacity-90 hover:bg-opacity-100 focus:ring-2 focus:ring-blue-500 ">
                                          <MailIcon className="h-6 w-6 mr-2" />
                                          Sign in with your email
                                       </a>
                                    </Link>

                                    <div className="flex items-center ">
                                       <hr className="w-full border-black border-2 rounded-full" />
                                       <p className="px-4 py-3 text-gray-500">or</p>
                                       <hr className="w-full border-black border-2 rounded-full" />
                                    </div>

                                    <Link href="/login">
                                       <a className="flex items-center px-4 py-3 shadow border rounded-md font-medium text-gray-600 focus:ring-2 focus:ring-blue-500 ">
                                          <img
                                             src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                                             alt="Google Icon"
                                             className="h-6 w-6 mr-2"
                                             width="24px"
                                             height="24px"
                                          />
                                          Sign in with Google
                                       </a>
                                    </Link>

                                    <Link href="/login">
                                       <a className="flex items-center px-4 py-3 shadow rounded-md text-white bg-[#0a84e0] focus:ring-2 focus:ring-blue-500 ">
                                          <img
                                             src="https://img.icons8.com/color/48/000000/facebook-new.png"
                                             alt="Facebook Icon"
                                             className="h-7 w-7 mr-2"
                                             width="24px"
                                             height="24px"
                                          />
                                          Sign in with Facebook
                                       </a>
                                    </Link>

                                    <Link href="/login">
                                       <a className="flex items-center px-4 py-3 shadow rounded-md text-white bg-[#03a9f4] focus:ring-2 focus:ring-blue-500 ">
                                          <img
                                             src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
                                             className="h-7 w-7 mr-2"
                                             width="24px"
                                             height="24px"
                                          />
                                          Sign in with Twitter
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition.Root>
      </>
   )
}
