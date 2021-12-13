const navigations = ["home", "blog", "about me", "shop", "contact"]
const account = ["log in", "my data", "my address", "cart"]
const solutions = ["marketing", "analytics", "commerce", "insights"]
const legals = ["claim", "privacy", "terms"]

export default function Footer() {
   return (
      <footer className="bg-gray-800 text-white px-4 py-12 mt-12">
         <div className="flex  justify-around ">
            <ul>
               <li className="font-semibold mb-2 capitalize">navigation</li>
               {navigations.map((item) => (
                  <li key={item}>
                     <a href="#" className="text-gray-500 text-sm hover:text-white capitalize">
                        {item}
                     </a>
                  </li>
               ))}
            </ul>

            <ul>
               <li className="font-semibold mb-2 capitalize">account</li>
               {account.map((item) => (
                  <li key={item}>
                     <a href="#" className="text-gray-500 text-sm hover:text-white capitalize">
                        {item}
                     </a>
                  </li>
               ))}
            </ul>

            <ul>
               <li className="font-semibold mb-2 capitalize">solution</li>
               {solutions.map((item) => (
                  <li key={item}>
                     <a href="#" className="text-gray-500 text-sm hover:text-white capitalize">
                        {item}
                     </a>
                  </li>
               ))}
            </ul>

            <ul>
               <li className="font-semibold mb-2 capitalize">legal</li>
               {legals.map((item) => (
                  <li key={item}>
                     <a href="#" className="text-gray-500 text-sm hover:text-white capitalize">
                        {item}
                     </a>
                  </li>
               ))}
            </ul>
         </div>

         <hr className="my-8 border-gray-700" />

         <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
            <div className="text-gray-500 text-center md:text-left ">
               <h4 className="text-xl text-gray-400 uppercase font-semibold">subscribe to our newsletter</h4>
               <p className="text-gray-500 ">The latest news, articles, and resources, sent to your inbox weekly</p>
            </div>

            <div className="max-w-sm">
               <div>
                  <input type="text" className="px-4 py-2 rounded-sm focus:outline-none w-full bg-gray-300" />
               </div>
               <button className="btn-3 mt-1 w-full text-black">subscribe</button>
            </div>
         </div>

         <hr className="my-8 border-gray-700" />

         <div className="text-gray-400">
            <p>2022 Justme,Inc. All rights reserved.</p>
         </div>
      </footer>
   )
}
