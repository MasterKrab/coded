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
  border: 1px solid ${({ theme }) => theme.searchBar};
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

  &:focus {
    outline: none;
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
  color: ${({ theme }) => theme.searchBar};
`

export const Results = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 20px;
  z-index: 10000000;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 89vw;
  max-width: 500px;
  padding: 0 1rem 1rem;
  list-style: none;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.shadow};

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`

export const Result = styled.li`
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.textColor};

  &:first-child {
    border-top: none;
  }
`
