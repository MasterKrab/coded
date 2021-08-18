import Link from 'next/Link'
import { ErrorContainer, Image } from 'components/Error'
import { Title, StyledLink } from './styles'
import getRandomUntil from 'utils/getRandomUntil'

const Custom404 = () => (
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
)
export default Custom404
