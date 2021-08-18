import { useState, useEffect } from 'react'
import usePagination from 'hooks/usePagination'
import ChangePosts from 'components/ChangePosts'
import PostCard from 'components/PostCard'
import { Container, Section, ContainerPosts, Image } from './styles'
import Filter from 'components/Filter'
import getTags from 'utils/getTags'

const Posts = ({ posts, title, isSearch }) => {
  const [filterPosts, setFilterPosts] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)
  const { paginatedPosts, isFirstPage, isLastPage } = usePagination(
    filterPosts,
    currentPage
  )

  const filteredTags = getTags(posts)

  const handleChange = (e) => setSelectedTag(e.target.value)

  useEffect(() => setFilterPosts(posts), [posts])

  useEffect(() => {
    const filterPosts = posts.filter(
      ({ tags }) => selectedTag === 'all' || tags.includes(selectedTag)
    )
    setFilterPosts(filterPosts)
  }, [selectedTag])

  return (
    <Container>
      <Section>
        <h1>{title}</h1>
        <ContainerPosts aria-live="polite">
          {paginatedPosts?.map(({ title, slug, date, readTime, tags }) => (
            <PostCard
              key={slug}
              title={title}
              slug={slug}
              date={date}
              readTime={readTime}
              tags={tags}
            />
          ))}
        </ContainerPosts>
        {posts.length > 5 && paginatedPosts.length && (
          <ChangePosts
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
          />
        )}
        {isSearch && (
          <a href="https://www.algolia.com/" target="_blank" rel="noopener">
            <Image
              src="/assets/icons/search-by-algolia-light-background.svg"
              alt="Search by algolia"
            />
          </a>
        )}
      </Section>
      {filteredTags.length && (
        <Filter tags={filteredTags} handleChange={handleChange} />
      )}
    </Container>
  )
}

export default Posts
