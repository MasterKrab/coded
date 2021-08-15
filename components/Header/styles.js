import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  transform: translateY(${({ isScrollUp }) => (isScrollUp ? '-100%' : '0')});
  transition: transform 0.5s;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.5);
`

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
