import algoliasearch from 'algoliasearch/lite.js'

export default (req, res) => {
  const { search, limit } = req.query

  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_ADMIN_KEY
  )

  const index = client.initIndex('posts')

  index
    .search(search)
    .then(({ hits }) => {
      const normalizedHits = limit ? hits.slice(0, limit) : hits

      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(normalizedHits))
    })
    .catch((error) => {
      res.status(500).end('Error 505')
      console.error(error)
    })
}
