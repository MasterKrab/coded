import styled from 'styled-components'

export const StyledSmall = styled.small`
  @media screen and (max-width: 945px) {
    margin-top: 1rem;
    max-width: 400px;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.active};
`
