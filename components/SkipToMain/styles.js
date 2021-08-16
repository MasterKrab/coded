import styled from 'styled-components'

export const Link = styled.a`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 10000;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.textColor};
  transform: translateY(-150%);
  transition: transform 0.25s;

  &:focus {
    transform: translateY(0);
    outline: none;
  }
`
