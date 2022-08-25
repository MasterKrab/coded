import fs from 'fs'
import prettier from 'prettier'

const generateSiteMap = (posts) => {
  const date = new Date().toISOString()

  const pages = ['playgrounds', 'playgrounds/sass', 'playgrounds/pug']

  let pagesXML = ''

  pages.forEach((page) => {
    pagesXML += `
         <url>
             <loc>${process.env.BASE_URL}/${page}</loc>
             <lastmod>${date}</lastmod>
             <priority>1.00</priority>
          </url>
      `
  })

  posts.forEach(({ slug, date }) => {
    pagesXML += `
          <url>
             <loc>${`${process.env.BASE_URL}/${slug}`}</loc>
             <lastmod>${date}</lastmod>
          </url>
       `
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
             <loc>${process.env.BASE_URL}</loc>
             <lastmod>${date}</lastmod>
             <priority>1.00</priority>
          </url>
          ${pagesXML}
       </urlset>
    `

  const normalizedSitemap = prettier.format(sitemap, { parser: 'html' })

  fs.writeFileSync('./public/sitemap.xml', normalizedSitemap, 'utf8')
}

export default generateSiteMap
