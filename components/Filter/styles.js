import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'

export const Fieldset = styled.fieldset`
  font-weight: 500;
  margin: min(2rem, 3vw);
  padding: 0;
  border: none;

  @media screen and (min-width: 768px) {
    margin-top: 3.5rem;
  }
`

export const Legend = styled.legend`
  ${centerIcon};
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`
