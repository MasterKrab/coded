import { useState } from 'react'
import usePagination from 'hooks/usePagination'
import ChangePosts from 'components/ChangePosts'
import PostCard from 'components/PostCard'
import { Container, Section, ContainerPosts } from './styles'
import Filter from 'components/Filter'

const Posts = ({ posts, title, tags }) => {
  const [selectedTag, setSelectedTag] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)
  const { paginatedPosts, isFirstPage, isLastPage } = usePagination(
    posts,
    currentPage
  )

  const handleChange = (e) => setSelectedTag(e.target.value)

  const checkTags = (tags) =>
    selectedTag === 'all' || tags.includes(selectedTag)

  return (
    <Container>
      <Section>
        <h1>{title}</h1>
        <ContainerPosts aria-live="polite">
          {paginatedPosts?.map(
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
        {paginatedPosts.length && (
          <ChangePosts
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
          />
        )}
      </Section>
      {tags.length && <Filter tags={tags} handleChange={handleChange} />}
    </Container>
  )
}

export default Posts
