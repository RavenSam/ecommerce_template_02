import { useRouter } from "next/router"
import Head from "next/head"
import { Footer, Header } from "../sections"
import NextNprogress from "nextjs-progressbar"
import { Toaster } from "react-hot-toast"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function Layout({ children }) {
   const { pathname } = useRouter()

   return (
      <>
         <Head>
            <link rel="icon" type="image/png" href="/logo-2.png" />
         </Head>

         <NextNprogress options={{ showSpinner: false }} color="#000" startPosition={0.3} />
         <div className="!font-poppins  ">
            <Toaster />

            {!pageWithNoNav.includes(pathname) && <Header />}

            {children}

            {!pageWithNoNav.includes(pathname) && <Footer />}
         </div>
      </>
   )
}
