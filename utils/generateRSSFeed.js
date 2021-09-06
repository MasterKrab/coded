import { Feed } from 'feed'
import fs from 'fs'

const generateRSSFeed = (posts) => {
  const baseUrl = 'https://www.coded.tech'

  const feed = new Feed({
    title: 'Coded',
    description: 'Artículos y tutoriales de JavaScript, NodeJS, MongoDB, etc',
    id: baseUrl,
    link: baseUrl,
    language: 'es',
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
  })

  posts.forEach(({ title, slug, date, description }) => {
    const url = `${baseUrl}/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      date: new Date(date),
    })
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}

export default generateRSSFeed
