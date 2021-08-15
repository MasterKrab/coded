import { PostIndexContainer, List, Item, Link } from './styles'
import { nanoid as id } from 'nanoid'
import { MDXRemote } from 'next-mdx-remote'

const PostIndex = ({ headings }) => (
  <PostIndexContainer>
    <h2>Índice</h2>
    <nav>
      <List>
        {headings.map(({ source, link, type }) => (
          <Item key={id()} type={type}>
            <Link href={link}>
              <MDXRemote {...source} />
            </Link>
          </Item>
        ))}
      </List>
    </nav>
  </PostIndexContainer>
)

export default PostIndex
