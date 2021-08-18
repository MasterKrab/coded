import styled from 'styled-components'

export const ResultItem = styled.li`
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.textColor};

  &:first-child {
    border-top: none;
  }
`

export const StyledLink = styled.a`
  display: block;

  @media screen and (min-width: 768px) {
    &:hover {
      --color: ${({ theme }) => theme.active};
    }
  }
`

export const Title = styled.span`
  display: block;
  font-size: 1rem;
  color: var(--color, ${({ theme }) => theme.textColor});

  @media screen and (min-width: 768px) {
    transition: color 0.2s;
  }
`

export const Description = styled.span`
  font-size: 0.8rem;
`
