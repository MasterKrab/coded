import AppHead from 'components/AppHead'
import StylesProviders from 'components/StylesProviders'
import GlobalStyles from 'styles/GlobalStyles'
import ProgressBar from 'components/ProgressBar'
import SkipToMain from 'components/SkipToMain'
import Header from 'components/Header'
import { Main } from 'styles/pages/app-styles'
import LinkToTop from 'components/LinkToTop'
import Footer from 'components/Footer'
import cookie from 'cookie'
import 'styles/normalize.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/fira-code'

const MyApp = ({ Component, pageProps, themeDevice, theme }) => (
  <>
    <AppHead />
    <StylesProviders themeDevice={themeDevice} theme={theme}>
      <GlobalStyles />
      <ProgressBar />
      <SkipToMain />
      <Header />
      <Main id="main">
        <Component {...pageProps} />
      </Main>
      <LinkToTop />
      <Footer />
    </StylesProviders>
  </>
)

MyApp.getInitialProps = async (context) => {
  const cookies = context.ctx.req?.headers.cookie

  if (!cookies) return {}

  const { themeDevice, theme } = cookie.parse(cookies)

  return { themeDevice, theme }
}

export default MyApp
