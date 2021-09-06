import Head from 'next/head'
import Favicons from './Favicons'

const AppHead = () => (
  <Head>
    <Favicons />
    <meta property="og:type" content="website"></meta>
    <meta
      property="og:image"
      content="https://www.coded.tech/assets/thumbnail.png"
      key="og-image"
    />
    <meta
      name="twitter:image"
      content="https://www.coded.tech/assets/thumbnail.png"
      key="twitter-image"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#000000" />
  </Head>
)

export default AppHead
