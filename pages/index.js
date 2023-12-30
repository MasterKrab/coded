import Head from 'next/head'
import Posts from 'components/Posts'
import { getAllFilesMetadata } from 'lib/mdx.mjs'

const Home = ({ posts }) => (
  <>
    <Head>
      <title>Coded | Blog FullStack</title>
      <meta
        name="description"
        content="Artículos y tutoriales de JavaScript, NodeJS, MongoDB, etc"
      />
    </Head>

    <Posts posts={posts} title="Últimos artículos" />
  </>
)

export default Home

export const getServerSideProps = () => {
  const posts = getAllFilesMetadata()

  return {
    props: { posts },
  }
}
