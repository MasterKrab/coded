import { useState, useEffect } from 'react'

const usePagination = (posts, currentPage) => {
  const [paginatedPosts, setPaginatedPosts] = useState(posts)
  const [isFirstPage, setIsFirstPage] = useState(true)
  const [isLastPage, setIsLastPage] = useState(false)

  useEffect(() => {
    const initialIndex = currentPage * 5
    const limitIndex = initialIndex + 5

    setIsFirstPage(initialIndex === 0)
    setIsLastPage(!posts[limitIndex])

    const paginatedPosts = posts.slice(initialIndex, limitIndex)

    setPaginatedPosts(paginatedPosts)
  }, [currentPage, posts])

  return { paginatedPosts, isFirstPage, isLastPage }
}

export default usePagination
