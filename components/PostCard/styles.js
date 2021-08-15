import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px var(--color, rgba(0, 0, 0, 0.15));
  border-radius: 0.25rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    transition: box-shadow 0.2s;

    &:hover {
      --color: royalblue;
    }
  }
`

export const Content = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
`

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--color, #333);

  @media screen and (min-width: 768px) {
    transition: color 0.2s;
  }
`

export const Image = styled.img`
  width: 100%;
  height: min(175px, 30vmin);
  margin-top: auto;
  object-fit: cover;
`
