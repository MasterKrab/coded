import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Toggle,
  Container,
  ResultsContainer,
  Results,
  Image,
  Form,
  Input,
  Button,
} from './styles'
import SearchIcon from '@icons/SearchIcon'
import Result from 'components/Result'

const Search = () => {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [results, setResults] = useState([])

  const router = useRouter()

  useEffect(() => {
    setSearch('')
    setIsOpen(false)
  }, [router.query])

  const handleToggleSearch = () => setIsOpen(!isOpen)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (search.trim()) {
      router.push(`/search?search=${search}`)
      setSearch('')
    }
  }

  const handleChange = (e) => setSearch(e.target.value)

  const handleToggleFocus = (e) => setIsFocus(!isFocus)

  useEffect(() => {
    if (search.trim()) {
      fetch(`https://coded.tech/api/search?search=${search}&limit=5`)
        .then((res) => res.json())
        .then(setResults)
        .catch((error) => console.error(error))
    }
  }, [search])

  return (
    <>
      <Toggle
        onClick={handleToggleSearch}
        aria-label={`${isOpen ? 'Cerrar' : 'Abrir'} barra de búsqueda`}
      >
        <SearchIcon
          aria-hidden="true"
          width={22.5}
          height={22.5}
          fill="currentColor"
        />
      </Toggle>
      <Container aria-label="search" isOpen={isOpen}>
        <Form onSubmit={handleSubmit} role="search" isFocus={isFocus}>
          <Input
            onChange={handleChange}
            onFocus={handleToggleFocus}
            onBlur={handleToggleFocus}
            type="search"
            aria-label="Buscar articulo"
            placeholder="Buscar..."
            maxlength="250"
            value={search}
          />
          <Button aria-label="Buscar" isFocus={isFocus}>
            <SearchIcon
              aria-hidden="true"
              width={20}
              height={20}
              fill="currentColor"
            />
          </Button>
        </Form>
        {search.trim() && results.length ? (
          <ResultsContainer>
            <Results aria-live="polite">
              {results.map(({ slug, _highlightResult }) => (
                <Result
                  key={`result-${slug}`}
                  slug={slug}
                  title={_highlightResult.title.value}
                  description={_highlightResult.description.value}
                />
              ))}
            </Results>
            <a href="https://www.algolia.com/" target="_blank" rel="noreferrer">
              <Image
                src="/assets/icons/search-by-algolia-light-background.svg"
                alt="Search by algolia"
              />
            </a>
          </ResultsContainer>
        ) : null}
      </Container>
    </>
  )
}

export default Search
