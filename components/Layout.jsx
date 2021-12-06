import { Navbar } from "."

export default function Layout({ children }) {
   return (
      <>
         <Navbar />

         {children}
      </>
   )
}
