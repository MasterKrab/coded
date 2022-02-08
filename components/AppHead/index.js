import Head from 'next/head'
import Favicons from './Favicons'

const AppHead = () => (
  <Head>
    <Favicons />
    <title>Coded</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta property="og:type" content="website"></meta>
    <meta
      property="og:image"
      content="https://coded.tech/assets/thumbnail.png"
      key="og-image"
    />
    <meta property="og:image:width" content="3456" />
    <meta property="og:image:height" content="1728" />
    <meta
      name="twitter:image"
      content="https://coded.tech/assets/thumbnail.png"
      key="twitter-image"
    />
    <meta name="twitter:image:width" content="3456" />
    <meta name="twitter:image:height" content="1728" />
    <meta name="twitter:card" content="summary_large_image" />

    <meta name="theme-color" content="#000000" />
  </Head>
)

export default AppHead
