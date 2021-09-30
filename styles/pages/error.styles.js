import styled from 'styled-components'

export const Title = styled.h1`
  font-size: min(2rem, 5vw);
  padding: 1rem;
`

export const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.textColor};
      border: 1px solid ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.backgroundColor};
    }
  }
`

export const Image = styled.img`
  width: 90%;
  max-width: 400px;
`
