import { Header } from '../components/Header'
import {ThemeProvider} from 'styled-components'

import '../styles/globalStyle.css'
import themeGlobal from '../styles/themeGlobal'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <ThemeProvider theme={themeGlobal}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
