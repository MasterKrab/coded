import algoliasearch from 'algoliasearch/lite.js'
import 'dotenv/config.js'

const readPostsAndSendToAlgolia = (posts) => {
  const transformedPosts = posts.map((post) => ({
    ...post,
    objectID: post.slug,
  }))

  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_ADMIN_KEY
  )

  const index = client.initIndex('posts')

  index
    .saveObjects(transformedPosts)
    .then((res) =>
      console.log(
        `Sucessfully added ${res.objectIDs.length} records to Algolia search`
      )
    )
    .catch((error) => console.error(error))
}

export default readPostsAndSendToAlgolia
