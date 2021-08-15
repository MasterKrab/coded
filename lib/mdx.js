import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import getHeadings from './getHeadings'

const root = process.cwd()

const folder = 'content/posts'

const readFile = (slug) =>
  fs.readFileSync(path.join(root, folder, slug), 'utf-8')

export const getFiles = () => fs.readdirSync(path.join(root, folder))

export const getFileBySlug = async (slug) => {
  const mdxSource = readFile(`${slug}.mdx`)

  const headings = await getHeadings(mdxSource)

  const { data, content } = matter(mdxSource)

  const source = await serialize(content, {})

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
    headings,
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.map((postSlug) => {
    const mdxSource = readFile(postSlug)

    const { data } = matter(mdxSource)

    return {
      ...data,
      slug: postSlug.replace('.mdx', ''),
    }
  }, [])
}
