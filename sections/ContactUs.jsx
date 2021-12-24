import { MailIcon, PhoneIcon } from "@heroicons/react/solid"

export default function ContactUs() {
   return (
      <div>
         <div>
            <h2 className="h2 mb-0">get in touch</h2>

            <p className="text-gray-500 max-w-md">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum illo tenetur molestias modi veniam dolor
               vel quidem velit, natus quis.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-5 bg-gray-900 text-white rounded-md p-4 space-y-6">
               <h3 className="h3">contact information</h3>

               <p className="text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, voluptas.
               </p>

               <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>556 667 887</span>
               </div>

               <div className="flex items-center">
                  <MailIcon className="h-5 w-5 mr-2" />
                  <span>support@exemple.com</span>
               </div>

               <div className="flex items-center space-x-6">
                  <a href="#" className="opacity-80 hover:opacity-100">
                     <img
                        src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                        alt="Facebook"
                        className="h-8 w-8"
                        width="24px"
                        height="24px"
                     />
                  </a>

                  <a href="#" className="opacity-80 hover:opacity-100">
                     <img
                        src="https://img.icons8.com/fluency/48/000000/twitter.png"
                        alt="Twitter"
                        className="h-8 w-8"
                        width="24px"
                        height="24px"
                     />
                  </a>

                  <a href="#" className="opacity-80 hover:opacity-100">
                     <img
                        src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                        alt="Instagram"
                        className="h-8 w-8"
                        width="24px"
                        height="24px"
                     />
                  </a>
               </div>
            </div>

            <div className="md:col-span-7">
               <div className="">
                  <form className="space-y-6 accent-blue-500" action="#">
                     <h3 className="h3 normal-case">Send us a message</h3>

                     <div className="flex items-center space-x-4">
                        <div className="w-full">
                           <label for="firstName" className="text-sm font-medium text-gray-500 block mb-2 ">
                              First Name
                           </label>
                           <input name="firstName" id="firstName" type="text" className="input-1" required />
                        </div>

                        <div className="w-full">
                           <label for="lastName" className="text-sm font-medium text-gray-500 block mb-2 ">
                              Last Name
                           </label>
                           <input name="lastName" id="lastName" type="text" className="input-1" required />
                        </div>
                     </div>

                     <div>
                        <label for="email" className="text-sm font-medium text-gray-500 block mb-2 ">
                           Your email
                        </label>
                        <input type="email" name="email" id="email" className="input-1" required />
                     </div>

                     <div>
                        <label for="subject" className="text-sm font-medium text-gray-500 block mb-2 ">
                           Subject
                        </label>
                        <input name="subject" id="subject" type="text" className="input-1" required />
                     </div>

                     <div>
                        <label for="message" className="text-sm font-medium text-gray-500 block mb-2 ">
                           Your message
                        </label>

                        <textarea
                           name="message"
                           id="message"
                           cols="30"
                           className="input-1 focus:outline-none"
                        ></textarea>
                     </div>

                     <button type="submit" className="btn-1 mx-auto block">
                        Send
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}
