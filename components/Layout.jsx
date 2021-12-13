// Components
import { Footer, Navbar } from "."

export default function Layout({ children }) {
   return (
      <>
         <div className="font-poppins">
            <Navbar />

            {children}

            <Footer />
         </div>
      </>
   )
}
