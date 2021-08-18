import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'

export const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  padding: 1rem 0.5rem;
`

export const Button = styled.button`
  ${centerIcon};
  color: ${({ theme }) => theme.active};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    transition: filter 0.2s;

    &:hover {
      filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.active});
    }
  }
`
