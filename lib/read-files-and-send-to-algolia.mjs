import dotenv from 'dotenv'
import { getAllFilesMetadata } from './mdx.mjs'
import algoliasearch from 'algoliasearch/lite.js'

dotenv.config()

const posts = getAllFilesMetadata()

const transformedPosts = posts.map((post) => ({
  ...post,
  objectID: post.slug,
}))

try {
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_ADMIN_KEY
  )

  const index = client.initIndex('posts')

  const algoliaResponse = await index.saveObjects(transformedPosts)

  console.log(
    `Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search`
  )
} catch (error) {
  console.log(error)
}
