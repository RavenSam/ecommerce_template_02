import HeaderIcons from "./fragments/HeaderIcons"
import HeaderNav from "./fragments/HeaderNav"

export default function Navbar() {
   return (
      <header className="lg:container lg:mx-auto flex items-center justify-between py-4 px-2">
         <div className="">
            <h2 className="text-2xl uppercase font-bold tracking-wide">Logo</h2>
         </div>

         <nav>
            <HeaderNav />
         </nav>

         <div className="">
            <HeaderIcons />
         </div>
      </header>
   )
}
