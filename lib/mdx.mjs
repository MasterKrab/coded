import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize.js'
import getHeadings from './get-headings.mjs'
import getReadTime from '../utils/getReadTime.mjs'

const root = process.cwd()

const folder = 'content/posts'

const readFile = (slug) =>
  fs.readFileSync(path.join(root, folder, slug), 'utf-8')

export const getFiles = () => fs.readdirSync(path.join(root, folder))

export const getFileBySlug = async (slug) => {
  const mdxSource = readFile(`${slug}.mdx`)

  const headings = await getHeadings(mdxSource)

  const { data, content } = matter(mdxSource)

  const readTime = getReadTime(content)

  const source = await serialize(content, {})

  return {
    source,
    frontmatter: {
      slug,
      readTime,
      ...data,
    },
    headings,
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.map((postSlug) => {
    const mdxSource = readFile(postSlug)

    const { data, content } = matter(mdxSource)

    return {
      ...data,
      slug: postSlug.replace('.mdx', ''),
      readTime: getReadTime(content),
    }
  }, [])
}

export const getTags = () => {
  const files = getFiles()

  let allTags = []

  files.forEach((postSlug) => {
    const mdxSource = readFile(postSlug)

    const { data } = matter(mdxSource)

    data.tags.forEach((tag) => {
      if (!allTags.includes(tag)) allTags = [...allTags, tag]
    })
  })

  return allTags
}
