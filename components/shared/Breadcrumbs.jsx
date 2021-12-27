import Link from "next/link"
import { useRouter } from "next/router"
import { HomeIcon } from "@heroicons/react/solid"
import { Fragment } from "react"

export default function Breadcrumbs() {
   const router = useRouter()

   const linkPath = router.asPath.split("/") //    returns ["","cat1","cat2"]
   linkPath.shift() //    remove "" from linkpaths ["cat1","cat2"]

   const pathArray = linkPath.map((path, i) => {
      return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") }
   })

   return (
      <div className="flex items-center border rounded-md bg-gray-100 text-gray-600  px-4">
         <Link href="/">
            <a className="px-2 py-2 hover:text-blue-500">
               <span className="sr-only">Home</span>
               <HomeIcon className="h-5 w-5" />
            </a>
         </Link>

         <p>{">"}</p>

         {pathArray.map((path, i) => (
            <Fragment key={i}>
               <Link href={path.href}>
                  <a
                     className={`px-2 py-2  capitalize font-semibold text-sm ${
                        i === pathArray.length - 1 ? "text-black" : "hover:text-gray-800"
                     }`}
                  >
                     {path.breadcrumb}
                  </a>
               </Link>
               <p className="last-of-type:hidden">{">"}</p>
            </Fragment>
         ))}
      </div>
   )
}
