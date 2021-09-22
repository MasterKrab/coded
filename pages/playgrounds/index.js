import Link from 'next/link'
import { Title, List, Playground } from 'styles/pages/playgrounds.styles'
import SassLogoIcon from '@icons/SassLogoIcon'

const Playgrounds = () => (
  <article>
    <Title>Playgrounds</Title>
    <List>
      <Playground>
        <Link href="playgrounds/sass">
          <a aria-label="SASS">
            <SassLogoIcon width={100} height={100} />
          </a>
        </Link>
      </Playground>
    </List>
  </article>
)
export default Playgrounds
