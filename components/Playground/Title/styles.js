import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'

const StyledTitle = styled.h1`
  ${centerIcon};
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export default StyledTitle
