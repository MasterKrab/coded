import { StyledTag, TagLabel } from './styles'
import TagIcon from '@icons/TagIcon'

const Tag = ({ tag, handleChange }) => (
  <>
    <StyledTag
      onChange={handleChange}
      value={tag}
      id={tag}
      type="radio"
      name="tag"
      defaultChecked={tag === 'all'}
    />
    <TagLabel htmlFor={tag}>
      <TagIcon aria-hidden="true" />
      {tag === 'all' ? 'Todos' : tag}
    </TagLabel>
  </>
)

export default Tag
