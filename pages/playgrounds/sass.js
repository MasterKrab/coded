import Head from 'next/head'
import PlaygroundSass from 'components/Playground/PlaygroundSass'

const Playground = () => (
  <>
    <Head>
      <title>Coded | Playground SASS</title>
      <meta
        name="description"
        content="Playground de SASS, usa el editor y obtén el código compilado"
      />
    </Head>
    <PlaygroundSass completeScreen={true} />
  </>
)

export default Playground
