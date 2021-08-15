import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  font-size: min(1.15rem, 3.25vw);
  padding: 1rem;
  box-shadow: 5px 5px 15px var(--color, rgba(0, 0, 0, 0.15));
  cursor: pointer;

  @media screen and (min-width: 768px) {
    transition: box-shadow 0.2s;

    &:hover {
      --color: royalblue;
    }
  }
`

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--color, #333);

  &::before {
    content: '#';
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    transition: color 0.2s;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Text = styled.time`
  margin-top: 0.25rem;
`

export const Time = styled.time`
  margin-left: 1rem;
`

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background-color: #eee;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`
