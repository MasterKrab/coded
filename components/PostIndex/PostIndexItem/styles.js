import styled from 'styled-components'

export const Item = styled.li`
  margin-left: ${({ typeHeading }) => (typeHeading === '###' ? '1rem' : '0')};
`

export const Link = styled.a`
  width: min-content;
  z-index: 10;

  @media screen and (min-width: 768px) {
    &:hover {
      text-decoration: underline;
    }
  }
`
