import { SearchIcon } from "@heroicons/react/outline"

export default function SearchInput() {
   return (
      <>
         <form action="#" className="flex items-center  h-12 space-x-1">
            <input type="text" className=" h-full input-1" placeholder="Search..." />

            <button className="btn-1 py-0 h-full text-white">
               <SearchIcon className="w-5 h-5" />
            </button>
         </form>
      </>
   )
}
