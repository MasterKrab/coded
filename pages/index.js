import Head from 'next/head'
import Posts from 'components/Posts'
import { getAllFilesMetadata } from 'lib/mdx'
import generateRSSFeed from 'lib/generateRSSFeed'
import generateSiteMap from 'lib/generateSiteMap'
import readPostsAndSendToAlgolia from 'lib/readPostsAndSendToAlgolia'

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

  if (process.env.NODE_ENV === 'production') {
    readPostsAndSendToAlgolia(posts)
  }
  generateRSSFeed(posts)
  generateSiteMap(posts)

  return {
    props: { posts },
  }
}
