import Head from 'next/head'
import { Title, List } from 'styles/pages/playgrounds.styles'
import PlaygroundLink from 'components/Playground/PlaygroundLink'
import SassLogoIcon from '@icons/SassLogoIcon'
import PugIcon from '@icons/PugIcon'

const Playgrounds = () => (
  <>
    <Head>
      <title>Coded | Playgrounds</title>
      <meta name="description" content="Playgrounds de distintos lenguajes" />
    </Head>
    <article>
      <Title>Playgrounds</Title>
      <List>
        <PlaygroundLink name="SASS" Icon={SassLogoIcon} />
        <PlaygroundLink name="PUG" Icon={PugIcon} />
      </List>
    </article>
  </>
)
export default Playgrounds
