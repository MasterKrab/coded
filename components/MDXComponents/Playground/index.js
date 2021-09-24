import { Container } from './styles'

const PlaygroundSass = ({ Component, code, extension }) => (
  <Container>
    <Component defaultCode={code.trim()} defaultExtension={extension} />
  </Container>
)

export default PlaygroundSass
