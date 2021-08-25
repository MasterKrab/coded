import { nanoid as id } from 'nanoid'
import { PostIndexContainer, Title, List } from './styles'
import NotesIcon from '@icons/NotesIcon'
import PostIndexItem from './PostIndexItem'

const PostIndex = ({ headings }) => (
  <PostIndexContainer>
    <Title>
      <NotesIcon aria-hidden="true" />
      Índice
    </Title>
    <nav>
      <List>
        {headings.map(({ source, link, type }) => (
          <PostIndexItem
            key={id()}
            typeHeading={type}
            link={link}
            source={source}
          />
        ))}
      </List>
    </nav>
  </PostIndexContainer>
)

export default PostIndex
