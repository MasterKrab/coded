import { StyledFooter, Container, Figure, Figcaption, Link } from './styles'
import VisuallyHiddenSpan from 'utils/VisuallyHiddenSpan'
import FeedIcon from '@icons/FeedIcon'

const Footer = () => (
  <StyledFooter>
    <Container>
      <Figure>
        <img src="/assets/illustrations/dog.svg" alt="Un perro acostado" />
        <Figcaption>
          Hecho con <VisuallyHiddenSpan>amor</VisuallyHiddenSpan>
        </Figcaption>
      </Figure>
      <Link href="/rss.xml" target="_blank">
        <FeedIcon aria-hidden="true" width={27.5} height={27.5} />
        RSS
      </Link>
    </Container>
  </StyledFooter>
)

export default Footer
