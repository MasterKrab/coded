import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/Link'
import { Container, Results, Result, Form, Input, Button } from './styles'
import SearchIcon from '@icons/SearchIcon'

const Search = ({ isMenu }) => {
  const [search, setSearch] = useState('')
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
      <Form onSubmit={handleSubmit} role="search">
        <Input
          onChange={handleChange}
          type="search"
          aria-label="Buscar articulo"
          placeholder="Buscar..."
          value={search}
        />
        <Button aria-label="Buscar">
          <SearchIcon aria-hidden="true" />
        </Button>
      </Form>
      {search.trim() && results.length ? (
        <Results aria-live="polite">
          {results.map(({ slug, title }) => (
            <Result key={`result-${slug}`}>
              <Link href={`/${slug}`}>
                <a>{title}</a>
              </Link>
            </Result>
          ))}
        </Results>
      ) : null}
    </Container>
  )
}

export default Search
