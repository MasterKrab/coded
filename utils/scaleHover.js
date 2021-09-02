import { css } from 'styled-components'

const scaleHover = css`
  @media screen and (min-width: 768px) {
    transition: transform 0.15s;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export default scaleHover
