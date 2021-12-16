import { MailIcon } from "@heroicons/react/outline"

export default function ResetPasswordForm() {
   return (
      <>
         <form className="space-y-6 accent-blue-500" action="#">
            <h2 className="h2">Reset Password</h2>

            <p className="text-gray-500">Confirm your email and we'll send the instrictions</p>

            <div className="">
               <label for="email" className="text-sm font-medium text-gray-500 block mb-2 ">
                  <MailIcon className="h-6 w-6 inline mr-1" /> Your email
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

            <button type="submit" className="btn-1 w-full">
               Send
            </button>
         </form>
      </>
   )
}
