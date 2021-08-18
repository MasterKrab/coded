import { useState } from 'react'
import Link from 'next/Link'
import { StyledHeader, MenuContainer, StyledLink } from './styles'
import Logo from '@icons/Logo'
import MenuButton from 'components/MenuButton'
import Search from 'components/Search'
import ThemeSelector from 'components/ThemeSelector'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)

  const handleClick = () => setIsMenu(!isMenu)

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
