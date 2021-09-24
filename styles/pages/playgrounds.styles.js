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

export const Name = styled.span`
  font-size: 1.5rem;
`
