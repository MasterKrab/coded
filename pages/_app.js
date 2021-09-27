import AppHead from 'components/AppHead'
import StylesProviders from 'components/StylesProviders'
import GlobalStyles from 'styles/GlobalStyles'
import SkipToMain from 'components/SkipToMain'
import Header from 'components/Header'
import { Main } from 'styles/pages/app-styles'
import Newsletter from 'components/Newsletter'
import LinkToTop from 'components/LinkToTop'
import Footer from 'components/Footer'
import 'styles/normalize.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/fira-code'

const MyApp = ({ Component, pageProps }) => (
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

export default MyApp
