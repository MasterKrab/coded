import { Container } from './styles'

const PlaygroundSass = ({ Component, extension }) => (
  <Container>
    <Component defaultExtension={extension} />
  </Container>
)

export default PlaygroundSass
