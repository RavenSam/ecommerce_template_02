import { AvatarIcon, SearchForm, NavDrawer, MiniCart, HeaderNav } from "../components"

export default function Header() {
   return (
      <header className="lg:container lg:mx-auto flex items-center justify-between px-2">
         {/* <div className="">
            <h2 className="text-xl md:text-3xl uppercase font-bold tracking-widest bg-black text-white p-4 rounded-b-md ">
               Logo
            </h2>
         </div> */}

         <div className="-mt-1 rounded-b-xl overflow-hidden">
            <img src="/logo.png" alt="seano" className="h-14 md:h-16 max-w-[180px]" width={175} height={64} />
         </div>

         <nav className="hidden md:block">
            <HeaderNav />
         </nav>

         <div className="flex items-center space-x-4">
            <SearchForm />

            <MiniCart />

            <AvatarIcon />

            <NavDrawer />
         </div>
      </header>
   )
}
