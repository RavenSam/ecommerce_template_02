import { useRouter } from "next/router"
import Head from "next/head"
import { Footer, Header } from "../sections"
import NextNprogress from "nextjs-progressbar"

const pageWithNoNav = ["/login", "/signup", "/reset-password"]

export default function Layout({ children }) {
   const { pathname, beforePopState } = useRouter()

   return (
      <>
         <Head>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <NextNprogress options={{ showSpinner: false }} color="#000" startPosition={0.3} />
         <div className="!font-poppins  ">
            {!pageWithNoNav.includes(pathname) && <Header />}

            {children}

            {!pageWithNoNav.includes(pathname) && <Footer />}
         </div>
      </>
   )
}
