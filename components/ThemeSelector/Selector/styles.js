import styled from 'styled-components'
import visuallyHidden from 'utils/visuallyHidden'

export const Input = styled.input`
  ${visuallyHidden};

  &:focus + span,
  &:focus-visible + span {
    outline: 2px dashed ${({ theme }) => theme.textColor};
    outline-offset: 5px;
  }

  &:focus:not(:focus-visible) + span {
    outline: none;
  }
`

export const IconContainer = styled.span`
  position: relative;
  z-index: 100;
  cursor: pointer;
`
