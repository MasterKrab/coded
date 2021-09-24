import styled from 'styled-components'
import { Button } from 'components/Playground/playground.styles'

const ButtonRight = styled(Button)`
  position: absolute;
  top: 10px;
  right: 20px;

  @media screen and (min-width: 500px) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:focus {
    position: absolute;
  }
`
export default ButtonRight
