import Link from 'next/link'
import { Playground, StyledLink } from './styles'

const PlaygroundLink = ({ name, Icon }) => (
  <Playground>
    <Link href={`playgrounds/${name.toLowerCase()}`} passHref>
      <StyledLink aria-label={name}>
        <Icon width={100} height={100} />
      </StyledLink>
    </Link>
  </Playground>
)

export default PlaygroundLink
