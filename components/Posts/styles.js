import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`

export const Section = styled.section`
  padding: min(2rem, 3vw);
  max-width: 850px;
`

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.h2`
  margin-top: 0;
`
