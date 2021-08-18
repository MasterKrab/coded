import { useState, useEffect } from 'react'
import Link from 'next/Link'
import { useRouter } from 'next/router'
import { StyledHeader, MenuContainer, StyledLink } from './styles'
import Logo from '@icons/Logo'
import MenuButton from 'components/MenuButton'
import Search from 'components/Search'
import ThemeSelector from 'components/ThemeSelector'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const router = useRouter()

  const handleClick = () => setIsMenu(!isMenu)

  useEffect(() => setIsMenu(false), [router.query.search])

  return (
    <StyledHeader isMenu={isMenu}>
      <MenuButton handleClick={handleClick} isMenu={isMenu} />
      <MenuContainer isMenu={isMenu}>
        <nav>
          <Link href="/" passHref>
            <StyledLink>
              <Logo aria-hidden="true" width={35} height={35} />
              Inicio
            </StyledLink>
          </Link>
        </nav>
        <Search isMenu={isMenu} />
      </MenuContainer>
      <ThemeSelector />
    </StyledHeader>
  )
}

export default Header
