import Link from "next/link"
import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon } from "@heroicons/react/outline"
import { useState } from "react"

export default function LoginForm() {
   const [showPw, setShowPw] = useState(false)

   return (
      <>
         <form className="space-y-6 accent-blue-500" action="#">
            <h2 className="h2">Sign in</h2>

            <div>
               <label for="email" className="text-sm font-medium text-gray-500 block mb-2 ">
                  <MailIcon className="h-5 w-5 inline mr-1" /> Your email
               </label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-1"
                  placeholder="name@company.com"
                  required
               />
            </div>
            <div>
               <label for="password" className="text-sm font-medium text-gray-500 block mb-2 ">
                  <LockClosedIcon className="h-5 w-5 inline mr-1" /> Your password
               </label>
               <div className="relative ">
                  <input
                     type={showPw ? "text" : "password"}
                     name="password"
                     id="password"
                     placeholder="••••••••"
                     className="input-1 pr-12"
                     required
                  />

                  <button
                     type="button"
                     title={showPw ? "Hide Password" : "Show password"}
                     className="absolute right-0 top-0 h-full px-3 cursor-pointer text-gray-500"
                     onClick={() => setShowPw(!showPw)}
                  >
                     {showPw ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
               </div>
            </div>
            <div className="flex items-start">
               <div className="flex items-start">
                  <div className="flex items-center h-5">
                     <input id="remember" aria-describedby="remember" type="checkbox" className="" />
                  </div>
                  <div className="text-sm ml-3">
                     <label for="remember" className="font-medium  text-gray-900 ">
                        Remember me
                     </label>
                  </div>
               </div>
               <Link href="/reset-password">
                  <a className="text-sm text-blue-700 hover:underline ml-auto ">Lost Password?</a>
               </Link>
            </div>

            <button type="submit" className="btn-1 w-full">
               Login
            </button>
            <div className="text-sm font-medium text-gray-500 ">
               Not registered?{" "}
               <Link href="/signup">
                  <a className="text-blue-700 hover:underline ">Create account</a>
               </Link>
            </div>
         </form>
      </>
   )
}
