import { Fragment } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { Item, Link } from './styles'

const PostIndexItem = ({ type, link, source }) => (
  <Item typeHeading={type}>
    <Link href={link}>
      <MDXRemote {...source} components={{ p: Fragment }} />
    </Link>
  </Item>
)

export default PostIndexItem
