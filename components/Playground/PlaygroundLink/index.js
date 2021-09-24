import Link from 'next/link'
import { Playground } from './styles'

const PlaygroundLink = ({ name, Icon }) => (
  <Playground>
    <Link href={`playgrounds/${name.toLowerCase()}`}>
      <a aria-label={name}>
        <Icon width={100} height={100} />
      </a>
    </Link>
  </Playground>
)

export default PlaygroundLink
