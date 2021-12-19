const navigations = ["home", "blog", "about me", "shop", "contact"]
const account = ["log in", "my data", "my address", "cart"]
const solutions = ["marketing", "analytics", "commerce", "insights"]
const legals = ["claim", "privacy", "terms"]

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-white px-4 py-12 lg:px-24 mt-24">
         <div className="lg:container  lg:mx-auto">
            <div className="flex  justify-between ">
               <ul className="space-y-3">
                  <li className="font-semibold capitalize lg:text-lg">navigation</li>
                  {navigations.map((item) => (
                     <li key={item}>
                        <a
                           href="#"
                           className="text-gray-300 text-xs sm:text-sm hover:text-white hover:underline capitalize"
                        >
                           {item}
                        </a>
                     </li>
                  ))}
               </ul>

               <ul className="space-y-3">
                  <li className="font-semibold  capitalize  lg:text-lg">account</li>
                  {account.map((item) => (
                     <li key={item}>
                        <a
                           href="#"
                           className="text-gray-300 text-xs sm:text-sm hover:text-white hover:underline capitalize"
                        >
                           {item}
                        </a>
                     </li>
                  ))}
               </ul>

               <ul className="space-y-3">
                  <li className="font-semibold  capitalize  lg:text-lg">legal</li>
                  {legals.map((item) => (
                     <li key={item}>
                        <a
                           href="#"
                           className="text-gray-300 text-xs sm:text-sm hover:text-white hover:underline capitalize"
                        >
                           {item}
                        </a>
                     </li>
                  ))}
               </ul>

               <ul className="space-y-3">
                  <li className="font-semibold  capitalize  lg:text-lg">solution</li>
                  {solutions.map((item) => (
                     <li key={item}>
                        <a
                           href="#"
                           className="text-gray-300 text-xs sm:text-sm hover:text-white hover:underline capitalize"
                        >
                           {item}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            <hr className="my-8 border-gray-700" />

            <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
               <div className=" text-center md:text-left ">
                  <h4 className="text-xl text-white uppercase font-semibold">subscribe to our newsletter</h4>
                  <p className="text-gray-300 my-4">
                     The latest news, articles, and resources, sent to your inbox weekly
                  </p>
               </div>

               <div className="max-w-sm space-y-2">
                  <div>
                     <input type="text" className="input w-full" placeholder="Your email address" />
                  </div>
                  <button className="btn-1 mt-1 w-full ">subscribe</button>
               </div>
            </div>

            <hr className="my-8 border-gray-700" />

            <div className="text-gray-300">
               <p>2022 Justme,Inc. All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}
