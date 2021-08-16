import Head from 'next/head'
import StylesProviders from 'components/StylesProviders'
import GlobalStyles from 'styles/GlobalStyles'
import SkipToMain from 'components/SkipToMain'
import Header from 'components/Header'
import { Main } from 'styles/app-styles'
import LinkToTop from 'components/LinkToTop'
import 'styles/normalize.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/assets/logo.svg" />
    </Head>
    <StylesProviders>
      <GlobalStyles />
      <SkipToMain />
      <Header />
      <Main id="main">
        <Component {...pageProps} />
      </Main>
      <LinkToTop />
    </StylesProviders>
  </>
)

export default MyApp
