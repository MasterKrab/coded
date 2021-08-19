import Head from 'next/head'

const AppHead = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/assets/logo.svg" />
    <meta name="og:image" content="/thumbnail.png" />
    <meta name="twitter:image" content="/thumbnail.png" />
  </Head>
)

export default AppHead
