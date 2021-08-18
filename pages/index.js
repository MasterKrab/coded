import Head from 'next/head'
import { getAllFilesMetadata } from 'lib/mdx'
import Posts from 'components/Posts'

const Home = ({ posts }) => (
  <>
    <Head>
      <title>Inicio</title>
      <meta name="description" content="Mi blog personal" />
    </Head>

    <Posts posts={posts} title="Últimos articulos" />
  </>
)

export default Home

export const getStaticProps = async () => {
  const posts = getAllFilesMetadata()

  return {
    props: { posts },
  }
}
