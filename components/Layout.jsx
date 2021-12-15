import { Footer, Header } from "../sections"

export default function Layout({ children }) {
   return (
      <>
         <div className="font-poppins">
            <Header />

            {children}

            <Footer />
         </div>
      </>
   )
}
