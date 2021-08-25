import styled from 'styled-components'

export const PostIndexContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: min(1.25rem, 4vw);
  padding: var(--padding);

  @media screen and (min-width: 1300px) {
    position: fixed;
    top: 75px;
    right: 15px;
    font-size: 0.8rem;
    padding: 1rem;
    width: 17.5vw;
    max-height: 90vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.25rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 0.5rem;
    }

    &:hover::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.textColor};
    }
  }
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  & > svg {
    width: 35px;
    height: 35px;
  }

  @media screen and (min-width: 1300px) {
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: min(3rem, 10vw);

  @media screen and (min-width: 1300px) {
    padding-left: 0;
    list-style: none;
  }
`
