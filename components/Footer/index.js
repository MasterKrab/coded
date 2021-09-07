import { Container, Figure, Figcaption, Link, HiddenText } from './styles'
import FeedIcon from '@icons/FeedIcon'

const Footer = () => (
  <Container>
    <Figure>
      <img src="/assets/illustrations/dog.svg" alt="Un perro acostado" />
      <Figcaption>
        Hecho con <HiddenText>amor</HiddenText>
      </Figcaption>
    </Figure>
    <Link href="/rss.xml" target="_blank">
      <FeedIcon aria-hidden="true" width={27.5} height={27.5} />
      RSS
    </Link>
  </Container>
)

export default Footer
