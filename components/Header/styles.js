import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  box-shadow: 5px 0 15px ${({ theme }) => theme.shadow};
  transition: box-shadow 0.2s;
`

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 100;
    padding: 1rem;
    visibility: ${({ isMenu }) => (isMenu ? 'visible' : 'hidden')};
    opacity: ${({ isMenu }) => (isMenu ? '1' : '0')};
    transition: visibility 0.35s, opacity 0.35s;
  }
`

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
