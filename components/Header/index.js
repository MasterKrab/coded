import { useState, useEffect } from 'react'
import Link from 'next/Link'
import { StyledHeader, StyledLink } from './styles'
import HomeIcon from '@icons/HomeIcon'

const Header = () => {
  const [isScrollUp, setIsScrollUp] = useState(null)

  let lastScrollTop = 0

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop

      if (scrollTop <= 35 || scrollTop > lastScrollTop) {
        setIsScrollUp(false)
      } else {
        setIsScrollUp(true)
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <StyledHeader isScrollUp={isScrollUp}>
      <nav>
        <Link href="/" passHref>
          <StyledLink>
            <HomeIcon aria-hidden="true" />
            Inicio
          </StyledLink>
        </Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
