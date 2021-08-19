import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    display: ${({ isMenu }) => (isMenu ? 'block' : 'none')};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  background-color: #e9e8eb;
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 30px;
  padding-right: 0.25rem;
  border: 1px solid
    ${({ isFocus, theme }) => (isFocus ? theme.active : theme.searchBar)};
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const Input = styled.input`
  background-color: inherit;
  width: 100%;
  height: 100%;
  border: none;
  color: ${({ theme }) => theme.textColor};
  z-index: 100000;

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    position: absolute;
    right: 0;
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

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const Button = styled.button`
  display: grid;
  place-items: center;
  width: 35px;
  height: 100%;
  margin-right: auto;
  color: ${({ isFocus, theme }) => (isFocus ? theme.active : theme.searchBar)};
`

export const ResultsContainer = styled.div`
  position: absolute;
  top: 35px;
  z-index: 10000000;
  background-color: ${({ theme }) => theme.backgroundColor};
  max-width: 500px;
  padding: 0 1rem 1rem;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.shadow};
`

export const Results = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 85vw;
  padding-left: 0;
  list-style: none;

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`

export const Image = styled.img`
  margin-left: auto;
`
