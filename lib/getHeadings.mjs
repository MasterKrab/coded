import slugify from 'slugify'
import { serialize } from 'next-mdx-remote/serialize.js'

const getHeadings = async (content) => {
  const regexp = /^(### |## )(.*)/gm
  const headings = [...content.matchAll(regexp)]

  const indexHeadings = []

  // eslint-disable-next-line no-unused-vars
  for (const [_, typeTitle, text] of headings) {
    const source = await serialize(text)
    const type = typeTitle.trim()
    const link = `#${slugify(text, { lower: true })}`

    indexHeadings.push({ source, type, link })
  }

  return indexHeadings
}

export default getHeadings
