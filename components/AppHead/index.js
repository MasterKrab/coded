import Head from 'next/head'

const AppHead = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="https://www.coded.tech/assets/logo.svg" />
    <meta property="og:type" content="website"></meta>
    <meta property="og:image" content="https://www.coded.tech/thumbnail.png}" />
    <meta
      name="twitter:image"
      content="https://www.coded.tech/thumbnail.png}"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#000000" />
  </Head>
)

export default AppHead
