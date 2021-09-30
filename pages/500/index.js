import Head from 'next/head'
import { ErrorContainer } from 'components/Error'
import { Title, Image } from 'styles/pages/error.styles'

const Custom500 = () => (
  <>
    <Head>
      <title>500 Internal Server Error</title>
    </Head>
    <ErrorContainer>
      <Title>
        Hubo un error en el servidor 😱 <br /> Intenta recargar la página.
      </Title>
      <Image src="/assets/illustrations/fatal-error.svg" alt="" />
    </ErrorContainer>
  </>
)
export default Custom500
