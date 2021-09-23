import { useState, useEffect } from 'react'
import Image from 'next/image'
import usePagination from 'hooks/usePagination'
import ChangePosts from 'components/ChangePosts'
import PostCard from 'components/PostCard'
import {
  Container,
  Section,
  ContainerPosts,
  ImageAtributtionContainer,
} from './styles'
import Filter from 'components/Filter'
import getTags from 'utils/getTags'
import Search from 'components/Search'
import { ErrorContainer, Title } from 'components/Error'

const Posts = ({ posts, title }) => {
  const [filterPosts, setFilterPosts] = useState([])
  const [resultsPosts, setResultsPosts] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')
  const { paginatedPosts, isFirstPage, isLastPage } = usePagination(
    filterPosts,
    currentPage
  )

  const filteredTags = getTags(posts)

  const handleChange = (e) => setSelectedTag(e.target.value)

  useEffect(() => {
    if (search.trim()) {
      fetch(`https://www.coded.tech/api/search?search=${search}`)
        .then((res) => res.json())
        .then(setResultsPosts)
        .catch((error) => console.error(error))
    } else {
      setResultsPosts(posts)
    }
  }, [search])

  useEffect(() => setFilterPosts(posts), [posts])

  useEffect(() => {
    const filterPosts = resultsPosts.filter(
      ({ tags }) => selectedTag === 'all' || tags.includes(selectedTag)
    )
    setFilterPosts(filterPosts)
  }, [resultsPosts, selectedTag])

  return (
    <Container>
      <Section>
        <h1>{title}</h1>
        <ContainerPosts aria-live="polite">
          {paginatedPosts.length ? (
            paginatedPosts?.map(({ title, slug, date, readTime, tags }) => (
              <PostCard
                key={slug}
                title={title}
                slug={slug}
                date={date}
                readTime={readTime}
                tags={tags}
              />
            ))
          ) : (
            <ErrorContainer>
              <Title>No hay resultados</Title>
              <Image
                src="/assets/illustrations/no-data.svg"
                alt="Sin datos"
                width={300}
                height={300}
              />
            </ErrorContainer>
          )}
        </ContainerPosts>
        {posts.length > 5 && paginatedPosts.length && (
          <ChangePosts
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
          />
        )}
      </Section>
      <aside>
        {filteredTags.length && (
          <Filter tags={filteredTags} handleChange={handleChange} />
        )}
        <Search search={search} setSearch={setSearch} />
        <a href="https://www.algolia.com/" target="_blank" rel="noreferrer">
          <ImageAtributtionContainer>
            <Image
              src="/assets/icons/search-by-algolia-light-background.svg"
              alt="Search by algolia"
              width={167}
              height={24}
            />
          </ImageAtributtionContainer>
        </a>
      </aside>
    </Container>
  )
}

export default Posts
