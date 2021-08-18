import Fuse from 'fuse.js'
import { getAllFilesMetadata } from 'lib/mdx'

export default (req, res) => {
  const { search, limit } = req.query

  const posts = getAllFilesMetadata()

  const fuse = new Fuse(posts, {
    keys: ['title', 'description', 'tags'],
    threshold: 0.5,
  })

  const results = fuse.search(search, { limit: parseInt(limit) })

  const normalizedResults = results.map(({ item }) => item)

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(normalizedResults))
}
