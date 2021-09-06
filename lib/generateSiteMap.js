import fs from 'fs'
import prettier from 'prettier'

const generateSiteMap = (posts) => {
  const baseUrl = 'https://www.coded.tech'

  let postsXML = ''

  posts.forEach(({ slug, date }) => {
    postsXML += `
          <url>
             <loc>${`${baseUrl}/${slug}`}</loc>
             <lastmod>${date}</lastmod>
          </url>
       `
  })

  const date = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
             <loc>${baseUrl}</loc>
             <lastmod>${date}</lastmod>
             <priority>1.00</priority>
          </url>
          ${postsXML}
       </urlset>
    `

  const normalizedSitemap = prettier.format(sitemap, { parser: 'html' })

  fs.writeFileSync('./public/sitemap.xml', normalizedSitemap, 'utf8')
}

export default generateSiteMap
