import { useEffect } from 'react'
import AppHead from 'components/AppHead'
import StylesProviders from 'components/StylesProviders'
import GlobalStyles from 'styles/GlobalStyles'
import SkipToMain from 'components/SkipToMain'
import Header from 'components/Header'
import { Main } from 'styles/app-styles'
import Newsletter from 'components/Newsletter'
import LinkToTop from 'components/LinkToTop'
import Footer from 'components/Footer'
import loadFonts from 'utils/fonts/loadFonts'
import 'styles/normalize.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(loadFonts)

  return (
    <>
      <AppHead />
      <StylesProviders>
        <GlobalStyles />
        <SkipToMain />
        <Header />
        <Main id="main">
          <Component {...pageProps} />
        </Main>
        <Newsletter />
        <LinkToTop />
        <Footer />
      </StylesProviders>
    </>
  )
}

export default MyApp
