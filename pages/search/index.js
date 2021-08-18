import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Posts from 'components/Posts'
import { ErrorContainer, Title, Image } from 'components/Error'
import { getTags } from 'lib/mdx'

const Search = ({ tags }) => {
  const [results, setResults] = useState([])
  const [apiEnd, setApiEnd] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query.search) {
      fetch(`http://localhost:3000/api/search?search=${router.query.search}`)
        .then((res) => res.json())
        .then((results) => {
          setResults(results)
          console.log(results)
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
          tags={tags}
          title={`Resultados para: ${router.query.search}`}
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

export const getStaticProps = async () => {
  const tags = getTags()

  return {
    props: { tags },
  }
}
