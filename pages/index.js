import Head from 'next/head'
import { getAllFilesMetadata } from 'lib/mdx'
import Posts from 'components/Posts'

const Home = ({ posts }) => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="My personal blog" />
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
