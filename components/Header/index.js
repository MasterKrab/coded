import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, StyledHeader, MenuContainer, StyledLink } from './styles'
import LogoComplete from '@icons/LogoComplete'
import MenuButton from 'components/MenuButton'
import Search from 'components/Search'
import ThemeSelector from 'components/ThemeSelector'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const router = useRouter()

  const handleClick = () => setIsMenu(!isMenu)

  useEffect(() => setIsMenu(false), [router.query])

  return (
    <Container>
      <StyledHeader isMenu={isMenu}>
        <MenuButton handleClick={handleClick} isMenu={isMenu} />
        <MenuContainer isMenu={isMenu}>
          <nav>
            <Link href="/" passHref>
              <StyledLink aria-label="Home">
                <LogoComplete aria-hidden="true" width={80} height={30} />
              </StyledLink>
            </Link>
          </nav>
          <Search isMenu={isMenu} />
        </MenuContainer>
        <ThemeSelector />
      </StyledHeader>
    </Container>
  )
}

export default Header
