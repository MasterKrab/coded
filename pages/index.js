import Head from 'next/head'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
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

  // Check if getStaticProps is running in build time
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    readPostsAndSendToAlgolia(posts)
    generateSiteMap(posts)
    generateRSSFeed(posts)
  }

  return {
    props: { posts },
    revalidate: true,
  }
}
