import Head from 'next/head'
import Link from 'next/link'
import { ErrorContainer } from 'components/Error'
import { Title, StyledLink, Image } from 'styles/pages/error.styles'
import getRandomUntil from 'utils/getRandomUntil'

const Custom404 = () => (
  <>
    <Head>
      <title>Error 404</title>
    </Head>
    <ErrorContainer>
      <Title>Ups... No hemos podido encontrar la página que buscas</Title>
      <Link href="/" passHref>
        <StyledLink>Ir al inicio</StyledLink>
      </Link>
      <Image
        src={`/assets/illustrations/not-found-${getRandomUntil(4)}.svg`}
        alt="No encontrado"
      />
    </ErrorContainer>
  </>
)
export default Custom404
