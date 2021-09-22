import { useState } from 'react'
import Link from 'next/link'
import {
  Container,
  StyledHeader,
  MenuContainer,
  Button,
  ButtonIcon,
  Navigation,
  List,
  StyledLink,
} from './styles'
import LogoComplete from '@icons/LogoComplete'
import ThemeSelector from 'components/ThemeSelector'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleClick = () => setMenuOpen(!isMenuOpen)

  return (
    <Container>
      <StyledHeader>
        <Button onClick={handleClick} aria-label="Menu">
          <ButtonIcon isOpen={isMenuOpen} />
        </Button>
        <MenuContainer isOpen={isMenuOpen}>
          <Navigation>
            <List>
              <li>
                <Link href="/" passHref>
                  <StyledLink aria-label="Home">
                    <LogoComplete aria-hidden="true" width={80} height={30} />
                  </StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/playgrounds" passHref>
                  <StyledLink>Playgrounds</StyledLink>
                </Link>
              </li>
            </List>
          </Navigation>
        </MenuContainer>
        <ThemeSelector />
      </StyledHeader>
    </Container>
  )
}

export default Header
