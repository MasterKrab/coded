import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'

export const Container = styled.div`
  display: grid;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`

export const Section = styled.section`
  padding: min(2rem, 3vw);
`

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 800px;
`

export const Title = styled.h2`
  margin-top: 0;
`

export const Filter = styled.fieldset`
  font-weight: 500;
  margin: min(2rem, 3vw);
  padding: 0;
  border: none;
`

export const Legend = styled.legend`
  ${centerIcon};
  font-size: 1.5rem;
  padding-bottom: 0.5rem;

  @media screen and (min-width: 1024px) {
    padding-top: 1.75rem;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`
