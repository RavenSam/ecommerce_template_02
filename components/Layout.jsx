import { useRouter } from "next/router"
import { Footer, Header } from "../sections"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function Layout({ children }) {
   const { pathname, beforePopState } = useRouter()

   return (
      <>
         <div className="font-poppins">
            {!pageWithNoNav.includes(pathname) && <Header />}

            {children}

            {!pageWithNoNav.includes(pathname) && <Footer />}
         </div>
      </>
   )
}
