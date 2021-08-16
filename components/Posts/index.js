import { useState, Fragment } from 'react'
import PostCard from 'components/PostCard'
import {
  Container,
  Section,
  ContainerPosts,
  Filter,
  Legend,
  Tags,
} from './styles'
import TagsIcon from '@icons/TagsIcon'
import Tag from 'components/Tag'
import tags from 'utils/tags'

const Posts = ({ posts, title }) => {
  const [selectedTag, setSelectedTag] = useState('all')

  const handleChange = (e) => setSelectedTag(e.target.value)

  const checkTags = (tags) =>
    selectedTag === 'all' || tags.includes(selectedTag)

  return (
    <Container>
      <Section>
        <h1>{title}</h1>
        <ContainerPosts aria-live="polite">
          {posts?.map(
            ({ title, slug, date, readTime, tags }) =>
              checkTags(tags) && (
                <PostCard
                  key={slug}
                  title={title}
                  slug={slug}
                  date={date}
                  readTime={readTime}
                  tags={tags}
                />
              )
          )}
        </ContainerPosts>
      </Section>
      {tags.length && (
        <Filter>
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
        </Filter>
      )}
    </Container>
  )
}

export default Posts
