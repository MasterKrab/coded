import Playground from 'components/playground/PlaygroundSass'
import { Container } from './styles'

const PlaygroundSass = ({ code, extension }) => (
  <Container>
    <Playground defaultValue={code} defaultExtension={extension} />
  </Container>
)

export default PlaygroundSass
