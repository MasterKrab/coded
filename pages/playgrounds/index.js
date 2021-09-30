import Head from 'next/head'
import { Article, Title, Text, List } from 'styles/pages/playgrounds.styles'
import PlaygroundLink from 'components/Playground/PlaygroundLink'
import SassLogoIcon from '@icons/SassLogoIcon'
import PugIcon from '@icons/PugIcon'

const Playgrounds = () => (
  <>
    <Head>
      <title>Coded | Playgrounds</title>
      <meta name="description" content="Playgrounds de distintos lenguajes" />
    </Head>
    <Article>
      <Title>Playgrounds</Title>
      <Text>
        Usa los playgrounds para experimentar y probar tus lenguajes favoritos
        💻.
      </Text>
      <List>
        <PlaygroundLink name="SASS" Icon={SassLogoIcon} />
        <PlaygroundLink name="PUG" Icon={PugIcon} />
      </List>
    </Article>
  </>
)
export default Playgrounds
