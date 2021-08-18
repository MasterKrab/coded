import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container, Results, Form, Input, Button } from './styles'
import SearchIcon from '@icons/SearchIcon'
import Result from 'components/Result'

const Search = ({ isMenu }) => {
  const [search, setSearch] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const [results, setResults] = useState([])

  const router = useRouter()

  useEffect(() => setSearch(''), [router.query])

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
      fetch(`http://localhost:3000/api/search?search=${search}&limit=5`)
        .then((res) => res.json())
        .then((results) => setResults(results))
        .catch((error) => console.error(error))
    }
  }, [search])

  return (
    <Container aria-label="search" isMenu={isMenu}>
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
        <Results aria-live="polite">
          {results.map(({ slug, title, description }) => (
            <Result
              key={`result-${slug}`}
              slug={slug}
              title={title}
              description={description}
            />
          ))}
        </Results>
      ) : null}
    </Container>
  )
}

export default Search
