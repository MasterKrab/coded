import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'
import visuallyHidden from 'utils/visuallyHidden'
import scaleHover from 'utils/scaleHover'

export const StyledTag = styled.input`
  ${visuallyHidden};

  &:focus + label,
  &:focus-visible + label {
    outline: 3px dashed ${({ theme }) => theme.secondaryColor};
    outline-offset: 4px;
  }

  &:focus:not(:focus-visible) + label {
    outline: none;
  }

  &:checked + label {
    border-color: ${({ theme }) => theme.active};
    color: ${({ theme }) => theme.active};
  }
`

export const TagLabel = styled.label`
  ${centerIcon};
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 0.5rem 1rem 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 0.25rem;
  cursor: pointer;
  ${scaleHover};
`
