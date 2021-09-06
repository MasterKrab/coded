import Head from 'next/head'
import { getAllFilesMetadata } from 'lib/mdx'
import generateRSSFeed from 'utils/generateRSSFeed'
import generateSiteMap from 'utils/generateSiteMap'
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

    <Posts posts={posts} title="Últimos artículos" />
  </>
)

export default Home

export const getStaticProps = async () => {
  const posts = getAllFilesMetadata()

  generateRSSFeed(posts)
  generateSiteMap(posts)

  return {
    props: { posts },
  }
}
