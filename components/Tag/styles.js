import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'
import visuallyHidden from 'utils/visuallyHidden'

export const StyledTag = styled.input`
  ${visuallyHidden};

  &:focus + label,
  &:focus-visible + label {
    outline: 3px dashed ${({ theme }) => theme.textColor};
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
  padding: 0.5rem 1rem 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 0.25rem;
  cursor: pointer;
`
