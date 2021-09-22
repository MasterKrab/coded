import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: min(1.15rem, 5vw);
  padding: 1rem;
  border: 2px solid var(--color, ${({ theme }) => theme.shadow});
  border-radius: 0.5rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    transition: border-color 0.2s;

    &:hover {
      --color: ${({ theme }) => theme.active};
    }
  }
`

export const Title = styled.h2`
  font-size: 1.15em;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  color: var(--color);

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
  flex-wrap: wrap;
  gap: 1rem;
`

export const Data = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.25rem;
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`

export const Time = styled.time`
  margin-left: 0.25rem;

  @media screen and (min-width: 530px) {
    margin-left: 0;

    &::before {
      content: '•';
      margin-right: 0.75rem;
    }
  }
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
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`
