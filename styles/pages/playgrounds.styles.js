import styled from 'styled-components'
import resetList from 'utils/resetList'

export const Title = styled.h1`
  text-align: center;
  margin-top: 3rem;
`

export const List = styled.ul`
  ${resetList};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  max-width: 768px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
`

export const Playground = styled.li`
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 1rem;
  width: 150px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 50%;
  box-shadow: 0 0 5px ${({ theme }) => theme.shadow};

  @media screen and (min-width: 768px) {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const Name = styled.span`
  font-size: 1.5rem;
`
