import { RecoilRoot } from "recoil"
import { Layout } from "../components"

import "../styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function MyApp({ Component, pageProps }) {
   return (
      <RecoilRoot>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </RecoilRoot>
   )
}
