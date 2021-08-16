import styled from 'styled-components'
import addOpacityToColor from 'utils/addOpacityToColor'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 1rem;
  box-shadow: 5px 0 15px ${({ theme }) => theme.shadow};

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    height: ${({ isMenu }) => (isMenu ? '110px' : 'auto')};
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;

  @media screen and (max-width: 768px) {
    display: ${({ isMenu }) => (isMenu ? 'block' : 'none')};
    position: absolute;
    top: 50px;
    left: 0;
    padding: 1rem;
  }
`

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
