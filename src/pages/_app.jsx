import {ThemeProvider} from 'styled-components'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return(
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
          <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
  )
}

export default MyApp
