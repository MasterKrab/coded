import Head from 'next/head'
import { getAllFilesMetadata } from 'lib/mdx'
import Posts from 'components/Posts'

const Home = ({ posts }) => (
  <>
    <Head>
      <title>Coded | Blog FullStack</title>
      <meta
        name="description"
        content="Artículos y tutoriales de JavaScript, NodeJS, MongoDB, etc"
      />
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
