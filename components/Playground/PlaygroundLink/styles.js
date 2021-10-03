import styled from 'styled-components'

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

export const StyledLink = styled.a`
  &:focus {
    outline-offset: 30px;
  }
`
