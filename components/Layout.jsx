import { useRouter } from "next/router"
import Head from "next/head"
import { Footer, Header } from "../sections"
import NextNprogress from "nextjs-progressbar"
import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"
import LoadingScreen from "./shared/Loading"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function Layout({ children }) {
   const { pathname } = useRouter()

   const [loading, setLoading] = useState(true)

   useEffect(() => setLoading(false), [])

   if (loading) {
      return <LoadingScreen />
   }

   return (
      <>
         <Head>
            <link rel="icon" type="image/png" href="/logo-2.png" />
         </Head>

         <NextNprogress options={{ showSpinner: false }} color="#000" startPosition={0.3} />
         <div className="!font-poppins  ">
            <Toaster />

            {!pageWithNoNav.includes(pathname) && <Header />}

            <main>{children}</main>

            {!pageWithNoNav.includes(pathname) && <Footer />}
         </div>
      </>
   )
}
