import { Header } from '../components/Header'
import {ThemeProvider} from 'styled-components'

import '../styles/globalStyle.css'
import themeGlobal from '../styles/themeGlobal'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <ThemeProvider theme={themeGlobal}>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
