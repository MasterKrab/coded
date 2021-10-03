import styled from 'styled-components'
import centerIcon from 'utils/centerIcon'

export const Container = styled.section`
  position: relative;
  margin: min(2rem, 3vw);
  width: 300px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`

export const Title = styled.h2`
  ${centerIcon};
  font-weight: normal;
`

export const Input = styled.input`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 300px;
  height: 40px;
  border: none;
  padding: 0.4rem 1rem;
  border: 1px solid ${({ theme }) => theme.searchBar};
  border-radius: 0.55rem;
  color: ${({ theme }) => theme.textColor};
  transition: box-shadow 0.2s, font-size 0.2s ease-out;

  &:placeholder-shown {
    font-size: 0.75rem;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.active};
    box-shadow: 0 0 5px ${({ theme }) => theme.active};
  }

  &::-webkit-search-cancel-button {
    position: absolute;
    right: 0;
    z-index: 10000;
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.active};
    clip-path: polygon(
      20% 4%,
      5% 14%,
      35% 46%,
      1% 76%,
      16% 91%,
      50% 60%,
      81% 91%,
      96% 81%,
      61% 48%,
      90% 13%,
      76% 3%,
      49% 35%
    );
    margin-right: 0.5rem;
    cursor: pointer;
  }
`
