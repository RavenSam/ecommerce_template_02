import { SearchIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function SearchInput({}) {
   const [searchQuery, setSearchQuery] = useState("")
   const { push, query } = useRouter()

   useEffect(() => setSearchQuery(query.q), [])

   const handleSubmit = (event) => {
      event.preventDefault()
      push({ pathname: "/search", query: { q: searchQuery } })
   }

   return (
      <>
         <form onSubmit={handleSubmit} className="flex items-center  h-12 space-x-1">
            <input
               value={searchQuery || ""}
               onChange={(e) => setSearchQuery(e.target.value)}
               type="text"
               className=" h-full input-1"
               placeholder="Search..."
            />

            <button className="btn-1 py-0 h-full text-white">
               <SearchIcon className="w-5 h-5" />
            </button>
         </form>
      </>
   )
}
