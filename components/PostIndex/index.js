import { nanoid as id } from 'nanoid'
import { MDXRemote } from 'next-mdx-remote'
import { PostIndexContainer, Title, List, Item, Link } from './styles'
import NotesIcon from '@icons/NotesIcon'

const PostIndex = ({ headings }) => (
  <PostIndexContainer>
    <Title>
      <NotesIcon aria-hidden="true" />
      Índice
    </Title>
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
