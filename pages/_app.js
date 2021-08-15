import { useState } from 'react'
import Head from 'next/head'
import GlobalStyles from 'styles/GlobalStyles'
import Header from 'components/Header'
import LinkToTop from 'components/LinkToTop'
import 'styles/normalize.css'

const MyApp = ({ Component, pageProps }) => {
  const [link, setLink] = useState(true)

  setTimeout(() => setLink(false), 1500)

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <LinkToTop />
    </>
  )
}

export default MyApp
