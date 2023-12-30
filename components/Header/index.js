import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  StyledHeader,
  MenuContainer,
  Button,
  ButtonIcon,
  Navigation,
  StyledLink,
} from './styles'
import LogoComplete from '@icons/LogoComplete'
import ThemeSelector from 'components/ThemeSelector'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleClick = () => setMenuOpen(!isMenuOpen)

  const router = useRouter()

  useEffect(() => setMenuOpen(false), [router.query])

  return (
    <Container>
      <StyledHeader>
        <Button onClick={handleClick} aria-label="Menu">
          <ButtonIcon isOpen={isMenuOpen} />
        </Button>
        <MenuContainer>
          <Navigation>
            <StyledLink href="/" aria-label="Home">
              <LogoComplete aria-hidden="true" width={80} height={30} />
            </StyledLink>
          </Navigation>
        </MenuContainer>
        <ThemeSelector />
      </StyledHeader>
    </Container>
  )
}

export default Header
