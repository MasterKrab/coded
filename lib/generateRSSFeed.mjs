import { Feed } from 'feed'
import fs from 'fs'

const generateRSSFeed = (posts) => {
  const feed = new Feed({
    title: 'Coded',
    description: 'Artículos y tutoriales de JavaScript, NodeJS, MongoDB, etc',
    id: process.env.BASE_URL,
    link: process.env.BASE_URL,
    language: 'es',
    feedLinks: {
      rss2: `${process.env.BASE_URL}/rss/feed.xml`,
      json: `${process.env.BASE_URL}/rss/feed.json`,
      atom: `${process.env.BASE_URL}/rss/atom.xml`,
    },
  })

  posts.forEach(({ title, slug, date, description }) => {
    const url = `${process.env.BASE_URL}/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      date: new Date(date),
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
}

export default generateRSSFeed
