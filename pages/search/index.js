import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Posts from 'components/Posts'
import { ErrorContainer, Title, Image } from 'components/Error'

const Search = () => {
  const [results, setResults] = useState([])
  const [apiEnd, setApiEnd] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query.search) {
      fetch(
        `https://coded-blog.vercel.app/api/search?search=${router.query.search}`
      )
        .then((res) => res.json())
        .then((results) => {
          setResults(results)
          setApiEnd(true)
        })
        .catch((error) => console.error(error))
    }
  }, [router.query.search])

  return (
    <>
      <Head>
        <title>Búsqueda</title>
      </Head>
      {results.length ? (
        <Posts
          posts={results}
          title={`Resultados para: ${router.query.search}`}
          isSearch
        />
      ) : (
        apiEnd && (
          <ErrorContainer>
            <Title>No hay resultados</Title>
            <Image src="/assets/illustrations/no-data.svg" alt="Sin datos" />
          </ErrorContainer>
        )
      )}
    </>
  )
}

export default Search
