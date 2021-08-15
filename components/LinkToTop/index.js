import { useState, useEffect } from 'react'
import ChevronUp from '@icons/ChevronUp'
import { StyledLink } from './styles'

const LinkToTop = () => {
  const [isScroll, setIsScroll] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      setIsScroll(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <StyledLink isScroll={isScroll} href="#top" aria-label="Go to top">
      <ChevronUp aria-hidden="true" width={40} height={40} />
    </StyledLink>
  )
}

export default LinkToTop
