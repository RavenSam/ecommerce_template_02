import { RecoilRoot } from "recoil"
import { Layout } from "../components"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
   return (
      <RecoilRoot>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </RecoilRoot>
   )
}
