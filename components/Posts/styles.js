import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    margin-bottom: 0;
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

export const ImageAtributtionContainer = styled.span`
  padding-left: min(2rem, 3vw);

  @media screen and (min-width: 768px) {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`
