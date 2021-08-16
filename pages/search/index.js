import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Posts from 'components/Posts'

const Search = () => {
  const [results, setResults] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (router.query.search) {
      fetch(`http://localhost:3000/api/search?search=${router.query.search}`)
        .then((res) => res.json())
        .then((results) => {
          setResults(results)
          console.log(results)
        })
        .catch((error) => console.error(error))
    }
  }, [router.query.search])

  return (
    <Posts posts={results} title={`Resultados para ${router.query.search}`} />
  )
}

export default Search
