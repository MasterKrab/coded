import Link from 'next/link'
import { Container, StyledHeader, MenuContainer, StyledLink } from './styles'
import LogoComplete from '@icons/LogoComplete'
import Search from 'components/Search'
import ThemeSelector from 'components/ThemeSelector'

const Header = () => (
  <Container>
    <StyledHeader>
      <MenuContainer>
        <nav>
          <Link href="/" passHref>
            <StyledLink aria-label="Home">
              <LogoComplete aria-hidden="true" width={80} height={30} />
            </StyledLink>
          </Link>
        </nav>
        <Search />
      </MenuContainer>
      <ThemeSelector />
    </StyledHeader>
  </Container>
)

export default Header
