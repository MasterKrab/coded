import Head from 'next/head'
import PlaygroundPug from 'components/Playground/PlaygroundPug'

const Playground = () => (
  <>
    <Head>
      <title>Coded | Playground PUG</title>
      <meta
        name="description"
        content="Playground de PUG, usa el editor y obtén el código compilado"
      />
    </Head>
    <PlaygroundPug completeScreen={true} />
  </>
)

export default Playground
