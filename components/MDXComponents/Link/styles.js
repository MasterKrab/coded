import styled from 'styled-components'

const StyledLink = styled.a`
  color: royalblue;

  @media screen and (min-width: 768px) {
    &:hover {
      text-decoration: underline;
    }
  }
`

export default StyledLink