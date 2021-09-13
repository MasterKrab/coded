import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: ${({ theme }) => theme.backgroundColor};
  margin-top: auto;
  padding: min(2.5rem, 5vw);
  z-index: 100;

  @media screen and (min-width: 450px) {
    text-align: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 945px) {
    flex-direction: row;
    gap: min(1000px, 15vw);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: start;
  }
`

export const Fields = styled.div`
  gap: 2.5rem;
  margin-bottom: 2rem;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.textColor};
  font-weight: bold;
  color: ${({ theme }) => theme.backgroundColor};
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 0.25rem;
  padding: 0.5rem;

  @media screen and (min-width: 768px) {
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.textColor};
      border-color: ${({ theme }) => theme.textColor};
    }
  }
`
