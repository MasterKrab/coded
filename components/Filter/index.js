import { Fieldset, Legend, Tags } from './styles'
import TagsIcon from '@icons/TagsIcon'
import Tag from 'components/Tag'

const Filter = ({ tags, handleChange }) => (
  <Fieldset>
    <Legend>
      <TagsIcon aria-hidden="true" width={30} height={30} />
      Filtrar por etiqueta
    </Legend>

    <Tags>
      <Tag handleChange={handleChange} tag="all" />
      {tags.map((tag) => (
        <Tag key={tag} handleChange={handleChange} tag={tag} />
      ))}
    </Tags>
  </Fieldset>
)

export default Filter
