import Head from 'next/head'
import { getAllFilesMetadata, getTags } from 'lib/mdx'
import Posts from 'components/Posts'

const Home = ({ posts, tags }) => (
  <>
    <Head>
      <title>Inicio</title>
      <meta name="description" content="Mi blog personal" />
    </Head>

    <Posts posts={posts} tags={tags} title="Últimos articulos" />
  </>
)

export default Home

export const getStaticProps = async () => {
  const posts = getAllFilesMetadata()
  const tags = getTags()

  return {
    props: { posts, tags },
  }
}
