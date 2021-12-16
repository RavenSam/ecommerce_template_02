import Link from "next/link"
import { EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon, UserIcon } from "@heroicons/react/outline"
import { useState } from "react"

export default function SignupForm() {
   const [showPw1, setShowPw1] = useState(false)
   const [showPw2, setShowPw2] = useState(false)

   return (
      <>
         <form className="space-y-6 accent-blue-500" action="#">
            <h2 className="h2">Sign up</h2>

            <div>
               <label for="username" className="text-sm font-medium text-gray-500 block mb-1 ">
                  <UserIcon className="h-5 w-5 inline mr-1" /> Your username
               </label>
               <input type="text" name="username" id="username" className="input-1" placeholder="username" required />
            </div>

            <div>
               <label for="email" className="text-sm font-medium text-gray-500 block mb-1 ">
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
               <label for="password" className="text-sm font-medium text-gray-500 block mb-1 ">
                  <LockClosedIcon className="h-5 w-5 inline mr-1" /> Your password
               </label>

               <div className="relative">
                  <input
                     type={showPw1 ? "text" : "password"}
                     name="password"
                     id="password"
                     placeholder="••••••••"
                     className="input-1 pr-12"
                     required
                  />

                  <button
                     type="button"
                     title={showPw1 ? "Hide Password" : "Show password"}
                     className="absolute right-0 top-0 h-full px-3 cursor-pointer text-gray-500"
                     onClick={() => setShowPw1(!showPw1)}
                  >
                     {showPw1 ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
               </div>
            </div>

            <div>
               <label for="confirmPassword" className="text-sm font-medium text-gray-500 block mb-1 ">
                  <LockClosedIcon className="h-5 w-5 inline mr-1" /> Confirm your password
               </label>
               <div className="relative">
                  <input
                     type={showPw2 ? "text" : "password"}
                     name="confirmPassword"
                     id="confirmPassword"
                     placeholder="••••••••"
                     className="input-1"
                     required
                  />
                  <button
                     type="button"
                     title={showPw2 ? "Hide Password" : "Show password"}
                     className="absolute right-0 top-0 h-full px-3 cursor-pointer text-gray-500"
                     onClick={() => setShowPw2(!showPw2)}
                  >
                     {showPw2 ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
               </div>
            </div>

            <button type="submit" className="btn-1 w-full">
               register
            </button>
            <div className="text-sm font-medium text-gray-500 ">
               Already have an account?{" "}
               <Link href="/login">
                  <a className="text-blue-700 hover:underline ">Login</a>
               </Link>
            </div>
         </form>
      </>
   )
}
