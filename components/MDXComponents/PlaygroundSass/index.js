import Playground from 'components/Playground/PlaygroundSass'
import { Container } from './styles'

const PlaygroundSass = ({ code, extension }) => (
  <Container>
    <Playground defaultValue={code} defaultExtension={extension} />
  </Container>
)

export default PlaygroundSass
