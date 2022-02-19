import styled from 'styled-components'

export const Link = styled.a`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 10000;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  transform: translateY(-150%);
  transition: transform 0.25s;

  &:focus {
    transform: translateY(0);
    outline: none;
  }
`
